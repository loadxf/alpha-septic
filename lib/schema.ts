/**
 * Type definitions for structured data (JSON-LD)
 */

export interface ArticleJsonLd {
  "@type": "NewsArticle" | "BlogPosting" | "Article"
  headline: string
  description?: string
  image?: string
  datePublished: string
  dateModified?: string
  author: {
    "@type": "Person" | "Organization"
    name: string
    url?: string
  }
  publisher?: {
    "@type": "Organization"
    name: string
    logo?: {
      "@type": "ImageObject"
      url: string
    }
  }
  mainEntityOfPage?: {
    "@type": "WebPage"
    "@id": string
  }
  articleSection?: string
  keywords?: string[]
} 