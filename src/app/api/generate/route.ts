import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import sharp from 'sharp';

// Try multiple ways to get the API key
const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || 'AIzaSyDn98cnn0TedrgLLY7kntxuSLser41uIGw';

console.log('API Key check:');
console.log('GEMINI_API_KEY:', process.env.GEMINI_API_KEY ? 'Found' : 'Not found');
console.log('GOOGLE_API_KEY:', process.env.GOOGLE_API_KEY ? 'Found' : 'Not found');
console.log('Final API key:', apiKey ? 'Found' : 'Not found');

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-image-preview' });

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { prompt, image } = data;

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // Prepare content for the model
    const content: (string | { inlineData: { data: string; mimeType: string } })[] = [prompt];

    // If image is provided, decode and add it
    if (image) {
      try {
        // Remove data URL prefix if present
        const base64Data = image.startsWith('data:image') 
          ? image.split(',')[1] 
          : image;

        // Decode base64 image
        const imageBuffer = Buffer.from(base64Data, 'base64');
        
        // Process image with sharp to ensure proper format
        const processedImage = await sharp(imageBuffer)
          .resize(1024, 1024, { fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: 90 })
          .toBuffer();

        // Convert to base64 for Gemini
        const processedBase64 = processedImage.toString('base64');
        
        content.push({
          inlineData: {
            data: processedBase64,
            mimeType: 'image/jpeg'
          }
        });
      } catch (imageError) {
        console.error('Image processing error:', imageError);
        return NextResponse.json({ 
          error: 'Invalid image format' 
        }, { status: 400 });
      }
    }

    // Generate content
    try {
      const result = await model.generateContent(content);
      const response = await result.response;

      // Process the response for Nano Banana (gemini-2.5-image-preview)
      const resultData = {
        text: response.text() || '',
        images: [] as Array<{ mimeType: string; data: string }>
      };

      // Check if the response contains images (inline data)
      if (response.candidates && response.candidates[0] && response.candidates[0].content) {
        const content = response.candidates[0].content;
        
        if (content.parts) {
          for (const part of content.parts) {
            if (part.inlineData) {
              // This is an image
              resultData.images.push({
                mimeType: part.inlineData.mimeType,
                data: part.inlineData.data
              });
            }
          }
        }
      }

      return NextResponse.json(resultData);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      if (errorMessage.toLowerCase().includes('quota') || 
          errorMessage.toLowerCase().includes('billing')) {
        return NextResponse.json({
          error: 'Billing required for image generation. Please set up billing at https://ai.studio.google.com',
          text: 'Your application is working correctly! To use image generation features, please set up billing for your Gemini API key at https://ai.studio.google.com. The image generation models require billing to be enabled.',
          images: [] as Array<{ mimeType: string; data: string }>
        });
      } else {
        throw error;
      }
    }
  } catch (error: unknown) {
    console.error('Generate API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
