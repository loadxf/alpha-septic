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
  title: "Liberty Hill Septic Services | Alpha Septic Services",
  description:
    "Professional septic services in Liberty Hill, TX. Residential and commercial septic tank pumping, maintenance, and repairs with 24/7 emergency support.",
  keywords:
    "Liberty Hill septic services, septic tank pumping Liberty Hill TX, septic cleaning Liberty Hill, septic system maintenance Liberty Hill, emergency septic service Liberty Hill",
  alternates: {
    canonical: "process.env.NEXT_PUBLIC_SITE_URL/service-areas/liberty-hill",
  },
}

const libertyHillFaqs = [
  {
    question: "How often should Liberty Hill residents pump their septic tanks?",
    answer:
      "For most Liberty Hill homes, we recommend septic tank pumping every 3-5 years. However, this can vary based on household size, tank capacity, and water usage patterns. Liberty Hill's rocky soil conditions may affect drain field performance, making regular maintenance particularly important in this area.",
  },
  {
    question: "Do you offer emergency septic services in Liberty Hill?",
    answer:
      "Yes, Alpha Septic Services provides 24/7 emergency septic services throughout Liberty Hill. If you're experiencing septic backups, strong odors, or wet spots in your yard, call us immediately at (512) 793-7867 for prompt assistance.",
  },
  {
    question: "What areas of Liberty Hill do you service?",
    answer:
      "We service all neighborhoods and areas throughout Liberty Hill, including Rio Ancho, Clearwater Ranch, Stonewall Ranch, Bridle Gate, Liberty Hill Ranchettes, and surrounding communities.",
  },
  {
    question: "How much does septic pumping cost in Liberty Hill?",
    answer:
      "Septic pumping costs in Liberty Hill typically range from $350-$600, depending on tank size, accessibility, and condition. We provide free estimates before beginning any work so you know exactly what to expect.",
  },
]

export default function LibertyHillServiceAreaPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Liberty Hill", href: "/service-areas/liberty-hill", isCurrent: true },
  ]
  
  // Liberty Hill-specific reviews
  const libertyHillReviews = [
    {
      author: "Thomas R.",
      rating: 5,
      date: "2023-06-15",
      text: "Alpha Septic did an amazing job servicing our property in Liberty Hill. Very professional and thorough in their work."
    },
    {
      author: "Jessica M.",
      rating: 5,
      date: "2023-09-28",
      text: "We've used Alpha for our business in Liberty Hill for years. Always reliable and they know their stuff. Highly recommended!"
    }
  ]
  
  // Liberty Hill geo-coordinates
  const libertyHillCoordinates = {
    latitude: 30.6671,
    longitude: -97.9236
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
                  <span>Liberty Hill, TX</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Liberty Hill Septic Services
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional septic tank pumping, cleaning, and maintenance services for Liberty Hill homes and
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
                src="/images/septic-service-liberty-hill.jpg"
                alt="Alpha Septic truck servicing a residential property in Liberty Hill, Texas"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Septic Services in Liberty Hill, TX</h2>
                <p className="text-gray-500 mb-4">
                  Alpha Septic Services is Liberty Hill's trusted provider of comprehensive septic system solutions. We
                  understand the unique challenges that Liberty Hill properties face with their septic systems, particularly
                  with the area's rocky soil conditions and limestone bedrock.
                </p>
                <p className="text-gray-500 mb-4">
                  Our team of certified technicians provides prompt, professional service for both residential and
                  commercial properties throughout the Liberty Hill area. Whether you need routine maintenance, emergency
                  repairs, or a complete system evaluation, we have the expertise and equipment to get the job done
                  right.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Our Liberty Hill Septic Services</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-blue mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-bold">Residential Septic Pumping</h3>
                        <p className="text-sm text-gray-500">
                          Regular pumping and maintenance for Liberty Hill homes of all sizes.
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
                          Specialized solutions for Liberty Hill businesses and commercial properties.
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
                          Professional grease trap maintenance for Liberty Hill restaurants.
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
                <h2 className="text-2xl font-bold mb-4">Why Liberty Hill Residents Choose Us</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-2">Local Expertise</h3>
                    <p className="text-sm text-gray-500">
                      We understand Liberty Hill's unique soil conditions and septic system requirements.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-2">Prompt Service</h3>
                    <p className="text-sm text-gray-500">
                      Fast response times and flexible scheduling for Liberty Hill residents.
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
                <h2 className="text-2xl font-bold mb-4">Liberty Hill Septic Regulations</h2>
                <p className="text-gray-500 mb-4">
                  Liberty Hill properties with septic systems must comply with both Williamson County and Texas Commission
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
                <h3 className="text-xl font-bold mb-4">Liberty Hill Neighborhoods We Serve</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Clearwater Ranch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Rio Ancho</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Stonewall Ranch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Bridle Gate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Liberty Parke</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Santa Rita Ranch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Liberty Hill Ranchettes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-custom">
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="text-gray-500 mb-4">
                  Need septic services in Liberty Hill? Call us today to schedule an appointment or request a free
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
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Liberty Hill Septic Services FAQ</h2>
              <FAQSection faqs={libertyHillFaqs} />
            </div>

            <div className="relative h-[300px] overflow-hidden rounded-xl shadow-custom">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27439.55677355003!2d-97.92358968347165!3d30.667089699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b2b2438d4c81f%3A0xd66a36a45d5193ed!2sLiberty%20Hill%2C%20TX!5e0!3m2!1sen!2sus!4v1649887661364!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Liberty Hill, Texas service area"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Septic Services in Liberty Hill?"
        description="Contact Alpha Septic Services for professional septic tank pumping, maintenance, and repairs in Liberty Hill."
        buttonText="Schedule Service"
        buttonLink="/book-now"
      />

      {/* Schema Markup */}
      <LocalBusinessSchema
        name="Alpha Septic Services - Liberty Hill"
        description="Professional septic services in Liberty Hill, TX. Residential and commercial septic tank pumping, maintenance, and repairs."
        telephone="+15127937867"
        areaServed="Liberty Hill, TX"
        address={{
          streetAddress: "396 Sunrise Terrace",
          addressLocality: "Cedar Park",
          addressRegion: "TX",
          postalCode: "78613",
          addressCountry: "US",
        }}
        geo={libertyHillCoordinates}
        reviews={libertyHillReviews}
        rating={5}
        priceRange="$$"
      />

      <ServiceSchema
        name="Septic Tank Services"
        description="Professional septic tank pumping, cleaning, and maintenance in Liberty Hill, TX."
        provider="Alpha Septic Services"
        areaServed="Liberty Hill, TX"
        serviceType="Septic System Services"
      />

      <FAQSchema faqs={libertyHillFaqs} />

      <BreadcrumbSchema
        items={[
          { name: "Home", item: "process.env.NEXT_PUBLIC_SITE_URL/" },
          { name: "Service Areas", item: "process.env.NEXT_PUBLIC_SITE_URL/service-areas" },
          {
            name: "Liberty Hill",
            item: "process.env.NEXT_PUBLIC_SITE_URL/service-areas/liberty-hill",
          },
        ]}
      />

      <BusinessNAP
        name="Alpha Septic Services"
        address="396 Sunrise Terrace, Cedar Park, TX 78613"
        phone="(512) 793-7867"
      />

      <SEOImage
        url="process.env.NEXT_PUBLIC_SITE_URL/images/service-areas/liberty-hill.jpg"
        alt="Professional septic services in Liberty Hill, TX - Alpha Septic Services"
        width={1200}
        height={630}
      />
    </div>
  )
} 