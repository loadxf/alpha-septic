"use client";

import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
// Removed unused import from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
// Removed unused import from "@/components/enhanced-breadcrumb"
import { MapPin } from 'lucide-react'
// Removed unused import from "@/components/json-ld"
import { FAQSection } from "@/components/FAQSection"
import { FAQ } from "@/types/faq"
import { getCanonicalUrl } from "@/lib/utils"
import { LocalBusinessSchema } from "@/components/local-business-schema"
import { ServiceSchema } from "@/components/service-schema"
import { FAQSchema } from "@/components/faq-schema"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { BusinessNAP } from "@/components/business-nap"
import { SEOImage } from "@/components/seo-image"

export const metadata: Metadata = {
  title: "Septic Services in Pflugerville, TX | Alpha Septic",
  description:
    "Professional septic tank pumping, installation, and maintenance in Pflugerville, TX. Serving all neighborhoods with reliable and affordable septic solutions.",
  keywords: ["Pflugerville septic service", "septic tank pumping Pflugerville", "septic installation Pflugerville", "septic repair Pflugerville", "septic maintenance Pflugerville"],
  alternates: {
    canonical: getCanonicalUrl("/service-areas/pflugerville"),
  },
}

const pflugervilleFaqs: FAQ[] = [
  {
    question: "How often should I pump my septic tank in Pflugerville?",
    answer: "For most Pflugerville homes, we recommend pumping your septic tank every 3-5 years. However, this can vary based on household size, system age, and usage patterns. Homes with garbage disposals or higher occupancy may need more frequent pumping."
  },
  {
    question: "Do you provide emergency septic services in Pflugerville?",
    answer: "Yes, we offer 24/7 emergency septic services throughout Pflugerville and surrounding neighborhoods. If you're experiencing a septic emergency such as a backup, overflow, or strong odors, call us immediately for prompt assistance."
  },
  {
    question: "What areas of Pflugerville do you service?",
    answer: "We provide septic services to all Pflugerville neighborhoods including Blackhawk, Falcon Pointe, Highland Park, Villages of Hidden Lake, Avalon, and all surrounding areas."
  },
  {
    question: "Do I need a permit for septic installation in Pflugerville?",
    answer: "Yes, septic system installations in Pflugerville require permits from the City of Pflugerville and/or Travis County. Our team handles the entire permitting process for you, ensuring all installations meet local regulations and code requirements."
  },
  {
    question: "How much does septic tank pumping cost in Pflugerville?",
    answer: "Septic tank pumping in Pflugerville typically starts at $350, though pricing can vary based on tank size, accessibility, and condition. We provide clear, upfront pricing and can give you a specific quote after learning more about your system."
  }
]

export default function PflugervilleServiceAreaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOImage 
        src="/images/septic-service-pflugerville.jpg"
        alt="Alpha Septic Services truck servicing a septic system in Pflugerville, TX"
        width={1200}
        height={630}
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas" },
          { name: "Pflugerville", url: "/service-areas/pflugerville" }
        ]} 
      />
      
      <LocalBusinessSchema 
        name="Alpha Septic Services - Pflugerville"
        image="process.env.NEXT_PUBLIC_SITE_URL/logo.webp"
        id="process.env.NEXT_PUBLIC_SITE_URL/service-areas/pflugerville"
        url="process.env.NEXT_PUBLIC_SITE_URL/service-areas/pflugerville"
        telephone="+15125551234"
        priceRange="$"
        streetAddress="123 Main Street"
        addressLocality="Pflugerville"
        addressRegion="TX"
        postalCode="78660"
        addressCountry="US"
        latitude={30.4393}
        longitude={-97.6200}
        openingHours={[
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "18:00"
          },
          {
            days: ["Saturday"],
            opens: "08:00",
            closes: "16:00"
          }
        ]}
        socials={["https://www.facebook.com/alphasepticservices", "https://www.instagram.com/alphasepticservices"]}
      />
      
      <ServiceSchema 
        serviceType="Septic Tank Pumping"
        providerName="Alpha Septic Services"
        providerCity="Pflugerville"
        providerRegion="TX"
        areaServed="Pflugerville"
        areaServedId="https://en.wikipedia.org/wiki/Pflugerville,_Texas"
        description="Professional septic tank pumping, cleaning, and maintenance services in Pflugerville, TX for residential and commercial properties."
        price="350.00"
      />
      
      <FAQSchema faqs={pflugervilleFaqs} />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pflugerville Septic Services
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                Professional septic tank installation, pumping, and maintenance services for homes and businesses in Pflugerville, TX.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-12">
            <div className="md:w-2/3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Septic Services for Pflugerville Homes & Businesses</h2>
                <p className="mb-4">
                  Alpha Septic provides comprehensive septic services throughout Pflugerville and surrounding areas. From routine maintenance to emergency repairs, our experienced team delivers reliable solutions for all septic needs.
                </p>
                <p className="mb-4">
                  Our Pflugerville septic services include:
                </p>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>Complete septic system installations</li>
                  <li>Routine septic tank pumping</li>
                  <li>System inspections and maintenance</li>
                  <li>Repair of leaking or damaged tanks</li>
                  <li>Drain field services and repairs</li>
                  <li>24/7 emergency septic assistance</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Why Pflugerville Residents Choose Alpha Septic</h3>
                <p className="mb-4">
                  For over 15 years, Pflugerville homeowners and businesses have trusted Alpha Septic for prompt, professional service. Our deep understanding of local soil conditions and septic regulations allows us to provide tailored solutions for Pflugerville properties.
                </p>
                <p className="mb-4">
                  We take pride in our transparent pricing, excellent customer service, and thorough workmanship that has earned us hundreds of 5-star reviews from satisfied Pflugerville customers.
                </p>

                <BusinessNAP 
                  businessName="Alpha Septic Services"
                  address="123 Main Street, Pflugerville, TX 78660"
                  phone="512-555-1234"
                  hoursOfOperation="Monday-Friday: 7am-6pm, Saturday: 8am-4pm"
                />

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-3">Septic Regulations in Pflugerville</h3>
                  <p className="mb-4">
                    Pflugerville septic systems are regulated by both the City of Pflugerville and Travis County, and must comply with Texas Commission on Environmental Quality (TCEQ) standards. Our team ensures all installations and repairs meet current codes and permitting requirements.
                  </p>
                  <p>
                    Regular maintenance isn't just recommended—it's required by local regulations to prevent system failures and environmental contamination. Our maintenance programs keep your system compliant and functioning properly.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Areas We Serve in Pflugerville</h3>
                <p className="mb-4">
                  Our septic services cover all Pflugerville neighborhoods including:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-brand-blue mr-2" />
                    <span>Blackhawk</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-brand-blue mr-2" />
                    <span>Falcon Pointe</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-brand-blue mr-2" />
                    <span>Highland Park</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-brand-blue mr-2" />
                    <span>Villages of Hidden Lake</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-brand-blue mr-2" />
                    <span>Avalon</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-brand-blue mr-2" />
                    <span>And all surrounding areas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About Pflugerville Septic Services</h2>
            <FAQSection faqs={pflugervilleFaqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
