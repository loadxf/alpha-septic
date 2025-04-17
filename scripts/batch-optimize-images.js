/**
 * Batch Image Optimization Script
 * 
 * This script optimizes large images (>300KB) in the public directory.
 * It will create optimized versions with .optimized.webp extension.
 * 
 * Prerequisites:
 * 1. npm install sharp
 * 
 * Usage:
 * 1. Run with: node scripts/batch-optimize-images.js
 * 2. Review the optimized images and replace originals if satisfied
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp'); // Make sure to install: npm install sharp

// Configuration
const PUBLIC_DIR = path.join(__dirname, '../public');
const SIZE_THRESHOLD = 300 * 1024; // 300KB
const TARGET_FORMATS = ['.jpg', '.jpeg', '.png', '.webp'];
const MAX_WIDTH = 1200; // Max width for large images
const QUALITY = 80; // WebP quality (0-100)

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
          size: stat.size,
          relativePath: path.relative(PUBLIC_DIR, filePath)
        });
      }
    }
  }
  
  return results;
}

// Function to optimize an image
async function optimizeImage(imagePath) {
  try {
    const outputPath = imagePath.replace(path.extname(imagePath), '.optimized.webp');
    
    // Get image dimensions
    const metadata = await sharp(imagePath).metadata();
    const width = metadata.width;
    
    // Only resize if larger than MAX_WIDTH
    let sharpInstance = sharp(imagePath);
    if (width > MAX_WIDTH) {
      sharpInstance = sharpInstance.resize(MAX_WIDTH);
    }
    
    // Convert to WebP and save
    const info = await sharpInstance
      .webp({ quality: QUALITY })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(imagePath).size;
    const newSize = fs.statSync(outputPath).size;
    const savingsPercent = ((originalSize - newSize) / originalSize * 100).toFixed(2);
    
    return {
      originalPath: imagePath,
      optimizedPath: outputPath,
      originalSize: originalSize,
      optimizedSize: newSize,
      savingsPercent: savingsPercent
    };
  } catch (err) {
    console.error(`Error optimizing ${imagePath}:`, err);
    return null;
  }
}

// Main function
async function main() {
  console.log('Scanning for large images...');
  
  const largeImages = findLargeImages(PUBLIC_DIR);
  
  if (largeImages.length === 0) {
    console.log('No large images found that need optimization.');
    return;
  }
  
  console.log(`Found ${largeImages.length} large images to optimize:\n`);
  
  // Show the images to be optimized
  largeImages.forEach((image, index) => {
    console.log(`${index + 1}. ${image.relativePath} (${(image.size / 1024).toFixed(2)} KB)`);
  });
  
  console.log('\nOptimizing images...');
  
  const results = [];
  let totalSaved = 0;
  
  // Process images in sequence to avoid memory issues
  for (const image of largeImages) {
    console.log(`Processing: ${image.relativePath}`);
    const result = await optimizeImage(image.path);
    if (result) {
      results.push(result);
      totalSaved += (result.originalSize - result.optimizedSize);
    }
  }
  
  console.log('\nOptimization Results:');
  console.log('===========================================');
  
  results.forEach((result, index) => {
    console.log(`${index + 1}. ${path.basename(result.originalPath)}`);
    console.log(`   Original: ${(result.originalSize / 1024).toFixed(2)} KB`);
    console.log(`   Optimized: ${(result.optimizedSize / 1024).toFixed(2)} KB`);
    console.log(`   Savings: ${result.savingsPercent}%`);
    console.log('-------------------------------------------');
  });
  
  console.log(`\nTotal space saved: ${(totalSaved / (1024 * 1024)).toFixed(2)} MB`);
  
  console.log('\nNext steps:');
  console.log('1. Review the optimized images (they have .optimized.webp extension)');
  console.log('2. If satisfied, replace the originals with the optimized versions');
  console.log('3. Update any hardcoded image paths in your code if extensions changed');
}

// Run the script
main().catch(err => console.error('An error occurred:', err)); 