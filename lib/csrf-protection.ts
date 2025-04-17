/**
 * CSRF Protection Utilities
 *
 * This module provides utilities for generating and validating CSRF tokens
 * to protect forms against Cross-Site Request Forgery attacks.
 */

import crypto from 'crypto';

// Token expiration time (in milliseconds)
const TOKEN_EXPIRY_MS = 3600000; // 1 hour

// HMAC secret key for token signing
const CSRF_SECRET = process.env.TOKEN_SECRET || 'alpha-septic-default-csrf-secret';

/**
 * Generate a CSRF token for form protection
 * @param sessionId Optional session identifier for extra security
 */
export function generateCsrfToken(sessionId?: string): string {
  try {
    // Generate a random token
    const random = crypto.randomBytes(16).toString('hex');
    
    // Current timestamp for expiration checking
    const timestamp = Date.now();
    
    // Data to sign
    const data = `${random}|${timestamp}${sessionId ? '|' + sessionId : ''}`;
    
    // Create HMAC signature
    const hmac = crypto.createHmac('sha256', CSRF_SECRET);
    hmac.update(data);
    const signature = hmac.digest('hex');
    
    // Return encoded token
    return Buffer.from(`${data}|${signature}`).toString('base64');
  } catch (error) {
    console.error('Error generating CSRF token:', error);
    // Fallback to a simpler token if crypto fails
    return Buffer.from(`csrf-${Date.now()}-${Math.random()}`).toString('base64');
  }
}

/**
 * Validate a CSRF token
 * @param token The CSRF token to validate
 * @param sessionId Optional session identifier to check against
 */
export function validateCsrfToken(token: string, sessionId?: string): boolean {
  try {
    // Decode the token
    const decoded = Buffer.from(token, 'base64').toString();
    
    // Split the parts
    const parts = decoded.split('|');
    
    // Basic format check
    if (parts.length < 3) {
      return false;
    }
    
    // Extract parts
    const [random, timestampStr, ...rest] = parts;
    const providedSessionId = rest.length > 1 ? rest[0] : undefined;
    const providedSignature = rest[rest.length - 1];
    
    // Check if session ID matches if provided
    if (sessionId && providedSessionId && sessionId !== providedSessionId) {
      return false;
    }
    
    // Check token expiration
    const timestamp = parseInt(timestampStr, 10);
    if (isNaN(timestamp) || Date.now() - timestamp > TOKEN_EXPIRY_MS) {
      return false;
    }
    
    // Rebuild the data string for verification
    const dataToVerify = providedSessionId 
      ? `${random}|${timestampStr}|${providedSessionId}`
      : `${random}|${timestampStr}`;
    
    // Create HMAC signature
    const hmac = crypto.createHmac('sha256', CSRF_SECRET);
    hmac.update(dataToVerify);
    const calculatedSignature = hmac.digest('hex');
    
    // Verify signature
    return calculatedSignature === providedSignature;
  } catch (error) {
    console.error('Error validating CSRF token:', error);
    return false;
  }
}

/**
 * Create hidden input field HTML for a CSRF token
 */
export function csrfTokenField(sessionId?: string): string {
  const token = generateCsrfToken(sessionId);
  return `<input type="hidden" name="_csrf" value="${token}" />`;
} 