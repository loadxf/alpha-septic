"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  // Refs for dropdown menus
  const servicesButtonRef = useRef<HTMLButtonElement>(null)
  const servicesMenuRef = useRef<HTMLDivElement>(null)

  // Handle scroll effect for sticky header
  useEffect(() => {
    // Check if window is available (client-side only)
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  // Handle dropdown menu closing with delay
  useEffect(() => {
    let servicesTimeout: NodeJS.Timeout

    const handleMouseLeave = () => {
      servicesTimeout = setTimeout(() => {
        setIsServicesOpen(false)
      }, 100)
    }

    const handleMouseEnter = () => {
      clearTimeout(servicesTimeout)
    }

    const servicesButtonElement = servicesButtonRef.current
    const servicesMenuElement = servicesMenuRef.current

    if (servicesButtonElement) {
      servicesButtonElement.addEventListener("mouseleave", handleMouseLeave)
      servicesButtonElement.addEventListener("mouseenter", handleMouseEnter)
    }

    if (servicesMenuElement) {
      servicesMenuElement.addEventListener("mouseleave", handleMouseLeave)
      servicesMenuElement.addEventListener("mouseenter", handleMouseEnter)
    }

    return () => {
      clearTimeout(servicesTimeout)

      if (servicesButtonElement) {
        servicesButtonElement.removeEventListener("mouseleave", handleMouseLeave)
        servicesButtonElement.removeEventListener("mouseenter", handleMouseEnter)
      }

      if (servicesMenuElement) {
        servicesMenuElement.removeEventListener("mouseleave", handleMouseLeave)
        servicesMenuElement.removeEventListener("mouseenter", handleMouseEnter)
      }
    }
  }, [isServicesOpen])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4"
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" aria-label="Alpha Septic Services home">
            <Image src="/logo.webp" alt="Alpha Septic Services Logo" width={150} height={75} priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                isActive("/") ? "text-brand-blue" : "text-gray-600"
              }`}
            >
              Home
            </Link>
            <div className="relative group">
              <button
                ref={servicesButtonRef}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className={`flex items-center text-sm font-medium transition-colors hover:text-brand-blue ${
                  isActive("/services") ? "text-brand-blue" : "text-gray-600"
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div
                  ref={servicesMenuRef}
                  className="absolute left-0 mt-0 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-1">
                    <Link
                      href="/services/residential"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Residential Services
                    </Link>
                    <Link
                      href="/services/commercial"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Commercial Services
                    </Link>
                    <Link
                      href="/services/emergency"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Emergency Services
                    </Link>
                    <Link
                      href="/services/grease-trap"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Grease Trap Cleaning
                    </Link>
                    <Link
                      href="/services/rv-services"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      RV Services
                    </Link>
                    <Link href="/services/seasonal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Seasonal Services
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/service-areas"
              className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                isActive("/service-areas") ? "text-brand-blue" : "text-gray-600"
              }`}
            >
              Service Areas
            </Link>
            <Link
              href="/resources"
              className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                isActive("/resources") ? "text-brand-blue" : "text-gray-600"
              }`}
            >
              Resources
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                isActive("/about") ? "text-brand-blue" : "text-gray-600"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                isActive("/contact") ? "text-brand-blue" : "text-gray-600"
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:5127937867" className="flex items-center text-brand-blue hover:text-brand-blue-dark">
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-bold">(512) 793-PUMP (7867)</span>
            </a>
            <Link href="/book-now">
              <Button>Book Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center space-x-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-white z-50 overflow-y-auto">
          <nav className="container px-4 py-6 space-y-4">
            <Link
              href="/"
              className={`block py-2 text-lg font-medium ${isActive("/") ? "text-brand-blue" : "text-gray-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center justify-between w-full py-2 text-lg font-medium ${
                  isActive("/services") ? "text-brand-blue" : "text-gray-600"
                }`}
                aria-expanded={isServicesOpen}
              >
                Services
                <ChevronDown className={`h-5 w-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/services/residential"
                    className="block py-2 text-gray-600 hover:text-brand-blue"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Residential Services
                  </Link>
                  <Link
                    href="/services/commercial"
                    className="block py-2 text-gray-600 hover:text-brand-blue"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Commercial Services
                  </Link>
                  <Link
                    href="/services/emergency"
                    className="block py-2 text-gray-600 hover:text-brand-blue"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Emergency Services
                  </Link>
                  <Link
                    href="/services/grease-trap"
                    className="block py-2 text-gray-600 hover:text-brand-blue"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Grease Trap Cleaning
                  </Link>
                  <Link
                    href="/services/rv-services"
                    className="block py-2 text-gray-600 hover:text-brand-blue"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    RV Services
                  </Link>
                  <Link
                    href="/services/seasonal"
                    className="block py-2 text-gray-600 hover:text-brand-blue"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Seasonal Services
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/service-areas"
              className={`block py-2 text-lg font-medium ${
                isActive("/service-areas") ? "text-brand-blue" : "text-gray-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Service Areas
            </Link>
            <Link
              href="/resources"
              className={`block py-2 text-lg font-medium ${isActive("/resources") ? "text-brand-blue" : "text-gray-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/about"
              className={`block py-2 text-lg font-medium ${isActive("/about") ? "text-brand-blue" : "text-gray-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`block py-2 text-lg font-medium ${isActive("/contact") ? "text-brand-blue" : "text-gray-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 space-y-4">
              <a
                href="tel:5127937867"
                className="flex items-center text-brand-blue hover:text-brand-blue-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-5 w-5 mr-2" />
                <span className="font-bold">(512) 793-PUMP (7867)</span>
              </a>
              <Link href="/book-now" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Book Now</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
