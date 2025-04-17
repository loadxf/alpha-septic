import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { CheckCircle, ArrowRight } from "lucide-react"
import Script from "next/script"
import { StructuredData } from "@/app/structured-data"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with enhanced darker background */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Background pattern overlay - darker gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-green-900 opacity-90 z-0"></div>

        {/* Enhanced decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          {/* Animated floating circles */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-400 rounded-full opacity-10 blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Geometric shapes */}
          <div className="absolute top-20 right-[20%] w-16 h-16 border-2 border-blue-300 opacity-20 rotate-45"></div>
          <div className="absolute bottom-20 left-[15%] w-24 h-24 border-2 border-green-300 opacity-20 rounded-full"></div>

          {/* Light beams */}
          <div className="absolute top-0 left-1/3 w-1/4 h-full bg-gradient-to-b from-blue-400 to-transparent opacity-5 skew-x-12"></div>
          <div className="absolute top-0 right-1/4 w-1/5 h-full bg-gradient-to-b from-green-400 to-transparent opacity-5 -skew-x-12"></div>

          {/* Dots pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Austin's Premier Septic Service Provider
                </h1>
                <p className="max-w-[600px] text-gray-100 md:text-xl">
                  Professional septic pumping, cleaning, and maintenance services for residential and commercial
                  properties. Available 24/7 for emergency service.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/book-now" className="inline-block">
                  <Button size="lg" className="w-full bg-white text-brand-blue hover:bg-gray-100 border border-white">
                    Book Online
                  </Button>
                </Link>
                <Link href="/services" className="inline-block">
                  <Button size="lg" variant="outline" className="w-full border-white text-brand-blue hover:bg-white/10">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[600px] relative h-[400px] overflow-hidden rounded-xl shadow-xl">
              {/* Enhanced image overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-green-600/20 z-10"></div>
              <div className="absolute inset-0 border-2 border-white/20 rounded-xl z-20 pointer-events-none"></div>
              <Image
                src="/images/septic-pumping.webp"
                alt="Alpha Septic Services truck performing professional septic tank pumping at an Austin residential property"
                fill
                className="object-cover"
                priority
              />
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/40 rounded-tl-xl z-30"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/40 rounded-tr-xl z-30"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-white/40 rounded-bl-xl z-30"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/40 rounded-br-xl z-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive septic solutions for residential and commercial properties
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/services/residential"
              className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/septic-pumping.webp"
                  alt="Residential septic pumping service"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Residential Services</h3>
                <p className="mt-2 text-gray-500">
                  Complete septic system services for homeowners, including routine pumping and maintenance.
                </p>
                <div className="mt-4 flex items-center text-brand-blue">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
            <Link
              href="/services/commercial"
              className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/commercial-septic-pumping.webp"
                  alt="Commercial septic system maintenance being performed by Alpha Septic Services technicians in Austin"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Commercial Services</h3>
                <p className="mt-2 text-gray-500">
                  Specialized septic solutions for businesses, restaurants, and commercial properties.
                </p>
                <div className="mt-4 flex items-center text-brand-blue">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
            <Link
              href="/services/emergency"
              className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/emergency-septic-pumping.webp"
                  alt="24/7 emergency septic service response by Alpha Septic Services team in Austin TX"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Emergency Services</h3>
                <p className="mt-2 text-gray-500">
                  24/7 emergency response for septic backups, overflows, and system failures.
                </p>
                <div className="mt-4 flex items-center text-brand-blue">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
            <Link
              href="/services/grease-trap"
              className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/grease-trap-pumping.webp"
                  alt="Professional restaurant grease trap cleaning and maintenance service in Austin"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Grease Trap Cleaning</h3>
                <p className="mt-2 text-gray-500">
                  Professional grease trap pumping and maintenance for restaurants and commercial kitchens.
                </p>
                <div className="mt-4 flex items-center text-brand-blue">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
            <Link
              href="/services/rv-services"
              className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/rv-septic-pumping.webp"
                  alt="RV and mobile home septic tank pumping and waste disposal services in Austin"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">RV Services</h3>
                <p className="mt-2 text-gray-500">
                  Septic pumping and maintenance services for recreational vehicles and mobile homes.
                </p>
                <div className="mt-4 flex items-center text-brand-blue">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
            <Link
              href="/services/seasonal"
              className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/winter-septic-pumping.webp"
                  alt="Seasonal septic system maintenance and winterization services in Austin TX"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Seasonal Services</h3>
                <p className="mt-2 text-gray-500">
                  Specialized septic maintenance for seasonal changes and weather-related challenges.
                </p>
                <div className="mt-4 flex items-center text-brand-blue">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section moved here */}
      <CTASection />

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center items-center">
              <div className="relative w-[300px] h-[300px]">
                <Image src="/logo.webp" alt="Alpha Septic Services logo" fill className="object-contain" />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Alpha Septic Services?</h2>
                <p className="text-gray-500 md:text-lg">
                  With years of experience serving the Austin area, we provide reliable, professional septic services
                  you can count on.
                </p>
              </div>
              <ul className="grid gap-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <div>
                    <h3 className="font-bold">Experienced Professionals</h3>
                    <p className="text-gray-500">
                      Our technicians have years of experience and are fully trained in the latest septic technologies.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <div>
                    <h3 className="font-bold">24/7 Emergency Service</h3>
                    <p className="text-gray-500">
                      Septic emergencies don't wait for business hours. Our team is available around the clock.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <div>
                    <h3 className="font-bold">Transparent Pricing</h3>
                    <p className="text-gray-500">
                      We provide clear, upfront pricing with no hidden fees or surprise charges.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <div>
                    <h3 className="font-bold">Local Expertise</h3>
                    <p className="text-gray-500">
                      We understand Austin's unique soil conditions, regulations, and septic challenges.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="/about">
                  <Button variant="outline">Learn More About Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Service Areas</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Proudly serving Austin and surrounding communities
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Service area map - left side */}
              <div className="order-2 lg:order-1">
                <div className="rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                  <Image
                    src="/images/alpha-septic-austin-service-area.webp"
                    alt="Map of Alpha Septic Services coverage area in Austin and surrounding cities"
                    width={500}
                    height={500}
                    style={{ width: "auto", height: "auto" }}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* City buttons - right side */}
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2">
                  <Link
                    href="/service-areas/austin"
                    className="flex items-center justify-center rounded-lg border bg-white p-4 text-center shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="font-medium">Austin</span>
                  </Link>
                  <Link
                    href="/service-areas/round-rock"
                    className="flex items-center justify-center rounded-lg border bg-white p-4 text-center shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="font-medium">Round Rock</span>
                  </Link>
                  <Link
                    href="/service-areas/cedar-park"
                    className="flex items-center justify-center rounded-lg border bg-white p-4 text-center shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="font-medium">Cedar Park</span>
                  </Link>
                  <Link
                    href="/service-areas/georgetown"
                    className="flex items-center justify-center rounded-lg border bg-white p-4 text-center shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="font-medium">Georgetown</span>
                  </Link>
                  <Link
                    href="/service-areas/leander"
                    className="flex items-center justify-center rounded-lg border bg-white p-4 text-center shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="font-medium">Leander</span>
                  </Link>
                  <Link
                    href="/service-areas/pflugerville"
                    className="flex items-center justify-center rounded-lg border bg-white p-4 text-center shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="font-medium">Pflugerville</span>
                  </Link>
                  <Link
                    href="/service-areas/buda"
                    className="flex items-center justify-center rounded-lg border bg-white p-4 text-center shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="font-medium">Buda</span>
                  </Link>
                  <Link
                    href="/service-areas/kyle"
                    className="flex items-center justify-center rounded-lg border bg-white p-4 text-center shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="font-medium">Kyle</span>
                  </Link>
                </div>
                <div className="mt-8 text-center">
                  <Link href="/service-areas">
                    <Button variant="outline">View All Service Areas</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Portal Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-purple-100 to-blue-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-200 opacity-20 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-purple-200 opacity-30 blur-xl"></div>
        <div className="absolute top-1/2 right-5 w-8 h-8 text-blue-200 opacity-50">✦</div>
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 text-purple-300 opacity-40">✦</div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Image column */}
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-xl shadow-2xl overflow-hidden border-4 border-white max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/alpha-septic-customer-portal.webp"
                  alt="Alpha Septic Services customer portal interface showing invoices, bookings and maintenance history"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Content column */}
            <div className="order-1 lg:order-2 flex flex-col justify-center space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Your Personal Customer Portal</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Manage your septic service experience with our convenient online customer portal, designed to give you
                  complete control and transparency.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-brand-blue rounded-full p-1 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Access Your Invoices</h3>
                    <p className="text-gray-600">View and download your complete invoice history anytime, anywhere.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-brand-blue rounded-full p-1 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Schedule Services</h3>
                    <p className="text-gray-600">
                      Book appointments online at your convenience with just a few clicks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-brand-blue rounded-full p-1 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Review Service History</h3>
                    <p className="text-gray-600">Track your complete maintenance history and upcoming service dates.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-brand-blue rounded-full p-1 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Receive Service Reminders</h3>
                    <p className="text-gray-600">Get automatic notifications when it's time for routine maintenance.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a href="https://app.servicefusion.com/alphaseptic" target="_blank" rel="noopener noreferrer">
                  <Button size="lg">Access Your Portal</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what our satisfied customers have to say about our services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="mt-4">
                <p className="text-gray-500">
                  "Alpha Septic Services was prompt, professional, and reasonably priced. They explained everything
                  clearly and did a thorough job. I'll definitely use them again for my septic needs."
                </p>
              </blockquote>
              <p className="mt-4 font-medium">- Michael R., Austin</p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="mt-4">
                <p className="text-gray-500">
                  "I had an emergency septic situation on a Sunday evening, and Alpha Septic Services came to the
                  rescue. Their team was out within an hour and fixed the problem quickly. Excellent service!"
                </p>
              </blockquote>
              <p className="mt-4 font-medium">- Jennifer L., Round Rock</p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="mt-4">
                <p className="text-gray-500">
                  "As a restaurant owner, I need reliable grease trap service. Alpha Septic has been servicing our
                  location for years, and they're always dependable, thorough, and professional."
                </p>
              </blockquote>
              <p className="mt-4 font-medium">- David T., Cedar Park</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/reviews">
              <Button variant="outline">Read More Reviews</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Home Page Schema */}
      <StructuredData />
    </div>
  )
}
