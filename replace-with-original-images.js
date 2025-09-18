const sharp = require('sharp');
const path = require('path');

async function replaceWithOriginalImages() {
  try {
    // Copy and resize original image to 1024x1024 without cropping
    await sharp('C:/Users/DELL LAT/Downloads/processed-1757456917354.png')
      .resize(1024, 1024, {
        fit: 'contain', // This ensures no cropping - entire image is visible
        background: { r: 255, g: 255, b: 255, alpha: 1 } // White background for padding
      })
      .toFile('public/original.png');
    
    console.log('Original image resized to 1024x1024 without cropping');
    
    // Copy and resize AI enhanced image to 1024x1024 without cropping
    await sharp('C:/Users/DELL LAT/Downloads/download.png')
      .resize(1024, 1024, {
        fit: 'contain', // This ensures no cropping - entire image is visible
        background: { r: 255, g: 255, b: 255, alpha: 1 } // White background for padding
      })
      .toFile('public/ai-enhanced.png');
    
    console.log('AI enhanced image resized to 1024x1024 without cropping');
    
    // Verify final dimensions
    const finalOriginalMetadata = await sharp('public/original.png').metadata();
    const finalEnhancedMetadata = await sharp('public/ai-enhanced.png').metadata();
    
    console.log('Final original dimensions:', finalOriginalMetadata.width, 'x', finalOriginalMetadata.height);
    console.log('Final AI enhanced dimensions:', finalEnhancedMetadata.width, 'x', finalEnhancedMetadata.height);
    
  } catch (error) {
    console.error('Error replacing with original images:', error);
  }
}

replaceWithOriginalImages();
