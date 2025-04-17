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
import { WebPageSchema } from "@/components/webpage-schema"
import { NearbyServiceAreas } from "@/components/nearby-service-areas"

export const metadata: Metadata = {
  title: "Bulverde Septic Services | Alpha Septic Services",
  description:
    "Professional septic services in Bulverde, TX. Residential and commercial septic tank pumping, maintenance, and repairs with 24/7 emergency support.",
  keywords:
    "Bulverde septic services, septic tank pumping Bulverde TX, septic cleaning Bulverde, septic system maintenance Bulverde, emergency septic service Bulverde",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/service-areas/bulverde`,
  },
  openGraph: {
    title: "Bulverde Septic Services | Alpha Septic Services",
    description:
      "Professional septic services in Bulverde, TX. Residential and commercial septic tank pumping, maintenance, and repairs with 24/7 emergency support.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/service-areas/bulverde`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/images/service-areas/bulverde.webp`,
        width: 1200,
        height: 630,
        alt: "Professional septic services in Bulverde, TX - Alpha Septic Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulverde Septic Services | Alpha Septic Services",
    description:
      "Professional septic services in Bulverde, TX. Residential and commercial septic tank pumping, maintenance, and repairs with 24/7 emergency support.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/images/service-areas/bulverde.webp`],
  },
}

const bulverdeFaqs = [
  {
    question: "How often should Bulverde homeowners pump their septic tanks?",
    answer:
      "For most Bulverde homes, we recommend septic tank pumping every 3-5 years. However, this can vary based on household size, tank capacity, and water usage patterns. Bulverde's Hill Country soil conditions may affect drain field performance, making regular maintenance particularly important in this area.",
  },
  {
    question: "Do you offer emergency septic services in Bulverde?",
    answer:
      "Yes, Alpha Septic Services provides 24/7 emergency septic services throughout Bulverde and surrounding areas. If you're experiencing septic backups, strong odors, or wet spots in your yard, call us immediately at (512) 793-7867 for prompt assistance.",
  },
  {
    question: "What neighborhoods in Bulverde do you service?",
    answer:
      "We service all neighborhoods and areas throughout Bulverde, including Bulverde Hills, Bulverde Estates, Oakland Estates, Windmill Ranch, Johnson Ranch, and all surrounding communities in the Bulverde area.",
  },
  {
    question: "How much does septic pumping cost in Bulverde?",
    answer:
      "Septic pumping costs in Bulverde typically range from $350-$600, depending on tank size, accessibility, and condition. We provide free estimates before beginning any work so you know exactly what to expect.",
  },
]

