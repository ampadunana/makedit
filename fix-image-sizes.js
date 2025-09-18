const sharp = require('sharp');
const path = require('path');

async function fixImageSizes() {
  try {
    // First, let's check the current dimensions
    const originalMetadata = await sharp('public/original.png').metadata();
    const enhancedMetadata = await sharp('public/ai-enhanced.png').metadata();
    
    console.log('Original image dimensions:', originalMetadata.width, 'x', originalMetadata.height);
    console.log('AI enhanced image dimensions:', enhancedMetadata.width, 'x', enhancedMetadata.height);
    
    // Resize both images to the same dimensions (1024x1024 to maintain quality)
    const targetSize = 1024;
    
    // Resize original image to 1024x1024
    await sharp('public/original.png')
      .resize(targetSize, targetSize, {
        fit: 'cover',
        position: 'center'
      })
      .toFile('public/original-fixed.png');
    
    console.log('Original image resized to 1024x1024');
    
    // Resize AI enhanced image to 1024x1024 (in case it's not already)
    await sharp('public/ai-enhanced.png')
      .resize(targetSize, targetSize, {
        fit: 'cover',
        position: 'center'
      })
      .toFile('public/ai-enhanced-fixed.png');
    
    console.log('AI enhanced image resized to 1024x1024');
    
    // Replace the original files
    await sharp('public/original-fixed.png')
      .toFile('public/original.png');
    
    await sharp('public/ai-enhanced-fixed.png')
      .toFile('public/ai-enhanced.png');
    
    console.log('Images replaced with matching dimensions');
    
    // Verify final dimensions
    const finalOriginalMetadata = await sharp('public/original.png').metadata();
    const finalEnhancedMetadata = await sharp('public/ai-enhanced.png').metadata();
    
    console.log('Final original dimensions:', finalOriginalMetadata.width, 'x', finalOriginalMetadata.height);
    console.log('Final AI enhanced dimensions:', finalEnhancedMetadata.width, 'x', finalEnhancedMetadata.height);
    
  } catch (error) {
    console.error('Error fixing image sizes:', error);
  }
}

fixImageSizes();
