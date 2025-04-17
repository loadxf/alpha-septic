"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, ChevronDown, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Logo } from "./logo"

export function SimpleHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

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

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" aria-label="Alpha Septic Services home">
            <Logo />
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
            <div className="relative">
              <button
                onClick={() => toggleDropdown("services")}
                className={`flex items-center text-sm font-medium transition-colors hover:text-brand-blue ${
                  isActive("/services") ? "text-brand-blue" : "text-gray-600"
                }`}
                aria-expanded={activeDropdown === "services"}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
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
              href="/resources"
              className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                isActive("/resources") ? "text-brand-blue" : "text-gray-600"
              }`}
            >
              Resources
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
              <Button>Book Online</Button>
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
            >
              Home
            </Link>
            <div>
              <button
                onClick={() => toggleDropdown("mobile-services")}
                className={`flex items-center justify-between w-full py-2 text-lg font-medium ${
                  isActive("/services") ? "text-brand-blue" : "text-gray-600"
                }`}
                aria-expanded={activeDropdown === "mobile-services"}
              >
                Services
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${activeDropdown === "mobile-services" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "mobile-services" && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/services/residential" className="block py-2 text-gray-600 hover:text-brand-blue">
                    Residential Services
                  </Link>
                  <Link href="/services/commercial" className="block py-2 text-gray-600 hover:text-brand-blue">
                    Commercial Services
                  </Link>
                  <Link href="/services/emergency" className="block py-2 text-gray-600 hover:text-brand-blue">
                    Emergency Services
                  </Link>
                  <Link href="/services/grease-trap" className="block py-2 text-gray-600 hover:text-brand-blue">
                    Grease Trap Cleaning
                  </Link>
                  <Link href="/services/rv-services" className="block py-2 text-gray-600 hover:text-brand-blue">
                    RV Services
                  </Link>
                  <Link href="/services/seasonal" className="block py-2 text-gray-600 hover:text-brand-blue">
                    Seasonal Services
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/resources"
              className={`block py-2 text-lg font-medium ${isActive("/resources") ? "text-brand-blue" : "text-gray-600"}`}
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className={`block py-2 text-lg font-medium ${isActive("/contact") ? "text-brand-blue" : "text-gray-600"}`}
            >
              Contact
            </Link>
            <div className="pt-4 space-y-4">
              <a href="tel:5127937867" className="flex items-center text-brand-blue hover:text-brand-blue-dark">
                <Phone className="h-5 w-5 mr-2" />
                <span className="font-bold">(512) 793-PUMP (7867)</span>
              </a>
              <Link href="/book-now">
                <Button className="w-full">Book Online</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
