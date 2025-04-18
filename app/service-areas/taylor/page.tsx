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
  title: "Taylor Septic Services | Alpha Septic Services",
  description:
    "Professional septic services in Taylor, TX. Residential and commercial septic tank pumping, maintenance, and repairs with 24/7 emergency support.",
  keywords:
    "Taylor septic services, septic tank pumping Taylor TX, septic cleaning Taylor, septic system maintenance Taylor, emergency septic service Taylor",
  alternates: {
    canonical: "process.env.NEXT_PUBLIC_SITE_URL/service-areas/taylor",
  },
}

const taylorFaqs = [
  {
    question: "How often should Taylor residents pump their septic tanks?",
    answer:
      "For most Taylor homes, we recommend septic tank pumping every 3-5 years. However, this can vary based on household size, tank capacity, and water usage patterns. Taylor's clay soil conditions can affect drain field performance, making regular maintenance particularly important for homes in this area.",
  },
  {
    question: "Do you offer emergency septic services in Taylor?",
    answer:
      "Yes, Alpha Septic Services provides 24/7 emergency septic services throughout Taylor. If you're experiencing septic backups, strong odors, or wet spots in your yard, call us immediately at (512) 793-7867 for prompt assistance.",
  },
  {
    question: "What neighborhoods in Taylor do you service?",
    answer:
      "We service all neighborhoods and areas throughout Taylor, including Mustang Creek, Mallard Park, Chandler Crossing, Four Seasons Farm, and all surrounding communities in the Taylor area.",
  },
  {
    question: "How much does septic pumping cost in Taylor?",
    answer:
      "Septic pumping costs in Taylor typically range from $350-$600, depending on tank size, accessibility, and condition. We provide free estimates before beginning any work so you know exactly what to expect.",
  },
]

