import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/optimized-image"
import { CTASection } from "@/components/cta-section"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"
import { FAQSection } from "@/components/FAQSection"
import { JsonLd } from "@/components/json-ld"
import { CheckCircle, Clock, Shield, Truck, Award, Leaf } from 'lucide-react'
// Removed PageProps import as we'll use direct type annotations
// import type { PageProps } from 'next'
// Removed unused import from "@/lib/config"
// Removed unused import from "@/components/hero-section"

export const metadata: Metadata = {
  title: "Residential Septic Services | Central Texas Septic Solutions",
  description:
    "Professional residential septic services including pumping, maintenance, and installation for homes in Central Texas. 24/7 emergency service available.",
}

// Residential septic FAQs
const residentialFaqs = [
  {
    question: "How often should I have my residential septic tank pumped?",
    answer:
      "For most homes, we recommend having your septic tank pumped every 3-5 years. However, this can vary based on household size, tank capacity, and water usage. A family of four with a 1,000-gallon tank typically needs pumping every 3-4 years. We can help establish the right schedule for your specific system during our service visit.",
  },
  {
    question: "What are the warning signs that my home septic system needs attention?",
    answer:
      "Warning signs include: slow drains throughout your home, gurgling sounds in plumbing, sewage odors inside or outside your home, wet spots or unusually green grass over your drain field, sewage backups in toilets or drains, and high nitrate levels in well water tests. If you notice any of these signs, contact us promptly to prevent more serious issues.",
  },
  {
    question: "What should I do to maintain my residential septic system between professional services?",
    answer:
      "To maintain your system: 1) Be mindful of what goes down your drains (avoid grease, coffee grounds, wipes, etc.), 2) Use water efficiently to avoid overloading the system, 3) Don't flush anything besides toilet paper, 4) Keep heavy vehicles off your drain field, 5) Don't plant trees near the drain field, 6) Divert roof drains and surface water away from your drain field, and 7) Use septic-safe cleaning products.",
  },
  {
    question: "Do you provide septic inspections for home purchases?",
    answer:
      "Yes, we offer comprehensive septic inspections for home buyers and sellers. Our inspection includes locating the tank and drain field, checking the tank's condition, measuring sludge and scum layers, testing the system's function, inspecting baffles and filters, and providing a detailed report with recommendations. This service helps prevent unexpected septic issues after purchasing a home.",
  },
  {
    question: "What happens during a residential septic pumping service?",
    answer:
      "During our service, our technicians will: 1) Locate and access your septic tank, 2) Remove the lid carefully, 3) Pump out all solids and liquids from the tank, 4) Inspect the tank's interior walls, baffles, and outlet tee, 5) Check for any signs of damage or potential issues, 6) Clean the filter if your system has one, 7) Securely replace the lid, and 8) Provide documentation of service and any recommendations for your system.",
  },
]

type SearchParams = {
  [key: string]: string | string[] | undefined
}

