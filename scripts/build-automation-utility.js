#!/usr/bin/env node

/**
 * Build Automation Utility
 * 
 * This script automates the pre-deployment process by running all checker scripts
 * and ensuring the build meets quality standards before deployment.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

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
  // Scripts to run in order
  scripts: [
    { name: 'Pre-deployment Checklist', command: 'node ./scripts/pre-deployment-checklist.js' },
    { name: 'Cross-browser Compatibility', command: 'node ./scripts/cross-browser-compatibility-checker.js' },
    { name: 'Performance Check', command: 'node ./scripts/performance-checker.js' },
    { name: 'Link Checker', command: 'node ./scripts/link-checker.js --maxPages 50 --baseUrl http://localhost:3000' },
    { name: 'TypeScript Check', command: 'npm run typecheck' }
  ],
  // Build command
  buildCommand: 'npm run build',
  // Test command (if applicable)
  testCommand: 'npm test',
  // Whether to run tests
  runTests: false,
  // Whether to proceed with deployment if checks fail
  proceedOnFailure: false,
};

/**
 * Run a command and return its result
 * @param {string} command - The command to run
 * @param {boolean} silent - Whether to suppress console output
 * @returns {object} - The result object with status and output
 */
function runCommand(command, silent = false) {
  console.log(`\n${colors.blue}Running command:${colors.reset} ${command}`);
  
  try {
    const output = execSync(command, { 
      encoding: 'utf8',
      stdio: silent ? 'pipe' : 'inherit'
    });
    
    return { 
      status: true, 
      output: silent ? output : 'Command executed successfully' 
    };
  } catch (error) {
    return { 
      status: false, 
      output: error.message 
    };
  }
}

/**
 * Run a script file
 * @param {string} scriptPath - Path to the script
 * @param {Array<string>} args - Arguments to pass to the script
 * @returns {boolean} - Whether the script succeeded
 */
function runScript(scriptPath, args = []) {
  try {
    console.log(`${colors.blue}Executing: node ${scriptPath} ${args.join(' ')}${colors.reset}`);
    
    // Require and execute the script
    const start = Date.now();
    let scriptResult = false;
    
    try {
      // For scripts that support module.exports
      const scriptModule = require(scriptPath);
      if (typeof scriptModule === 'function') {
        scriptResult = scriptModule(args) !== false; // Consider it successful unless explicitly returns false
      } else if (typeof scriptModule.run === 'function') {
        scriptResult = scriptModule.run(args) !== false;
      } else {
        // If script doesn't export a function, assume it runs automatically when required
        scriptResult = true;
      }
    } catch (requireError) {
      // If requiring doesn't work, fall back to child_process execution
      console.log(`${colors.yellow}Note: Running script as separate process${colors.reset}`);
      const cmd = `node ${scriptPath} ${args.join(' ')}`;
      const result = runCommand(cmd);
      scriptResult = result.status;
    }
    
    const duration = ((Date.now() - start) / 1000).toFixed(2);
    
    if (scriptResult) {
      console.log(`${colors.green}✓ Script completed successfully in ${duration}s${colors.reset}`);
      return true;
    } else {
      console.log(`${colors.red}✗ Script failed after ${duration}s${colors.reset}`);
      return false;
    }
  } catch (error) {
    console.error(`${colors.red}Error running script ${scriptPath}:${colors.reset}`, error);
    return false;
  }
}

/**
 * Main function to run the build automation process
 */
function main() {
  console.log(`${colors.cyan}=======================================================${colors.reset}`);
  console.log(`${colors.cyan}              BUILD AUTOMATION UTILITY               ${colors.reset}`);
  console.log(`${colors.cyan}=======================================================${colors.reset}`);
  
  // Store results of each script
  const results = [];
  
  // Run tests if configured
  if (config.runTests) {
    console.log(`\n${colors.magenta}Running tests...${colors.reset}`);
    const testResult = runCommand(config.testCommand);
    
    if (!testResult.status) {
      console.log(`\n${colors.red}Tests failed. Aborting build.${colors.reset}`);
      process.exit(1);
    }
    
    console.log(`\n${colors.green}Tests passed successfully.${colors.reset}`);
  }
  
  // Run each checker script
  for (const script of config.scripts) {
    console.log(`\n${colors.magenta}Running ${script.name}...${colors.reset}`);
    
    // For npm commands, run directly
    if (script.command.startsWith('npm ')) {
      const result = runCommand(script.command);
      results.push({
        name: script.name,
        status: result.status ? 'PASSED' : 'FAILED'
      });
      
      if (!result.status && !config.proceedOnFailure) {
        console.log(`\n${colors.red}${script.name} failed. Aborting build.${colors.reset}`);
        printSummary(results);
        process.exit(1);
      }
      continue;
    }
    
    // For node scripts, extract the script path
    const commandParts = script.command.split(' ');
    const scriptPath = commandParts[1]; // Assumes format is "node ./scripts/script-name.js [args]"
    const args = commandParts.slice(2);
    
    // Convert relative path to absolute path
    const absoluteScriptPath = path.isAbsolute(scriptPath) 
      ? scriptPath 
      : path.resolve(process.cwd(), scriptPath);
    
    // Check if script exists
    if (!fs.existsSync(absoluteScriptPath)) {
      console.log(`${colors.yellow}Warning: Script ${scriptPath} not found. Skipping.${colors.reset}`);
      results.push({
        name: script.name,
        status: 'SKIPPED',
        reason: 'Script not found'
      });
      continue;
    }
    
    // Run the script
    const success = runScript(absoluteScriptPath, args);
    
    results.push({
      name: script.name,
      status: success ? 'PASSED' : 'FAILED'
    });
    
    if (!success && !config.proceedOnFailure) {
      console.log(`\n${colors.red}${script.name} failed. Aborting build.${colors.reset}`);
      printSummary(results);
      process.exit(1);
    }
  }
  
  // Run the build command
  console.log(`\n${colors.magenta}Running build...${colors.reset}`);
  const buildResult = runCommand(config.buildCommand);
  
  results.push({
    name: 'Production Build',
    status: buildResult.status ? 'PASSED' : 'FAILED'
  });
  
  if (!buildResult.status) {
    console.log(`\n${colors.red}Build failed.${colors.reset}`);
    printSummary(results);
    process.exit(1);
  }
  
  // Print summary
  printSummary(results);
  
  console.log(`\n${colors.green}Build completed successfully!${colors.reset}`);
  console.log(`\n${colors.green}Your application is ready for deployment.${colors.reset}`);
}

/**
 * Print a summary of all script results
 * @param {Array<object>} results - The results of each script
 */
function printSummary(results) {
  console.log(`\n${colors.cyan}=======================================================${colors.reset}`);
  console.log(`${colors.cyan}                   BUILD SUMMARY                    ${colors.reset}`);
  console.log(`${colors.cyan}=======================================================${colors.reset}\n`);
  
  results.forEach(result => {
    const statusColor = result.status === 'PASSED' ? colors.green : 
                       result.status === 'SKIPPED' ? colors.yellow : colors.red;
    
    console.log(`${result.name}: ${statusColor}${result.status}${colors.reset}`);
    if (result.reason) {
      console.log(`  Reason: ${result.reason}`);
    }
  });
  
  const allPassed = results.every(result => result.status === 'PASSED' || result.status === 'SKIPPED');
  const summary = allPassed ? 
    `${colors.green}All checks passed successfully.${colors.reset}` : 
    `${colors.red}Some checks failed. Review the issues before deployment.${colors.reset}`;
  
  console.log(`\nSummary: ${summary}`);
}

// Run the main function
main(); 