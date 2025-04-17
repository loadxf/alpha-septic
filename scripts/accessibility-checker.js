/**
 * Accessibility Checker for Alpha Septic website
 * 
 * This script performs accessibility checks using Puppeteer and axe-core
 * It tests key pages for:
 * - ARIA label validation
 * - Color contrast issues
 * - Keyboard navigation problems
 * - Missing alt text
 * - And other common accessibility issues
 * 
 * Usage: node scripts/accessibility-checker.js
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const chalk = require('chalk');

// Configuration
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const REPORT_PATH = path.join(__dirname, '../reports/accessibility-report.md');
const PAGES_TO_TEST = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/book-now',
  '/service-areas',
  '/service-areas/austin',
  '/services/residential',
  '/admin'
];
const VIEWPORT = { width: 1280, height: 800 };
const TIMEOUT = 30000; // 30 seconds

// Parse command line arguments
const args = process.argv.slice(2);
const verbose = args.includes('--verbose');

// Results object
const results = {
  pagesScanned: 0,
  pagesWithIssues: 0,
  totalIssues: 0,
  totalCritical: 0,
  totalSerious: 0,
  totalModerate: 0,
  totalMinor: 0,
  issues: {}
};

// Console colors
const colors = {
  success: chalk.green,
  error: chalk.red,
  warning: chalk.yellow,
  info: chalk.blue,
  header: chalk.cyan.bold,
  subheader: chalk.magenta,
  url: chalk.underline.blue,
  critical: chalk.bgRed.white,
  serious: chalk.red,
  moderate: chalk.yellow,
  minor: chalk.gray
};

// Get severity color
function getSeverityColor(severity) {
  switch (severity) {
    case 'critical': return colors.critical;
    case 'serious': return colors.serious;
    case 'moderate': return colors.moderate;
    case 'minor': return colors.minor;
    default: return chalk.white;
  }
}

// Get text summary for element
function getElementSummary(node) {
  if (!node) return 'Element not found';
  
  // Get basic element info
  const tag = node.nodeName.toLowerCase();
  const id = node.id ? `#${node.id}` : '';
  const classes = node.className ? `.${node.className.replace(/\s+/g, '.')}` : '';
  
  // Get text content (truncated)
  let text = '';
  if (node.textContent) {
    text = node.textContent.trim().replace(/\s+/g, ' ').slice(0, 50);
    if (text.length === 50) text += '...';
    if (text) text = `: "${text}"`;
  }
  
  // Special handling for images
  if (tag === 'img') {
    const alt = node.alt ? ` alt="${node.alt}"` : ' alt=""';
    const src = node.src ? ` src="${node.src.split('/').pop()}"` : '';
    return `<${tag}${id}${classes}${alt}${src}>`;
  }
  
  return `<${tag}${id}${classes}${text}>`;
}

// Check if reports directory exists, create if not
function ensureReportDirExists() {
  const reportsDir = path.dirname(REPORT_PATH);
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }
}

// Test a single page for accessibility
async function testPage(browser, url) {
  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;
  const page = await browser.newPage();
  
  try {
    console.log(colors.info(`Testing ${url}...`));
    
    // Set viewport
    await page.setViewport(VIEWPORT);
    
    // Navigate to page
    await page.goto(fullUrl, { 
      waitUntil: 'networkidle2', 
      timeout: TIMEOUT 
    });
    
    // Wait for some common elements to ensure page is loaded
    try {
      await page.waitForSelector('main', { timeout: 5000 });
    } catch (e) {
      // Continue even if main element not found
    }
    
    // Run axe accessibility tests
    const results = await new AxePuppeteer(page).analyze();
    
    // Track results
    const pageResults = {
      url,
      violations: results.violations,
      incomplete: results.incomplete,
      passes: results.passes.length,
      inapplicable: results.inapplicable.length
    };
    
    // Print summary for this page
    const issueCount = results.violations.length;
    
    if (issueCount === 0) {
      console.log(colors.success(`✓ No accessibility issues found on ${url}`));
    } else {
      console.log(colors.warning(`✗ Found ${issueCount} accessibility issues on ${url}`));
      
      if (verbose) {
        // Log detailed issues in verbose mode
        results.violations.forEach(violation => {
          console.log(
            getSeverityColor(violation.impact)(`  - [${violation.impact.toUpperCase()}] ${violation.help}: ${violation.nodes.length} occurrences`)
          );
        });
      }
      
      results.pagesWithIssues++;
    }
    
    // Store results
    results.issues[url] = pageResults;
    results.totalIssues += issueCount;
    
    // Count by severity
    results.violations.forEach(violation => {
      switch (violation.impact) {
        case 'critical': results.totalCritical += violation.nodes.length; break;
        case 'serious': results.totalSerious += violation.nodes.length; break;
        case 'moderate': results.totalModerate += violation.nodes.length; break;
        case 'minor': results.totalMinor += violation.nodes.length; break;
      }
    });
    
    results.pagesScanned++;
    return pageResults;
  } catch (error) {
    console.error(colors.error(`Error testing ${url}:`), error.message);
    return {
      url,
      error: error.message,
      violations: [],
      incomplete: [],
      passes: 0,
      inapplicable: 0
    };
  } finally {
    await page.close();
  }
}

// Create markdown report
function generateReport(results) {
  ensureReportDirExists();
  
  let report = '# Accessibility Audit Report\n\n';
  report += `Generated on: ${new Date().toLocaleString()}\n\n`;
  
  // Summary section
  report += '## Summary\n\n';
  report += '| Metric | Count |\n';
  report += '| ------ | ----- |\n';
  report += `| Pages scanned | ${results.pagesScanned} |\n`;
  report += `| Pages with issues | ${results.pagesWithIssues} |\n`;
  report += `| Total issues | ${results.totalIssues} |\n\n`;
  
  // Issues by severity
  report += '### Issues by Severity\n\n';
  report += '| Severity | Issues |\n';
  report += '| -------- | ------ |\n';
  report += `| Critical | ${results.totalCritical} |\n`;
  report += `| Serious | ${results.totalSerious} |\n`;
  report += `| Moderate | ${results.totalModerate} |\n`;
  report += `| Minor | ${results.totalMinor} |\n\n`;
  
  // Detailed results for each page
  report += '## Page Results\n\n';
  
  for (const [url, pageResult] of Object.entries(results.issues)) {
    report += `### ${url}\n\n`;
    
    if (pageResult.error) {
      report += `**Error:** ${pageResult.error}\n\n`;
      continue;
    }
    
    // Summary for this page
    report += '#### Summary\n\n';
    report += '| Type | Count |\n';
    report += '| ---- | ----- |\n';
    report += `| Violations | ${pageResult.violations.length} |\n`;
    report += `| Incomplete | ${pageResult.incomplete.length} |\n`;
    report += `| Passes | ${pageResult.passes} |\n`;
    report += `| Inapplicable | ${pageResult.inapplicable} |\n\n`;
    
    // Violations
    if (pageResult.violations.length > 0) {
      report += '#### Violations\n\n';
      
      pageResult.violations.forEach(violation => {
        // Sanitize description (remove HTML, URLs)
        const description = violation.description
          .replace(/<[^>]*>/g, '')
          .replace(/https?:\/\/[^\s]+/g, '[link]');
          
        report += `##### ${violation.help}\n\n`;
        report += `**Impact:** ${violation.impact.toUpperCase()}  \n`;
        report += `**Description:** ${description}  \n`;
        report += `**WCAG:** ${violation.tags.filter(tag => tag.startsWith('wcag')).join(', ')}  \n\n`;
        
        if (violation.nodes.length > 0) {
          report += '**Affected elements:**\n\n';
          
          violation.nodes.forEach((node, index) => {
            // Format HTML for markdown
            const html = node.html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            
            report += `${index + 1}. \`${html}\`\n`;
            
            if (node.failureSummary) {
              const summary = node.failureSummary
                .replace(/^Fix/, '- Fix')
                .replace(/\n/g, '\n  ');
              report += `   ${summary}\n`;
            }
            
            report += '\n';
          });
        }
      });
    }
    
    // Incomplete tests
    if (pageResult.incomplete.length > 0) {
      report += '#### Needs Review\n\n';
      
      pageResult.incomplete.forEach(incomplete => {
        report += `##### ${incomplete.help}\n\n`;
        report += `**Description:** ${incomplete.description}  \n`;
        report += `**WCAG:** ${incomplete.tags.filter(tag => tag.startsWith('wcag')).join(', ')}  \n\n`;
        
        if (incomplete.nodes.length > 0) {
          report += '**Elements to review:**\n\n';
          
          incomplete.nodes.forEach((node, index) => {
            // Format HTML for markdown
            const html = node.html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            report += `${index + 1}. \`${html}\`\n\n`;
          });
        }
      });
    }
  }
  
  // Add recommendations
  report += '## Recommendations\n\n';
  
  if (results.totalIssues === 0) {
    report += '✅ No accessibility issues found! Great job!\n\n';
  } else {
    report += '### General Recommendations\n\n';
    report += '1. **Focus on Critical and Serious issues first**\n';
    report += '   - These impact the largest number of users and typically violate legal requirements\n\n';
    
    report += '2. **Common Fixes**\n';
    report += '   - Add appropriate alt text to all images\n';
    report += '   - Ensure sufficient color contrast for text\n';
    report += '   - Add proper ARIA labels to interactive elements\n';
    report += '   - Ensure keyboard navigation works for all interactive components\n';
    report += '   - Use proper heading structure (H1, H2, etc.)\n\n';
    
    report += '3. **Testing Process**\n';
    report += '   - Incorporate accessibility testing into your development workflow\n';
    report += '   - Test with screen readers\n';
    report += '   - Validate with keyboard-only navigation\n\n';
    
    report += '### Resources\n\n';
    report += '- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)\n';
    report += '- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)\n';
    report += '- [axe DevTools Browser Extension](https://www.deque.com/axe/browser-extensions/)\n';
  }
  
  // Save report to file
  fs.writeFileSync(REPORT_PATH, report, 'utf8');
  console.log(colors.info(`Report saved to: ${REPORT_PATH}`));
}

// Main function
async function main() {
  console.log(colors.header('Starting Accessibility Check'));
  console.log(colors.info(`Base URL: ${BASE_URL}`));
  console.log(colors.info(`Testing ${PAGES_TO_TEST.length} pages`));
  
  // Check if axe-core and puppeteer are installed
  try {
    require.resolve('puppeteer');
    require.resolve('@axe-core/puppeteer');
  } catch (e) {
    console.error(colors.error('Required packages not found. Please install:'));
    console.error(colors.info('npm install puppeteer @axe-core/puppeteer chalk'));
    process.exit(1);
  }
  
  // Launch browser
  const browser = await puppeteer.launch({
    headless: true, 
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    // Test each page
    for (const page of PAGES_TO_TEST) {
      await testPage(browser, page);
    }
    
    // Generate report
    console.log(colors.header('\nGenerating accessibility report...'));
    generateReport(results);
    
    // Print summary
    console.log('\n' + colors.header('ACCESSIBILITY CHECK SUMMARY'));
    console.log(colors.header('============================'));
    console.log(`Pages scanned: ${results.pagesScanned}`);
    console.log(`Pages with issues: ${results.pagesWithIssues}`);
    console.log(`Total issues: ${results.totalIssues}`);
    
    if (results.totalIssues > 0) {
      console.log('\n' + colors.subheader('Issues by severity:'));
      console.log(colors.critical(`Critical: ${results.totalCritical}`));
      console.log(colors.serious(`Serious: ${results.totalSerious}`));
      console.log(colors.moderate(`Moderate: ${results.totalModerate}`));
      console.log(colors.minor(`Minor: ${results.totalMinor}`));
      
      console.log('\n' + colors.warning('Accessibility issues found that should be fixed before going to production.'));
    } else {
      console.log('\n' + colors.success('No accessibility issues found. Great job!'));
    }
    
    console.log(colors.info(`Detailed report saved to: ${REPORT_PATH}`));
    
  } finally {
    await browser.close();
  }
}

// Run script
main().catch(error => {
  console.error(colors.error('Fatal error:'), error);
  process.exit(1);
}); 