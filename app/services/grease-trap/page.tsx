import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { CheckCircle } from "lucide-react"
import Script from "next/script"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Commercial Grease Trap Cleaning Services Austin TX | Alpha Septic Services",
  description:
    "Professional grease trap cleaning and maintenance for restaurants and food service businesses in Austin and surrounding areas. Prevent backups and stay compliant with local regulations.",
  keywords:
    "grease trap cleaning, restaurant grease trap, commercial grease trap service, FOG removal, Austin grease trap cleaning, food service grease trap maintenance",
}

export default function GreaseTrapServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Grease Trap Cleaning", href: "/services/grease-trap", isCurrent: true },
        ]}
      />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Grease Trap Cleaning Services
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional grease trap cleaning and maintenance for restaurants and food service businesses.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Professional Grease Trap Services</h2>
              <p className="text-gray-500">
                At Alpha Septic Services, we understand the importance of properly maintained grease traps for
                restaurants and food service businesses. Our professional grease trap cleaning services help you
                maintain compliance with local regulations and prevent costly plumbing issues.
              </p>
              <p className="text-gray-500">
                Grease traps that aren't regularly cleaned can lead to foul odors, slow drains, and even sewage backups
                that can force your business to close temporarily. Our thorough cleaning process removes all accumulated
                fats, oils, and grease (FOG) to keep your system functioning properly.
              </p>

              <h3 className="text-xl font-bold mt-6">Our Grease Trap Services Include:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Complete grease trap pumping and cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Inspection of trap components and function</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Proper disposal of grease waste</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Documentation for regulatory compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Customized maintenance schedules</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Emergency service for backups or overflows</span>
                </li>
              </ul>

              <div className="flex flex-col gap-2 sm:flex-row pt-4">
                <Link href="/book-now">
                  <Button size="lg" className="btn-primary">
                    Schedule Service
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl shadow-custom">
              <Image
                src="/images/grease-trap.webp"
                alt="Commercial kitchen grease trap being cleaned by Alpha Septic Services technician"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">How Grease Traps Work</h2>
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="relative h-[300px] overflow-hidden rounded-xl shadow-custom">
                  <Image
                    src="/images/grease-trap-diagram.webp"
                    alt="Detailed diagram showing how commercial grease traps function to separate FOG from wastewater"
                    fill
                    className="object-contain bg-white"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-500">
                    Grease traps are designed to separate fats, oils, and grease (FOG) from wastewater before it enters
                    the sewer system. The trap works by:
                  </p>
                  <ol className="space-y-2 list-decimal list-inside text-gray-500">
                    <li>Slowing down the flow of wastewater from sinks and dishwashers</li>
                    <li>Allowing fats, oils, and grease to cool and float to the top</li>
                    <li>Letting solids settle to the bottom</li>
                    <li>Permitting cleaner water to flow out to the sewer system</li>
                    <li>Capturing and storing the FOG until it's pumped out</li>
                  </ol>
                  <p className="text-gray-500">
                    Regular cleaning prevents the trap from becoming too full, which can lead to backups and odors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Regular Grease Trap Maintenance Matters</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="text-xl font-bold mb-2">Regulatory Compliance</h3>
                  <p className="text-gray-500">
                    Most municipalities require regular grease trap cleaning and maintenance for food service
                    establishments. Our service helps you stay compliant with local regulations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="text-xl font-bold mb-2">Prevent Costly Backups</h3>
                  <p className="text-gray-500">
                    Clogged grease traps can cause sewage backups into your kitchen, forcing temporary closure and
                    expensive emergency repairs.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="text-xl font-bold mb-2">Eliminate Odors</h3>
                  <p className="text-gray-500">
                    Accumulated grease can create foul odors that affect your customers' dining experience. Regular
                    cleaning keeps your establishment smelling fresh.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="text-xl font-bold mb-2">Protect Plumbing</h3>
                  <p className="text-gray-500">
                    Grease buildup can damage your plumbing system over time. Regular maintenance extends the life of
                    your pipes and fixtures.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="text-xl font-bold mb-2">Environmental Protection</h3>
                  <p className="text-gray-500">
                    Proper grease disposal prevents fats, oils, and grease from entering the municipal sewer system and
                    potentially harming the environment.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="text-xl font-bold mb-2">Documentation</h3>
                  <p className="text-gray-500">
                    We provide detailed service records that demonstrate your compliance with health department and
                    environmental regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Grease Trap Cleaning Process</h2>
              <ol className="space-y-4 list-decimal list-inside text-gray-500">
                <li className="p-4 bg-white rounded-lg shadow-custom">
                  <span className="font-bold text-lg text-brand-blue">Assessment</span>: We locate your grease trap and
                  assess its size, type, and condition.
                </li>
                <li className="p-4 bg-white rounded-lg shadow-custom">
                  <span className="font-bold text-lg text-brand-blue">Preparation</span>: We prepare the area for
                  cleaning, ensuring minimal disruption to your operations.
                </li>
                <li className="p-4 bg-white rounded-lg shadow-custom">
                  <span className="font-bold text-lg text-brand-blue">Pumping</span>: Using specialized equipment, we
                  remove all accumulated fats, oils, and grease from the trap.
                </li>
                <li className="p-4 bg-white rounded-lg shadow-custom">
                  <span className="font-bold text-lg text-brand-blue">Cleaning</span>: We thoroughly clean the interior
                  of the trap, including baffles, screens, and other components.
                </li>
                <li className="p-4 bg-white rounded-lg shadow-custom">
                  <span className="font-bold text-lg text-brand-blue">Inspection</span>: We inspect the trap for any
                  damage or issues that could affect its performance.
                </li>
                <li className="p-4 bg-white rounded-lg shadow-custom">
                  <span className="font-bold text-lg text-brand-blue">Disposal</span>: All waste is transported and
                  disposed of in accordance with environmental regulations.
                </li>
                <li className="p-4 bg-white rounded-lg shadow-custom">
                  <span className="font-bold text-lg text-brand-blue">Documentation</span>: We provide detailed service
                  records for your compliance needs.
                </li>
              </ol>
              <p className="text-gray-500 mt-4">
                Our technicians are trained to work efficiently and minimize disruption to your business operations. In
                many cases, we can schedule service during off-hours to avoid interfering with your peak business times.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTASection />

      {/* Add Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Grease Trap Cleaning Services",
            serviceType: "Grease Trap Maintenance",
            provider: {
              "@type": "LocalBusiness",
              name: "Alpha Septic Services",
              telephone: "5127937867",
              description: "Professional grease trap cleaning services in Austin and surrounding areas",
              areaServed: "Austin, TX and surrounding areas",
            },
            description:
              "Professional grease trap cleaning and maintenance for restaurants and food service businesses in Austin and surrounding areas.",
            areaServed: {
              "@type": "State",
              name: "Texas",
            },
            audience: {
              "@type": "BusinessAudience",
              audienceType: "Restaurants and Food Service Businesses",
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How often should restaurant grease traps be cleaned?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most restaurants need grease trap cleaning every 1-3 months, depending on the size of the trap and the volume of food prepared. High-volume establishments may require more frequent service. Local regulations may also dictate minimum cleaning frequencies.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if I don't clean my grease trap regularly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Neglected grease traps can cause sewage backups into your kitchen, foul odors, slow drains, and potential health code violations. This can lead to expensive emergency repairs and even temporary closure of your business. Regular maintenance prevents these issues.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide documentation for health inspections?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide detailed service records after each grease trap cleaning. These documents include the date of service, amount of waste removed, and condition of your system. These records are essential for demonstrating compliance during health department inspections.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}
