#!/usr/bin/env node

/**
 * Secret Generator
 * 
 * This script generates secure random values for use in environment variables.
 * Useful for generating TOKEN_SECRET and other cryptographic keys.
 */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

// Configuration
const config = {
  outputLength: 32, // Default length in bytes
  encoding: 'hex',  // Output encoding
  envFile: '.env',  // Default .env file path
};

/**
 * Generate a secure random string
 * @param {number} length - Length in bytes
 * @param {string} encoding - Output encoding ('hex', 'base64', etc.)
 * @returns {string} - The generated random string
 */
function generateSecret(length = config.outputLength, encoding = config.encoding) {
  return crypto.randomBytes(length).toString(encoding);
}

/**
 * Get a secure password with mixed characters
 * @param {number} length - Password length
 * @returns {string} - The generated password
 */
function generatePassword(length = 16) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
  let password = '';
  const randomValues = crypto.randomBytes(length);
  
  for (let i = 0; i < length; i++) {
    const randomIndex = randomValues[i] % charset.length;
    password += charset[randomIndex];
  }
  
  return password;
}

/**
 * Update environment variable in .env file
 * @param {string} key - The environment variable name
 * @param {string} value - The value to set
 * @param {string} filePath - Path to the .env file
 * @returns {boolean} - Whether the update was successful
 */
function updateEnvFile(key, value, filePath = config.envFile) {
  try {
    const envPath = path.resolve(process.cwd(), filePath);
    let content = '';
    
    // Read existing file if it exists
    if (fs.existsSync(envPath)) {
      content = fs.readFileSync(envPath, 'utf8');
    }
    
    // Check if key already exists
    const regex = new RegExp(`^${key}=.*$`, 'm');
    
    if (regex.test(content)) {
      // Replace existing value
      content = content.replace(regex, `${key}=${value}`);
    } else {
      // Add new key-value pair
      content += `\n${key}=${value}`;
    }
    
    // Write the file
    fs.writeFileSync(envPath, content.trim() + '\n');
    return true;
  } catch (error) {
    console.error(`${colors.red}Error updating .env file:${colors.reset}`, error);
    return false;
  }
}

/**
 * Print generated secrets
 */
function printSecrets() {
  console.log(`\n${colors.cyan}============= GENERATED SECRETS =============${colors.reset}`);
  
  const tokenSecret = generateSecret(32);
  console.log(`${colors.blue}TOKEN_SECRET=${colors.green}${tokenSecret}${colors.reset}`);
  
  const adminPassword = generatePassword(16);
  console.log(`${colors.blue}ADMIN_PASSWORD=${colors.green}${adminPassword}${colors.reset}`);
  
  console.log(`\n${colors.cyan}=============================================${colors.reset}`);
  console.log(`\n${colors.yellow}Copy these values to your .env file, or use the -u option to update automatically.${colors.reset}`);
}

/**
 * Main function
 */
function main() {
  // Parse command line arguments
  const args = process.argv.slice(2);
  const options = {
    update: args.includes('-u') || args.includes('--update'),
    help: args.includes('-h') || args.includes('--help'),
    file: null
  };
  
  // Get custom file path if specified
  const fileIndex = Math.max(args.indexOf('-f'), args.indexOf('--file'));
  if (fileIndex !== -1 && args[fileIndex + 1]) {
    options.file = args[fileIndex + 1];
  }
  
  // Show help
  if (options.help) {
    console.log(`
${colors.cyan}Secret Generator${colors.reset}

Generates secure random values for use in environment variables.

${colors.yellow}Usage:${colors.reset}
  node generate-secrets.js [options]

${colors.yellow}Options:${colors.reset}
  -h, --help    Show this help message
  -u, --update  Update .env file with generated values
  -f, --file    Specify a custom .env file path

${colors.yellow}Examples:${colors.reset}
  node generate-secrets.js              Generate and display secrets
  node generate-secrets.js -u           Generate and update .env file
  node generate-secrets.js -u -f .env.production  Update a specific .env file
`);
    return;
  }
  
  // Just print secrets if not updating
  if (!options.update) {
    printSecrets();
    return;
  }
  
  // Update .env file
  const filePath = options.file || config.envFile;
  console.log(`\n${colors.cyan}Updating ${filePath} with generated secrets...${colors.reset}`);
  
  const tokenSecret = generateSecret(32);
  const adminPassword = generatePassword(16);
  
  if (updateEnvFile('TOKEN_SECRET', tokenSecret, filePath)) {
    console.log(`${colors.green}✓ TOKEN_SECRET updated${colors.reset}`);
  }
  
  if (updateEnvFile('NEXT_PUBLIC_ADMIN_PASSWORD', adminPassword, filePath)) {
    console.log(`${colors.green}✓ NEXT_PUBLIC_ADMIN_PASSWORD updated${colors.reset}`);
  }
  
  const resendApiKey = generateSecret(32);
  if (updateEnvFile('RESEND_API_KEY', resendApiKey, filePath)) {
    console.log(`${colors.green}✓ RESEND_API_KEY generated${colors.reset}`);
  }
  
  // Generate SMTP credentials if not set
  if (!process.env.SMTP_USER) {
    const smtpUser = generateSecret(16, 'base64');
    if (updateEnvFile('SMTP_USER', smtpUser, filePath)) {
      console.log(`${colors.green}✓ SMTP_USER generated${colors.reset}`);
    }
  }
  
  if (!process.env.SMTP_PASS) {
    const smtpPass = generatePassword(24);
    if (updateEnvFile('SMTP_PASS', smtpPass, filePath)) {
      console.log(`${colors.green}✓ SMTP_PASS generated${colors.reset}`);
    }
  }
  
  console.log(`\n${colors.green}Secrets have been updated in ${filePath}${colors.reset}`);
}

// Run the main function
main(); 