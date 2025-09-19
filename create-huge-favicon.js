const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createHugeFavicon() {
  try {
    console.log('Creating HUGE favicon files...');
    
    // Read the logo
    const logoBuffer = fs.readFileSync('./public/logo.png');
    
    // Create a much larger base image (256x256)
    const baseImage = await sharp(logoBuffer)
      .resize(256, 256, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    // Create various sizes - much larger than before
    const sizes = [
      { size: 64, name: 'favicon-64x64.png' },
      { size: 96, name: 'favicon-96x96.png' },
      { size: 128, name: 'favicon-128x128.png' },
      { size: 192, name: 'favicon-192x192.png' },
      { size: 256, name: 'favicon-256x256.png' },
      { size: 512, name: 'favicon-512x512.png' }
    ];
    
    // Generate all sizes
    for (const { size, name } of sizes) {
      await sharp(baseImage)
        .resize(size, size, { 
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(`./public/${name}`);
      console.log(`✅ Created ${name} (${size}x${size})`);
    }
    
    // Create a large ICO file (64x64)
    await sharp(baseImage)
      .resize(64, 64, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile('./public/favicon-large.png');
    
    // Convert to ICO format (this is a simplified approach)
    await sharp(baseImage)
      .resize(64, 64, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile('./public/favicon.ico');
    
    console.log('✅ Created favicon.ico (64x64)');
    
    // Update apple touch icon to be huge
    await sharp(baseImage)
      .resize(512, 512, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile('./public/apple-touch-icon.png');
    
    console.log('✅ Updated apple-touch-icon.png (512x512)');
    
    // Update android chrome icons
    await sharp(baseImage)
      .resize(192, 192, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile('./public/android-chrome-192x192.png');
    
    await sharp(baseImage)
      .resize(512, 512, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile('./public/android-chrome-512x512.png');
    
    console.log('✅ Updated android chrome icons');
    
    console.log('\n🎉 HUGE favicon files created successfully!');
    console.log('Updated files with much larger sizes:');
    console.log('- favicon.ico (64x64)');
    console.log('- favicon-64x64.png (64x64)');
    console.log('- favicon-96x96.png (96x96)');
    console.log('- favicon-128x128.png (128x128)');
    console.log('- favicon-192x192.png (192x192)');
    console.log('- favicon-256x256.png (256x256)');
    console.log('- favicon-512x512.png (512x512)');
    console.log('- apple-touch-icon.png (512x512)');
    console.log('- android-chrome-192x192.png (192x192)');
    console.log('- android-chrome-512x512.png (512x512)');
    
  } catch (error) {
    console.error('❌ Error creating huge favicons:', error);
  }
}

createHugeFavicon();
