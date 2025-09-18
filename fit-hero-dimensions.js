const sharp = require('sharp');
const path = require('path');

async function fitHeroDimensions() {
  try {
    // Hero section dimensions: 672px wide × 384px tall (desktop)
    // Mobile: full width × 320px tall
    // We'll use the desktop dimensions as the target
    
    const targetWidth = 672;
    const targetHeight = 384;
    
    // Resize original image to fit hero dimensions
    await sharp('public/original.png')
      .resize(targetWidth, targetHeight, {
        fit: 'cover', // This will crop to fit the exact dimensions
        position: 'center'
      })
      .toFile('public/original-hero.png');
    
    console.log('Original image resized to 672x384');
    
    // Resize AI enhanced image to fit hero dimensions
    await sharp('public/ai-enhanced.png')
      .resize(targetWidth, targetHeight, {
        fit: 'cover', // This will crop to fit the exact dimensions
        position: 'center'
      })
      .toFile('public/ai-enhanced-hero.png');
    
    console.log('AI enhanced image resized to 672x384');
    
    // Replace the original files
    await sharp('public/original-hero.png')
      .toFile('public/original.png');
    
    await sharp('public/ai-enhanced-hero.png')
      .toFile('public/ai-enhanced.png');
    
    console.log('Images replaced with hero-fitted versions');
    
    // Verify final dimensions
    const finalOriginalMetadata = await sharp('public/original.png').metadata();
    const finalEnhancedMetadata = await sharp('public/ai-enhanced.png').metadata();
    
    console.log('Final original dimensions:', finalOriginalMetadata.width, 'x', finalOriginalMetadata.height);
    console.log('Final AI enhanced dimensions:', finalEnhancedMetadata.width, 'x', finalEnhancedMetadata.height);
    
  } catch (error) {
    console.error('Error fitting hero dimensions:', error);
  }
}

fitHeroDimensions();
