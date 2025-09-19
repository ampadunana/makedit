const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const pngToIcoImport = require('png-to-ico');
const pngToIco = pngToIcoImport && pngToIcoImport.default ? pngToIcoImport.default : pngToIcoImport;

async function ensureDir(dirPath) {
  await fs.promises.mkdir(dirPath, { recursive: true }).catch(() => {});
}

async function createPng(targetSize, srcPath, outDir) {
  const outPath = path.join(outDir, `favicon-${targetSize}x${targetSize}.png`);
  await sharp(srcPath).resize(targetSize, targetSize, { fit: 'cover' }).png().toFile(outPath);
  return outPath;
}

async function main() {
  const publicDir = path.join(process.cwd(), 'public');
  const srcLogo = path.join(publicDir, 'logo.png');

  if (!fs.existsSync(srcLogo)) {
    console.error('Logo not found at public/logo.png. Please place your logo there first.');
    process.exit(1);
  }

  await ensureDir(publicDir);

  // Core favicon sizes
  const sizes = [16, 32, 48, 64, 128, 256, 512];
  const generated = [];

  for (const size of sizes) {
    const out = await createPng(size, srcLogo, publicDir);
    generated.push(out);
  }

  // Android Chrome icons
  await sharp(srcLogo).resize(192, 192).png().toFile(path.join(publicDir, 'android-chrome-192x192.png'));
  await sharp(srcLogo).resize(512, 512).png().toFile(path.join(publicDir, 'android-chrome-512x512.png'));

  // Apple touch icon (recommended 180x180)
  await sharp(srcLogo).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // Multi-size ICO (16, 32, 48, 64, 128, 256)
  const icoPngs = [16, 32, 48, 64, 128, 256].map((s) => path.join(publicDir, `favicon-${s}x${s}.png`));
  const icoBuffer = await pngToIco(icoPngs);
  await fs.promises.writeFile(path.join(publicDir, 'favicon.ico'), icoBuffer);

  console.log('✅ Generated favicons:');
  console.log('- favicon.ico (multi-size)');
  for (const file of generated) console.log('-', path.basename(file));
  console.log('- apple-touch-icon.png (180x180)');
  console.log('- android-chrome-192x192.png');
  console.log('- android-chrome-512x512.png');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

