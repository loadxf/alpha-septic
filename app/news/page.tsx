import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "News & Updates | Alpha Septic Services",
  description: "Stay updated with the latest news, announcements, and updates from Alpha Septic Services.",
}

export default function NewsPage() {
  // Sample news items - in a real application, these would come from a CMS or database
  const newsItems = [
    {
      id: "new-service-area",
      title: "Alpha Septic Services Expands in Central Texas",
      date: "April 10, 2025",
      excerpt:
        "We're excited to announce that we've expanded our service area. Residents and businesses in area Austin communities can now enjoy our full range of septic services.",
      image: "/images/septic-pumping.webp",
      slug: "alpha-septic-expands",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "News & Updates", href: "/news", isCurrent: true },
        ]}
      />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">News & Updates</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest news and announcements from Alpha Septic Services
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-12">
            {newsItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg border bg-white shadow-md">
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-60 w-full md:w-1/3">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                    <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <Link href={`/news/${item.slug}`}>
                      <Button variant="outline">Read More</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
