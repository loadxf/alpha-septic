import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"
// Removed unused import from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import { CanonicalURL } from "@/components/canonical-url"
import { MetaDescription } from "@/components/meta-description"

export const metadata: Metadata = {
  title: "Service Areas | Alpha Septic Services",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || '${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.callalphaseptic.com'}'}/service-areas`,
  },
  description:
    "Alpha Septic Services provides professional septic solutions throughout Austin and surrounding Central Texas communities.",
  keywords:
    "Austin septic service areas, septic service locations, septic pumping Austin, septic service Round Rock, septic service Cedar Park, Kingsland septic services, Georgetown septic tank pumping, Leander septic maintenance, Kyle septic cleaning, Buda septic inspection, Pflugerville septic repair",
}

export default function ServiceAreas() {
  const serviceAreas = [
    {
      name: "Austin",
      url: "/service-areas/austin",
      description: "Comprehensive septic services for Austin residents and businesses.",
    },
    {
      name: "Round Rock",
      url: "/service-areas/round-rock",
      description: "Reliable septic tank pumping and maintenance in Round Rock.",
    },
    {
      name: "Cedar Park",
      url: "/service-areas/cedar-park",
      description: "Professional septic solutions for Cedar Park properties.",
    },
    {
      name: "Leander",
      url: "/service-areas/leander",
      description: "Expert septic services for Leander homes and businesses.",
    },
    {
      name: "Georgetown",
      url: "/service-areas/georgetown",
      description: "Trusted septic tank pumping and maintenance in Georgetown.",
    },
    {
      name: "Pflugerville",
      url: "/service-areas/pflugerville",
      description: "Complete septic system services for Pflugerville properties.",
    },
    {
      name: "Manor",
      url: "/service-areas/manor",
      description: "Professional septic tank services for Manor residential and commercial properties.",
    },
    {
      name: "Buda",
      url: "/service-areas/buda",
      description: "Professional septic services for Buda residents and businesses.",
    },
    {
      name: "Kyle",
      url: "/service-areas/kyle",
      description: "Reliable septic solutions for Kyle properties.",
    },
    {
      name: "Dripping Springs",
      url: "/service-areas/dripping-springs",
      description: "Expert septic tank services for Dripping Springs homes and businesses.",
    },
    {
      name: "Kingsland",
      url: "/service-areas/kingsland",
      description: "Professional septic services for Kingsland homes and lakefront properties.",
    },
    {
      name: "Liberty Hill",
      url: "/service-areas/liberty-hill",
      description: "Quality septic system services for Liberty Hill residential and commercial properties.",
    },
    {
      name: "Bulverde",
      url: "/service-areas/bulverde",
      description: "Comprehensive septic maintenance and repairs for Bulverde homes and businesses.",
    },
    {
      name: "Jarrell",
      url: "/service-areas/jarrell",
      description: "Professional septic tank pumping and services for Jarrell properties.",
    },
    {
      name: "Taylor",
      url: "/service-areas/taylor",
      description: "Reliable septic system solutions for Taylor residential and commercial customers.",
    },
    {
      name: "Elgin",
      url: "/service-areas/elgin",
      description: "Expert septic tank services and maintenance for Elgin property owners.",
    },
  ]

  // Create breadcrumb items structure for schema
  const breadcrumbItems = [
    { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || '${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.callalphaseptic.com'}'}/` },
    { name: "Service Areas", item: `${process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || '${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.callalphaseptic.com'}'}/service-areas` },
  ]

  // Create location schema for each service area
  const locationSchema = serviceAreas.map((area) => ({
    "@context": "https://schema.org",
    "@type": "Place",
    name: `Alpha Septic Services - ${area.name}`,
    description: area.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: "TX",
      addressCountry: "US",
    },
    url: `${process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || '${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.callalphaseptic.com'}'}${area.url}`,
    hasMap: `https://www.google.com/maps/place/${encodeURIComponent(area.name)},+TX`,
  }))

  // Create review schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Alpha Septic Services",
    address: {
      "@type": "PostalAddress",
      streetAddress: "396 Sunrise Terrace",
      addressLocality: "Cedar Park",
      addressRegion: "TX",
      postalCode: "78613",
      addressCountry: "US",
    },
    telephone: "+15127937867",
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "John D."
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        datePublished: "2023-06-15",
        reviewBody: "Alpha Septic provided excellent service for our home in Austin. They were prompt, professional and thorough."
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sarah T."
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        datePublished: "2023-07-22",
        reviewBody: "I was impressed with their knowledge and service. They fixed our septic issues in Kingsland quickly and at a reasonable price."
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Mike R."
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        datePublished: "2023-08-10",
        reviewBody: "Very responsive and professional septic service in Round Rock. Would definitely recommend Alpha to anyone needing septic maintenance."
      }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "124"
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      <EnhancedBreadcrumb
        items={[
          { label: "Home", url: "/" },
          { label: "Service Areas", url: "/service-areas" },
        ]}
      />

      <CanonicalURL path="/service-areas" />
      <MetaDescription description="Alpha Septic Services provides professional septic tank pumping and maintenance services throughout Austin, Round Rock, Cedar Park, and surrounding areas in Central Texas." />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Septic Services in Central Texas</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Alpha Septic Services provides professional septic tank pumping, maintenance, and repairs throughout Austin and surrounding
                communities.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-6xl py-12">
            <div className="relative h-[400px] overflow-hidden rounded-xl shadow-custom mb-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221582.6863418876!2d-97.91821559777724!3d30.30798124757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1649887661364!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Alpha Septic Services service areas in Central Texas"
                className="absolute inset-0"
              ></iframe>
            </div>

            <h2 className="text-2xl font-bold mb-6">Service Areas for Septic Tank Pumping & Maintenance</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {serviceAreas.map((area) => (
                <Link
                  key={area.name}
                  href={`/service-areas/${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group block"
                >
                  <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={`/images/service-areas/${area.name.toLowerCase().replace(/\s+/g, '-')}.webp`}
                      alt={`Septic Services in ${area.name}, TX`}
                      width={600}
                      height={400}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-6">
                    <p className="text-gray-500 mb-4">{area.description}</p>
                    <div className="mt-auto">
                      <Button variant="outline" className="w-full">
                        View {area.name} Septic Services
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg shadow-custom mt-12">
              <h2 className="text-2xl font-bold mb-4">Need Septic Services in Your Area?</h2>
              <p className="text-gray-500 mb-6">
                We serve many communities throughout the greater Austin area and Central Texas. If you don't see your location listed,
                please contact us at <a href="tel:+15127937867" className="text-brand-blue font-medium">(512) 793-7867</a> to check if we service your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button>Contact Us</Button>
                </Link>
                <Link href="/book-now">
                  <Button variant="outline">Book Service</Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-lg shadow-custom">
              <h2 className="text-2xl font-bold mb-4">Why Choose Alpha Septic Services?</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Local business serving Central Texas communities for over 10 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 emergency septic services available in all service areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Licensed and insured septic professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free estimates and competitive pricing</span>
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-gray-500">
                  Listed on <a href="https://www.google.com/business" className="text-brand-blue hover:underline" target="_blank" rel="noopener noreferrer">Google Business Profile</a>, <a href="https://www.yelp.com" className="text-brand-blue hover:underline" target="_blank" rel="noopener noreferrer">Yelp</a>, and the <a href="https://www.bbb.org" className="text-brand-blue hover:underline" target="_blank" rel="noopener noreferrer">Better Business Bureau</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />

      {/* Breadcrumb Schema */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || '${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.callalphaseptic.com'}'}/`
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Service Areas",
              item: `${process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || '${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.callalphaseptic.com'}'}/service-areas`
            }
          ]
        }}
      />

      {/* Location Schema for each service area */}
      <JsonLd data={locationSchema} />

      {/* Service Area List Schema */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: serviceAreas.map((area, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Place",
              name: `${area.name}, TX`,
              url: `${process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || '${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.callalphaseptic.com'}'}${area.url}`,
            },
          })),
        }}
      />

      {/* Local Business Schema with service areas */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Alpha Septic Services",
          image: `${process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || '${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.callalphaseptic.com'}'}/logo.webp`,
          "@id": `${process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || '${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.callalphaseptic.com'}'}`,
          url: `${process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || '${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.callalphaseptic.com'}'}`,
          telephone: "+15127937867",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "396 Sunrise Terrace",
            addressLocality: "Cedar Park",
            addressRegion: "TX",
            postalCode: "78613",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 30.5204158,
            longitude: -97.799813,
          },
          areaServed: serviceAreas.map((area) => ({
            "@type": "City",
            name: `${area.name}, TX`,
          })),
          sameAs: [
            "https://www.facebook.com/alphasepticservices",
            "https://www.instagram.com/alphasepticservices",
            "https://www.yelp.com/biz/alpha-septic-services"
          ]
        }}
      />

      {/* Review Schema */}
      <JsonLd data={reviewSchema} />
    </main>
  )
}
