interface VideoSchemaProps {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  contentUrl: string
  embedUrl?: string
  duration?: string
}

export function VideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
  duration,
}: VideoSchemaProps) {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    uploadDate,
    contentUrl,
    embedUrl: embedUrl || undefined,
    duration: duration || undefined,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(videoSchema),
      }}
    />
  )
}
