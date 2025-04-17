import { JsonLd } from "./json-ld"
import { BUSINESS_INFO, SITE_URL } from "@/lib/config"

interface Review {
  author: string
  rating: number
  date: string
  text: string
}

interface ReviewSchemaProps {
  reviews: Review[]
  averageRating?: number
  reviewCount?: number
  itemReviewed?: {
    name?: string
    image?: string
    description?: string
  }
  pageUrl?: string
}

/**
 * Generates structured data for Reviews according to schema.org
 * Combines individual reviews with aggregate rating for better SEO
 */
export function ReviewSchema({
  reviews,
  averageRating,
  reviewCount,
  itemReviewed,
  pageUrl
}: ReviewSchemaProps) {
  // Calculate average rating if not provided
  const calculatedAvgRating = averageRating || 
    (reviews.length > 0 
      ? Math.round((reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length) * 10) / 10
      : 5)
  
  // Use actual count or number of reviews if not specified
  const calculatedReviewCount = reviewCount || reviews.length
  
  // Use provided URL or default reviews page
  const reviewPageUrl = pageUrl 
    ? `${SITE_URL}${pageUrl.startsWith('/') ? pageUrl : `/${pageUrl}`}`.toLowerCase() 
    : `${SITE_URL}/reviews`.toLowerCase()

  // Create schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${reviewPageUrl}#reviews`,
    name: itemReviewed?.name || BUSINESS_INFO.name,
    image: itemReviewed?.image || BUSINESS_INFO.logo,
    description: itemReviewed?.description || BUSINESS_INFO.description,
    url: SITE_URL,
    telephone: BUSINESS_INFO.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    // Add reviews
    review: reviews.map(review => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5
      },
      datePublished: review.date,
      reviewBody: review.text,
    })),
    // Add aggregate rating
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: calculatedAvgRating,
      reviewCount: calculatedReviewCount,
      bestRating: 5
    }
  }

  return <JsonLd data={schema} id="reviews-schema" />
}
