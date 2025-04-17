/**
 * Safe localStorage wrapper with error handling
 * Handles browser environments where localStorage might be:
 * - Not available (SSR)
 * - Blocked by privacy settings
 * - Disabled in private browsing mode
 */

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined'

/**
 * Get an item from localStorage with error handling
 * @param key The key to retrieve
 * @param defaultValue Optional default value if item doesn't exist or localStorage is unavailable
 */
export function getStorageItem<T>(key: string, defaultValue?: T): T | undefined {
  if (!isBrowser) return defaultValue
  
  try {
    const item = localStorage.getItem(key)
    if (item === null) return defaultValue
    
    try {
      // Try to parse as JSON
      return JSON.parse(item) as T
    } catch (e) {
      // Not JSON, return as is
      return item as unknown as T
    }
  } catch (error) {
    console.warn(`Error accessing localStorage for key "${key}":`, error)
    return defaultValue
  }
}

/**
 * Store an item in localStorage with error handling
 * @param key The key to store under
 * @param value The value to store (objects will be JSON stringified)
 * @returns true if successful, false otherwise
 */
export function setStorageItem<T>(key: string, value: T): boolean {
  if (!isBrowser) return false
  
  try {
    const valueToStore = 
      typeof value === 'object' ? JSON.stringify(value) : String(value)
    localStorage.setItem(key, valueToStore)
    return true
  } catch (error) {
    console.warn(`Error storing in localStorage for key "${key}":`, error)
    return false
  }
}

/**
 * Remove an item from localStorage with error handling
 * @param key The key to remove
 * @returns true if successful, false otherwise
 */
export function removeStorageItem(key: string): boolean {
  if (!isBrowser) return false
  
  try {
    localStorage.removeItem(key)
    return true
  } catch (error) {
    console.warn(`Error removing from localStorage for key "${key}":`, error)
    return false
  }
}

/**
 * Check if localStorage is available
 * @returns true if available, false otherwise
 */
export function isStorageAvailable(): boolean {
  if (!isBrowser) return false
  
  try {
    const testKey = '__storage_test__'
    localStorage.setItem(testKey, '1')
    localStorage.removeItem(testKey)
    return true
  } catch (error) {
    return false
  }
} 