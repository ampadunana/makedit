const sharp = require('sharp');
const fs = require('fs');

async function createHighQualityFavicons() {
  try {
    console.log('Creating high-quality favicons from 1024x1024 logo...');

    // Create high-quality favicon.ico (multiple sizes)
    await sharp('public/logo.png')
      .resize(64, 64)
      .png()
      .toFile('public/favicon-64x64.png');

    await sharp('public/logo.png')
      .resize(64, 64)
      .png()
      .toFile('public/favicon.ico');

    // Create larger standard favicons
    await sharp('public/logo.png')
      .resize(96, 96)
      .png()
      .toFile('public/favicon-96x96.png');

    await sharp('public/logo.png')
      .resize(128, 128)
      .png()
      .toFile('public/favicon-128x128.png');

    // Create high-quality apple-touch-icon (256x256)
    await sharp('public/logo.png')
      .resize(256, 256)
      .png()
      .toFile('public/apple-touch-icon.png');

    // Create high-quality android-chrome icons
    await sharp('public/logo.png')
      .resize(256, 256)
      .png()
      .toFile('public/android-chrome-256x256.png');

    await sharp('public/logo.png')
      .resize(512, 512)
      .png()
      .toFile('public/android-chrome-512x512.png');

    // Create extra large favicon for high-DPI displays
    await sharp('public/logo.png')
      .resize(192, 192)
      .png()
      .toFile('public/favicon-192x192.png');

    console.log('✅ High-quality favicons created successfully!');
    console.log('Created files:');
    console.log('- favicon.ico (64x64)');
    console.log('- favicon-64x64.png (64x64)');
    console.log('- favicon-96x96.png (96x96)');
    console.log('- favicon-128x128.png (128x128)');
    console.log('- favicon-192x192.png (192x192)');
    console.log('- apple-touch-icon.png (256x256)');
    console.log('- android-chrome-256x256.png (256x256)');
    console.log('- android-chrome-512x512.png (512x512)');

  } catch (error) {
    console.error('Error creating high-quality favicons:', error);
  }
}

createHighQualityFavicons();
