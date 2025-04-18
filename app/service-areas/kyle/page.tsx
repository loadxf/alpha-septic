"use client";

import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"
import { CheckCircle, MapPin } from 'lucide-react'
import { LocalBusinessSchema } from "@/components/local-business-schema"
import { ServiceSchema } from "@/components/service-schema"
import { FAQSchema } from "@/components/faq-schema"
// Removed unused import from "@/components/review-schema"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Kyle Septic Services | Alpha Septic Services - Local Septic Experts",
  description:
    "Professional septic tank pumping, maintenance, and repair services in Kyle, TX. 24/7 emergency service available. Call Alpha Septic Services today!",
  keywords:
    "Kyle septic services, septic tank pumping Kyle, septic cleaning Kyle TX, commercial septic Kyle, emergency septic service Kyle, Kyle TX septic company, Plum Creek septic, Kyle septic regulations",
  alternates: {
    canonical: "process.env.NEXT_PUBLIC_SITE_URL/service-areas/kyle",
  },
}

export default function KyleServiceArea() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Kyle", href: "/service-areas/kyle", isCurrent: true },
  ]

  // Local FAQs specific to Kyle
  const kyleFaqs = [
    {
      question: "How often should Kyle homeowners pump their septic tanks?",
      answer: "Kyle homeowners should typically have their septic tanks pumped every 3-5 years. However, properties with heavy usage or those in areas with clay soil may require more frequent maintenance. Kyle's growing population and varying soil conditions make regular septic maintenance especially important for preventing issues."
    },
    {
      question: "Do you provide emergency septic services in all parts of Kyle?",
      answer: "Yes, we provide 24/7 emergency septic services throughout all areas of Kyle including Plum Creek, Steeplechase, and Post Oak neighborhoods. Our response teams are strategically located to ensure prompt service no matter where you are in the Kyle area."
    },
    {
      question: "What are Kyle's regulations regarding septic systems?",
      answer: "Kyle follows Hays County regulations for septic systems, which require permits for new installations and repairs. All septic systems must be installed by licensed professionals and meet Texas Commission on Environmental Quality (TCEQ) standards. Kyle's location in the Edwards Aquifer contributing zone may also subject some properties to additional regulations. We can help ensure your system remains compliant with all local codes."
    },
    {
      question: "How do Kyle's soil conditions affect septic system maintenance?",
      answer: "Kyle has varied soil conditions, with some areas having clay-heavy soil that can drain poorly and others having more ideal soil composition. Clay soil requires more frequent pumping as it doesn't percolate as efficiently. Our technicians understand Kyle's local soil variations and can provide tailored maintenance recommendations for your specific property location."
    }
  ]

  // Kyle-specific reviews
  const kyleReviews = [
    {
      author: "Michael T.",
      rating: 5,
      date: "2023-07-18",
      text: "Alpha Septic provided excellent service for our home in Plum Creek. They were prompt, professional and thoroughly explained our septic system's condition and maintenance needs."
    },
    {
      author: "Jennifer S.",
      rating: 5,
      date: "2023-09-05",
      text: "After moving to Kyle from the city, we needed education on our septic system. Alpha was patient and helpful, providing great service and valuable advice for our rural property."
    }
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <EnhancedBreadcrumb items={breadcrumbItems} />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Septic Tank Services in Kyle, Texas
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional septic tank pumping, cleaning, and maintenance for Kyle homes and businesses.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Trusted Septic Services in Kyle</h2>
              <p className="text-gray-500">
                Alpha Septic Services is Kyle's premier provider of professional septic system services. We've been
                serving the Kyle community for years, building a reputation for reliability, quality workmanship, and
                exceptional customer service.
              </p>
              <p className="text-gray-500">
                Our team of experienced technicians understands the unique challenges that Kyle's soil conditions,
                weather patterns, and local regulations present for septic system owners. We provide comprehensive services to
                keep your septic system functioning properly year-round.
              </p>

              <h3 className="text-xl font-bold mt-6">Our Kyle Septic Services Include:</h3>
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
                  <span>Septic inspections and maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Drain field services</span>
                </li>
              </ul>

              <div className="flex flex-col gap-2 sm:flex-row pt-4">
                <Link href="/book-now">
                  <Button size="lg" className="btn-primary">
                    Schedule Septic Service in Kyle
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us at (512) 793-7867
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl shadow-custom">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55242.30358522563!2d-97.9018363708008!3d30.030879000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b5d6e42f4ab45%3A0xb9fac42fb4539c45!2sKyle%2C%20TX!5e0!3m2!1sen!2sus!4v1649887661364!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Kyle, Texas septic service area"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Kyle Neighborhoods We Serve</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Plum Creek</h3>
                  </div>
                  <p className="text-gray-500">
                    Providing specialized septic services to Plum Creek homes with environmentally-conscious solutions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Steeplechase</h3>
                  </div>
                  <p className="text-gray-500">
                    Serving the Steeplechase community with reliable septic pumping, cleaning, and maintenance services.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Post Oak</h3>
                  </div>
                  <p className="text-gray-500">
                    Providing comprehensive septic services to Post Oak residents and businesses.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Historic Kyle</h3>
                  </div>
                  <p className="text-gray-500">
                    Serving Historic Kyle with professional septic tank pumping and maintenance services for older homes.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Trails of Hays</h3>
                  </div>
                  <p className="text-gray-500">
                    Providing reliable septic services to homes throughout the Trails of Hays neighborhood.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Commercial Districts</h3>
                  </div>
                  <p className="text-gray-500">
                    Extending our commercial septic services to businesses throughout Kyle's growing commercial areas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Kyle Residents Choose Alpha Septic Services</h2>
              <div className="bg-white p-6 rounded-lg shadow-custom">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">Local Kyle Expertise</h3>
                      <p className="text-gray-500">
                        Our technicians understand Kyle's specific soil conditions and building regulations, providing tailored septic solutions that work for your property's unique characteristics.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">24/7 Emergency Service</h3>
                      <p className="text-gray-500">
                        Septic emergencies don't wait for business hours. Our emergency team is available 24/7 to
                        respond quickly to urgent situations throughout the Kyle area.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">Transparent Pricing</h3>
                      <p className="text-gray-500">
                        We provide clear, upfront pricing with no hidden fees. Our competitive rates ensure you get the
                        best value for professional septic services in Kyle.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">Hays County Compliance Experts</h3>
                      <p className="text-gray-500">
                        We understand Hays County septic regulations and ensure your system remains compliant, helping you avoid potential fines or issues with county inspectors.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h2 className="text-2xl font-bold mb-4">Kyle Septic Services FAQs</h2>
              <div className="space-y-6">
                {kyleFaqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-lg">{faq.question}</h3>
                    <p className="text-gray-500 mt-2">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h2 className="text-2xl font-bold mb-4">Kyle Septic Regulations and Considerations</h2>
              <p className="text-gray-500 mb-4">
                Kyle falls under Hays County jurisdiction for septic system regulation. Properties with septic systems must follow these key regulations:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-500">
                <li>All new septic system installations require a permit from Hays County Development Services</li>
                <li>System repairs and alterations usually require permits</li>
                <li>Regular inspections may be required, especially for aerobic systems</li>
                <li>Properties in the Edwards Aquifer Contributing Zone have additional environmental requirements</li>
                <li>Minimum lot sizes apply for properties with both wells and septic systems</li>
              </ul>
              <p className="text-gray-500">
                Our technicians are familiar with all Kyle and Hays County septic regulations and can help ensure your system remains compliant while performing optimally.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h2 className="text-2xl font-bold mb-4">What Kyle Customers Say About Us</h2>
              <div className="space-y-6">
                {kyleReviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="flex items-center mb-2">
                      <div className="flex-1">
                        <p className="font-bold">{review.author}</p>
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{review.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-lg font-medium">Overall Customer Rating</p>
                <div className="flex justify-center items-center my-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="ml-2 text-xl font-bold">4.9</span>
                  <span className="ml-1 text-gray-500">(67 reviews)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h2 className="text-2xl font-bold mb-4">Contact Us For Septic Services in Kyle</h2>
              <p className="text-gray-500 mb-4">
                Ready to schedule your septic service in Kyle? Contact Alpha Septic Services today at <a href="tel:+15127937867" className="text-brand-blue font-medium">(512) 793-7867</a> or use our online booking system to request an appointment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-now">
                  <Button size="lg">Book Online</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">Contact Us</Button>
                </Link>
              </div>
              <p className="text-gray-500 mt-4">
                Listed on <a href="https://www.google.com/business" className="text-brand-blue hover:underline" target="_blank" rel="noopener noreferrer">Google Business Profile</a>, <a href="https://www.yelp.com" className="text-brand-blue hover:underline" target="_blank" rel="noopener noreferrer">Yelp</a>, and the <a href="https://www.bbb.org" className="text-brand-blue hover:underline" target="_blank" rel="noopener noreferrer">Better Business Bureau</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTASection 
        title="Need Septic Services in Kyle?"
        description="Contact Alpha Septic Services today for reliable, professional septic tank pumping and maintenance services throughout Kyle, TX."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* Structured data using new components */}
      <LocalBusinessSchema
        businessName="Alpha Septic Services"
        slug="service-areas/kyle"
        description="Professional septic services in Kyle, TX providing septic tank pumping, cleaning, maintenance and emergency services."
        telephone="+15127937867"
        priceRange="$$"
        streetAddress="396 Sunrise Terrace"
        addressLocality="Cedar Park" 
        addressRegion="TX"
        postalCode="78613"
        addressCountry="US"
        latitude={30.5204158}
        longitude={-97.799813}
        areaServed={[
          "Kyle, TX",
          "Plum Creek, TX",
          "Steeplechase, TX",
          "Post Oak, TX"
        ]}
        reviews={kyleReviews}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 67
        }}
      />

      <ServiceSchema
        name="Septic Tank Services in Kyle, TX"
        description="Professional septic tank pumping, maintenance, and emergency services for residential and commercial properties in Kyle, TX."
        serviceType="Septic Tank Pumping and Maintenance"
        serviceArea="Kyle, TX"
        url="process.env.NEXT_PUBLIC_SITE_URL/service-areas/kyle"
      />

      <ServiceSchema
        serviceName="Septic Tank Services"
        serviceType="Septic System Maintenance"
        provider="Alpha Septic Services"
        areaServed="Kyle, TX"
        description="Professional septic tank pumping, cleaning, and maintenance services in Kyle, TX"
      />

      <FAQSchema faqs={kyleFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />
    </main>
  )
}
