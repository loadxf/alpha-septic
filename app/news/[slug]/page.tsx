import React from "react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { notFound } from "next/navigation"
import { SeoMeta } from "@/components/seo-meta"
import { CanonicalURL } from "@/components/canonical-url"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"
import { RichContent } from "@/components/rich-content"
import { JsonLd } from "@/components/json-ld"
import { ArticleJsonLd } from "@/lib/schema"
import { formatDate } from "@/lib/utils"
import { getNewsData } from "@/lib/data"

// Add proper type for searchParams
type SearchParams = {
  [key: string]: string | string[] | undefined
}

// This is a static page that will be generated at build time
export async function generateStaticParams() {
  const newsData = await getNewsData()
  
  return newsData.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const newsData = await getNewsData()
  const article = newsData.find((item) => item.slug === params.slug)
  
  if (!article) {
    return {
      title: "Article Not Found",
    }
  }
  
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      url: `https://example.com/news/${article.slug}`,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

// Use direct type annotation instead of PageProps interface
export default async function NewsArticlePage({
  params,
  searchParams
}: {
  params: { slug: string },
  searchParams: SearchParams
}) {
  const newsData = await getNewsData()
  const article = newsData.find((item) => item.slug === params.slug)
  
  if (!article) {
    notFound()
    return null;
  }
  
  // Ensure date is properly formatted
  const isoDate = new Date(article.date).toISOString()
  
  return (
    <>
      <JsonLd
        data={{
          "@type": "NewsArticle",
          headline: article.title,
          description: article.excerpt,
          image: article.image,
          datePublished: isoDate,
          dateModified: isoDate,
          author: {
            "@type": "Person",
            name: article.author,
          },
        }}
      />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        <EnhancedBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "News", href: "/news" },
            { label: article.title, href: `/news/${article.slug}`, isCurrent: true },
          ]}
        />
        
        <article className="mt-8 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900">{article.title}</h1>
          
          <div className="mt-4 flex items-center text-gray-600">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span className="mx-2">•</span>
            <span>{article.author}</span>
          </div>
          
          {article.image && (
            <div className="mt-6 relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          
          <div className="mt-8 prose prose-lg max-w-none">
            <RichContent content={article.content} />
          </div>
        </article>
      </div>
    </>
  )
}
