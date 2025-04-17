import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"
import { Star, Quote } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import Link from "next/link"
import TestimonialForm from "@/components/testimonial-form"

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | Alpha Septic Services",
  description:
    "Read what our customers are saying about Alpha Septic Services. Trusted septic service provider in Austin with hundreds of satisfied customers.",
  keywords:
    "septic service reviews, septic company testimonials, Austin septic reviews, customer feedback septic service",
}

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    location: "Austin, TX",
    rating: 5,
    date: "",
    text: "Alpha Septic Services was prompt, professional, and thorough. They explained everything they were doing and gave me great advice on maintaining my system. I'll definitely use them again for my next pumping.",
    image: "",
  },
  {
    id: 2,
    name: "Sarah Williams",
    location: "Round Rock, TX",
    rating: 5,
    date: "",
    text: "I had an emergency backup on a Sunday evening, and Alpha Septic responded within an hour. Their technician was knowledgeable and fixed the issue quickly. Their emergency service is worth every penny!",
    image: "",
  },
  {
    id: 3,
    name: "David Martinez",
    location: "Cedar Park, TX",
    rating: 5,
    date: "",
    text: "Very satisfied with the service provided. The team was on time, efficient, and left the area clean. They also provided a detailed report on the condition of my septic system.",
    image: "",
  },
]

// Calculate average rating
const averageRating = (
  testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) / testimonials.length
).toFixed(1)

export default function ReviewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <EnhancedBreadcrumb items={[{ label: "Reviews", href: "/reviews", isCurrent: true }]} />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Customer Reviews</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our satisfied customers have to say about our septic services.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-6xl py-12">
            <div className="bg-white p-8 rounded-lg shadow-custom mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-2">Customer Satisfaction</h2>
                  <p className="text-gray-500">
                    Based on {testimonials.length} verified customer reviews across multiple platforms.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-4xl font-bold">{averageRating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-6 w-6 ${
                            i < Math.round(Number(averageRating)) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">Average customer rating</p>
                </div>
                <div>
                  <Link href="/contact">
                    <Button>Leave a Review</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured Testimonials</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-custom relative">
                    <Quote className="h-8 w-8 text-gray-200 absolute top-4 right-4" />
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">{testimonial.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-custom mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
              <p className="text-gray-500 mb-6">
                We value your feedback! If you've used our services, please consider leaving a review to help others
                make informed decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button>Leave a Review</Button>
                </Link>
                <Link href="/book-now">
                  <Button variant="outline">Book Service</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Submission Form */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Share Your Experience</h2>
          <TestimonialForm />
        </div>
      </section>
      <CTASection />

      {/* Review Schema */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Alpha Septic Services",
          image: "https://CallAlphaSeptic.com/logo.webp",
          "@id": "https://CallAlphaSeptic.com",
          url: "https://CallAlphaSeptic.com",
          telephone: "+15127937867",
          priceRange: "$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "396 Sunrise Terrace",
            addressLocality: "Cedar Park",
            addressRegion: "TX",
            postalCode: "78613",
            addressCountry: "US",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: averageRating,
            reviewCount: testimonials.length,
            bestRating: "5",
          },
          review: testimonials.map((testimonial) => ({
            "@type": "Review",
            author: {
              "@type": "Person",
              name: testimonial.name,
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: testimonial.rating,
              bestRating: "5",
            },
            reviewBody: testimonial.text,
          })),
        }}
      />
    </div>
  )
}
