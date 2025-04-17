import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { CheckCircle, MapPin, Phone } from "lucide-react"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"
import { LocalBusinessSchema } from "@/components/local-business-schema"
import { ServiceSchema } from "@/components/service-schema"
import { FAQSchema } from "@/components/faq-schema"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { BusinessNAP } from "@/components/business-nap"
// Removed unused import from "@/components/optimized-image"
import { SITE_URL } from "@/lib/config"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Septic Services in Austin TX | Alpha Septic Services",
  description:
    "Professional septic services in Austin, TX. 24/7 emergency service, maintenance, and repairs for residential and commercial properties.",
  keywords:
    "Austin septic service, septic pumping Austin TX, septic tank cleaning Austin, Austin septic company, emergency septic service Austin",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/service-areas/austin`,
  },
}

export default function AustinServiceAreaPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Austin", href: "/service-areas/austin", isCurrent: true },
  ]
  
  // Austin-specific FAQs
  const austinFaqs = [
    {
      question: "How often should Austin homeowners pump their septic tanks?",
      answer: "Austin homeowners should typically have their septic tanks pumped every 3-5 years. However, this can vary based on household size, tank capacity, and water usage. Austin's clay-heavy soils can sometimes affect drain field performance, so regular maintenance is especially important in this area."
    },
    {
      question: "Do you provide emergency septic services in all parts of Austin?",
      answer: "Yes, we provide 24/7 emergency septic services throughout all areas of Austin and the surrounding communities. Our response teams are strategically located to ensure prompt service no matter where you are in the Austin area."
    },
    {
      question: "Are there any Austin-specific regulations for septic systems I should know about?",
      answer: "Yes, Austin and Travis County have specific regulations regarding septic system installation, maintenance, and inspection. These include requirements for system sizing, setbacks from water features, and periodic inspections. Our technicians are familiar with all local regulations and can help ensure your system remains compliant."
    },
    {
      question: "What are your service hours in Austin?",
      answer: "Our regular service hours in Austin are Monday through Friday from 8am to 6pm, and Saturday from 9am to 2pm. However, we offer 24/7 emergency septic services for urgent situations throughout Austin and surrounding areas."
    },
    {
      question: "What parts of Austin do you serve?",
      answer: "We serve all areas of Austin including Downtown, South Austin, North Austin, East Austin, West Austin, and all surrounding neighborhoods and zip codes. Our service area covers the entire greater Austin metropolitan area."
    },
    {
      question: "How much does septic pumping typically cost in Austin?",
      answer: "Septic pumping in Austin typically starts at $299 for a standard residential tank. The exact cost depends on tank size, accessibility, and condition. We provide free quotes and transparent pricing for all our Austin customers."
    },
    {
      question: "Do you offer septic services for businesses in Austin?",
      answer: "Yes, we provide comprehensive commercial septic services for all types of businesses in Austin, including restaurants, office buildings, retail establishments, and industrial facilities. Our commercial services include regular maintenance programs, grease trap cleaning, and emergency response."
    }
  ]
  
  // Austin-specific reviews
  const austinReviews = [
    {
      author: "Michael T.",
      rating: 5,
      date: "2023-07-10",
      text: "Alpha Septic provided excellent service at our Austin home. Professional, on-time, and thorough!"
    },
    {
      author: "Jennifer R.",
      rating: 5,
      date: "2023-08-15",
      text: "We've used Alpha for our South Austin property for years. Always reliable and fairly priced."
    }
  ]
  
  // Austin geo-coordinates
  const austinCoordinates = {
    latitude: 30.2672,
    longitude: -97.7431
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <EnhancedBreadcrumb items={breadcrumbItems} />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Septic Services in Austin, Texas
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional septic tank pumping, cleaning, and maintenance for Austin homes and businesses.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Trusted Septic Services in Austin</h2>
              <p className="text-gray-500">
                Alpha Septic Services is Austin's premier provider of professional septic system services. We've been
                serving the Austin community for years, building a reputation for reliability, quality workmanship, and
                exceptional customer service.
              </p>
              <p className="text-gray-500">
                Our team of experienced technicians understands the unique challenges that Austin's soil conditions,
                weather patterns, and regulations present for septic system owners. We provide comprehensive services to
                keep your septic system functioning properly year-round.
              </p>

              <h3 className="text-xl font-bold mt-6">Our Austin Services Include:</h3>
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
                    Schedule Service in Austin
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.76983794948!2d-97.82036583351339!3d30.307982306428267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1649887661364!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Austin, Texas service area"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Austin Neighborhoods We Serve</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Downtown Austin</h3>
                  </div>
                  <p className="text-gray-500">
                    Providing septic services to businesses and residential properties in downtown Austin and the
                    surrounding areas.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">South Austin</h3>
                  </div>
                  <p className="text-gray-500">
                    Serving South Austin neighborhoods with reliable septic pumping, cleaning, and maintenance services.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">North Austin</h3>
                  </div>
                  <p className="text-gray-500">
                    Providing comprehensive septic services to North Austin residents and businesses.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">East Austin</h3>
                  </div>
                  <p className="text-gray-500">
                    Serving East Austin with professional septic tank pumping and maintenance services.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">West Austin</h3>
                  </div>
                  <p className="text-gray-500">
                    Providing reliable septic services to West Austin homes and businesses.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Austin Suburbs</h3>
                  </div>
                  <p className="text-gray-500">
                    Extending our septic services to all Austin suburbs and surrounding communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Austin Residents Choose Alpha Septic Services</h2>
              <div className="bg-white p-6 rounded-lg shadow-custom">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">Local Expertise</h3>
                      <p className="text-gray-500">
                        Our technicians understand Austin's unique soil conditions, regulations, and common septic
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
                        respond quickly to urgent situations throughout the Austin area.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">Transparent Pricing</h3>
                      <p className="text-gray-500">
                        We provide clear, upfront pricing with no hidden fees. Our competitive rates ensure you get the
                        best value for professional septic services in Austin.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-4">Austin Septic System Regulations</h2>
              <p className="text-gray-500 mb-4">
                Austin septic systems are regulated by both the City of Austin and Travis County Health Department. Key regulations include:
              </p>
              <ul className="list-disc pl-5 text-gray-500 space-y-1 mb-4">
                <li>Regular inspections may be required</li>
                <li>Specific setback requirements from wells, property lines, and water features</li>
                <li>Aerobic systems may be required in certain areas</li>
                <li>Professional maintenance contracts required for advanced systems</li>
              </ul>
              <p className="text-gray-500 mt-4">
                Our technicians are familiar with all local regulations and can help ensure your system remains compliant.
              </p>
            </div>
              
            <div>
              <div className="relative aspect-video bg-gray-100 rounded-md overflow-hidden">
                <Image
                  src="/images/septic-service-austin.webp"
                  alt="Septic Service in Austin, TX"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <BusinessNAP 
              locationName="Austin"
              className="bg-white p-6 rounded-lg shadow-custom"
            />
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h2 className="text-2xl font-bold mb-4">Contact Us For Septic Services in Austin</h2>
              <p className="text-gray-500 mb-4">
                Ready to schedule your septic service in Austin? Contact Alpha Septic Services today at <a href="tel:+15127937867" className="text-brand-blue font-medium">(512) 793-7867</a> or use our online booking system to request an appointment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-now">
                  <Button size="lg">Book Online</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    (512) 793-7867
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection 
        title="Need Septic Services in Austin?"
        description="Contact Alpha Septic Services today for reliable, professional septic tank pumping and maintenance services throughout Austin, TX."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* Structured data using standardized schema components */}
      <LocalBusinessSchema
        businessName="Alpha Septic Services - Austin"
        slug="service-areas/austin"
        description="Professional septic tank pumping, maintenance, and emergency services for residential and commercial properties in Austin, TX and surrounding neighborhoods."
        areaServed={["Austin", "Downtown Austin", "South Austin", "North Austin", "East Austin", "West Austin", "78701", "78702", "78703", "78704", "78705"]}
        latitude={30.2672}
        longitude={-97.7431}
        serviceRadius={25}
        businessStatus="OpenNow"
        reviews={austinReviews}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 127
        }}
        sameAs={[
          "https://www.facebook.com/alphasepticservices",
          "https://www.instagram.com/alphasepticservices",
          "https://www.yelp.com/biz/alpha-septic-services",
          "https://www.bbb.org/us/tx/cedar-park/profile/septic-tank-service/alpha-septic-services",
          "https://www.chambermaster.com/directory/austin-chamber-of-commerce/",
          "https://nextdoor.com/pages/alpha-septic-services-austin-tx/",
          "https://www.thumbtack.com/tx/cedar-park/septic-tank-services/alpha-septic-services/"
        ]}
        hasMap={`https://www.google.com/maps/place/Austin,+TX`}
      />

      <ServiceSchema
        serviceName="Septic Tank Services in Austin, TX"
        description="Professional septic tank pumping, maintenance, and emergency services for residential and commercial properties in Austin, TX. Serving all Austin neighborhoods with 24/7 availability."
        slug="service-areas/austin"
        image={`${SITE_URL}/images/services/austin-septic-services.webp`}
        price="299.00"
        priceCurrency="USD"
        availability="https://schema.org/InStock"
        areaServed={["Austin", "Downtown Austin", "South Austin", "North Austin", "East Austin", "West Austin", "78701", "78702", "78703", "78704", "78705"]}
        serviceCategory="Septic Services"
      />

      <FAQSchema 
        faqs={austinFaqs} 
        headline="Austin Septic Services FAQs"
        mainEntityOfPage={`${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/service-areas/austin`}
      />
      
      <BreadcrumbSchema
        items={[
          { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/` },
          { name: "Service Areas", item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/service-areas` },
          { name: "Austin", item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}/service-areas/austin` }
        ]}
      />
    </div>
  )
}
