import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { CheckCircle } from "lucide-react"
import Script from "next/script"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Commercial Septic Services Austin TX | Alpha Septic Services",
  description:
    "Professional septic and grease trap services for businesses, restaurants, and commercial properties in Austin and surrounding areas. Customized maintenance plans available.",
  keywords:
    "commercial septic service, business septic pumping, restaurant septic service, commercial grease trap, Austin commercial septic, industrial septic service",
}

export default function CommercialServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Commercial Services", href: "/services/commercial", isCurrent: true },
        ]}
      />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Commercial Septic Services
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional septic and grease trap services for businesses, restaurants, and commercial properties.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Commercial Septic Solutions</h2>
              <p className="text-gray-500">
                Alpha Septic Services provides comprehensive septic services for businesses of all sizes. We understand
                that septic system issues can disrupt your operations and affect your customers' experience, which is
                why we offer flexible scheduling and prompt service.
              </p>
              <p className="text-gray-500">
                Our commercial septic services are designed to minimize disruption to your business while ensuring your
                septic system operates efficiently and in compliance with local regulations.
              </p>

              <h3 className="text-xl font-bold mt-6">Our Commercial Services Include:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Commercial septic tank pumping and cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Grease trap cleaning and maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>High-capacity system servicing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Scheduled maintenance programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Emergency services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Compliance documentation</span>
                </li>
              </ul>

              <div className="flex flex-col gap-2 sm:flex-row pt-4">
                <Link href="/book-now">
                  <Button size="lg" className="btn-primary">
                    Schedule Service
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl shadow-custom">
              <Image
                src="/images/commercial-septic-pumping.webp"
                alt="Commercial septic pumping service for a business in Austin TX"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Grease Trap Cleaning Services</h2>
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="relative h-[300px] overflow-hidden rounded-xl shadow-custom">
                  <Image
                    src="/images/restaurant-grease-trap-pumping.webp"
                    alt="Commercial kitchen grease trap system being serviced by Alpha Septic technician"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-500">
                    For restaurants and food service businesses, regular grease trap cleaning is essential for
                    maintaining proper drainage and complying with local regulations. Our grease trap services include:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                      <span>Complete grease trap pumping and cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                      <span>Inspection of trap components</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                      <span>Proper disposal of grease waste</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                      <span>Documentation for regulatory compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                      <span>Customized maintenance schedules</span>
                    </li>
                  </ul>
                  <p className="text-gray-500">
                    We recommend cleaning grease traps every 1-3 months, depending on your business volume and local
                    requirements. Regular maintenance prevents backups, odors, and potential health code violations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Industries We Serve</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="text-xl font-bold mb-2">Restaurants & Food Service</h3>
                  <p className="text-gray-500">
                    Grease trap cleaning and septic services for restaurants, cafes, and food trucks.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="text-xl font-bold mb-2">Office Buildings</h3>
                  <p className="text-gray-500">
                    Regular maintenance for office complexes to prevent disruptions to your business.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="text-xl font-bold mb-2">Retail Stores</h3>
                  <p className="text-gray-500">
                    Septic services for shopping centers and retail locations with flexible scheduling.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="text-xl font-bold mb-2">Hotels & Hospitality</h3>
                  <p className="text-gray-500">
                    Discreet, efficient service for hotels, motels, and other hospitality businesses.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="text-xl font-bold mb-2">Industrial Facilities</h3>
                  <p className="text-gray-500">
                    High-capacity pumping for industrial sites with specialized waste management needs.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="text-xl font-bold mb-2">Schools & Institutions</h3>
                  <p className="text-gray-500">
                    Scheduled maintenance during off-hours to minimize disruption to operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />

      {/* Add Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Commercial Septic Services",
            serviceType: "Commercial Septic Maintenance",
            provider: {
              "@type": "LocalBusiness",
              name: "Alpha Septic Services",
              telephone: "5127937867",
              description: "Professional commercial septic services in Austin and surrounding areas",
              areaServed: "Austin, TX and surrounding areas",
            },
            description:
              "Professional septic and grease trap services for businesses, restaurants, and commercial properties in Austin and surrounding areas.",
            areaServed: {
              "@type": "State",
              name: "Texas",
            },
            audience: {
              "@type": "BusinessAudience",
              audienceType: "Businesses and Commercial Properties",
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How often should commercial septic systems be pumped?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Commercial septic systems typically need pumping every 3-12 months depending on the size of the system, the volume of wastewater generated, and the number of people using the facilities. High-volume businesses like restaurants may require more frequent service.",
                },
              },
              {
                "@type": "Question",
                name: "Can you service my business without disrupting operations?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we offer flexible scheduling including early morning, evening, and weekend appointments to minimize disruption to your business operations. Our technicians work efficiently and discreetly to complete the service with minimal impact on your customers and staff.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide maintenance contracts for commercial properties?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we offer customized maintenance contracts for commercial properties that include regular inspections, scheduled pumping, and priority emergency service. These contracts help ensure compliance with local regulations and prevent costly system failures.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}
