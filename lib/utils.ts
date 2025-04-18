import { clsx } from 'clsx'
import { twMerge } from "tailwind-merge"
import type { ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Helper function to generate canonical URLs for SEO
 * @param path - The path to append to the base URL
 * @returns Full canonical URL
 */
export function getCanonicalUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || '${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.callalphaseptic.com'}'
  // Ensure path starts with a slash and remove trailing slash
  const formattedPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${formattedPath}`
}

/**
 * Format a date string into a more readable format
 * @param dateString - The date string to format
 * @returns Formatted date string
 */
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      // If the date is already in a readable format, return it as is
      return dateString
    }
    
    // Format the date
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)
  } catch (error) {
    // If there's an error parsing the date, return the original string
    return dateString
  }
}
