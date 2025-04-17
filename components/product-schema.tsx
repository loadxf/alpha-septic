import { JsonLd } from "@/components/json-ld"

interface ProductSchemaProps {
  name: string
  description: string
  image?: string
  sku?: string
  brand?: string
  offers?: {
    price: number
    priceCurrency?: string
    availability?: string
    url?: string
    validFrom?: string
    priceValidUntil?: string
  }
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
    bestRating?: number
  }
  reviews?: {
    author: string
    reviewRating: number
    reviewBody: string
    datePublished?: string
  }[]
}

export function ProductSchema({
  name,
  description,
  image,
  sku,
  brand = "Alpha Septic Services",
  offers,
  aggregateRating,
  reviews,
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    ...(image && { image }),
    ...(sku && { sku }),
    ...(brand && {
      brand: {
        "@type": "Brand",
        name: brand,
      },
    }),
    ...(offers && {
      offers: {
        "@type": "Offer",
        price: offers.price,
        priceCurrency: offers.priceCurrency || "USD",
        availability: offers.availability || "https://schema.org/InStock",
        url: offers.url || "https://CallAlphaSeptic.com",
        ...(offers.validFrom && { validFrom: offers.validFrom }),
        ...(offers.priceValidUntil && { priceValidUntil: offers.priceValidUntil }),
      },
    }),
    ...(aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
        bestRating: aggregateRating.bestRating || 5,
      },
    }),
    ...(reviews && {
      review: reviews.map((review) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.author,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.reviewRating,
          bestRating: 5,
        },
        reviewBody: review.reviewBody,
        datePublished: review.datePublished || new Date().toISOString().split("T")[0],
      })),
    }),
  }

  return <JsonLd data={schema} />
}