export default function ResidentialPage({
  params,
  searchParams
}: {
  params: {};
  searchParams: SearchParams;
}) {
  // JSON-LD schema for the service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Septic Services",
    "description": "Professional residential septic services including pumping, maintenance, and installation for homes in Central Texas.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Central Texas Septic Solutions",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Austin",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "telephone": "+15125551234",
      "priceRange": "$$"
    },
    "areaServed": {
      "@type": "State",
      "name": "Central Texas"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Residential Septic Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Septic Tank Pumping"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Septic Installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Septic System Maintenance"
          }
        }
      ]
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <EnhancedBreadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Residential Septic Services", href: "/services/residential", isCurrent: true },
        ]}
      />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-brand-blue">
                Residential Services
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Residential Septic Services
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional septic system services for homeowners in Austin and surrounding areas. We keep your home's
                septic system running smoothly with expert maintenance, pumping, and repairs.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/book-now">
                  <Button className="bg-brand-blue text-white hover:bg-brand-blue/90">
                    Schedule Service
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="text-brand-blue border-brand-blue hover:bg-brand-blue/10"
                  >
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <OptimizedImage
                src="/images/septic-pumping.webp"
                alt="Residential septic pumping service"
                fill
                width={800}
                height={600}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-16">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-custom">
                <div className="mb-4 rounded-full bg-blue-100 p-3">
                  <Clock className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold mb-2">Regular Maintenance</h3>
                <p className="text-gray-500">
                  Scheduled septic pumping and maintenance to prevent backups and extend your system's lifespan.
                </p>
              </div>
              <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-custom">
                <div className="mb-4 rounded-full bg-blue-100 p-3">
                  <Shield className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold mb-2">System Protection</h3>
                <p className="text-gray-500">
                  Professional care that protects your property value and prevents costly emergency repairs.
                </p>
              </div>
              <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-custom">
                <div className="mb-4 rounded-full bg-blue-100 p-3">
                  <Truck className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold mb-2">Prompt Service</h3>
                <p className="text-gray-500">
                  Reliable, on-time service from experienced technicians who respect your home and property.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-16">
            <div className="bg-white p-8 rounded-lg shadow-custom">
              <h2 className="text-2xl font-bold mb-6">Our Residential Septic Services</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold mb-4">Septic Tank Pumping</h3>
                  <p className="text-gray-500 mb-4">
                    Regular pumping removes accumulated solids from your tank, preventing system failure and extending
                    your septic system's life. Our thorough pumping service includes tank inspection and documentation
                    for your records.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Complete removal of solids and sludge</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Tank interior inspection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Baffle and outlet tee check</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">System Inspections</h3>
                  <p className="text-gray-500 mb-4">
                    Comprehensive inspections identify potential issues before they become expensive problems. Perfect
                    for routine maintenance or when purchasing a home with a septic system.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Tank and drain field evaluation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>System function testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Detailed inspection report</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Filter Cleaning & Replacement</h3>
                  <p className="text-gray-500 mb-4">
                    Clean filters prevent solids from entering your drain field and causing system failure. We clean or
                    replace your septic filter to maintain optimal system performance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Filter inspection and cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Replacement of damaged filters</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>System performance check</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Maintenance Programs</h3>
                  <p className="text-gray-500 mb-4">
                    Our scheduled maintenance programs take the worry out of septic care. We'll track your system's
                    needs and contact you when service is due.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Customized service schedule</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Priority scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Maintenance documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-16">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <OptimizedImage
                  src="/images/septic-tank-pump-frequency.webp"
                  alt="Septic tank maintenance"
                  fill
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Why Regular Septic Maintenance Matters</h2>
                <p className="text-gray-500">
                  Your septic system is an essential part of your home that requires regular professional care.
                  Neglected septic systems can lead to costly repairs, property damage, and even health hazards.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-blue-100 p-2">
                      <Award className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold">Extends System Life</h3>
                      <p className="text-gray-500">
                        Regular maintenance can double the lifespan of your septic system, saving thousands in
                        replacement costs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-blue-100 p-2">
                      <Shield className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold">Prevents Costly Emergencies</h3>
                      <p className="text-gray-500">
                        Routine pumping prevents backups and system failures that often occur at the most inconvenient
                        times.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-blue-100 p-2">
                      <Leaf className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold">Protects the Environment</h3>
                      <p className="text-gray-500">
                        Properly maintained septic systems protect groundwater and nearby water sources from
                        contamination.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-16">
            <FAQSection
              title="Frequently Asked Questions About Residential Septic Services"
              description="Get answers to common questions about residential septic system maintenance"
              faqs={residentialFaqs}
            />
          </div>

          <div className="mx-auto max-w-3xl mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Schedule Your Septic Service?</h2>
            <p className="text-gray-500 mb-6">
              Contact us today to schedule an appointment or request a quote for your residential septic needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-now">
                <Button>Book Now</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTASection />

      {/* Service Schema */}
      <JsonLd data={jsonLd} />

      {/* FAQ Schema */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: residentialFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
    </div>
  )
}
