"use client";

import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"
import { CheckCircle, MapPin, Phone } from "lucide-react"
import { LocalBusinessSchema } from "@/components/local-business-schema"
import { ServiceSchema } from "@/components/service-schema"
import { FAQSchema } from "@/components/faq-schema"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
// Removed unused import from "@/components/business-nap"
import { SEOImage } from "@/components/seo-image"

export const metadata: Metadata = {
  title: "Septic Services in Manor TX | Alpha Septic Services",
  description:
    "Professional septic services in Manor, TX. 24/7 emergency service, maintenance, and repairs for residential and commercial properties.",
  keywords:
    "Manor septic service, septic pumping Manor TX, septic tank cleaning Manor, Manor septic company, emergency septic service Manor",
  alternates: {
    canonical: "process.env.NEXT_PUBLIC_SITE_URL/service-areas/manor",
  },
}

// Manor-specific FAQs
const manorFaqs = [
  {
    question: "How often should Manor homeowners pump their septic tanks?",
    answer: "Manor homeowners should typically have their septic tanks pumped every 3-5 years. However, this can vary based on household size, tank capacity, and water usage. Manor's soil conditions can sometimes affect drain field performance, so regular maintenance is especially important in this area."
  },
  {
    question: "Do you provide emergency septic services in all parts of Manor?",
    answer: "Yes, we provide 24/7 emergency septic services throughout all areas of Manor and the surrounding communities. Our response teams are strategically located to ensure prompt service no matter where you are in the Manor area."
  },
  {
    question: "Are there any Manor-specific regulations for septic systems I should know about?",
    answer: "Yes, Manor and Travis County have specific regulations regarding septic system installation, maintenance, and inspection. These include requirements for system sizing, setbacks from water features, and periodic inspections. Our technicians are familiar with all local regulations and can help ensure your system remains compliant."
  },
  {
    question: "How much does septic service cost in Manor?",
    answer: "Septic service costs in Manor typically range from $350-$600 for standard pumping, depending on tank size and accessibility. Repairs and maintenance costs vary based on the specific needs of your system. We provide detailed quotes before beginning any work."
  }
];

export default function ManorServiceAreaPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Manor", href: "/service-areas/manor", isCurrent: true },
  ]
  
  // Manor-specific reviews
  const manorReviews = [
    {
      author: "Jason M.",
      rating: 5,
      date: "2023-09-15",
      text: "Alpha Septic provided excellent service at our Manor home. Very professional and thorough with their work."
    },
    {
      author: "Laura K.",
      rating: 5,
      date: "2023-07-22",
      text: "We've used Alpha for our business in Manor for years. Always reliable and fairly priced."
    }
  ]
  
  // Manor geo-coordinates
  const manorCoordinates = {
    latitude: 30.3467,
    longitude: -97.5561
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <EnhancedBreadcrumb items={breadcrumbItems} />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Septic Services in Manor, Texas
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional septic tank pumping, cleaning, and maintenance for Manor homes and businesses.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Trusted Septic Services in Manor</h2>
              <p className="text-gray-500">
                Alpha Septic Services is Manor's premier provider of professional septic system services. We've been
                serving the Manor community for years, building a reputation for reliability, quality workmanship, and
                exceptional customer service.
              </p>
              <p className="text-gray-500">
                Our team of experienced technicians understands the unique challenges that Manor's soil conditions,
                weather patterns, and regulations present for septic system owners. We provide comprehensive services to
                keep your septic system functioning properly year-round.
              </p>

              <h3 className="text-xl font-bold mt-6">Our Manor Services Include:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Residential septic tank pumping and cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Commercial septic services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>24/7 emergency septic service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Grease trap cleaning for restaurants</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>RV waste tank pumping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Seasonal septic maintenance</span>
                </li>
              </ul>

              <div className="flex flex-col gap-2 sm:flex-row pt-4">
                <Link href="/book-now">
                  <Button size="lg" className="btn-primary">
                    Schedule Service in Manor
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    (512) 793-7867
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl shadow-custom">
              <SEOImage
                src="/images/septic-service-manor.jpg"
                alt="Alpha Septic Services truck servicing a property in Manor"
                width={800}
                height={500}
                className="object-cover w-full h-full"
                locationName="Manor, Texas"
                geoCoordinates={manorCoordinates}
                priority={true}
                description="Professional septic tank pumping and maintenance service being performed at a Manor residential property"
              />
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Manor Neighborhoods We Serve</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Downtown Manor</h3>
                  </div>
                  <p className="text-gray-500">
                    Providing septic services to homes and businesses in downtown Manor.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">ShadowGlen</h3>
                  </div>
                  <p className="text-gray-500">
                    Serving ShadowGlen with reliable septic pumping, cleaning, and maintenance services.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Bell Farms</h3>
                  </div>
                  <p className="text-gray-500">
                    Providing comprehensive septic services to the Bell Farms community.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Presidential Heights</h3>
                  </div>
                  <p className="text-gray-500">
                    Serving Presidential Heights with professional septic tank pumping and maintenance services.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Stonewater</h3>
                  </div>
                  <p className="text-gray-500">
                    Providing reliable septic services to homes in the Stonewater neighborhood.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Rural Manor</h3>
                  </div>
                  <p className="text-gray-500">
                    Extending our septic services to all rural areas surrounding Manor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Manor Residents Choose Alpha Septic Services</h2>
              <div className="bg-white p-6 rounded-lg shadow-custom">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">Local Expertise</h3>
                      <p className="text-gray-500">
                        Our technicians understand Manor's unique soil conditions, regulations, and common septic
                        issues, allowing us to provide tailored solutions for your property.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">24/7 Emergency Service</h3>
                      <p className="text-gray-500">
                        Septic emergencies don't wait for business hours. Our emergency team is available 24/7 to
                        respond quickly to urgent situations throughout the Manor area.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">Transparent Pricing</h3>
                      <p className="text-gray-500">
                        We provide clear, upfront pricing with no hidden fees. Our competitive rates ensure you get the
                        best value for professional septic services in Manor.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About Septic Services in Manor</h2>
            <div className="space-y-4">
              {manorFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-500">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for Professional Septic Service in Manor?"
        description="Contact Alpha Septic Services today to schedule your septic tank pumping, maintenance, or emergency service."
        buttonText="Schedule Service Now"
        buttonLink="/book-now"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
      
      <LocalBusinessSchema
        businessName="Alpha Septic Services"
        description="Professional septic services in Manor, Texas"
        telephone="+15127937867"
        areaServed="Manor, TX"
        streetAddress="396 Sunrise Terrace"
        addressLocality="Cedar Park"
        addressRegion="TX"
        postalCode="78613"
        latitude={manorCoordinates.latitude}
        longitude={manorCoordinates.longitude}
        priceRange="$$"
        paymentAccepted={["Cash", "Credit Card", "Check"]}
      />
      <ServiceSchema
        serviceName="Septic Tank Services"
        serviceType="Septic System Maintenance"
        provider="Alpha Septic Services"
        areaServed="Manor, TX"
        description="Professional septic tank pumping, cleaning, and maintenance services in Manor, TX"
      />
      <FAQSchema faqs={manorFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />
    </div>
  )
}