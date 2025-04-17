/**
 * Check Color Contrast Script
 * 
 * This script checks that text elements have sufficient color contrast
 * for accessibility compliance with WCAG standards.
 * 
 * Prerequisites:
 * npm install puppeteer
 * 
 * Usage:
 * node scripts/check-color-contrast.js [url]
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Default site URL from environment or fallback
const DEFAULT_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://callalphaseptic.com';
const REPORTS_DIR = path.join(__dirname, '../reports');

// Pages to check (add more as needed)
const PAGES_TO_CHECK = [
  '',                                 // Home
  '/services',                        // Services main
  '/about',                           // About
  '/contact',                         // Contact
  '/service-areas',                   // Service areas main
  '/services/residential',            // Service - Residential
];

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

// WCAG 2.0 contrast ratio requirements
const WCAG = {
  AA: {
    normalText: 4.5,
    largeText: 3
  },
  AAA: {
    normalText: 7,
    largeText: 4.5
  }
};

/**
 * Ensure reports directory exists
 */
function ensureReportsDir() {
  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }
}

/**
 * Check color contrast on a page
 */
async function checkColorContrast(browser, url) {
  const page = await browser.newPage();
  
  try {
    // Increase timeout for slow pages
    await page.setDefaultNavigationTimeout(30000);
    console.log(`${colors.blue}Checking${colors.reset}: ${url}`);
    
    // Navigate to the page
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    // Get page path for identifying the page
    const urlObj = new URL(url);
    const pagePath = urlObj.pathname || '/';
    
    // Check color contrast for text elements
    const contrastResults = await page.evaluate(() => {
      // Helper to check if an element is visible
      const isVisible = (element) => {
        const style = window.getComputedStyle(element);
        return !(style.display === 'none' || 
                style.visibility === 'hidden' || 
                style.opacity === '0' || 
                element.getAttribute('aria-hidden') === 'true' ||
                element.textContent.trim() === '' ||
                (element.getBoundingClientRect().height === 0 && 
                 element.getBoundingClientRect().width === 0));
      };
      
      // Convert RGB to luminance
      const getLuminance = (r, g, b) => {
        const a = [r, g, b].map(v => {
          v /= 255;
          return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
      };
      
      // Parse color string to RGB values
      const parseColorToRGB = (color) => {
        if (!color || color === 'transparent' || color === 'inherit') return null;
        
        // Handle rgb/rgba format
        if (color.startsWith('rgb')) {
          const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
          if (match) {
            return {
              r: parseInt(match[1], 10),
              g: parseInt(match[2], 10),
              b: parseInt(match[3], 10)
            };
          }
        }
        
        // Handle hex format
        if (color.startsWith('#')) {
          let hex = color.slice(1);
          // Convert short hex to full hex
          if (hex.length === 3) {
            hex = hex.split('').map(c => c + c).join('');
          }
          
          if (hex.length === 6) {
            return {
              r: parseInt(hex.slice(0, 2), 16),
              g: parseInt(hex.slice(2, 4), 16),
              b: parseInt(hex.slice(4, 6), 16)
            };
          }
        }
        
        // For other formats, create a temporary element to get computed style
        const tempEl = document.createElement('div');
        tempEl.style.color = color;
        document.body.appendChild(tempEl);
        const computedColor = window.getComputedStyle(tempEl).color;
        document.body.removeChild(tempEl);
        
        // Parse computed color (which will be in rgb format)
        const match = computedColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
        if (match) {
          return {
            r: parseInt(match[1], 10),
            g: parseInt(match[2], 10),
            b: parseInt(match[3], 10)
          };
        }
        
        return null;
      };
      
      // Calculate contrast ratio
      const getContrastRatio = (color1, color2) => {
        if (!color1 || !color2) return null;
        
        const lum1 = getLuminance(color1.r, color1.g, color1.b);
        const lum2 = getLuminance(color2.r, color2.g, color2.b);
        const brightest = Math.max(lum1, lum2);
        const darkest = Math.min(lum1, lum2);
        
        return (brightest + 0.05) / (darkest + 0.05);
      };
      
      // Check if font size is large (18pt/24px or 14pt/18.7px bold)
      const isLargeText = (element) => {
        const style = window.getComputedStyle(element);
        const fontSize = parseFloat(style.fontSize);
        const fontWeight = style.fontWeight;
        
        return fontSize >= 24 || (fontSize >= 18.7 && fontWeight >= 700);
      };
      
      // Get all text elements on the page
      const textSelectors = [
        'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'a', 'button', 'span', 'label', 'li', 'td', 'th',
        'input', 'textarea', 'select'
      ];
      
      const elements = Array.from(
        document.querySelectorAll(textSelectors.join(','))
      ).filter(isVisible);
      
      // Check contrast for each element
      const results = [];
      let issueCount = 0;
      
      elements.forEach(element => {
        try {
          const style = window.getComputedStyle(element);
          const textColorRGB = parseColorToRGB(style.color);
          
          // Find the background color (may be inherited)
          let parentElement = element;
          let bgColorRGB = null;
          let bgColorSource = null;
          
          while (parentElement && !bgColorRGB) {
            const parentStyle = window.getComputedStyle(parentElement);
            const backgroundColor = parentStyle.backgroundColor;
            
            if (backgroundColor && backgroundColor !== 'transparent' && backgroundColor !== 'rgba(0, 0, 0, 0)') {
              bgColorRGB = parseColorToRGB(backgroundColor);
              bgColorSource = parentElement.tagName.toLowerCase();
              if (parentElement !== element) {
                bgColorSource += ' (parent)';
              }
            }
            
            if (parentElement === document.body) break;
            parentElement = parentElement.parentElement;
          }
          
          // If no background color was found, use white as a fallback
          if (!bgColorRGB) {
            bgColorRGB = { r: 255, g: 255, b: 255 };
            bgColorSource = 'body (default)';
          }
          
          const contrastRatio = getContrastRatio(textColorRGB, bgColorRGB);
          const large = isLargeText(element);
          
          // WCAG AA requirements
          const passesAA = large 
            ? contrastRatio >= 3
            : contrastRatio >= 4.5;
            
          // WCAG AAA requirements
          const passesAAA = large
            ? contrastRatio >= 4.5
            : contrastRatio >= 7;
            
          if (!passesAA) {
            issueCount++;
            results.push({
              element: element.tagName.toLowerCase() + (element.id ? `#${element.id}` : ''),
              textColor: style.color,
              backgroundColor: bgColorSource ? `${window.getComputedStyle(parentElement).backgroundColor} (from ${bgColorSource})` : 'unknown',
              fontSize: style.fontSize,
              fontWeight: style.fontWeight,
              isLargeText: large,
              contrastRatio: contrastRatio.toFixed(2),
              requiredRatio: large ? 3 : 4.5,
              passesAA,
              passesAAA,
              text: element.textContent.trim().substring(0, 50) + (element.textContent.trim().length > 50 ? '...' : ''),
              path: getElementPath(element).join(' > ')
            });
          }
        } catch (error) {
          // Ignore errors for individual elements
        }
      });
      
      // Helper function to get element path for identification
      function getElementPath(element, path = []) {
        if (!element || element === document.body) {
          path.unshift('body');
          return path;
        }
        
        let selector = element.tagName.toLowerCase();
        if (element.id) {
          selector += `#${element.id}`;
        } else if (element.className) {
          const classes = Array.from(element.classList).join('.');
          if (classes) {
            selector += `.${classes}`;
          }
        }
        
        path.unshift(selector);
        
        return element.parentElement 
          ? getElementPath(element.parentElement, path) 
          : path;
      }
      
      return {
        totalElements: elements.length,
        issueCount,
        results
      };
    });
    
    // Format issues
    const issues = contrastResults.results.map(result => {
      const textColorDisplay = result.textColor;
      const bgColorDisplay = result.backgroundColor;
      
      return {
        element: result.element,
        text: result.text,
        textColor: textColorDisplay,
        backgroundColor: bgColorDisplay,
        fontSize: result.fontSize,
        contrastRatio: result.contrastRatio,
        required: `${result.requiredRatio} (${result.isLargeText ? 'large' : 'normal'} text)`,
        path: result.path
      };
    });
    
    return {
      url,
      pagePath,
      totalElements: contrastResults.totalElements,
      issueCount: contrastResults.issueCount,
      issues,
      pass: contrastResults.issueCount === 0
    };
  } catch (error) {
    return {
      url,
      pagePath: new URL(url).pathname || '/',
      totalElements: 0,
      issueCount: 0,
      issues: [`Error checking page: ${error.message}`],
      pass: false
    };
  } finally {
    await page.close();
  }
}

/**
 * Print formatted results
 */
function printResults(results) {
  console.log('\n========= COLOR CONTRAST AUDIT RESULTS =========\n');
  
  let passCount = 0;
  let failCount = 0;
  let totalElements = 0;
  let totalIssues = 0;
  
  // Process each page result
  results.forEach(result => {
    const statusIcon = result.pass ? `${colors.green}✓` : `${colors.red}✗`;
    console.log(`${statusIcon} ${result.pagePath || 'home'}${colors.reset}`);
    
    if (result.pass) {
      passCount++;
      console.log(`  All text elements have sufficient color contrast`);
    } else {
      failCount++;
      console.log(`  Found ${result.issueCount}/${result.totalElements} text elements with insufficient contrast`);
      
      // Show a subset of issues to avoid overwhelming output
      const shownIssues = result.issues.slice(0, 5);
      shownIssues.forEach(issue => {
        if (typeof issue === 'string' && issue.includes('Error checking page')) {
          console.log(`  ${colors.red}- ${issue}${colors.reset}`);
        } else {
          console.log(`  ${colors.red}- "${issue.text}" (${issue.element})${colors.reset}`);
          console.log(`    Text: ${issue.textColor}, Background: ${issue.backgroundColor}`);
          console.log(`    Contrast ratio: ${issue.contrastRatio} (required: ${issue.required})`);
        }
      });
      
      if (result.issues.length > 5) {
        console.log(`  ${colors.yellow}... and ${result.issues.length - 5} more issues${colors.reset}`);
      }
    }
    
    console.log('');
    
    totalElements += result.totalElements;
    totalIssues += result.issueCount;
  });
  
  // Summary
  console.log('========= SUMMARY =========');
  console.log(`Pages Passed: ${colors.green}${passCount}${colors.reset}`);
  console.log(`Pages Failed: ${colors.red}${failCount}${colors.reset}`);
  console.log(`Total Issues: ${colors.red}${totalIssues}${colors.reset}/${totalElements} elements`);
  console.log('===========================');
  
  // Save report
  const reportPath = path.join(REPORTS_DIR, 'color-contrast-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\nFull report saved to: ${reportPath}`);
  
  // Recommendations
  if (failCount > 0) {
    console.log('\nColor Contrast Recommendations:');
    console.log('1. Normal text (under 18pt/24px) should have a contrast ratio of at least 4.5:1');
    console.log('2. Large text (over 18pt/24px or 14pt/18.7px bold) should have a contrast ratio of at least 3:1');
    console.log('3. For WCAG AAA compliance, normal text should have a contrast ratio of 7:1');
    console.log('4. For WCAG AAA compliance, large text should have a contrast ratio of 4.5:1');
    console.log('\nHow to fix:');
    console.log('- Darken text colors or lighten background colors');
    console.log('- Ensure your design system includes accessible color combinations');
    console.log('- Use a color contrast checker during design: https://webaim.org/resources/contrastchecker/');
    console.log('- Update your CSS variables in the theme or tailwind config');
  }
}

/**
 * Main function
 */
async function main() {
  // Get base URL from command line args or use default
  const baseUrl = process.argv[2] || DEFAULT_SITE_URL;
  
  console.log(`${colors.cyan}Checking color contrast for ${baseUrl}${colors.reset}\n`);
  ensureReportsDir();
  
  // Launch browser
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: 'new'
  });
  
  try {
    const results = [];
    
    // Process each page to check
    for (const pagePath of PAGES_TO_CHECK) {
      const pageUrl = new URL(pagePath, baseUrl).toString();
      const result = await checkColorContrast(browser, pageUrl);
      results.push(result);
    }
    
    // Print results
    printResults(results);
  } finally {
    await browser.close();
  }
}

// Run the script
main().catch(error => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}); 