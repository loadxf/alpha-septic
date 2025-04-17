import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { CheckCircle } from "lucide-react"
import Script from "next/script"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Seasonal Septic Services Austin TX | Alpha Septic Services",
  description:
    "Specialized seasonal septic maintenance services for winter preparation, spring maintenance, and summer care in Austin and surrounding areas.",
  keywords:
    "seasonal septic service, winter septic maintenance, spring septic service, summer septic care, Austin seasonal septic, septic winterization",
}

export default function SeasonalServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Seasonal Services", href: "/services/seasonal", isCurrent: true },
        ]}
      />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Seasonal Septic Services</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Specialized maintenance services to keep your septic system functioning properly year-round.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Year-Round Septic Care</h2>
              <p className="text-gray-500">
                At Alpha Septic Services, we understand that different seasons bring different challenges for your
                septic system. Our seasonal septic services are designed to address these specific needs, ensuring your
                system functions properly throughout the year.
              </p>
              <p className="text-gray-500">
                From winter preparation to summer maintenance, our experienced technicians provide specialized care that
                helps prevent seasonal issues and extends the life of your septic system.
              </p>

              <h3 className="text-xl font-bold mt-6">Our Seasonal Services Include:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Winter septic system preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Spring system inspections and maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Summer care for high-usage periods</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Fall preparation and system checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Seasonal maintenance programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Weather-related emergency services</span>
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
                src="/images/winter-septic-pumping.webp"
                alt="Seasonal septic maintenance service during winter in Austin area"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Seasonal Septic Challenges & Solutions</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-custom">
                    <h3 className="text-xl font-bold mb-2">Winter Challenges</h3>
                    <p className="text-gray-500 mb-4">
                      Cold temperatures can slow bacterial activity in your septic tank and potentially cause freezing
                      in pipes and drain fields.
                    </p>
                    <h4 className="font-bold text-brand-blue">Our Winter Solutions:</h4>
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                        <span>Insulation recommendations for exposed pipes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                        <span>Pre-winter system inspection and pumping</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                        <span>Advice on maintaining bacterial activity</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-custom">
                    <h3 className="text-xl font-bold mb-2">Spring Challenges</h3>
                    <p className="text-gray-500 mb-4">
                      Heavy spring rains can saturate soil and cause water infiltration into septic systems, potentially
                      leading to backups.
                    </p>
                    <h4 className="font-bold text-brand-blue">Our Spring Solutions:</h4>
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                        <span>Post-winter system inspection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                        <span>Drain field assessment and maintenance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                        <span>Water diversion recommendations</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-custom">
                    <h3 className="text-xl font-bold mb-2">Summer Challenges</h3>
                    <p className="text-gray-500 mb-4">
                      Increased water usage from summer activities, guests, and vacation time can overload your septic
                      system.
                    </p>
                    <h4 className="font-bold text-brand-blue">Our Summer Solutions:</h4>
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                        <span>Pre-summer pumping for high-usage homes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                        <span>Water conservation recommendations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                        <span>System capacity assessment</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-custom">
                    <h3 className="text-xl font-bold mb-2">Fall Challenges</h3>
                    <p className="text-gray-500 mb-4">
                      Falling leaves and debris can clog vents and filters, while cooling temperatures begin to slow
                      bacterial activity.
                    </p>
                    <h4 className="font-bold text-brand-blue">Our Fall Solutions:</h4>
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                        <span>Vent and filter cleaning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                        <span>Pre-winter system assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                        <span>Recommendations for holiday preparations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Annual Maintenance Program</h2>
              <div className="bg-white p-6 rounded-lg shadow-custom">
                <p className="text-gray-500 mb-4">
                  Our Annual Maintenance Program provides year-round peace of mind with scheduled seasonal inspections
                  and priority service. Benefits include:
                </p>
                <ul className="grid gap-4 sm:grid-cols-2 mt-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                    <span>Quarterly seasonal inspections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                    <span>Priority scheduling for all services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                    <span>Discounted pumping services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                    <span>Detailed maintenance records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                    <span>Early problem detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                    <span>Customized maintenance schedule</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/contact">
                    <Button>Learn More About Our Maintenance Program</Button>
                  </Link>
                </div>
              </div>
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
            name: "Seasonal Septic Services",
            serviceType: "Seasonal Septic Maintenance",
            provider: {
              "@type": "LocalBusiness",
              name: "Alpha Septic Services",
              telephone: "5127937867",
              description: "Professional seasonal septic services in Austin and surrounding areas",
              areaServed: "Austin, TX and surrounding areas",
            },
            description:
              "Specialized maintenance services to keep your septic system functioning properly year-round in Austin and surrounding areas.",
            areaServed: {
              "@type": "State",
              name: "Texas",
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
                name: "How do cold temperatures affect my septic system?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cold temperatures can slow down the bacterial activity in your septic tank, reducing its ability to break down waste. Freezing can also occur in pipes, the tank, or drain field, potentially causing backups or system damage. Our winter services help prevent these issues through proper insulation recommendations and system preparation.",
                },
              },
              {
                "@type": "Question",
                name: "Should I pump my septic tank before winter?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pumping your septic tank before winter is often recommended, especially if it's been 2-3 years since your last pumping or if you expect heavy usage during the holiday season. A pumped tank provides more capacity for the slower bacterial decomposition that occurs during colder months.",
                },
              },
              {
                "@type": "Question",
                name: "How can I prepare my septic system for summer guests?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To prepare your septic system for increased summer usage, consider scheduling a pumping before guests arrive, spreading out water usage (laundry, showers, etc.), informing guests about what not to flush, and being mindful of excessive water use from activities like filling pools or extended showers.",
                },
              },
              {
                "@type": "Question",
                name: "What should I do if heavy rains flood my drain field?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If heavy rains flood your drain field, reduce water usage in your home until the soil dries out. Don't drive or place heavy equipment on the saturated drain field, as this can compact soil and cause damage. If you notice sewage backups, contact us immediately for emergency service.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}
