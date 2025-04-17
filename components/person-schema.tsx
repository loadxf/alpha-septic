interface PersonSchemaProps {
  name: string
  jobTitle?: string
  description?: string
  image?: string
  url?: string
}

export function PersonSchema({ name, jobTitle, description, image, url }: PersonSchemaProps) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: jobTitle || undefined,
    description: description || undefined,
    image: image || undefined,
    url: url || undefined,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema),
      }}
    />
  )
}
