import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"
import { FAQSection } from "@/components/FAQSection"
import { CheckCircle } from "lucide-react"
import { ProductSchema } from "@/components/product-schema"

export const metadata: Metadata = {
  title: "Septic Service Pricing | Alpha Septic Services Austin TX",
  description:
    "Transparent pricing for residential and commercial septic services in Austin. View our service packages and request a custom quote for your specific needs.",
  keywords:
    "septic service pricing, septic pumping cost, grease trap cleaning cost, Austin septic prices, septic maintenance packages",
}

// Sample pricing data
const pricingPlans = [
  {
    id: "residential",
    name: "Residential Septic Pumping",
    description: "Standard septic tank pumping service for residential properties",
    price: 700,
    features: [
      "Complete tank pumping (up to 1,500 gallons)",
      "Visual inspection of tank components",
      "Filter cleaning (if applicable)",
      "Detailed service report",
      "Maintenance recommendations",
    ],
    popular: false,
  },
  {
    id: "maintenance",
    name: "Annual Maintenance Plan",
    description: "Comprehensive yearly maintenance for residential septic systems",
    price: 995,
    features: [
      "Annual tank pumping (up to 1,500 gallons)",
      "Thorough system inspection",
      "Filter cleaning and replacement if needed",
      "Priority scheduling for service calls",
      "10% discount on repairs",
      "24/7 emergency support",
    ],
    popular: true,
  },
  {
    id: "commercial",
    name: "Commercial Service",
    description: "Customized septic and grease trap services for businesses",
    price: null,
    features: [
      "Tailored maintenance schedules",
      "Grease trap cleaning",
      "High-capacity system servicing",
      "Compliance documentation",
      "After-hours servicing available",
      "Volume discounts available",
    ],
    popular: false,
  },
]

// Sample FAQ data for pricing page
const pricingFaqs = [
  {
    question: "What factors affect the cost of septic pumping?",
    answer:
      "Several factors can affect the cost of septic pumping, including tank size, accessibility, distance from our facility, amount of waste, and whether additional services are needed. Larger tanks, difficult access, or tanks that haven't been pumped in many years may incur additional costs.",
  },
  {
    question: "Do you offer any discounts?",
    answer:
      "Yes, we offer discounts for seniors, military personnel, and first responders. We also provide discounted rates for scheduled maintenance plans and for referrals. Contact us for current promotions and available discounts.",
  },
  {
    question: "How do I know what size my septic tank is?",
    answer:
      "If you're unsure about your septic tank size, we can help determine it during our visit. Common residential tank sizes range from 750 to 1,500 gallons. You might also find this information in your home inspection report, property records, or septic system documentation.",
  },
  {
    question: "Are there any additional fees I should be aware of?",
    answer:
      "Our quoted prices include standard service fees. Additional fees may apply for tanks larger than 1,000 gallons, difficult access requiring special equipment, tanks buried more than 12 inches deep, or emergency after-hours service. We always discuss any potential additional fees before performing work.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we offer flexible payment options for larger jobs and maintenance contracts. Please contact our office to discuss available payment plans and financing options that might work for your situation.",
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <EnhancedBreadcrumb items={[{ label: "Pricing", href: "/pricing", isCurrent: true }]} />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Transparent Pricing for Quality Service
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the service package that best fits your needs, or contact us for a custom quote.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-lg border bg-white p-6 shadow-custom ${
                  plan.popular ? "border-brand-blue" : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-brand-blue px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <div className="mb-4">
                  <h2 className="text-2xl font-bold">{plan.name}</h2>
                  <p className="text-gray-500">{plan.description}</p>
                </div>
                <div className="mb-6">
                  {plan.price ? (
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">${plan.price}</span>
                      {plan.id === "maintenance" && <span className="text-gray-500 ml-1">/year</span>}
                    </div>
                  ) : (
                    <div className="text-2xl font-bold">Custom Quote</div>
                  )}
                </div>
                <ul className="mb-6 space-y-2 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link href={plan.id === "commercial" ? "/contact" : "/book-now"}>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      {plan.id === "commercial" ? "Request Quote" : "Book Now"}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h2 className="text-2xl font-bold mb-4">Additional Services</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-bold">Residential Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span>Additional tank volume (per 500 gallons)</span>
                      <span className="font-semibold">$50</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Filter replacement</span>
                      <span className="font-semibold">$85-$350</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Riser installation</span>
                      <span className="font-semibold">$150-$300</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Baffle repair</span>
                      <span className="font-semibold">$200-$350</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Emergency service (after hours)</span>
                      <span className="font-semibold">+$300</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Commercial Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span>Grease trap cleaning (under 500 gallons)</span>
                      <span className="font-semibold">Custom Quote</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Grease trap cleaning (500-1,000 gallons)</span>
                      <span className="font-semibold">Custom Quote</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Grease trap cleaning (over 1,000 gallons)</span>
                      <span className="font-semibold">Custom Quote</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Commercial system inspection</span>
                      <span className="font-semibold">$150</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Maintenance contracts</span>
                      <span className="font-semibold">Custom Quote</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-500 mt-4 text-sm">
                * Prices may vary based on specific conditions and requirements. Contact us for a detailed quote.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <FAQSection
              title="Pricing FAQs"
              description="Common questions about our pricing and services"
              faqs={pricingFaqs}
            />
          </div>

          <div className="mx-auto max-w-3xl mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Quote?</h2>
            <p className="text-gray-500 mb-6">
              Every septic system is unique. Contact us for a personalized quote tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link href="/book-now">
                <Button size="lg" variant="outline">
                  Book Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTASection />

      {/* Product Schema for Pricing Plans */}
      {pricingPlans
        .filter((plan) => plan.price)
        .map((plan) => (
          <ProductSchema
            key={plan.id}
            name={plan.name}
            description={plan.description}
            offers={{
              price: plan.price!,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `https://CallAlphaSeptic.com/pricing#${plan.id}`,
            }}
            aggregateRating={{
              ratingValue: 4.8,
              reviewCount: 124,
            }}
          />
        ))}
    </div>
  )
}
