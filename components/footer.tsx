import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react"
import NewsletterForm from "./newsletter-form"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block mb-4">
              <div className="bg-white p-2 rounded-md inline-block">
                <Image src="/logo.webp" alt="Alpha Septic Services Logo" width={140} height={70} />
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Professional septic services for residential and commercial properties in Austin and surrounding areas.
            </p>
            <NewsletterForm />
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/alphasepticservices"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
              >
                <div className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </div>
              </a>
              <a
                href="https://instagram.com/alphasepticservices"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <div className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </div>
              </a>
              <a
                href="https://twitter.com/alphaseptic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
              >
                <div className="bg-gray-800 p-2 rounded-full hover:bg-blue-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/residential" className="text-gray-400 hover:text-white transition-colors">
                  Residential Septic Services
                </Link>
              </li>
              <li>
                <Link href="/services/commercial" className="text-gray-400 hover:text-white transition-colors">
                  Commercial Septic Services
                </Link>
              </li>
              <li>
                <Link href="/services/emergency" className="text-gray-400 hover:text-white transition-colors">
                  Emergency Septic Services
                </Link>
              </li>
              <li>
                <Link href="/services/grease-trap" className="text-gray-400 hover:text-white transition-colors">
                  Grease Trap Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/rv-services" className="text-gray-400 hover:text-white transition-colors">
                  RV Septic Services
                </Link>
              </li>
              <li>
                <Link href="/services/seasonal" className="text-gray-400 hover:text-white transition-colors">
                  Seasonal Septic Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white transition-colors">
                  Resource Library
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/septic-maintenance-guide"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Septic Maintenance Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/emergency-septic-situations"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Emergency Septic Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <a href="tel:5127937867" className="text-gray-400 hover:text-white transition-colors">
                  (512) 793-PUMP (7867)
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <a
                  href="mailto:service@callalphaseptic.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  service@callalphaseptic.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Alpha Septic Services. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
              <Link href="/sitemap-page" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
