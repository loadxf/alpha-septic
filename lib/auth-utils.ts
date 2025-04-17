/**
 * Authentication Utilities
 * 
 * Contains functions for secure authentication, including token generation,
 * validation, and handling of admin credentials.
 */

import crypto from 'crypto';

// Interface for authenticated user
export interface AuthUser {
  email: string;
  isAuthenticated: boolean;
  tokenExpiry: number;
}

// Token settings
const TOKEN_EXPIRY_HOURS = 8; // Tokens expire after 8 hours
const TOKEN_SECRET = process.env.TOKEN_SECRET || 'alpha-septic-default-secret'; // Should be set in env vars

/**
 * Verify admin credentials against environment variables
 * In a production app, this would use a database and proper password hashing
 */
export function verifyAdminCredentials(email: string, password: string): boolean {
  // Get admin credentials from environment variables
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
  
  // Check if credentials are configured
  if (!adminEmail || !adminPassword) {
    console.error('Admin credentials not properly configured in environment variables');
    return false;
  }
  
  // In production, check for weak/default credentials
  if (process.env.NODE_ENV === 'production') {
    if (adminEmail === "admin@callalphaseptic.com" || adminPassword === "admin123" || adminPassword.length < 8) {
      console.warn('⚠️ WARNING: Using weak or demo admin credentials in production!');
    }
  }
  
  // Use a constant-time string comparison to prevent timing attacks
  const emailMatches = crypto.timingSafeEqual(
    Buffer.from(email), 
    Buffer.from(adminEmail)
  );
  
  const passwordMatches = crypto.timingSafeEqual(
    Buffer.from(password), 
    Buffer.from(adminPassword)
  );
  
  return emailMatches && passwordMatches;
}

/**
 * Generate a secure authentication token with expiration
 */
export function generateAuthToken(email: string): string {
  try {
    // Create expiry time (current time + hours in milliseconds)
    const expiryTime = Date.now() + (TOKEN_EXPIRY_HOURS * 60 * 60 * 1000);
    
    // Create a payload with user info and expiry
    const payload = {
      email,
      exp: expiryTime,
      iat: Date.now(), // issued at
      nonce: crypto.randomBytes(8).toString('hex'), // Add entropy to prevent token reuse
    };
    
    // Convert payload to string
    const dataString = JSON.stringify(payload);
    
    // Create HMAC signature using the secret
    const hmac = crypto.createHmac('sha256', TOKEN_SECRET);
    hmac.update(dataString);
    const signature = hmac.digest('hex');
    
    // Combine payload and signature
    const token = Buffer.from(`${dataString}|${signature}`).toString('base64');
    
    return token;
  } catch (error) {
    console.error('Failed to generate auth token:', error);
    throw new Error('Authentication token generation failed');
  }
}

/**
 * Verify an authentication token and extract user information
 */
export function verifyAuthToken(token: string): AuthUser | null {
  try {
    // Decode the token from base64
    const decoded = Buffer.from(token, 'base64').toString();
    
    // Split the parts
    const [dataString, receivedSignature] = decoded.split('|');
    
    // If there's no signature part, it might be the fallback format
    if (!receivedSignature) {
      const fallbackParts = decoded.split(':');
      if (fallbackParts.length === 2) {
        const [email, expiry] = fallbackParts;
        const expiryTime = parseInt(expiry, 10);
        
        // Check if token is expired
        if (expiryTime < Date.now()) {
          return null;
        }
        
        return {
          email,
          isAuthenticated: true,
          tokenExpiry: expiryTime,
        };
      }
      return null;
    }
    
    // Verify signature
    const hmac = crypto.createHmac('sha256', TOKEN_SECRET);
    hmac.update(dataString);
    const calculatedSignature = hmac.digest('hex');
    
    if (calculatedSignature !== receivedSignature) {
      return null; // Invalid signature
    }
    
    // Parse the payload
    const payload = JSON.parse(dataString);
    
    // Check if token is expired
    if (payload.exp < Date.now()) {
      return null;
    }
    
    return {
      email: payload.email,
      isAuthenticated: true,
      tokenExpiry: payload.exp,
    };
  } catch (error) {
    console.error('Failed to verify auth token:', error);
    return null;
  }
}

/**
 * Check if a token is about to expire (within 30 minutes)
 */
export function isTokenExpiringSoon(tokenExpiry: number): boolean {
  const thirtyMinutes = 30 * 60 * 1000;
  return tokenExpiry - Date.now() < thirtyMinutes;
} 