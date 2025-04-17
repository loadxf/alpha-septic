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
  title: "Dripping Springs Septic Services | Alpha Septic Services",
  description:
    "Professional septic tank pumping, maintenance, and repair services in Dripping Springs, TX. 24/7 emergency service available. Call Alpha Septic Services today!",
  keywords:
    "Dripping Springs septic services, septic tank pumping Dripping Springs, septic cleaning Dripping Springs TX, commercial septic Dripping Springs, emergency septic service Dripping Springs, Hill Country septic services, Dripping Springs TX septic company",
  alternates: {
    canonical: "process.env.NEXT_PUBLIC_SITE_URL/service-areas/dripping-springs",
  },
}

export default function DrippingSpringsServiceArea() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Dripping Springs", href: "/service-areas/dripping-springs", isCurrent: true },
  ]

  // Local FAQs specific to Dripping Springs
  const drippingSpringsFaqs = [
    {
      question: "How often should Dripping Springs homeowners pump their septic tanks?",
      answer: "Dripping Springs homeowners should typically have their septic tanks pumped every 3-5 years. However, properties with heavy usage or those in areas with rocky Hill Country soil may require more frequent maintenance. Dripping Springs' rural landscape and varying soil conditions make regular septic maintenance especially important for preventing issues."
    },
    {
      question: "Do you provide emergency septic services in all parts of Dripping Springs?",
      answer: "Yes, we provide 24/7 emergency septic services throughout all areas of Dripping Springs including Belterra, Sawyer Ranch, Highpointe, and other rural properties. Our response teams are strategically located to ensure prompt service no matter where you are in the Dripping Springs area."
    },
    {
      question: "What are Dripping Springs' regulations regarding septic systems?",
      answer: "Dripping Springs follows Hays County regulations for septic systems, with additional oversight due to water quality concerns in the Hill Country. All systems require permits for installation and major repairs. Dripping Springs is located in the Edwards Aquifer Contributing Zone, which means stricter standards may apply to protect groundwater. Our team is familiar with all local regulations and can help ensure your system remains compliant."
    },
    {
      question: "How do Hill Country soil conditions affect septic maintenance in Dripping Springs?",
      answer: "Dripping Springs has challenging soil conditions typical of the Texas Hill Country, including shallow limestone bedrock and thin topsoil in many areas. These conditions can affect system design and drainage, often requiring specialized septic solutions like aerobic treatment units. Our technicians understand Dripping Springs' local soil variations and can provide tailored maintenance recommendations for your specific property."
    }
  ]

  // Dripping Springs-specific reviews
  const drippingSpringsReviews = [
    {
      author: "David R.",
      rating: 5,
      date: "2023-08-12",
      text: "Alpha Septic was incredibly helpful with our rural property in Dripping Springs. They navigated our rocky soil conditions expertly and provided great advice for maintaining our system on a large acreage property."
    },
    {
      author: "Laura K.",
      rating: 5,
      date: "2023-09-20",
      text: "After moving to the Hill Country from Houston, we had no idea how to maintain our septic system. Alpha provided excellent service and education, making the transition to rural living much easier."
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
                Septic Tank Services in Dripping Springs, Texas
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional septic tank pumping, cleaning, and maintenance for Dripping Springs homes and properties.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Trusted Septic Services in Dripping Springs</h2>
              <p className="text-gray-500">
                Alpha Septic Services is Dripping Springs' premier provider of professional septic system services. We've been
                serving the Dripping Springs community for years, building a reputation for reliability, quality workmanship, and
                exceptional customer service.
              </p>
              <p className="text-gray-500">
                Our team of experienced technicians understands the unique challenges that Hill Country properties face, including
                rocky soil conditions, water conservation requirements, and specific local regulations. We provide comprehensive services to
                keep your septic system functioning properly year-round.
              </p>

              <h3 className="text-xl font-bold mt-6">Our Dripping Springs Septic Services Include:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Residential septic tank pumping and cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Aerobic treatment unit maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>24/7 emergency septic service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Rural property septic solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Septic inspections and maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Commercial septic services</span>
                </li>
              </ul>

              <div className="flex flex-col gap-2 sm:flex-row pt-4">
                <Link href="/book-now">
                  <Button size="lg" className="btn-primary">
                    Schedule Septic Service in Dripping Springs
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55242.30358522563!2d-98.0864173708008!3d30.192879000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b41940ea245d3%3A0xdae2ee339f6ff568!2sDripping%20Springs%2C%20TX!5e0!3m2!1sen!2sus!4v1649887661364!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Dripping Springs, Texas septic service area"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Dripping Springs Areas We Serve</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Belterra</h3>
                  </div>
                  <p className="text-gray-500">
                    Providing specialized septic services to Belterra homes with environmentally-conscious solutions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Sawyer Ranch</h3>
                  </div>
                  <p className="text-gray-500">
                    Serving the Sawyer Ranch community with reliable septic pumping, cleaning, and maintenance services.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Highpointe</h3>
                  </div>
                  <p className="text-gray-500">
                    Providing comprehensive septic services to Highpointe residents and businesses.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Headwaters</h3>
                  </div>
                  <p className="text-gray-500">
                    Serving the Headwaters community with professional septic tank pumping and maintenance services.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Rural Properties</h3>
                  </div>
                  <p className="text-gray-500">
                    Providing specialized septic services to rural acreage properties throughout the Dripping Springs area.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <h3 className="text-xl font-bold">Historic Dripping Springs</h3>
                  </div>
                  <p className="text-gray-500">
                    Extending our septic services to businesses and homes in the historic downtown area.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Dripping Springs Residents Choose Alpha Septic Services</h2>
              <div className="bg-white p-6 rounded-lg shadow-custom">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">Hill Country Expertise</h3>
                      <p className="text-gray-500">
                        Our technicians understand the unique challenges of Hill Country properties, including rocky soil conditions and water conservation requirements.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">24/7 Emergency Service</h3>
                      <p className="text-gray-500">
                        Septic emergencies don't wait for business hours. Our emergency team is available 24/7 to
                        respond quickly to urgent situations throughout the Dripping Springs area.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">Edwards Aquifer Compliance</h3>
                      <p className="text-gray-500">
                        We understand the additional environmental requirements for properties in the Edwards Aquifer Contributing Zone, ensuring your system meets all regulations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">Rural Property Solutions</h3>
                      <p className="text-gray-500">
                        We specialize in serving the unique needs of larger rural properties common in the Dripping Springs area, providing solutions for acreage homes and ranches.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h2 className="text-2xl font-bold mb-4">Dripping Springs Septic Services FAQs</h2>
              <div className="space-y-6">
                {drippingSpringsFaqs.map((faq, index) => (
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
              <h2 className="text-2xl font-bold mb-4">Dripping Springs Septic Considerations</h2>
              <p className="text-gray-500 mb-4">
                Dripping Springs property owners face unique challenges with septic systems due to the Hill Country environment:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-500">
                <li>Rocky soil and shallow limestone bedrock can require specialized system designs</li>
                <li>Many properties require aerobic treatment units rather than conventional septic tanks</li>
                <li>Water conservation is important for septic system longevity in the Hill Country</li>
                <li>Edwards Aquifer Contributing Zone regulations apply to many properties</li>
                <li>Larger lot sizes often mean longer drain fields and more complex systems</li>
              </ul>
              <p className="text-gray-500">
                Our technicians are trained to address these unique Hill Country conditions and can recommend the best solutions for your Dripping Springs property.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h2 className="text-2xl font-bold mb-4">What Dripping Springs Customers Say About Us</h2>
              <div className="space-y-6">
                {drippingSpringsReviews.map((review, index) => (
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
                  <span className="ml-2 text-xl font-bold">4.8</span>
                  <span className="ml-1 text-gray-500">(53 reviews)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h2 className="text-2xl font-bold mb-4">Contact Us For Septic Services in Dripping Springs</h2>
              <p className="text-gray-500 mb-4">
                Ready to schedule your septic service in Dripping Springs? Contact Alpha Septic Services today at <a href="tel:+15127937867" className="text-brand-blue font-medium">(512) 793-7867</a> or use our online booking system to request an appointment.
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
        title="Need Septic Services in Dripping Springs?"
        description="Contact Alpha Septic Services today for reliable, professional septic tank pumping and maintenance services throughout Dripping Springs, TX."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* Structured data using new components */}
      <LocalBusinessSchema
        businessName="Alpha Septic Services"
        slug="service-areas/dripping-springs"
        description="Professional septic services in Dripping Springs, TX providing septic tank pumping, cleaning, maintenance and emergency services for Hill Country properties."
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
          "Dripping Springs, TX",
          "Belterra, TX",
          "Sawyer Ranch, TX",
          "Highpointe, TX",
          "Headwaters, TX"
        ]}
        reviews={drippingSpringsReviews}
        aggregateRating={{
          ratingValue: 4.8,
          reviewCount: 53
        }}
      />

      <ServiceSchema
        serviceName="Septic Tank Services"
        serviceType="Septic System Maintenance"
        provider="Alpha Septic Services"
        areaServed="Dripping Springs, TX"
        description="Professional septic tank pumping, cleaning, and maintenance services in Dripping Springs, TX"
      />

      <FAQSchema faqs={drippingSpringsFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />
    </main>
  )
}
