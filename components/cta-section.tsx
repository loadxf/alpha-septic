import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  className?: string
}

export function CTASection({
  title = "Ready to Schedule Your Septic Service?",
  description = "Contact us today for professional septic services in Austin and surrounding areas.",
  primaryButtonText = "Book Now",
  primaryButtonLink = "/book-now",
  secondaryButtonText = "Contact Us",
  secondaryButtonLink = "/contact",
  className = "",
}: CTASectionProps) {
  return (
    <section className={`bg-brand-blue py-12 md:py-16 ${className}`}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-blue-100 mb-8 max-w-2xl">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={primaryButtonLink}>
              <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
                {primaryButtonText}
              </Button>
            </Link>
            <Link href={secondaryButtonLink}>
              <Button size="lg" variant="outline" className="bg-white text-brand-blue hover:bg-gray-100">
                {secondaryButtonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
