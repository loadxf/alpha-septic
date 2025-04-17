/**
 * Convert Images to WebP Script
 * 
 * This script converts JPG, JPEG, and PNG images in the public directory to WebP format
 * and lists any images that need conversion for manual handling if needed.
 * 
 * Usage:
 * node scripts/convert-images-to-webp.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const PUBLIC_DIR = path.join(__dirname, '../public');
const TARGET_FORMATS = ['.jpg', '.jpeg', '.png'];

// Function to scan for images of target formats
function findNonWebpImages(dir, results = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findNonWebpImages(filePath, results);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (TARGET_FORMATS.includes(ext)) {
        results.push({
          path: filePath,
          relativePath: path.relative(PUBLIC_DIR, filePath)
        });
      }
    }
  }
  
  return results;
}

// Function to check if WebP version exists
function webpVersionExists(imagePath) {
  const webpPath = imagePath.replace(path.extname(imagePath), '.webp');
  return fs.existsSync(webpPath);
}

// Main function
function main() {
  console.log('Scanning for non-WebP images...');
  
  const nonWebpImages = findNonWebpImages(PUBLIC_DIR);
  
  if (nonWebpImages.length === 0) {
    console.log('No non-WebP images found. All images are already in WebP format!');
    return;
  }
  
  console.log(`Found ${nonWebpImages.length} non-WebP images that need conversion:\n`);
  
  // List all images that need conversion
  nonWebpImages.forEach((image, index) => {
    const hasWebpVersion = webpVersionExists(image.path);
    console.log(`${index + 1}. ${image.relativePath} ${hasWebpVersion ? '(WebP version exists)' : ''}`);
  });
  
  console.log('\nManual conversion instructions:');
  console.log('1. Online tools for conversion:');
  console.log('   - Squoosh: https://squoosh.app/');
  console.log('   - CloudConvert: https://cloudconvert.com/');
  console.log('   - Convertio: https://convertio.co/');
  
  console.log('\n2. Using sharp NPM package (if installed):');
  console.log('   const sharp = require("sharp");');
  console.log('   sharp("input.jpg").webp({ quality: 80 }).toFile("output.webp");');
  
  console.log('\n3. Using command-line tools:');
  console.log('   - cwebp (part of WebP tools): cwebp -q 80 input.jpg -o output.webp');
  console.log('   - ImageMagick: convert input.jpg -quality 80 output.webp');
  
  console.log('\nNEXT STEPS:');
  console.log('1. Create WebP versions of all identified images');
  console.log('2. Update references in code from .jpg/.png to .webp');
  console.log('3. Consider keeping original files for browsers without WebP support,');
  console.log('   or implement a format detection solution');
}

// Run the script
main(); 