"use client";

import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"
import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/FAQSection"
import { LocalBusinessSchema } from "@/components/local-business-schema"
import { ServiceSchema } from "@/components/service-schema"
import { CanonicalURL } from "@/components/canonical-url"
import { MetaDescription } from "@/components/meta-description"
import { FAQSchema } from "@/components/faq-schema"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

// Buda-specific FAQs
const budaFaqs = [
  {
    question: "How often should Buda homeowners pump their septic tanks?",
    answer: "For most Buda homes, we recommend septic tank pumping every 3-5 years. However, this can vary based on household size, tank capacity, and water usage patterns. Commercial properties may require more frequent service."
  },
  {
    question: "Do you offer emergency septic services in Buda?",
    answer: "Yes, Alpha Septic Services provides 24/7 emergency septic services throughout Buda. If you're experiencing septic backups, strong odors, or wet spots in your yard, call us immediately at (512) 793-7867 for prompt assistance."
  },
  {
    question: "What areas of Buda do you service?",
    answer: "We service all neighborhoods and areas throughout Buda, including downtown, Garlic Creek, Whispering Hollow, Meadows at Buda, and all surrounding communities."
  },
  {
    question: "How much does septic pumping cost in Buda?",
    answer: "Septic pumping costs in Buda typically range from $350-$600, depending on tank size, accessibility, and condition. We provide free estimates before beginning any work so you know exactly what to expect."
  }
];

export const metadata: Metadata = {
  title: "Septic Tank Pumping & Services in Buda, TX | Alpha Septic Services",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || '${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.callalphaseptic.com'}'}/service-areas/buda`,
  },
}

export default function BudaServiceArea() {
  return (
    <main className="flex flex-col min-h-screen">
      <EnhancedBreadcrumb
        items={[
          { label: "Home", url: "/" },
          { label: "Service Areas", url: "/service-areas" },
          { label: "Buda", url: "/service-areas/buda" },
        ]}
      />

      <CanonicalURL path="/service-areas/buda" />
      <MetaDescription description="Professional septic tank pumping, maintenance, and emergency services in Buda, TX. Alpha Septic Services provides reliable septic solutions for residential and commercial properties." />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Septic Services in Buda, TX</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Trusted Septic Tank Services in Buda</h2>
            <p className="mb-4">
              Alpha Septic Services is proud to serve the Buda community with reliable, professional septic tank pumping and
              maintenance services. Our team of certified technicians brings years of experience to every job, ensuring
              your septic system operates efficiently and safely.
            </p>
            <p className="mb-4">
              Whether you need routine septic tank pumping, emergency services, or maintenance for your residential or
              commercial property in Buda, we're here to help with prompt, courteous service.
            </p>
            <p className="mb-4">
              We understand the unique septic needs of Buda properties and provide tailored solutions to address local
              soil conditions, regulations, and environmental considerations.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/alpha-septic-austin-service-area.webp"
              alt="Alpha Septic Services service area map showing Buda, TX"
              width={500}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Septic Services in Buda</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Residential Septic Pumping</h3>
              <p>Regular septic tank pumping for Buda homeowners to prevent backups and system failures.</p>
              <Link href="/services/residential" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
                Learn more →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Commercial Septic Services</h3>
              <p>Comprehensive septic solutions for businesses, restaurants, and commercial properties in Buda.</p>
              <Link href="/services/commercial" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
                Learn more →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Emergency Septic Services</h3>
              <p>24/7 emergency septic services for Buda residents when unexpected issues arise.</p>
              <Link href="/services/emergency" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
                Learn more →
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Alpha Septic Services in Buda?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Local expertise with knowledge of Buda's specific septic requirements</li>
            <li>Licensed and insured professionals</li>
            <li>Transparent pricing with no hidden fees</li>
            <li>Environmentally responsible waste disposal practices</li>
            <li>Prompt service with flexible scheduling options</li>
            <li>Comprehensive septic system inspections and maintenance</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Serving All Buda Neighborhoods</h2>
          <p className="mb-4">Our septic services cover all areas of Buda, including:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>• Garlic Creek</div>
            <div>• Whispering Hollow</div>
            <div>• Elm Grove</div>
            <div>• Sunfield</div>
            <div>• Green Meadows</div>
            <div>• Downtown Buda</div>
            <div>• Meadows at Buda</div>
            <div>• Shadow Creek</div>
            <div>• And surrounding areas</div>
          </div>
        </div>
      </div>

      <FAQSection
        title="Frequently Asked Questions About Septic Services in Buda"
        faqs={[
          {
            question: "How often should Buda residents pump their septic tanks?",
            answer:
              "For most Buda homes, we recommend septic tank pumping every 3-5 years. However, this can vary based on household size, tank capacity, and usage patterns. Contact us for a personalized assessment.",
          },
          {
            question: "Do you offer septic inspections for home buyers in Buda?",
            answer:
              "Yes, we provide comprehensive septic inspections for home buyers and sellers in Buda. Our detailed reports help you understand the condition of the septic system before finalizing your property transaction.",
          },
          {
            question: "What are signs that my Buda home's septic system needs service?",
            answer:
              "Warning signs include slow drains, gurgling pipes, sewage odors, standing water near the drain field, unusually lush grass over the septic area, and backups in toilets or sinks. If you notice any of these, call us immediately.",
          },
          {
            question: "Are your septic services available on weekends in Buda?",
            answer:
              "Yes, we offer weekend appointments for Buda residents. We also provide 24/7 emergency septic services when urgent issues arise.",
          },
          {
            question: "Do you handle commercial septic systems in Buda?",
            answer:
              "Absolutely. We service all types of commercial properties in Buda, including restaurants, office buildings, retail spaces, and multi-unit residential complexes.",
          },
        ]}
      />

      <CTASection
        title="Need Septic Services in Buda?"
        description="Contact Alpha Septic Services today for reliable, professional septic tank pumping and maintenance services throughout Buda, TX."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      <LocalBusinessSchema
        businessName="Alpha Septic Services"
        description="Professional septic services in Buda, Texas"
        telephone="+15127937867"
        areaServed="Buda, TX"
        streetAddress="396 Sunrise Terrace"
        addressLocality="Cedar Park"
        addressRegion="TX"
        postalCode="78613"
        latitude={30.0863}
        longitude={-97.8409}
        priceRange="$$"
        paymentAccepted={["Cash", "Credit Card", "Check"]}
      />

      <ServiceSchema
        serviceName="Septic Tank Services"
        serviceType="Septic System Maintenance"
        provider="Alpha Septic Services"
        areaServed="Buda, TX"
        description="Professional septic tank pumping, cleaning, and maintenance services in Buda, TX"
      />

      <FAQSchema faqs={budaFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />
    </main>
  )
}
