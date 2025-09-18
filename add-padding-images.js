const sharp = require('sharp');
const path = require('path');

async function addPaddingToImages() {
  try {
    // Keep 384x384 dimensions but scale the image content smaller
    // This will add more padding around the product
    
    const frameSize = 384;
    const imageSize = 300; // Scale the actual image to 300x300 within the 384x384 frame
    
    // Add padding to original image
    await sharp('public/original.png')
      .resize(imageSize, imageSize, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .extend({
        top: (frameSize - imageSize) / 2,
        bottom: (frameSize - imageSize) / 2,
        left: (frameSize - imageSize) / 2,
        right: (frameSize - imageSize) / 2,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .toFile('public/original-padded.png');
    
    console.log('Original image scaled to 300x300 with padding to 384x384');
    
    // Add padding to AI enhanced image
    await sharp('public/ai-enhanced.png')
      .resize(imageSize, imageSize, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .extend({
        top: (frameSize - imageSize) / 2,
        bottom: (frameSize - imageSize) / 2,
        left: (frameSize - imageSize) / 2,
        right: (frameSize - imageSize) / 2,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .toFile('public/ai-enhanced-padded.png');
    
    console.log('AI enhanced image scaled to 300x300 with padding to 384x384');
    
    // Replace the original files
    await sharp('public/original-padded.png')
      .toFile('public/original.png');
    
    await sharp('public/ai-enhanced-padded.png')
      .toFile('public/ai-enhanced.png');
    
    console.log('Images replaced with padded versions');
    
    // Verify final dimensions
    const finalOriginalMetadata = await sharp('public/original.png').metadata();
    const finalEnhancedMetadata = await sharp('public/ai-enhanced.png').metadata();
    
    console.log('Final original dimensions:', finalOriginalMetadata.width, 'x', finalOriginalMetadata.height);
    console.log('Final AI enhanced dimensions:', finalEnhancedMetadata.width, 'x', finalEnhancedMetadata.height);
    
  } catch (error) {
    console.error('Error adding padding to images:', error);
  }
}

addPaddingToImages();
