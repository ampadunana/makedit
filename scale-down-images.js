const sharp = require('sharp');
const path = require('path');

async function scaleDownImages() {
  try {
    // Scale down both images to fit the hero section container
    // Hero section uses h-80 md:h-96 (320px mobile, 384px desktop)
    // max-w-2xl is 672px, so we'll use 384x384 to fit the height
    
    const targetSize = 384; // Fits within h-96 (384px)
    
    // Scale down original image
    await sharp('public/original.png')
      .resize(targetSize, targetSize, {
        fit: 'contain', // This ensures the entire image is visible without cropping
        background: { r: 255, g: 255, b: 255, alpha: 1 } // White background for any padding
      })
      .toFile('public/original-scaled.png');
    
    console.log('Original image scaled down to 384x384');
    
    // Scale down AI enhanced image
    await sharp('public/ai-enhanced.png')
      .resize(targetSize, targetSize, {
        fit: 'contain', // This ensures the entire image is visible without cropping
        background: { r: 255, g: 255, b: 255, alpha: 1 } // White background for any padding
      })
      .toFile('public/ai-enhanced-scaled.png');
    
    console.log('AI enhanced image scaled down to 384x384');
    
    // Replace the original files
    await sharp('public/original-scaled.png')
      .toFile('public/original.png');
    
    await sharp('public/ai-enhanced-scaled.png')
      .toFile('public/ai-enhanced.png');
    
    console.log('Images replaced with scaled down versions');
    
    // Verify final dimensions
    const finalOriginalMetadata = await sharp('public/original.png').metadata();
    const finalEnhancedMetadata = await sharp('public/ai-enhanced.png').metadata();
    
    console.log('Final original dimensions:', finalOriginalMetadata.width, 'x', finalOriginalMetadata.height);
    console.log('Final AI enhanced dimensions:', finalEnhancedMetadata.width, 'x', finalEnhancedMetadata.height);
    
  } catch (error) {
    console.error('Error scaling down images:', error);
  }
}

scaleDownImages();
