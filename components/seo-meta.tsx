"use client"

import { BUSINESS_INFO, SITE_URL } from "@/lib/config"
import type { Metadata } from "next"

export interface SEOMetaProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: "website" | "article" | "profile" | "book" | "product"
  twitterCard?: "summary" | "summary_large_image" | "app" | "player"
  canonicalUrl?: string
  noIndex?: boolean
}

/**
 * Helper function to generate metadata for use in Next.js pages
 * Using the Metadata API for better SEO support
 */
export function generateMetadata({
  title,
  description,
  keywords,
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
  canonicalUrl,
  noIndex = false,
}: SEOMetaProps): Metadata {
  const metaTitle = title
    ? `${title} | ${BUSINESS_INFO.name}`
    : `${BUSINESS_INFO.name} | Austin's Premier Septic Service`
  
  const metaDescription = description || BUSINESS_INFO.description
  const metaKeywords = keywords || BUSINESS_INFO.keywords
  const metaImage = ogImage ? `${SITE_URL}${ogImage}` : `${SITE_URL}/og-image.jpg`
  const formattedCanonicalUrl = canonicalUrl || undefined

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords.split(", "),
    alternates: {
      canonical: formattedCanonicalUrl,
    },
    openGraph: {
      type: ogType,
      title: metaTitle,
      description: metaDescription,
      images: [{ 
        url: metaImage, 
        alt: BUSINESS_INFO.name,
        width: 1200,
        height: 630
      }],
      siteName: BUSINESS_INFO.name,
      url: formattedCanonicalUrl,
      locale: "en_US",
    },
    twitter: {
      card: twitterCard,
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: "@alphaseptic",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
    verification: {
      google: "google-site-verification-code", // Replace with actual code
    },
    metadataBase: new URL(SITE_URL),
  }
}

/**
 * SEO Meta component for use in client components
 * This is a workaround for pages that import this component directly
 */
export function SeoMeta(props: SEOMetaProps) {
  // This is a client component that doesn't render anything
  // It's just for compatibility with code that imports SeoMeta
  return null;
}
