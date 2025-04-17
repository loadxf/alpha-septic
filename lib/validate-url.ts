/**
 * URL Validation Utility
 * 
 * Validates that a URL string includes the protocol (http:// or https://)
 */

export function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (error) {
    console.error(`Invalid URL format: ${url}`);
    console.error('URLs must include protocol (http:// or https://)');
    return false;
  }
} 