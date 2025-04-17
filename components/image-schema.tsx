interface ImageSchemaProps {
  name: string
  contentUrl: string
  description?: string
  caption?: string
}

export function ImageSchema({ name, contentUrl, description, caption }: ImageSchemaProps) {
  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name,
    contentUrl,
    description: description || undefined,
    caption: caption || undefined,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(imageSchema),
      }}
    />
  )
}
