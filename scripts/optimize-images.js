/**
 * Image Optimization Script
 * 
 * This script identifies large images (>300KB) in the public directory
 * and provides instructions for optimizing them.
 * 
 * Usage:
 * 1. Run with: node scripts/optimize-images.js
 * 2. Follow the instructions for each large image
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const PUBLIC_DIR = path.join(__dirname, '../public');
const SIZE_THRESHOLD = 300 * 1024; // 300KB
const TARGET_FORMATS = ['.jpg', '.jpeg', '.png', '.webp'];

// Function to get file size in KB
function getFileSizeInKB(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size / 1024;
}

// Function to recursively find large images
function findLargeImages(dir, results = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findLargeImages(filePath, results);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (TARGET_FORMATS.includes(ext) && stat.size > SIZE_THRESHOLD) {
        results.push({
          path: filePath,
          size: (stat.size / 1024).toFixed(2) + ' KB',
          relativePath: path.relative(PUBLIC_DIR, filePath)
        });
      }
    }
  }
  
  return results;
}

// Main function
function main() {
  console.log('Scanning for large images...');
  
  const largeImages = findLargeImages(PUBLIC_DIR);
  
  if (largeImages.length === 0) {
    console.log('No large images found. All images are optimized!');
    return;
  }
  
  console.log(`Found ${largeImages.length} large images that could be optimized:\n`);
  
  largeImages.forEach((image, index) => {
    console.log(`${index + 1}. ${image.relativePath} (${image.size})`);
  });
  
  console.log('\nTo optimize these images, you can use tools like:');
  console.log('1. Sharp (Node.js): https://sharp.pixelplumbing.com/');
  console.log('2. Squoosh (Web): https://squoosh.app/');
  console.log('3. ImageOptim (Mac): https://imageoptim.com/');
  console.log('4. Online tools: https://tinypng.com/ or https://compressor.io/');
  
  console.log('\nOptimization recommendations:');
  console.log('- Resize large images to appropriate dimensions');
  console.log('- Use WebP format for all images (already done)');
  console.log('- Aim for quality settings between 75-85 for most images');
  console.log('- Consider responsive image sizes using Next.js Image component');
  
  // Generate sample sharp command for the first image
  if (largeImages.length > 0) {
    const sampleImage = largeImages[0];
    const outputPath = sampleImage.path.replace(path.extname(sampleImage.path), '.optimized.webp');
    
    console.log('\nExample command using sharp (requires Node.js and sharp package):');
    console.log('```');
    console.log('const sharp = require("sharp");');
    console.log(`sharp("${sampleImage.path.replace(/\\/g, '/')}")`);
    console.log('  .resize(1200) // Resize to max width of 1200px (maintains aspect ratio)');
    console.log('  .webp({ quality: 80 }) // Convert to WebP with 80% quality');
    console.log(`  .toFile("${outputPath.replace(/\\/g, '/')}")`);
    console.log('  .then(info => console.log(info))');
    console.log('  .catch(err => console.error(err));');
    console.log('```');
  }
}

// Run the script
main(); 