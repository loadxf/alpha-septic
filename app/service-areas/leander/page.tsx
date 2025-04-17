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
  title: "Leander Septic Services | Alpha Septic Services",
  description:
    "Professional septic tank pumping, maintenance, and repair services in Leander, TX. 24/7 emergency service available. Call Alpha Septic Services today!",
  keywords:
    "Leander septic services, septic tank pumping Leander, septic cleaning Leander TX, commercial septic Leander, emergency septic service Leander",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/service-areas/leander`,
  },
}

const leanderFaqs = [
  {
    question: "How often should Leander residents pump their septic tanks?",
    answer:
      "For most Leander homes, we recommend septic tank pumping every 3-5 years. However, this can vary based on household size, tank capacity, and water usage patterns. Commercial properties may require more frequent service.",
  },
  {
    question: "Do you offer emergency septic services in Leander?",
    answer:
      "Yes, Alpha Septic Services provides 24/7 emergency septic services throughout Leander. If you're experiencing septic backups, strong odors, or wet spots in your yard, call us immediately for prompt assistance.",
  },
  {
    question: "What areas of Leander do you service?",
    answer:
      "We service all neighborhoods and areas throughout Leander, including Crystal Falls, Travisso, Mason Hills, Highlands at Crystal Falls, and all surrounding communities.",
  },
  {
    question: "How much does septic pumping cost in Leander?",
    answer:
      "Septic pumping costs in Leander typically range from $350-$600, depending on tank size, accessibility, and condition. We provide free estimates before beginning any work so you know exactly what to expect.",
  },
]

export default function LeanderServiceAreaPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Leander", href: "/service-areas/leander", isCurrent: true },
  ]
  
  // Leander-specific reviews
  const leanderReviews = [
    {
      author: "Andrew M.",
      rating: 5,
      date: "2023-09-15",
      text: "Used Alpha Septic for our home in Crystal Falls. Great service, fair price, and they were very thorough with explaining everything."
    },
    {
      author: "Stephanie K.",
      rating: 5,
      date: "2023-06-22",
      text: "We've been using Alpha for our Leander property for years. Always reliable and very professional service."
    }
  ]
  
  // Leander geo-coordinates
  const leanderCoordinates = {
    latitude: 30.5788,
    longitude: -97.853
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
                  <span>Leander, TX</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Leander Septic Services</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional septic tank pumping, cleaning, and maintenance services for Leander homes and businesses.
                Locally owned and operated with over 15 years of experience.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/book-now">
                  <Button size="lg">Schedule Service</Button>
                </Link>
                <a href="tel:5127937867">
                  <Button size="lg" variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    (512) 793-7867
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-custom">
              <SEOImage
                src="/images/septic-service-leander.jpg"
                alt="Alpha Septic Services truck servicing a property in Leander"
                width={800}
                height={500}
                className="object-cover w-full h-full"
                locationName="Leander, Texas"
                geoCoordinates={leanderCoordinates}
                priority={true}
                description="Professional septic tank pumping and maintenance service being performed at a Leander residential property"
              />
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Septic Services in Leander, TX</h2>
                <p className="text-gray-500 mb-4">
                  Alpha Septic Services is Leander's trusted provider of comprehensive septic system solutions. We understand
                  the unique challenges that Leander properties face with their septic systems, from the local soil
                  conditions to municipal regulations.
                </p>
                <p className="text-gray-500 mb-4">
                  Our team of certified technicians provides prompt, professional service for both residential and
                  commercial properties throughout the Leander area. Whether you need routine maintenance, emergency
                  repairs, or a complete system evaluation, we have the expertise and equipment to get the job done
                  right.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Our Leander Septic Services</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-blue mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-bold">Residential Septic Pumping</h3>
                        <p className="text-sm text-gray-500">
                          Regular pumping and maintenance for Leander homes of all sizes.
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
                          Specialized solutions for Leander businesses and commercial properties.
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
                          Professional grease trap maintenance for Leander restaurants.
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
                <h2 className="text-2xl font-bold mb-4">Why Leander Residents Choose Us</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-2">Local Expertise</h3>
                    <p className="text-sm text-gray-500">
                      We understand Leander's unique soil conditions and septic system requirements.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-2">Prompt Service</h3>
                    <p className="text-sm text-gray-500">
                      Fast response times and flexible scheduling for Leander residents.
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
                <h2 className="text-2xl font-bold mb-4">Leander Septic Regulations</h2>
                <p className="text-gray-500 mb-4">
                  Leander properties with septic systems must comply with both Williamson County and Texas Commission on
                  Environmental Quality (TCEQ) regulations. These include regular inspections, proper maintenance, and
                  adherence to specific installation standards.
                </p>
                <p className="text-gray-500">
                  Our team stays up-to-date with all local regulations to ensure your system remains compliant. We can
                  help you navigate permitting requirements and provide documentation of service for your records.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <BusinessNAP 
                locationName="Leander"
                className="h-full"
              />

              <div className="bg-white p-6 rounded-lg shadow-custom">
                <h3 className="text-xl font-bold mb-4">Service Areas in Leander</h3>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-brand-blue mr-2" />
                    <span>Crystal Falls</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-brand-blue mr-2" />
                    <span>Travisso</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-brand-blue mr-2" />
                    <span>Mason Hills</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-brand-blue mr-2" />
                    <span>Highlands at Crystal Falls</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-brand-blue mr-2" />
                    <span>Bryson</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-brand-blue mr-2" />
                    <span>And all surrounding areas</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <SEOImage 
                  src="/images/septic-service-leander.jpg" 
                  alt="Septic tank service in Leander"
                  width={600}
                  height={400}
                  locationName="Leander"
                  caption="Professional septic services for Leander homes and businesses"
                  geoCoordinates={leanderCoordinates}
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About Leander Septic Services</h2>
            <FAQSection faqs={leanderFaqs} />
          </div>
        </div>
      </section>

      <CTASection 
        title="Need Septic Services in Leander?"
        description="Contact Alpha Septic Services today for reliable, professional septic tank pumping and maintenance services throughout Leander, TX."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* Structured data using standardized schema components */}
      <LocalBusinessSchema
        businessName="Alpha Septic Services"
        slug="service-areas/leander"
        description="Professional septic services in Leander, TX providing septic tank pumping, cleaning, maintenance and emergency services for residential and commercial properties."
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
          "Leander, TX",
          "Crystal Falls, TX",
          "Travisso, TX",
          "Mason Hills, TX", 
          "Highlands at Crystal Falls, TX",
          "Bryson, TX"
        ]}
        reviews={leanderReviews}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 62
        }}
        sameAs={[
          "https://www.facebook.com/alphasepticservices",
          "https://www.instagram.com/alphasepticservices",
          "https://www.yelp.com/biz/alpha-septic-services",
          "https://www.bbb.org/us/tx/cedar-park/profile/septic-tank-service/alpha-septic-services"
        ]}
        hasMap={`https://www.google.com/maps/place/Leander,+TX`}
      />

      <ServiceSchema
        name="Leander Septic Services" 
        description="Professional septic tank pumping, repair, and maintenance services for Leander, TX residents and businesses."
        areaServed="Leander, TX"
        url={`${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/service-areas/leander`}
        priceRange="$350-$800"
        mainEntityOfPage={`${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/service-areas/leander`}
      />

      <FAQSchema 
        faqs={leanderFaqs} 
        headline="Leander Septic Services FAQs"
        mainEntityOfPage={`${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/service-areas/leander`}
      />
      
      <BreadcrumbSchema
        items={[
          { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/` },
          { name: "Service Areas", item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/service-areas` },
          { name: "Leander", item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/service-areas/leander` }
        ]}
      />
    </div>
  )
}
