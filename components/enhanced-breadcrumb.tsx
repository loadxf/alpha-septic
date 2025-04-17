import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { JsonLd } from "./json-ld"
import { SITE_URL } from "@/lib/config"

interface BreadcrumbItem {
  label: string
  href: string
  isCurrent?: boolean
}

interface EnhancedBreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function EnhancedBreadcrumb({ items, className }: EnhancedBreadcrumbProps) {
  // Generate schema.org breadcrumb data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href.startsWith('/') ? item.href : `/${item.href}`}`.toLowerCase(),
    })),
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />
      <nav aria-label="Breadcrumb" className={cn("bg-gray-100 py-2", className)}>
        <div className="container px-4 md:px-6">
          <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center flex-wrap gap-1.5">
            {items.map((item, index) => (
              <li 
                key={index} 
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/ListItem"
                className={cn(
                  "flex items-center", 
                  item.isCurrent ? "text-gray-600 font-medium" : "text-gray-500"
                )}
              >
                {index > 0 && <ChevronRight className="h-4 w-4 mx-1 text-gray-400" aria-hidden="true" />}
                {item.isCurrent ? (
                  <span itemProp="name">{item.label}</span>
                ) : (
                  <Link href={item.href} className="hover:text-gray-800 hover:underline" itemProp="item">
                    <span itemProp="name">{item.label}</span>
                  </Link>
                )}
                <meta itemProp="position" content={`${index + 1}`} />
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
