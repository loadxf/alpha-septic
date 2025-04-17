import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, Clock } from "lucide-react"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Contact Alpha Septic Services | Austin TX",
  description:
    "Contact Alpha Septic Services for professional septic tank pumping, cleaning, and maintenance in Austin and surrounding areas. Available 24/7 for emergency service.",
  keywords: [
    "contact septic service",
    "septic service phone number",
    "Austin septic company contact",
    "septic emergency contact",
    "septic service Austin",
    "septic pumping contact",
    "grease trap service contact",
    "schedule septic service",
    "septic maintenance appointment",
    "septic company Austin",
  ],
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb items={[{ label: "Contact Us", href: "/contact", isCurrent: true }]} />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch with our team for septic services, questions, or to schedule an appointment.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <div className="grid gap-6">
                  <div className="flex items-start gap-3">
                    <Phone className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-gray-500">For scheduling and general inquiries:</p>
                      <a href="tel:5127937867" className="text-brand-blue hover:underline">
                        (512) 793-PUMP (7867)
                      </a>
                      <p className="text-gray-500 mt-2">For 24/7 emergency service:</p>
                      <a href="tel:5127937867" className="text-brand-blue hover:underline">
                        (512) 793-PUMP (7867)
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-500">For quotes and information:</p>
                      <a href="mailto:service@callalphaseptic.com" className="text-brand-blue hover:underline">
                        service@callalphaseptic.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold">Hours of Operation</h3>
                      <p className="text-gray-500">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                        <br />
                        <span className="font-semibold">Emergency Service: Available 24/7</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Service Areas</h2>
                <p className="text-gray-500">
                  We provide septic services throughout Austin and surrounding areas, including:
                </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center">Austin</div>
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center">Round Rock</div>
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center">Cedar Park</div>
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center">Georgetown</div>
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center">Leander</div>
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center">Pflugerville</div>
                </div>
                <p className="text-gray-500 mt-2">
                  Don't see your area listed? Contact us to check if we service your location.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-custom">
                <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-6xl mt-8">
            <div className="relative h-[400px] overflow-hidden rounded-xl shadow-custom">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.76983794948!2d-97.82036583351339!3d30.307982306428267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1649887661364!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of service areas in Austin, Texas"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Page Schema */}
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Alpha Septic Services",
            description: "Contact information for Alpha Septic Services in Austin, TX",
            mainContentOfPage: {
              "@type": "WebPageElement",
              isPartOf: {
                "@id": "https://CallAlphaSeptic.com/contact",
              },
            },
            mainEntity: {
              "@type": "LocalBusiness",
              name: "Alpha Septic Services",
              telephone: "+15127937867",
              email: "service@callalphaseptic.com",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "14:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "00:00",
                  closes: "00:00",
                },
              ],
              specialOpeningHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                description: "Emergency Service",
                opens: "00:00",
                closes: "23:59",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              },
            },
          }),
        }}
      />
    </div>
  )
}
