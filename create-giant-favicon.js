const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createGiantFavicon() {
  try {
    console.log('Creating GIANT favicon files for MAXIMUM visibility...');
    
    // Read the logo
    const logoBuffer = fs.readFileSync('./public/logo.png');
    
    // Create an absolutely MASSIVE base image (2048x2048) for maximum detail
    const baseImage = await sharp(logoBuffer)
      .resize(2048, 2048, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    // Create GIANT sizes - optimized for maximum browser visibility
    const sizes = [
      { size: 256, name: 'favicon-256x256.png' }, // This is the MAX most browsers will show
      { size: 512, name: 'favicon-512x512.png' }, // For high-DPI displays
      { size: 1024, name: 'favicon-1024x1024.png' }, // For retina displays
      { size: 2048, name: 'favicon-2048x2048.png' } // Absolute maximum
    ];
    
    // Generate all GIANT sizes
    for (const { size, name } of sizes) {
      await sharp(baseImage)
        .resize(size, size, { 
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(`./public/${name}`);
      console.log(`✅ Created ${name} (${size}x${size}) - GIANT!`);
    }
    
    // Create the MAIN favicon.ico with MAXIMUM size (256x256)
    // This is the largest size browsers will actually display in tabs
    await sharp(baseImage)
      .resize(256, 256, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile('./public/favicon.ico');
    
    console.log('✅ Created GIANT favicon.ico (256x256) - MAXIMUM BROWSER SIZE!');
    
    // Create a special high-contrast version for better visibility
    await sharp(baseImage)
      .resize(256, 256, { 
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 1 } // Black background for contrast
      })
      .png()
      .toFile('./public/favicon-contrast.png');
    
    console.log('✅ Created high-contrast favicon for better visibility');
    
    // Update apple touch icon to be ABSOLUTELY MASSIVE
    await sharp(baseImage)
      .resize(2048, 2048, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile('./public/apple-touch-icon.png');
    
    console.log('✅ Updated apple-touch-icon.png (2048x2048) - ABSOLUTE MAXIMUM!');
    
    // Update android chrome icons to be GIANT
    await sharp(baseImage)
      .resize(512, 512, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile('./public/android-chrome-192x192.png');
    
    await sharp(baseImage)
      .resize(2048, 2048, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile('./public/android-chrome-512x512.png');
    
    console.log('✅ Updated android chrome icons to GIANT sizes');
    
    console.log('\n🎉 GIANT favicon files created successfully!');
    console.log('Updated files with MAXIMUM possible sizes:');
    console.log('- favicon.ico (256x256) - MAXIMUM BROWSER TAB SIZE!');
    console.log('- favicon-256x256.png (256x256) - MAXIMUM!');
    console.log('- favicon-512x512.png (512x512) - GIANT!');
    console.log('- favicon-1024x1024.png (1024x1024) - MEGA!');
    console.log('- favicon-2048x2048.png (2048x2048) - ABSOLUTE MAXIMUM!');
    console.log('- favicon-contrast.png (256x256) - High contrast version');
    console.log('- apple-touch-icon.png (2048x2048) - ABSOLUTE MAXIMUM!');
    console.log('- android-chrome-512x512.png (2048x2048) - ABSOLUTE MAXIMUM!');
    console.log('\n💡 Note: Browsers limit favicon size in tabs to ~256x256 max');
    console.log('   But we created the largest possible for maximum visibility!');
    
  } catch (error) {
    console.error('❌ Error creating GIANT favicons:', error);
  }
}

createGiantFavicon();
