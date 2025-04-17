import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { JsonLd } from "@/components/json-ld"

interface BreadcrumbItem {
  label: string
  href: string
  isCurrent?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  // Generate schema.org breadcrumb data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://CallAlphaSeptic.com",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: `https://CallAlphaSeptic.com${item.href}`,
      })),
    ],
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <nav aria-label="Breadcrumb" className="bg-gray-100 py-2">
        <div className="container px-4 md:px-6">
          <ol className="flex items-center space-x-1 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" className="text-gray-500 hover:text-gray-700" itemProp="item">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            {items.map((item, index) => (
              <li
                key={index}
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <ChevronRight className="h-4 w-4 text-gray-400" aria-hidden="true" />
                {item.isCurrent ? (
                  <span className="ml-1 font-medium text-gray-900" aria-current="page" itemProp="name">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="ml-1 text-gray-500 hover:text-gray-700" itemProp="item">
                    <span itemProp="name">{item.label}</span>
                  </Link>
                )}
                <meta itemProp="position" content={`${index + 2}`} />
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
