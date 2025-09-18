const sharp = require('sharp');
const fs = require('fs');

async function createLargerFavicons() {
  try {
    console.log('Creating larger favicons and updating logo...');

    // Create larger favicon.ico (48x48, 64x64)
    await sharp('public/logo.png')
      .resize(48, 48)
      .png()
      .toFile('public/favicon-48x48.png');

    await sharp('public/logo.png')
      .resize(64, 64)
      .png()
      .toFile('public/favicon-64x64.png');

    // Update existing favicons with larger sizes
    await sharp('public/logo.png')
      .resize(32, 32)
      .png()
      .toFile('public/favicon-32x32.png');

    await sharp('public/logo.png')
      .resize(32, 32)
      .png()
      .toFile('public/favicon.ico');

    // Create larger apple-touch-icon (192x192)
    await sharp('public/logo.png')
      .resize(192, 192)
      .png()
      .toFile('public/apple-touch-icon.png');

    // Update android-chrome icons with larger sizes
    await sharp('public/logo.png')
      .resize(192, 192)
      .png()
      .toFile('public/android-chrome-192x192.png');

    await sharp('public/logo.png')
      .resize(512, 512)
      .png()
      .toFile('public/android-chrome-512x512.png');

    console.log('✅ Larger favicons created successfully!');
    console.log('Updated files with larger sizes:');
    console.log('- favicon.ico (32x32)');
    console.log('- favicon-32x32.png (32x32)');
    console.log('- favicon-48x48.png (48x48)');
    console.log('- favicon-64x64.png (64x64)');
    console.log('- apple-touch-icon.png (192x192)');
    console.log('- android-chrome-192x192.png (192x192)');
    console.log('- android-chrome-512x512.png (512x512)');

  } catch (error) {
    console.error('Error creating larger favicons:', error);
  }
}

createLargerFavicons();
