/**
 * API Middleware Functions
 * 
 * Provides middleware functions for API routes to handle common tasks like
 * validating CSRF tokens, rate limiting, etc.
 */

import { NextResponse } from "next/server";
import { validateCsrfToken } from "./csrf-protection";

/**
 * Middleware to validate CSRF tokens
 * 
 * @param request The incoming request
 * @returns NextResponse or null if validation passes
 */
export async function validateCsrf(request: Request): Promise<NextResponse | null> {
  // Skip validation for GET requests
  if (request.method === 'GET') {
    return null; // Allow GET requests without CSRF token
  }
  
  try {
    // Check for CSRF token in headers
    const headerToken = request.headers.get('X-CSRF-Token');
    
    // Also check for token in body for form submissions
    const body = await request.clone().json();
    const bodyToken = body._csrf;
    
    // Use header token, fall back to body token
    const token = headerToken || bodyToken;
    
    if (!token) {
      return NextResponse.json(
        { error: "CSRF token is missing" },
        { status: 403 }
      );
    }
    
    // Validate the token
    const isValid = validateCsrfToken(token);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid or expired CSRF token" },
        { status: 403 }
      );
    }
    
    // Token is valid
    return null;
  } catch (error) {
    console.error('CSRF validation error:', error);
    return NextResponse.json(
      { error: "Failed to process CSRF token" },
      { status: 500 }
    );
  }
}

/**
 * Basic rate limiting middleware
 * 
 * NOTE: This is a simple implementation. In production, use a proper
 * rate limiting solution with Redis or similar.
 * 
 * @param request The incoming request
 * @param limit Number of requests allowed in the window
 * @param windowMs Time window in milliseconds
 * @returns NextResponse or null if rate limit not exceeded
 */
export function rateLimit(
  request: Request, 
  limit = 5, 
  windowMs = 60000
): NextResponse | null {
  // This is a dummy implementation - in a real app this would use
  // Redis or a similar solution to properly track request counts
  
  // Get client IP
  const clientIp = request.headers.get('x-forwarded-for') || 'unknown';
  
  // In a real implementation, we would:
  // 1. Check a Redis store or similar for this IP's request count
  // 2. Increment the counter and set expiry
  // 3. If count > limit, return a 429 Too Many Requests response
  
  // In this example, we always allow the request through
  // Real implementation would check against a store and block if limit exceeded
  return null;
}

/**
 * Combined middleware to apply multiple checks
 */
export async function apiMiddleware(request: Request): Promise<NextResponse | null> {
  // Apply rate limiting first (because it's cheaper to compute)
  const rateLimitResult = rateLimit(request);
  if (rateLimitResult) {
    return rateLimitResult;
  }
  
  // Then apply CSRF validation for non-GET requests
  if (request.method !== 'GET') {
    const csrfResult = await validateCsrf(request);
    if (csrfResult) {
      return csrfResult;
    }
  }
  
  // All middleware passed
  return null;
} 