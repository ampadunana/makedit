const sharp = require('sharp');
const fs = require('fs');

async function createFavicons() {
  try {
    // Check if logo exists
    if (!fs.existsSync('public/logo.png')) {
      console.log('Logo not found. Please make sure "makedit logo" is in your downloads folder.');
      return;
    }

    console.log('Creating favicons from logo...');

    // Create favicon.ico (16x16, 32x32, 48x48)
    await sharp('public/logo.png')
      .resize(32, 32)
      .png()
      .toFile('public/favicon-32x32.png');

    await sharp('public/logo.png')
      .resize(16, 16)
      .png()
      .toFile('public/favicon-16x16.png');

    // Create apple-touch-icon (180x180)
    await sharp('public/logo.png')
      .resize(180, 180)
      .png()
      .toFile('public/apple-touch-icon.png');

    // Create android-chrome icons (192x192, 512x512)
    await sharp('public/logo.png')
      .resize(192, 192)
      .png()
      .toFile('public/android-chrome-192x192.png');

    await sharp('public/logo.png')
      .resize(512, 512)
      .png()
      .toFile('public/android-chrome-512x512.png');

    // Create favicon.ico (multi-size ICO file)
    await sharp('public/logo.png')
      .resize(32, 32)
      .png()
      .toFile('public/favicon.ico');

    console.log('✅ Favicons created successfully!');
    console.log('Created files:');
    console.log('- favicon.ico (32x32)');
    console.log('- favicon-16x16.png');
    console.log('- favicon-32x32.png');
    console.log('- apple-touch-icon.png (180x180)');
    console.log('- android-chrome-192x192.png');
    console.log('- android-chrome-512x512.png');

  } catch (error) {
    console.error('Error creating favicons:', error);
  }
}

createFavicons();
