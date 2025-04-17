import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CTASection } from "@/components/cta-section"
import { CheckCircle, PhoneCall, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Script from "next/script"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "24/7 Emergency Septic Services in Austin TX | Alpha Septic Services",
  description:
    "Immediate emergency septic services for backups, overflows, and system failures in Austin and surrounding areas. Available 24/7 with rapid response times.",
  keywords:
    "emergency septic service, septic backup, septic overflow, septic system failure, 24/7 septic service, Austin emergency septic",
}

export default function EmergencyServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Emergency Services", href: "/services/emergency", isCurrent: true },
        ]}
      />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                24/7 Emergency Septic Services
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Fast response when septic emergencies strike - day or night, weekends, and holidays.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Immediate Response to Septic Emergencies</h2>
              <p className="text-gray-500">
                At Alpha Septic Services, we understand that septic emergencies don't wait for business hours. That's
                why our emergency response team is available 24 hours a day, 7 days a week, to handle urgent situations
                quickly and efficiently.
              </p>
              <p className="text-gray-500">
                Whether you're experiencing a backup, overflow, or complete system failure, our trained technicians will
                arrive promptly with the equipment and expertise needed to resolve your emergency and prevent further
                damage to your property.
              </p>

              <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg mt-6">
                <AlertTriangle className="h-10 w-10 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-amber-700">Emergency Septic Hotline</h3>
                  <p className="text-amber-700">Call immediately for 24/7 emergency service</p>
                  <a
                    href="tel:5127937867"
                    className="text-xl font-bold text-amber-700 hover:underline flex items-center gap-2 mt-1"
                  >
                    <PhoneCall className="h-5 w-5" /> (512) 793-PUMP (7867)
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-6">Our Emergency Services Include:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Septic system backups and overflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Sewage cleanup and sanitization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Drain field failures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Broken or damaged pipes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Pump failures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Alarm troubleshooting</span>
                </li>
              </ul>

              <div className="flex flex-col gap-2 sm:flex-row pt-4">
                <Link href="/book-now">
                  <Button size="lg" className="btn-primary">
                    Request Emergency Service
                  </Button>
                </Link>
                <a href="tel:5127937867">
                  <Button size="lg" variant="outline" className="flex items-center gap-2">
                    <PhoneCall className="h-4 w-4" />
                    Call Now: (512) 793-PUMP (7867)
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl shadow-custom">
              <Image
                src="/images/emergency-septic-pumping.webp"
                alt="Emergency septic service technician responding to a flooded septic system in Austin"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <p className="text-lg font-bold">24/7 Emergency Response</p>
                <p className="text-sm">Our team is ready to respond any time, day or night</p>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Signs You Need Emergency Septic Service</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-lg shadow-custom border-l-4 border-l-red-500">
                  <h3 className="text-xl font-bold mb-2">Sewage Backup</h3>
                  <p className="text-gray-500">
                    Sewage backing up into toilets, sinks, or drains requires immediate attention to prevent health
                    hazards and property damage.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom border-l-4 border-l-red-500">
                  <h3 className="text-xl font-bold mb-2">Pooling Water</h3>
                  <p className="text-gray-500">
                    Standing water or soggy areas around your septic tank or drain field can indicate a serious problem
                    that needs immediate repair.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom border-l-4 border-l-red-500">
                  <h3 className="text-xl font-bold mb-2">Strong Odors</h3>
                  <p className="text-gray-500">
                    Persistent sewage odors inside or outside your home often signal a septic system failure that
                    requires emergency service.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom border-l-4 border-l-red-500">
                  <h3 className="text-xl font-bold mb-2">Slow Drains</h3>
                  <p className="text-gray-500">
                    Multiple slow-draining fixtures throughout your home can indicate a septic system backup that may
                    worsen quickly.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom border-l-4 border-l-red-500">
                  <h3 className="text-xl font-bold mb-2">Gurgling Sounds</h3>
                  <p className="text-gray-500">
                    Unusual gurgling noises from drains, toilets, or pipes often precede a major backup and should be
                    addressed immediately.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom border-l-4 border-l-red-500">
                  <h3 className="text-xl font-bold mb-2">Alarm Activation</h3>
                  <p className="text-gray-500">
                    If your septic system has an alarm that's activated, it's warning you of a potential emergency that
                    needs prompt attention.
                  </p>
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
            name: "Emergency Septic Services",
            serviceType: "Emergency Septic Repair and Pumping",
            provider: {
              "@type": "LocalBusiness",
              name: "Alpha Septic Services",
              telephone: "5127937867",
              description: "24/7 emergency septic services in Austin and surrounding areas",
              areaServed: "Austin, TX and surrounding areas",
              availableLanguage: "English",
            },
            description:
              "24/7 emergency septic services for backups, overflows, and system failures in Austin and surrounding areas.",
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://CallAlphaSeptic.com/services/emergency",
              servicePhone: "5127937867",
              availableLanguage: "English",
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              areaServed: {
                "@type": "State",
                name: "Texas",
              },
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
                name: "What constitutes a septic emergency?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Septic emergencies include sewage backups into your home, overflowing toilets or drains, pooling sewage in your yard, strong sewage odors, and septic alarm activation. Any situation that poses an immediate health risk or property damage requires emergency service.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly can you respond to a septic emergency?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our emergency response team is available 24/7 and typically arrives within 1-2 hours of your call, depending on your location in the Austin area. We prioritize emergencies to minimize damage to your property.",
                },
              },
              {
                "@type": "Question",
                name: "What should I do while waiting for emergency septic service?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "While waiting for our technicians to arrive, stop using all water in your home to prevent additional sewage backup. Keep people and pets away from affected areas, and if possible, turn off water to toilets that are backing up. Do not attempt to open or access the septic tank yourself.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}
