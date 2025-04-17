// Removed unused import from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { JsonLd } from "./json-ld"
import { BUSINESS_INFO, SITE_URL } from "@/lib/config"

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  date: string
  text: string
  image?: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  showTitle?: boolean
  titleText?: string
  descriptionText?: string
}

export function Testimonials({
  testimonials,
  showTitle = true,
  titleText = "What Our Customers Say",
  descriptionText = "Don't just take our word for it. Here's what our satisfied customers have to say about our services.",
}: TestimonialsProps) {
  // Calculate average rating for aggregate rating schema
  const averageRating = testimonials.reduce((sum, item) => sum + item.rating, 0) / testimonials.length
  const formattedAverageRating = Math.round(averageRating * 10) / 10 // Round to 1 decimal place

  // Generate unified schema.org data with reviews and aggregate rating
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#testimonials`,
    name: BUSINESS_INFO.name,
    image: BUSINESS_INFO.logo,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    telephone: BUSINESS_INFO.telephone,
    priceRange: BUSINESS_INFO.priceRange,
    // Add reviews
    review: testimonials.map(testimonial => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating,
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: testimonial.name,
      },
      datePublished: testimonial.date,
      reviewBody: testimonial.text,
    })),
    // Add aggregate rating
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: formattedAverageRating,
      reviewCount: testimonials.length,
      bestRating: "5",
    }
  }

  return (
    <section aria-labelledby="testimonials-heading">
      <JsonLd data={schemaData} id="testimonials-schema" />
      <div className="space-y-8">
        {showTitle && (
          <div className="text-center">
            <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {titleText}
            </h2>
            <p className="mt-4 text-gray-500">{descriptionText}</p>
          </div>
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-custom"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12  w-12 rounded-full overflow-hidden bg-gray-200">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`Photo of ${testimonial.name}`}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-brand-blue text-white text-lg font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">{testimonial.name}</span>
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-2" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                <meta itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" />
                <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                <meta itemProp="bestRating" content="5" />
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-gray-600" itemProp="reviewBody">
                {testimonial.text}
              </p>
              <meta itemProp="datePublished" content={testimonial.date} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