export default function TaylorServiceAreaPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Taylor", href: "/service-areas/taylor", isCurrent: true },
  ]
  
  // Taylor-specific reviews
  const taylorReviews = [
    {
      author: "Michael S.",
      rating: 5,
      date: "2023-09-12",
      text: "Alpha Septic Services was excellent! They came out to our Taylor property and took care of our septic issue quickly and professionally."
    },
    {
      author: "Lisa W.",
      rating: 5,
      date: "2023-10-28",
      text: "Best septic service in Taylor! They were prompt, courteous, and very knowledgeable about our specific system. Would definitely recommend."
    }
  ]
  
  // Taylor geo-coordinates
  const taylorCoordinates = {
    latitude: 30.5721,
    longitude: -97.4092
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
                  <span>Taylor, TX</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Taylor Septic Services
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional septic tank pumping, cleaning, and maintenance services for Taylor homes and
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
                src="/images/septic-service-taylor.jpg"
                alt="Alpha Septic truck servicing a residential property in Taylor, Texas"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Septic Services in Taylor, TX</h2>
                <p className="text-gray-500 mb-4">
                  Alpha Septic Services is Taylor's trusted provider of comprehensive septic system solutions. We
                  understand the unique challenges that Taylor properties face with their septic systems, especially
                  with the area's clay soil and growing population.
                </p>
                <p className="text-gray-500 mb-4">
                  Our team of certified technicians provides prompt, professional service for both residential and
                  commercial properties throughout the Taylor area. Whether you need routine maintenance, emergency
                  repairs, or a complete system evaluation, we have the expertise and equipment to get the job done
                  right.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Our Taylor Septic Services</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-blue mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-bold">Residential Septic Pumping</h3>
                        <p className="text-sm text-gray-500">
                          Regular pumping and maintenance for Taylor homes of all sizes.
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
                          Specialized solutions for Taylor businesses and commercial properties.
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
                        <h3 className="font-bold">Septic System Installation</h3>
                        <p className="text-sm text-gray-500">
                          Expert installation of new septic systems for Taylor homes and businesses.
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
                <h2 className="text-2xl font-bold mb-4">Why Taylor Residents Choose Us</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-2">Local Expertise</h3>
                    <p className="text-sm text-gray-500">
                      We understand Taylor's unique soil conditions and septic system requirements.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-2">Prompt Service</h3>
                    <p className="text-sm text-gray-500">
                      Fast response times and flexible scheduling for Taylor residents.
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
                <h2 className="text-2xl font-bold mb-4">Taylor Septic Regulations</h2>
                <p className="text-gray-500 mb-4">
                  Taylor properties with septic systems must comply with both Williamson County and Texas Commission
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
              <div className="bg-white p-6 rounded-lg shadow-custom">
                <h3 className="text-xl font-bold mb-4">Taylor Neighborhoods We Serve</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Mustang Creek</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Mallard Park</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Chandler Crossing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Four Seasons Farm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Heritage Square</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Summerfield</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Downtown Taylor</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-custom">
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="text-gray-500 mb-4">
                  Need septic services in Taylor? Call us today to schedule an appointment or request a free
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
                    href={`https://www.google.com/maps/dir/?api=1&destination=Taylor,TX&destination_place_id=ChIJ3d3tff5OW4YRpDk1Tc15jwA`}
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
                currentLocation="Taylor"
                nearbyAreas={[
                  { name: "Jarrell", url: "/service-areas/jarrell" },
                  { name: "Hutto", url: "/service-areas/hutto" },
                  { name: "Round Rock", url: "/service-areas/round-rock" },
                  { name: "Georgetown", url: "/service-areas/georgetown" },
                  { name: "Elgin", url: "/service-areas/elgin" }
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
              <h2 className="text-2xl font-bold mb-4">Taylor Septic Services FAQ</h2>
              <FAQSection faqs={taylorFaqs} />
            </div>

            <div className="relative h-[300px] overflow-hidden rounded-xl shadow-custom">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54880.37589278538!2d-97.42639785947893!3d30.57209866339655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644ededd37fb58d%3A0xeec5f3ed449358a4!2sTaylor%2C%20TX!5e0!3m2!1sen!2sus!4v1649887661364!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Taylor, Texas service area"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Septic Services in Taylor?"
        description="Contact Alpha Septic Services for professional septic tank pumping, maintenance, and repairs in Taylor."
        buttonText="Schedule Service"
        buttonLink="/book-now"
      />

      {/* Schema Markup */}
      <LocalBusinessSchema
        name="Alpha Septic Services - Taylor"
        description="Professional septic services in Taylor, TX. Residential and commercial septic tank pumping, maintenance, and repairs."
        telephone="+15127937867"
        areaServed="Taylor, TX"
        address={{
          streetAddress: "396 Sunrise Terrace",
          addressLocality: "Cedar Park",
          addressRegion: "TX",
          postalCode: "78613",
          addressCountry: "US",
        }}
        geo={taylorCoordinates}
        reviews={taylorReviews}
        rating={5}
        priceRange="$$"
      />

      <ServiceSchema
        name="Septic Tank Services"
        description="Professional septic tank pumping, cleaning, and maintenance in Taylor, TX."
        provider="Alpha Septic Services"
        areaServed="Taylor, TX"
        serviceType="Septic System Services"
      />

      <FAQSchema faqs={taylorFaqs} />

      <BreadcrumbSchema
        items={[
          { name: "Home", item: "process.env.NEXT_PUBLIC_SITE_URL/" },
          { name: "Service Areas", item: "process.env.NEXT_PUBLIC_SITE_URL/service-areas" },
          {
            name: "Taylor",
            item: "process.env.NEXT_PUBLIC_SITE_URL/service-areas/taylor",
          },
        ]}
      />

      <BusinessNAP
        name="Alpha Septic Services"
        address="396 Sunrise Terrace, Cedar Park, TX 78613"
        phone="(512) 793-7867"
      />

      <SEOImage
        url="process.env.NEXT_PUBLIC_SITE_URL/images/service-areas/taylor.jpg"
        alt="Professional septic services in Taylor, TX - Alpha Septic Services"
        width={1200}
        height={630}
      />

      <WebPageSchema
        title="Taylor Septic Services | Alpha Septic Services"
        description="Professional septic services in Taylor, TX. Residential and commercial septic tank pumping, maintenance, and repairs with 24/7 emergency support."
        url="process.env.NEXT_PUBLIC_SITE_URL/service-areas/taylor"
        primaryImageUrl="process.env.NEXT_PUBLIC_SITE_URL/images/service-areas/taylor.jpg"
        primaryImageAlt="Professional septic services in Taylor, TX - Alpha Septic Services"
      />
    </div>
  )
} 