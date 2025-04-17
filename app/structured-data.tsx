import type { Organization, WithContext, LocalBusiness, WebSite } from "schema-dts"
import { JsonLd } from "@/components/json-ld"
import { BUSINESS_INFO, SITE_URL } from "@/lib/config"

// Organization schema with updated content from config
export const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: BUSINESS_INFO.name,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: BUSINESS_INFO.logo,
    width: "280",
    height: "140",
  },
  description: BUSINESS_INFO.description,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: BUSINESS_INFO.telephone,
    contactType: "customer service",
    areaServed: "Austin, TX and surrounding areas",
    availableLanguage: "English",
  },
  sameAs: BUSINESS_INFO.sameAs,
}

// Website schema for better SEO
export const websiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: BUSINESS_INFO.name,
  url: SITE_URL,
  description: BUSINESS_INFO.description,
  publisher: {
    "@id": `${SITE_URL}/#organization`
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  },
}

// LocalBusiness schema with standardized entity references
export const localBusinessSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: BUSINESS_INFO.name,
  image: BUSINESS_INFO.logo,
  logo: BUSINESS_INFO.logo,
  url: SITE_URL,
  telephone: BUSINESS_INFO.telephone,
  description: BUSINESS_INFO.description,
  priceRange: BUSINESS_INFO.priceRange,
  openingHoursSpecification: BUSINESS_INFO.openingHours.map(hours => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: hours.days,
    opens: hours.opens,
    closes: hours.closes,
  })),
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS_INFO.address.streetAddress,
    addressLocality: BUSINESS_INFO.address.addressLocality,
    addressRegion: BUSINESS_INFO.address.addressRegion,
    postalCode: BUSINESS_INFO.address.postalCode,
    addressCountry: BUSINESS_INFO.address.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS_INFO.geo.latitude,
    longitude: BUSINESS_INFO.geo.longitude,
  },
  sameAs: BUSINESS_INFO.sameAs,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Septic Services",
    itemListElement: BUSINESS_INFO.services.map(service => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: service.url,
        provider: {
          "@id": `${SITE_URL}/#organization`
        }
      },
    })),
  },
  areaServed: BUSINESS_INFO.areaServed.map(area => ({
    "@type": "City",
    name: area,
  })),
  hasMap: BUSINESS_INFO.hasMap,
  keywords: BUSINESS_INFO.keywords,
}

// Main component to include all structured data
export function StructuredData() {
  return (
    <>
      <JsonLd data={organizationSchema} id="organization-schema" />
      <JsonLd data={websiteSchema} id="website-schema" />
      <JsonLd data={localBusinessSchema} id="localbusiness-schema" />
    </>
  )
}

// Helper functions for generating structured data - updated with lowercase URLs
export function generateBreadcrumbSchema(breadcrumbs: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.item.toLowerCase(),
    })),
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateServiceSchema(
  name: string,
  description: string,
  url: string,
  image?: string,
  provider = "Alpha Septic Services",
  areaServed?: string[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: provider,
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}`,
      telephone: "+15127937867"
    },
    url,
    image: image || undefined,
    areaServed: areaServed
      ? areaServed.map((area) => ({
          "@type": "City",
          name: area,
        }))
      : undefined,
  }
}

export function generateArticleSchema(
  headline: string,
  description: string,
  url: string,
  image?: string,
  datePublished?: string,
  dateModified?: string,
  authorName = "Alpha Septic Services",
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: image || undefined,
    datePublished: datePublished || new Date().toISOString().split("T")[0],
    dateModified: dateModified || new Date().toISOString().split("T")[0],
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Alpha Septic Services",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/logo.webp`,
        width: "280",
        height: "140",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }
}

export function generateReviewSchema(
  itemReviewed: string,
  reviewRating: number,
  author: string,
  reviewBody: string,
  datePublished?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LocalBusiness",
      name: itemReviewed,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: reviewRating,
      bestRating: 5,
    },
    author: {
      "@type": "Person",
      name: author,
    },
    reviewBody,
    datePublished: datePublished || new Date().toISOString().split("T")[0],
  }
}

export function generateAggregateRatingSchema(
  itemReviewed: string,
  ratingValue: number,
  reviewCount: number,
  bestRating = 5,
) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "LocalBusiness",
      name: itemReviewed,
    },
    ratingValue,
    reviewCount,
    bestRating,
  }
}

export function generateHowToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string; image?: string }[],
  totalTime?: string,
  estimatedCost?: { currency: string; value: string },
  image?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    image: image || undefined,
    totalTime: totalTime || undefined,
    estimatedCost: estimatedCost
      ? {
          "@type": "MonetaryAmount",
          currency: estimatedCost.currency,
          value: estimatedCost.value,
        }
      : undefined,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image || undefined,
    })),
  }
}

export function generateVideoSchema(
  name: string,
  description: string,
  thumbnailUrl: string,
  uploadDate: string,
  contentUrl: string,
  embedUrl?: string,
  duration?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    uploadDate,
    contentUrl,
    embedUrl: embedUrl || undefined,
    duration: duration || undefined,
  }
}

export function generateImageSchema(
  name: string, 
  contentUrl: string, 
  description?: string, 
  caption?: string,
  geoLocation?: {
    latitude: number;
    longitude: number;
  }
) {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name,
    contentUrl,
    description: description || undefined,
    caption: caption || undefined,
  };
  
  if (geoLocation) {
    schema.contentLocation = {
      "@type": "Place",
      geo: {
        "@type": "GeoCoordinates",
        latitude: geoLocation.latitude,
        longitude: geoLocation.longitude,
      }
    };
  }
  
  return schema;
}
