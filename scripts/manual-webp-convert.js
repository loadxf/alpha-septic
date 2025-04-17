/**
 * Manual WebP Conversion Script
 * 
 * This script converts specific identified images to WebP format
 * using the built-in Canvas API without requiring external dependencies.
 * 
 * Usage:
 * node scripts/manual-webp-convert.js
 */

const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

// List of images to convert
const IMAGES_TO_CONVERT = [
  { path: '../public/placeholder-logo.png', quality: 0.8 },
  { path: '../public/placeholder-user.jpg', quality: 0.8 },
  { path: '../public/placeholder.jpg', quality: 0.8 }
];

// Function to convert an image to WebP using Canvas
async function convertToWebP(imagePath, quality = 0.8) {
  try {
    const fullPath = path.join(__dirname, imagePath);
    if (!fs.existsSync(fullPath)) {
      console.error(`Error: Image not found at ${fullPath}`);
      return false;
    }

    // Create output path
    const outputPath = fullPath.replace(path.extname(fullPath), '.webp');
    
    // Handle simple placeholder generation if original can't be loaded
    if (!fs.existsSync(fullPath) || fs.statSync(fullPath).size < 100) {
      console.log(`Creating placeholder for ${imagePath}...`);
      const canvas = createCanvas(200, 200);
      const ctx = canvas.getContext('2d');
      
      // Draw a simple placeholder
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, 200, 200);
      ctx.fillStyle = '#cccccc';
      ctx.font = '16px Arial';
      ctx.fillText('Placeholder', 60, 100);
      
      // Save as WebP
      const buffer = canvas.toBuffer('image/webp', { quality });
      fs.writeFileSync(outputPath, buffer);
      console.log(`Created placeholder: ${outputPath}`);
      return true;
    }
    
    console.log(`Converting ${imagePath}...`);
    
    // Create a simple placeholder if the image can't be loaded
    const image = await loadImage(fullPath).catch(err => {
      console.error(`Error loading image ${fullPath}: ${err.message}`);
      return null;
    });
    
    if (!image) {
      return false;
    }
    
    // Create canvas with image dimensions
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    
    // Draw image on canvas
    ctx.drawImage(image, 0, 0);
    
    // Convert to WebP and save
    const buffer = canvas.toBuffer('image/webp', { quality });
    fs.writeFileSync(outputPath, buffer);
    
    console.log(`Converted: ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`Error converting ${imagePath}: ${error.message}`);
    return false;
  }
}

// Main function
async function main() {
  console.log('Starting manual WebP conversion...');
  
  try {
    // Check if canvas package is available
    if (!createCanvas) {
      throw new Error("The 'canvas' package is not installed. Please install with 'npm install canvas'");
    }
    
    let successful = 0;
    let failed = 0;
    
    // Process each image
    for (const image of IMAGES_TO_CONVERT) {
      const result = await convertToWebP(image.path, image.quality);
      if (result) {
        successful++;
      } else {
        failed++;
      }
    }
    
    console.log('\nConversion Summary:');
    console.log(`- Successfully converted: ${successful}`);
    console.log(`- Failed conversions: ${failed}`);
    
    if (failed > 0) {
      console.log('\nFor failed conversions, please use an online tool like:');
      console.log('- Squoosh: https://squoosh.app/');
      console.log('- CloudConvert: https://cloudconvert.com/');
    }
    
    console.log('\nDon\'t forget to update all image references in the code to use the .webp extension!');
  } catch (error) {
    console.error(`Error in conversion process: ${error.message}`);
    console.log('\nAlternative conversion instructions:');
    console.log('1. Use an online tool for conversion:');
    console.log('   - Squoosh: https://squoosh.app/');
    console.log('   - CloudConvert: https://cloudconvert.com/');
    console.log('   - Convertio: https://convertio.co/');
  }
}

// Run the script
main(); 