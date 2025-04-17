import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"
import { FAQSection } from "@/components/FAQSection"
import { JsonLd } from "@/components/json-ld"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Septic Services | Alpha Septic Services Austin TX",
  description:
    "Comprehensive septic services for residential and commercial properties in Austin. From routine pumping to emergency repairs, we provide reliable, professional service.",
  keywords: [
    "septic services",
    "septic pumping",
    "septic cleaning",
    "grease trap cleaning",
    "emergency septic service",
    "commercial septic",
    "residential septic",
    "Austin septic company",
    "septic maintenance",
    "septic repair",
  ],
  alternates: {
    canonical: "/services",
  },
}

// Sample services data
const services = [
  {
    id: "residential",
    title: "Residential Septic Services",
    description:
      "Complete septic system services for homeowners, including routine pumping, inspections, and maintenance.",
    image: "/images/septic-pumping.webp",
    features: [
      "Septic tank pumping and cleaning",
      "System inspections and evaluations",
      "Routine maintenance programs",
      "Filter cleaning and replacement",
      "Minor repairs and troubleshooting",
    ],
    link: "/services/residential",
  },
  {
    id: "commercial",
    title: "Commercial Septic Services",
    description:
      "Specialized septic solutions for businesses, restaurants, and commercial properties with high-volume needs.",
    image: "/images/commercial-septic-pumping.webp",
    features: [
      "High-capacity system servicing",
      "Customized maintenance schedules",
      "Compliance documentation",
      "System monitoring and management",
      "After-hours servicing available",
    ],
    link: "/services/commercial",
  },
  {
    id: "emergency",
    title: "Emergency Septic Services",
    description: "24/7 emergency response for septic backups, overflows, and system failures when you need help fast.",
    image: "/images/emergency-septic-pumping.webp",
    features: [
      "Available 24/7/365",
      "Rapid response times",
      "Backup and overflow resolution",
      "System diagnostics and repair",
      "Temporary solutions while awaiting repairs",
    ],
    link: "/services/emergency",
  },
  {
    id: "grease-trap",
    title: "Grease Trap Cleaning",
    description:
      "Professional grease trap pumping and maintenance for restaurants and food service establishments to ensure code compliance.",
    image: "/images/grease-trap-pumping.webp",
    features: [
      "Complete trap pumping and cleaning",
      "Compliance with local regulations",
      "Documentation for health inspections",
      "Preventative maintenance programs",
      "Odor control solutions",
    ],
    link: "/services/grease-trap",
  },
  {
    id: "rv-services",
    title: "RV Septic Services",
    description: "Convenient waste tank pumping and cleaning services for recreational vehicles and mobile homes.",
    image: "/images/rv-septic-pumping.webp",
    features: [
      "Black and gray water tank pumping",
      "Tank rinsing and deodorizing",
      "System inspections",
      "Sensor cleaning",
      "Mobile service available",
    ],
    link: "/services/rv-services",
  },
  {
    id: "seasonal",
    title: "Seasonal Septic Services",
    description:
      "Specialized maintenance to prepare your septic system for seasonal changes and protect it year-round.",
    image: "/images/winter-septic-pumping.webp",
    features: [
      "Winter preparation",
      "Spring system check-ups",
      "Summer high-usage preparation",
      "Fall maintenance and cleaning",
      "Freeze protection measures",
    ],
    link: "/services/seasonal",
  },
]

