import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"
import { CheckCircle, MapPin, Phone } from "lucide-react"
import { FAQSection } from "@/components/FAQSection"
import { LocalBusinessSchema } from "@/components/local-business-schema"
import { ServiceSchema } from "@/components/service-schema"
import { FAQSchema } from "@/components/faq-schema"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { BusinessNAP } from "@/components/business-nap"
import { SEOImage } from "@/components/seo-image"

export const metadata: Metadata = {
  title: "Round Rock Septic Services | Alpha Septic Services",
  description:
    "Professional septic services in Round Rock, TX. Residential and commercial septic solutions with 24/7 emergency support.",
  keywords:
    "Round Rock septic services, septic tank pumping Round Rock, septic cleaning Round Rock TX, commercial septic Round Rock, emergency septic service Round Rock",
  alternates: {
    canonical: "process.env.NEXT_PUBLIC_SITE_URL/service-areas/round-rock",
  },
}

const roundRockFaqs = [
  {
    question: "How often should Round Rock residents pump their septic tanks?",
    answer:
      "For most Round Rock homes, we recommend septic tank pumping every 3-5 years. However, this can vary based on household size, tank capacity, and water usage patterns. Commercial properties may require more frequent service.",
  },
  {
    question: "Do you offer emergency septic services in Round Rock?",
    answer:
      "Yes, Alpha Septic Services provides 24/7 emergency septic services throughout Round Rock. If you're experiencing septic backups, strong odors, or wet spots in your yard, call us immediately at (512) 793-7867 for prompt assistance.",
  },
  {
    question: "What areas of Round Rock do you service?",
    answer:
      "We service all neighborhoods and areas throughout Round Rock, including downtown, La Frontera, Teravista, Brushy Creek, Stone Oak, Forest Creek, and surrounding communities.",
  },
  {
    question: "How much does septic pumping cost in Round Rock?",
    answer:
      "Septic pumping costs in Round Rock typically range from $350-$600, depending on tank size, accessibility, and condition. We provide free estimates before beginning any work so you know exactly what to expect.",
  },
]