export default function BulverdeServiceAreaPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Bulverde", href: "/service-areas/bulverde", isCurrent: true },
  ]
  
  // Bulverde-specific reviews
  const bulverdeReviews = [
    {
      author: "Rachel K.",
      rating: 5,
      date: "2023-07-12",
      text: "Alpha Septic has been maintaining our property's septic system in Bulverde for years. Always professional, always on time."
    },
    {
      author: "David P.",
      rating: 5,
      date: "2023-10-05",
      text: "Had an emergency septic issue at our Bulverde home. Alpha responded quickly and fixed the problem efficiently. Highly recommended!"
    }
  ]
  
  // Bulverde geo-coordinates
  const bulverdeCoordinates = {
    latitude: 29.7422,
    longitude: -98.4306
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
                  <span>Bulverde, TX</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Bulverde Septic Services
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional septic tank pumping, cleaning, and maintenance services for Bulverde homes and
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
            <div className="flex-shrink-0 hidden md:block md:w-1/3 lg:w-1/2">
              <div className="relative aspect-video bg-gray-100 rounded-md overflow-hidden">
                <Image
                  src="/images/septic-service-bulverde.webp"
                  alt="Septic Service in Bulverde, TX"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Septic Services in Bulverde, TX</h2>
                <p className="text-gray-500 mb-4">
                  Alpha Septic Services is Bulverde's trusted provider of comprehensive septic system solutions. We
                  understand the unique challenges that Bulverde properties face with their septic systems, particularly
                  with the area's Hill Country landscape and limestone bedrock that can present challenges for septic systems.
                </p>
                <p className="text-gray-500 mb-4">
                  Our team of certified technicians provides prompt, professional service for both residential and
                  commercial properties throughout the Bulverde area. Whether you need routine maintenance, emergency
                  repairs, or a complete system evaluation, we have the expertise and equipment to keep your septic system
                  functioning properly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Our Bulverde Septic Services</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-blue mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-bold">Residential Septic Pumping</h3>
                        <p className="text-sm text-gray-500">
                          Regular pumping and maintenance for Bulverde homes of all sizes.
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
                          Specialized solutions for Bulverde businesses and commercial properties.
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
                          Professional grease trap maintenance for Bulverde restaurants.
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
                <h2 className="text-2xl font-bold mb-4">Why Bulverde Residents Choose Us</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-2">Hill Country Expertise</h3>
                    <p className="text-sm text-gray-500">
                      We understand Bulverde's unique soil conditions and septic system requirements in the Hill Country.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-2">Prompt Response</h3>
                    <p className="text-sm text-gray-500">
                      Fast response times and flexible scheduling for Bulverde residents.
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
                <h2 className="text-2xl font-bold mb-4">Bulverde Septic Regulations</h2>
                <p className="text-gray-500 mb-4">
                  Bulverde properties with septic systems must comply with both Comal County and Texas Commission
                  on Environmental Quality (TCEQ) regulations. These include regular inspections, proper maintenance,
                  and adherence to specific installation standards for protecting the Edwards Aquifer.
                </p>
                <p className="text-gray-500">
                  Our team stays up-to-date with all local regulations to ensure your system remains compliant. We can
                  help you navigate permitting requirements and provide documentation of service for your records.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-custom">
                <h3 className="text-xl font-bold mb-4">Bulverde Neighborhoods We Serve</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Bulverde Hills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Bulverde Estates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Oakland Estates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Windmill Ranch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Johnson Ranch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Vintage Oaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Spring Branch</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-custom">
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="text-gray-500 mb-4">
                  Need septic services in Bulverde? Call us today to schedule an appointment or request a free
                  estimate.
                </p>
                <div className="space-y-2">
                  <Link href="/contact">
                    <Button className="w-full">Get a Free Quote</Button>
                  </Link>
                  <Link href="tel:+15127937867">
                    <Button variant="outline" className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      (512) 793-7867
                    </Button>
                  </Link>
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=Bulverde,TX&destination_place_id=ChIJF1mFKXxfXIYR1JUbX2eLJts`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" className="w-full">
                      <MapPin className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-custom">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">7:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">8:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                  <li className="mt-2 pt-2 border-t border-gray-100">
                    <span className="font-medium text-brand-blue">24/7 Emergency Service Available</span>
                  </li>
                </ul>
              </div>

              <NearbyServiceAreas 
                currentLocation="Bulverde"
                nearbyAreas={[
                  { name: "Spring Branch", url: "/service-areas/spring-branch" },
                  { name: "New Braunfels", url: "/service-areas/new-braunfels" },
                  { name: "Canyon Lake", url: "/service-areas/canyon-lake" },
                  { name: "San Antonio", url: "/service-areas/san-antonio" },
                  { name: "Garden Ridge", url: "/service-areas/garden-ridge" }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Bulverde Septic Services FAQ</h2>
              <FAQSection faqs={bulverdeFaqs} />
            </div>

            <div className="relative h-[300px] overflow-hidden rounded-xl shadow-custom">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55370.93385630758!2d-98.43060383911131!3d29.742200248355285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c8a94c206c0fd%3A0x2a647f9fc0adc173!2sBulverde%2C%20TX!5e0!3m2!1sen!2sus!4v1649887661364!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Bulverde, Texas service area"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Septic Services in Bulverde?"
        description="Contact Alpha Septic Services for professional septic tank pumping, maintenance, and repairs in Bulverde."
        buttonText="Schedule Service"
        buttonLink="/book-now"
      />

      {/* Schema Markup */}
      <LocalBusinessSchema
        name="Alpha Septic Services - Bulverde"
        description="Professional septic services in Bulverde, TX. Residential and commercial septic tank pumping, maintenance, and repairs."
        telephone="+15127937867"
        areaServed="Bulverde, TX"
        address={{
          streetAddress: "396 Sunrise Terrace",
          addressLocality: "Cedar Park",
          addressRegion: "TX",
          postalCode: "78613",
          addressCountry: "US",
        }}
        geo={bulverdeCoordinates}
        reviews={bulverdeReviews}
        rating={5}
        priceRange="$$"
      />

      <ServiceSchema
        name="Septic Tank Services"
        description="Professional septic tank pumping, cleaning, and maintenance in Bulverde, TX."
        provider="Alpha Septic Services"
        areaServed="Bulverde, TX"
        serviceType="Septic System Services"
      />

      <FAQSchema faqs={bulverdeFaqs} />

      <BreadcrumbSchema
        items={[
          { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/` },
          { name: "Service Areas", item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/service-areas` },
          {
            name: "Bulverde",
            item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/service-areas/bulverde`,
          },
        ]}
      />

      <BusinessNAP
        name="Alpha Septic Services"
        address="396 Sunrise Terrace, Cedar Park, TX 78613"
        phone="(512) 793-7867"
      />

      <SEOImage
        src="/images/service-areas/bulverde.webp"
        alt="Professional septic services in Bulverde, TX - Alpha Septic Services"
        width={1200}
        height={630}
      />

      <WebPageSchema
        title="Bulverde Septic Services | Alpha Septic Services"
        description="Professional septic services in Bulverde, TX. Residential and commercial septic tank pumping, maintenance, and repairs with 24/7 emergency support."
        url={`${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/service-areas/bulverde`}
        primaryImageUrl={`${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/images/service-areas/bulverde.webp`}
        primaryImageAlt="Professional septic services in Bulverde, TX - Alpha Septic Services"
      />
    </div>
  )
} 