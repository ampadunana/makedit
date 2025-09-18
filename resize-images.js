const sharp = require('sharp');
const path = require('path');

async function resizeImages() {
  try {
    // Resize original image
    await sharp('public/original.png')
      .resize(600, 400, {
        fit: 'cover',
        position: 'center'
      })
      .toFile('public/original-resized.png');
    
    console.log('Original image resized successfully');
    
    // Resize AI enhanced image
    await sharp('public/ai-enhanced.png')
      .resize(600, 400, {
        fit: 'cover',
        position: 'center'
      })
      .toFile('public/ai-enhanced-resized.png');
    
    console.log('AI enhanced image resized successfully');
    
    // Replace original files
    await sharp('public/original-resized.png')
      .toFile('public/original.png');
    
    await sharp('public/ai-enhanced-resized.png')
      .toFile('public/ai-enhanced.png');
    
    console.log('Images replaced successfully');
    
  } catch (error) {
    console.error('Error resizing images:', error);
  }
}

resizeImages();
