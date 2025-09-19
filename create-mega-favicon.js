const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createMegaFavicon() {
  try {
    console.log('Creating MEGA HUGE favicon files...');
    
    // Read the logo
    const logoBuffer = fs.readFileSync('./public/logo.png');
    
    // Create an absolutely MASSIVE base image (1024x1024)
    const baseImage = await sharp(logoBuffer)
      .resize(1024, 1024, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    // Create MEGA sizes - absolutely huge
    const sizes = [
      { size: 128, name: 'favicon-128x128.png' },
      { size: 192, name: 'favicon-192x192.png' },
      { size: 256, name: 'favicon-256x256.png' },
      { size: 384, name: 'favicon-384x384.png' },
      { size: 512, name: 'favicon-512x512.png' },
      { size: 768, name: 'favicon-768x768.png' },
      { size: 1024, name: 'favicon-1024x1024.png' }
    ];
    
    // Generate all MEGA sizes
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
    
    // Create a MASSIVE ICO file (256x256)
    await sharp(baseImage)
      .resize(256, 256, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile('./public/favicon-mega.png');
    
    // Convert to ICO format (simplified approach - using PNG as ICO)
    await sharp(baseImage)
      .resize(256, 256, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile('./public/favicon.ico');
    
    console.log('✅ Created MEGA favicon.ico (256x256)');
    
    // Update apple touch icon to be MASSIVE
    await sharp(baseImage)
      .resize(1024, 1024, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile('./public/apple-touch-icon.png');
    
    console.log('✅ Updated apple-touch-icon.png (1024x1024)');
    
    // Update android chrome icons to be MEGA
    await sharp(baseImage)
      .resize(512, 512, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile('./public/android-chrome-192x192.png');
    
    await sharp(baseImage)
      .resize(1024, 1024, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile('./public/android-chrome-512x512.png');
    
    console.log('✅ Updated android chrome icons to MEGA sizes');
    
    console.log('\n🎉 MEGA HUGE favicon files created successfully!');
    console.log('Updated files with MASSIVE sizes:');
    console.log('- favicon.ico (256x256) - MEGA!');
    console.log('- favicon-128x128.png (128x128)');
    console.log('- favicon-192x192.png (192x192)');
    console.log('- favicon-256x256.png (256x256)');
    console.log('- favicon-384x384.png (384x384) - MEGA!');
    console.log('- favicon-512x512.png (512x512) - MEGA!');
    console.log('- favicon-768x768.png (768x768) - MEGA!');
    console.log('- favicon-1024x1024.png (1024x1024) - MEGA!');
    console.log('- apple-touch-icon.png (1024x1024) - MEGA!');
    console.log('- android-chrome-192x192.png (512x512)');
    console.log('- android-chrome-512x512.png (1024x1024) - MEGA!');
    
  } catch (error) {
    console.error('❌ Error creating MEGA favicons:', error);
  }
}

createMegaFavicon();
