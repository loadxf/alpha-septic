import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { Breadcrumb } from "@/components/breadcrumb"
import Script from "next/script"

export const metadata: Metadata = {
  title: "About Alpha Septic Services | Austin's Premier Septic Company",
  description:
    "Learn about Alpha Septic Services, Austin's premier septic service provider. Our experienced team delivers reliable, professional septic services throughout Central Texas.",
  keywords: [
    "septic service company",
    "Austin septic experts",
    "septic pumping company",
    "about Alpha Septic",
    "septic service history",
    "septic professionals",
    "Austin septic company",
    "septic service team",
    "septic maintenance experts",
    "Central Texas septic services",
  ],
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb items={[{ label: "About Us", href: "/about", isCurrent: true }]} />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Alpha Septic Services
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Austin's trusted septic service provider for residential and commercial properties.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Story</h2>
              <p className="text-gray-500">
                Alpha Septic Services was founded with a simple mission: to provide reliable, professional septic
                services to the Austin community. What started as a small family business has grown into one of the most
                trusted septic service providers in the area.
              </p>
              <p className="text-gray-500">
                With years of experience in the industry, our team has the knowledge and expertise to handle all aspects
                of septic system maintenance, from routine pumping to emergency repairs. We take pride in our work and
                are committed to delivering exceptional service to every customer.
              </p>
              <p className="text-gray-500">
                As a locally owned and operated company, we understand the unique challenges that Austin-area septic
                systems face. Our team is familiar with local regulations, soil conditions, and common issues, allowing
                us to provide tailored solutions for each property we service.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row pt-4">
                <Link href="/contact">
                  <Button>Contact Us</Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline">Our Services</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image
                src="/images/septic-pump-truck.webp"
                alt="Alpha Septic Services pump truck servicing a customer in Austin"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The principles that guide our business and service.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Reliability</h3>
                <p className="text-gray-500">
                  We show up when promised and complete the job right the first time. Our customers can count on us for
                  consistent, dependable service.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                    <path d="M12 9v4" />
                    <path d="M12 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Integrity</h3>
                <p className="text-gray-500">
                  We operate with honesty and transparency in all aspects of our business, from pricing to
                  recommendations. We never suggest unnecessary services.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path d="M19.5 14.5 16 18h-4l-3-3v-4l3.5-3.5" />
                    <path d="M4 15h4v4" />
                    <path d="M4 9h4V5" />
                    <path d="M14 4h-4v4" />
                    <path d="M11 3v4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Expertise</h3>
                <p className="text-gray-500">
                  Our team is highly trained and experienced in all aspects of septic system service. We stay updated on
                  industry best practices and technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      {/* About Page Schema */}
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainContentOfPage: {
              "@type": "WebPageElement",
              headline: "About Alpha Septic Services",
              text: "Alpha Septic Services was founded with a simple mission: to provide reliable, professional septic services to the Austin community. What started as a small family business has grown into one of the most trusted septic service providers in the area. With years of experience in the industry, our team has the knowledge and expertise to handle all aspects of septic system maintenance, from routine pumping to emergency repairs.",
            },
            about: {
              "@type": "Organization",
              name: "Alpha Septic Services",
              description: "Austin's trusted septic service provider for residential and commercial properties.",
              foundingDate: "2025",
              foundingLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Austin",
                  addressRegion: "TX",
                  addressCountry: "US",
                },
              },
            },
          }),
        }}
      />
    </div>
  )
}