// Sample FAQ data for services page
const servicesFaqs = [
  {
    question: "How often should I have my septic tank pumped?",
    answer:
      "For most residential properties, we recommend having your septic tank pumped every 3-5 years. However, this can vary based on household size, tank capacity, and water usage. Larger households or smaller tanks may require more frequent pumping. We can help establish the right schedule for your specific system during our initial service visit.",
  },
  {
    question: "What are the signs that my septic tank needs pumping?",
    answer:
      "Common signs include: slow drains throughout your home, gurgling sounds in plumbing, sewage odors indoors or outdoors, pooling water or soggy soil around your drain field, and unusually lush, green grass over your drain field. If you notice any of these signs, it's best to contact us promptly to avoid more serious issues.",
  },
  {
    question: "Do you provide emergency septic services outside of business hours?",
    answer:
      "Yes, we offer 24/7 emergency septic services for urgent situations like backups, overflows, or system failures. Our emergency team is available nights, weekends, and holidays to address critical septic issues promptly. Additional fees may apply for after-hours service.",
  },
  {
    question: "How long does a typical septic pumping service take?",
    answer:
      "A standard residential septic pumping service typically takes 1-2 hours to complete. This includes locating the tank, removing the lid, pumping out the contents, inspecting accessible components, and replacing the lid. Commercial services or larger tanks may take longer. Factors that can extend service time include difficult access, buried tank lids, or additional services being performed.",
  },
  {
    question: "What should I do to prepare for my septic pumping appointment?",
    answer:
      "To prepare for your appointment: 1) Locate your septic tank and ensure access is clear, 2) Remove any obstacles blocking the path to your tank, 3) Ensure pets are secured away from the work area, 4) Make sure someone is available to show our technician where the tank is located if it's not easily visible. If you're unsure about your tank's location, our technicians can help locate it for you.",
  },
]

export default function ServicesPage() {
  // Create service schema for each service
  const servicesSchema = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Alpha Septic Services",
      url: "https://CallAlphaSeptic.com",
    },
    serviceType: service.title,
    url: `https://CallAlphaSeptic.com${service.link}`,
    image: `https://CallAlphaSeptic.com${service.image}`,
  }))

  return (
    <div className="flex flex-col min-h-screen">
      <EnhancedBreadcrumb items={[{ label: "Services", href: "/services", isCurrent: true }]} />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Septic Services</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive septic solutions for residential and commercial properties in Austin and surrounding
                areas.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-6xl py-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={service.link}
                  className="group flex flex-col overflow-hidden rounded-lg shadow-custom bg-white hover:shadow-custom-hover transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-6">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-brand-blue transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="text-gray-500 mb-4">{service.description}</p>
                    <div className="mt-auto">
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="bg-white p-8 rounded-lg shadow-custom">
              <h2 className="text-2xl font-bold mb-6">Why Choose Alpha Septic Services?</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-start">
                  <div className="mb-4 rounded-full bg-blue-100 p-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Experienced Professionals</h3>
                  <p className="text-gray-500">
                    Our technicians have years of experience and are fully trained in the latest septic technologies and
                    techniques.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="mb-4 rounded-full bg-blue-100 p-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">24/7 Emergency Service</h3>
                  <p className="text-gray-500">
                    Septic emergencies don't wait for business hours. Our team is available around the clock for urgent
                    situations.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="mb-4 rounded-full bg-blue-100 p-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Transparent Pricing</h3>
                  <p className="text-gray-500">
                    We provide clear, upfront pricing with no hidden fees or surprise charges after the work is done.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="mb-4 rounded-full bg-blue-100 p-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Environmentally Responsible</h3>
                  <p className="text-gray-500">
                    We follow all environmental regulations and use eco-friendly practices in our septic services.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="mb-4 rounded-full bg-blue-100 p-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Comprehensive Solutions</h3>
                  <p className="text-gray-500">
                    From routine maintenance to complex repairs, we offer a complete range of septic services.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="mb-4 rounded-full bg-blue-100 p-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Local Expertise</h3>
                  <p className="text-gray-500">
                    We understand Austin's unique soil conditions, regulations, and septic challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <FAQSection
              title="Frequently Asked Questions About Our Services"
              description="Get answers to common questions about our septic services"
              faqs={servicesFaqs}
            />
          </div>

          <div className="mx-auto max-w-3xl mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Schedule Service?</h2>
            <p className="text-gray-500 mb-6">
              Contact us today to schedule an appointment or request a quote for any of our septic services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-now">
                <Button size="lg">Book Now</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTASection />

      {/* Service Schema for each service */}
      <JsonLd data={servicesSchema} />

      {/* Service List Schema */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Service",
              name: service.title,
              url: `https://CallAlphaSeptic.com${service.link}`,
              description: service.description,
              provider: {
                "@type": "LocalBusiness",
                name: "Alpha Septic Services",
              },
            },
          })),
        }}
      />
    </div>
  )
}