export default function RoundRockServiceAreaPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Round Rock", href: "/service-areas/round-rock", isCurrent: true },
  ]
  
  // Round Rock-specific reviews
  const roundRockReviews = [
    {
      author: "James T.",
      rating: 5,
      date: "2023-05-22",
      text: "Alpha Septic provided excellent service at our Round Rock home. Their technicians were knowledgeable and professional."
    },
    {
      author: "Melissa K.",
      rating: 5,
      date: "2023-08-10",
      text: "I've used Alpha for my business in Round Rock for years. Always reliable, always on time. Highly recommended!"
    }
  ]
  
  // Round Rock geo-coordinates
  const roundRockCoordinates = {
    latitude: 30.5082551,
    longitude: -97.678954
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <EnhancedBreadcrumb items={breadcrumbItems} />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                <div className="flex items-center">
                  <MapPin className="mr-1 h-4 w-4 text-brand-blue" />
                  <span>Round Rock, TX</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Round Rock Septic Services
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional septic tank pumping, cleaning, and maintenance services for Round Rock homes and
                businesses. Locally owned and operated with over 15 years of experience.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/book-now">
                  <Button size="lg">Schedule Service</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    (512) 793-7867
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-custom">
              <Image
                src="/images/septic-service-round-rock.jpg"
                alt="Alpha Septic truck servicing a residential property in Round Rock, Texas"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Septic Services in Round Rock, TX</h2>
                <p className="text-gray-500 mb-4">
                  Alpha Septic Services is Round Rock's trusted provider of comprehensive septic system solutions. We
                  understand the unique challenges that Round Rock properties face with their septic systems, from the
                  local soil conditions to municipal regulations.
                </p>
                <p className="text-gray-500 mb-4">
                  Our team of certified technicians provides prompt, professional service for both residential and
                  commercial properties throughout the Round Rock area. Whether you need routine maintenance, emergency
                  repairs, or a complete system evaluation, we have the expertise and equipment to get the job done
                  right.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Our Round Rock Septic Services</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-blue mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-bold">Residential Septic Pumping</h3>
                        <p className="text-sm text-gray-500">
                          Regular pumping and maintenance for Round Rock homes of all sizes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-blue mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-bold">Commercial Septic Service</h3>
                        <p className="text-sm text-gray-500">
                          Specialized solutions for Round Rock businesses and commercial properties.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-blue mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-bold">Emergency Septic Service</h3>
                        <p className="text-sm text-gray-500">24/7 emergency response for critical septic issues.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-blue mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-bold">Septic Inspections</h3>
                        <p className="text-sm text-gray-500">
                          Comprehensive evaluations for home sales or system assessment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-blue mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-bold">Grease Trap Cleaning</h3>
                        <p className="text-sm text-gray-500">
                          Professional grease trap maintenance for Round Rock restaurants.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-blue mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-bold">Septic Repairs</h3>
                        <p className="text-sm text-gray-500">Expert troubleshooting and repairs for system issues.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Why Round Rock Residents Choose Us</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-2">Local Expertise</h3>
                    <p className="text-sm text-gray-500">
                      We understand Round Rock's unique soil conditions and septic system requirements.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-2">Prompt Service</h3>
                    <p className="text-sm text-gray-500">
                      Fast response times and flexible scheduling for Round Rock residents.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-2">Transparent Pricing</h3>
                    <p className="text-sm text-gray-500">
                      Upfront, honest pricing with no hidden fees or surprise charges.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-2">Licensed & Insured</h3>
                    <p className="text-sm text-gray-500">
                      Fully licensed technicians and comprehensive insurance coverage.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Round Rock Septic Regulations</h2>
                <p className="text-gray-500 mb-4">
                  Round Rock properties with septic systems must comply with both Williamson County and Texas Commission
                  on Environmental Quality (TCEQ) regulations. These include regular inspections, proper maintenance,
                  and adherence to specific installation standards.
                </p>
                <p className="text-gray-500">
                  Our team stays up-to-date with all local regulations to ensure your system remains compliant. We can
                  help you navigate permitting requirements and provide documentation of service for your records.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <BusinessNAP 
                locationName="Round Rock"
                className="h-full"
              />

              <div className="bg-white p-6 rounded-lg shadow-custom">
                <h3 className="text-xl font-bold mb-4">Service Areas in Round Rock</h3>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-brand-blue mr-2" />
                    <span>Downtown Round Rock</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-brand-blue mr-2" />
                    <span>La Frontera</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-brand-blue mr-2" />
                    <span>Teravista</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-brand-blue mr-2" />
                    <span>Brushy Creek</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-brand-blue mr-2" />
                    <span>Stone Oak</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-brand-blue mr-2" />
                    <span>Forest Creek</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-brand-blue mr-2" />
                    <span>And all surrounding areas</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <SEOImage 
                  src="/images/septic-service-round-rock-technician.jpg" 
                  alt="Certified septic technician performing maintenance at a Round Rock property"
                  width={600}
                  height={400}
                  locationName="Round Rock"
                  caption="Professional septic services for Round Rock homes and businesses"
                  geoCoordinates={roundRockCoordinates}
                  className="h-full w-full rounded-lg shadow-custom"
                />
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About Round Rock Septic Services</h2>
            <FAQSection faqs={roundRockFaqs} />
          </div>
        </div>
      </section>

      <CTASection 
        title="Need Septic Services in Round Rock?"
        description="Contact Alpha Septic Services today for reliable, professional septic tank pumping and maintenance services throughout Round Rock, TX."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* Structured data using standardized schema components */}
      <LocalBusinessSchema
        businessName="Alpha Septic Services"
        slug="service-areas/round-rock"
        description="Professional septic services in Round Rock, TX providing septic tank pumping, cleaning, maintenance and emergency services for residential and commercial properties."
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
          "Round Rock, TX",
          "Downtown Round Rock, TX",
          "La Frontera, TX",
          "Teravista, TX", 
          "Brushy Creek, TX",
          "Stone Oak, TX",
          "Forest Creek, TX"
        ]}
        reviews={roundRockReviews}
        aggregateRating={{
          ratingValue: 4.8,
          reviewCount: 65
        }}
        sameAs={[
          "https://www.facebook.com/alphasepticservices",
          "https://www.instagram.com/alphasepticservices",
          "https://www.yelp.com/biz/alpha-septic-services",
          "https://www.bbb.org/us/tx/cedar-park/profile/septic-tank-service/alpha-septic-services"
        ]}
        hasMap={`https://www.google.com/maps/place/Round+Rock,+TX`}
      />

      <ServiceSchema
        name="Septic Tank Services in Round Rock, TX"
        description="Professional septic tank pumping, maintenance, and emergency services for residential and commercial properties in Round Rock, TX."
        serviceType="Septic Tank Pumping and Maintenance"
        serviceArea="Round Rock, TX"
        url="process.env.NEXT_PUBLIC_SITE_URL/service-areas/round-rock"
      />

      <FAQSchema 
        faqs={roundRockFaqs} 
        headline="Round Rock Septic Services FAQs"
        mainEntityOfPage="process.env.NEXT_PUBLIC_SITE_URL/service-areas/round-rock"
      />
      
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "process.env.NEXT_PUBLIC_SITE_URL/" },
          { name: "Service Areas", item: "process.env.NEXT_PUBLIC_SITE_URL/service-areas" },
          { name: "Round Rock", item: "process.env.NEXT_PUBLIC_SITE_URL/service-areas/round-rock" }
        ]}
      />
    </div>
  )
}
