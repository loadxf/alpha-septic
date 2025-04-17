"use client"

import { useState, useEffect } from 'react';
import { generateCsrfToken } from '@/lib/csrf-protection';

interface CsrfTokenProps {
  // Optional session ID for additional security
  sessionId?: string;
}

/**
 * CsrfToken component
 * 
 * Renders a hidden input field with a CSRF token
 * for protecting forms against Cross-Site Request Forgery attacks.
 * 
 * Example usage:
 * ```
 * <form onSubmit={handleSubmit}>
 *   <CsrfToken />
 *   <!-- other form fields -->
 *   <button type="submit">Submit</button>
 * </form>
 * ```
 */
export function CsrfToken({ sessionId }: CsrfTokenProps) {
  const [token, setToken] = useState<string>('');
  
  // Generate token on component mount
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    // Generate a new token
    setToken(generateCsrfToken(sessionId));
  }, [sessionId]);
  
  // Only render once the token is generated
  if (!token) return null;
  
  return <input type="hidden" name="_csrf" value={token} />;
}

/**
 * Hook for getting a CSRF token inside a component
 */
export function useCsrfToken(sessionId?: string): string {
  const [token, setToken] = useState<string>('');
  
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    // Generate a new token
    setToken(generateCsrfToken(sessionId));
  }, [sessionId]);
  
  return token;
}

export default CsrfToken;