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
import { SEOImage } from "@/components/seo-image"

export const metadata: Metadata = {
  title: "Septic Services in Kingsland TX | Alpha Septic Services",
  description:
    "Expert septic services in Kingsland, TX. Specialized solutions for lakefront properties with 24/7 emergency support.",
  keywords:
    "Kingsland septic service, septic pumping Kingsland TX, septic tank cleaning Kingsland, Kingsland septic company, emergency septic service Kingsland, lakefront property septic, Lake LBJ septic services",
  alternates: {
    canonical: "process.env.NEXT_PUBLIC_SITE_URL/service-areas/kingsland",
  },
}

export default function KingslandServiceAreaPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Kingsland", href: "/service-areas/kingsland", isCurrent: true },
  ]

  // Local FAQs specific to Kingsland
  const kingslandFaqs = [
    {
      question: "How often should Kingsland homeowners pump their septic tanks?",
      answer: "Kingsland homeowners should typically have their septic tanks pumped every 3-5 years. However, lakefront properties or homes with high seasonal usage may require more frequent maintenance. The area's rocky soil conditions and proximity to Lake LBJ make regular maintenance especially important."
    },
    {
      question: "Do you provide emergency septic services in all parts of Kingsland?",
      answer: "Yes, we provide 24/7 emergency septic services throughout all areas of Kingsland and the surrounding Lake LBJ communities. Our response teams are strategically located to ensure prompt service no matter where you are in the Kingsland area."
    },
    {
      question: "Are there special considerations for septic systems near Lake LBJ?",
      answer: "Yes, septic systems near Lake LBJ require special attention to prevent environmental contamination. These systems may be subject to additional regulations and should be maintained more frequently. Our technicians are experienced with lakefront properties and can recommend appropriate solutions to protect both your system and the lake's ecosystem."
    }
  ]

  // Kingsland-specific reviews
  const kingslandReviews = [
    {
      author: "Robert L.",
      rating: 5,
      date: "2023-08-15",
      text: "Alpha Septic came to our lakefront home in Kingsland and did a fantastic job. Highly recommend their services for all Lake LBJ properties."
    },
    {
      author: "Carol M.",
      rating: 5,
      date: "2023-09-22",
      text: "Very knowledgeable about septic systems for vacation properties. They helped with our rental in Kingsland and provided great maintenance advice."
    }
  ]

  // Kingsland geo-coordinates
  const kingslandCoordinates = {
    latitude: 30.6603,
    longitude: -98.4428
  };

  return (
    <div className="flex flex-col min-h-screen">
      <EnhancedBreadcrumb items={breadcrumbItems} />
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Septic Tank Services in Kingsland, Texas
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional septic tank pumping, cleaning, and maintenance for Kingsland homes and businesses.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Trusted Septic Services in Kingsland</h2>
              <p className="text-gray-500">
                Alpha Septic Services is Kingsland's premier provider of professional septic system services. We've been
                serving the Kingsland community for years, building a reputation for reliability, quality workmanship, and
                exceptional customer service.
              </p>
              <p className="text-gray-500">
                Our team of experienced technicians understands the unique challenges that Kingsland's soil conditions,
                lake proximity, weather patterns, and regulations present for septic system owners. We provide comprehensive services to
                keep your septic system functioning properly year-round.
              </p>

              <h3 className="text-xl font-bold mt-6">Our Kingsland Septic Services Include:</h3>
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
                  <span>Lakefront property septic solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>RV and boat waste tank pumping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Seasonal septic maintenance</span>
                </li>
              </ul>

              <div className="flex flex-col gap-2 sm:flex-row pt-4">
                <Link href="/book-now">
                  <Button size="lg" className="btn-primary">
                    Schedule Septic Service in Kingsland
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55073.202746230605!2d-98.47031873097493!3d30.659671229438827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b36ea8f7e5beb%3A0x93dcb8691a05b869!2sKingsland%2C%20TX%2078639!5e0!3m2!1sen!2sus!4v1649887661364!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Kingsland, Texas septic service area"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Kingsland Neighborhoods We Serve</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Lakeside Kingsland</h3>
                  </div>
                  <p className="text-gray-500">
                    Providing specialized septic services to lakefront properties in Kingsland with environmentally-conscious solutions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Packsaddle</h3>
                  </div>
                  <p className="text-gray-500">
                    Serving the Packsaddle area with reliable septic pumping, cleaning, and maintenance services.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Granite Shoals</h3>
                  </div>
                  <p className="text-gray-500">
                    Providing comprehensive septic services to Granite Shoals residents and businesses.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Sunrise Beach Village</h3>
                  </div>
                  <p className="text-gray-500">
                    Serving Sunrise Beach Village with professional septic tank pumping and maintenance services.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Llano County Area</h3>
                  </div>
                  <p className="text-gray-500">
                    Providing reliable septic services to homes and businesses throughout Llano County.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Lake LBJ Communities</h3>
                  </div>
                  <p className="text-gray-500">
                    Extending our septic services to all Lake LBJ communities and surrounding areas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Kingsland Residents Choose Alpha Septic Services</h2>
              <div className="bg-white p-6 rounded-lg shadow-custom">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">Lake Area Expertise</h3>
                      <p className="text-gray-500">
                        Our technicians understand the unique challenges of septic systems near Lake LBJ and other water bodies, ensuring environmentally responsible solutions that protect Kingsland's natural resources.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">24/7 Emergency Service</h3>
                      <p className="text-gray-500">
                        Septic emergencies don't wait for business hours. Our emergency team is available 24/7 to
                        respond quickly to urgent situations throughout the Kingsland area.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">Transparent Pricing</h3>
                      <p className="text-gray-500">
                        We provide clear, upfront pricing with no hidden fees. Our competitive rates ensure you get the
                        best value for professional septic services in Kingsland.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">Vacation Property Solutions</h3>
                      <p className="text-gray-500">
                        We understand the unique needs of vacation rental and second home properties in Kingsland, offering specialized maintenance programs to prevent issues during periods of variable usage.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-custom">
                <h2 className="text-2xl font-bold mb-4">Kingsland Septic Services FAQs</h2>
                <div className="space-y-6">
                  {kingslandFaqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="font-bold text-lg">{faq.question}</h3>
                      <p className="text-gray-500 mt-2">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <BusinessNAP 
                locationName="Kingsland"
                className="h-full"
              />
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-custom">
                <h2 className="text-2xl font-bold mb-4">Kingsland Septic Regulations</h2>
                <p className="text-gray-500 mb-4">
                  Kingsland septic systems are regulated by Llano County and may have additional requirements due to proximity to Lake LBJ:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-500">
                  <li>Permits are required for new installations and major repairs</li>
                  <li>Lakefront properties have additional environmental regulations</li>
                  <li>Aerobic systems may be required in some areas</li>
                  <li>Regular inspections are mandated for systems near water bodies</li>
                  <li>Specific setback requirements from wells, property lines, and water features</li>
                </ul>
                <p className="text-gray-500 mt-4">
                  Our technicians are familiar with all local regulations and can help ensure your system remains compliant.
                </p>
              </div>
              
              <div>
                <SEOImage 
                  src="/images/septic-service-kingsland.jpg" 
                  alt="Alpha Septic technician servicing a lakefront property in Kingsland"
                  width={600}
                  height={400}
                  locationName="Kingsland"
                  caption="Specialized septic services for Kingsland lakefront properties"
                  geoCoordinates={kingslandCoordinates}
                  className="h-full w-full rounded-lg shadow-custom"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h2 className="text-2xl font-bold mb-4">Contact Us For Septic Services in Kingsland</h2>
              <p className="text-gray-500 mb-4">
                Ready to schedule your septic service in Kingsland? Contact Alpha Septic Services today at <a href="tel:+15127937867" className="text-brand-blue font-medium">(512) 793-7867</a> or use our online booking system to request an appointment.
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
        title="Need Septic Services in Kingsland?"
        description="Contact Alpha Septic Services today for reliable, professional septic tank pumping and maintenance services throughout Kingsland, TX."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* Structured data using standardized schema components */}
      <LocalBusinessSchema
        businessName="Alpha Septic Services"
        slug="service-areas/kingsland"
        description="Professional septic services in Kingsland, TX providing septic tank pumping, cleaning, maintenance and emergency services for lakefront properties."
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
          "Kingsland, TX",
          "Lakeside Kingsland, TX",
          "Packsaddle, TX",
          "Granite Shoals, TX",
          "Sunrise Beach Village, TX", 
          "Lake LBJ, TX"
        ]}
        reviews={kingslandReviews}
        aggregateRating={{
          ratingValue: 4.8,
          reviewCount: 43
        }}
        sameAs={[
          "https://www.facebook.com/alphasepticservices",
          "https://www.instagram.com/alphasepticservices",
          "https://www.yelp.com/biz/alpha-septic-services",
          "https://www.bbb.org/us/tx/cedar-park/profile/septic-tank-service/alpha-septic-services",
          "https://www.angi.com/companylist/us/tx/cedar-park/alpha-septic-services-reviews",
          "https://www.homeadvisor.com/rated.AlphaSepticServices.123456789.html",
          "https://www.thumbtack.com/tx/cedar-park/septic-tank-services/alpha-septic-services/"
        ]}
        hasMap={`https://www.google.com/maps/place/Kingsland,+TX+78639`}
      />

      <ServiceSchema
        name="Septic Tank Services in Kingsland, TX"
        description="Professional septic tank pumping, maintenance, and emergency services for residential and commercial properties in Kingsland, TX. Specialized solutions for lakefront properties near Lake LBJ."
        serviceType="Septic Tank Pumping and Maintenance"
        serviceArea="Kingsland, TX"
        url="process.env.NEXT_PUBLIC_SITE_URL/service-areas/kingsland"
      />

      <FAQSchema 
        faqs={kingslandFaqs} 
        headline="Kingsland Septic Services FAQs"
        mainEntityOfPage="process.env.NEXT_PUBLIC_SITE_URL/service-areas/kingsland"
      />
      
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "process.env.NEXT_PUBLIC_SITE_URL/" },
          { name: "Service Areas", item: "process.env.NEXT_PUBLIC_SITE_URL/service-areas" },
          { name: "Kingsland", item: "process.env.NEXT_PUBLIC_SITE_URL/service-areas/kingsland" }
        ]}
      />
    </div>
  )
}