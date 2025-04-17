interface HowToStepProps {
  name: string
  text: string
  url?: string
  imageUrl?: string
}

interface HowToSchemaProps {
  name: string
  description: string
  totalTime?: string
  estimatedCost?: {
    currency: string
    value: string
    minValue?: string
    maxValue?: string
  }
  supply?: string[]
  tool?: string[]
  steps: HowToStepProps[]
  imageUrl?: string
}

export function HowToSchema({
  name,
  description,
  totalTime,
  estimatedCost,
  supply,
  tool,
  steps,
  imageUrl,
}: HowToSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(totalTime && { totalTime }),
    ...(estimatedCost && {
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: estimatedCost.currency,
        ...(estimatedCost.value && { value: estimatedCost.value }),
        ...(estimatedCost.minValue && { minValue: estimatedCost.minValue }),
        ...(estimatedCost.maxValue && { maxValue: estimatedCost.maxValue }),
      },
    }),
    ...(supply && {
      supply: supply.map((item) => ({
        "@type": "HowToSupply",
        name: item,
      })),
    }),
    ...(tool && {
      tool: tool.map((item) => ({
        "@type": "HowToTool",
        name: item,
      })),
    }),
    step:
      steps?.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.name,
        text: step.text,
        ...(step.url && { url: step.url }),
        ...(step.imageUrl && {
          image: {
            "@type": "ImageObject",
            url: step.imageUrl,
          },
        }),
      })) || [],
    ...(imageUrl && {
      image: {
        "@type": "ImageObject",
        url: imageUrl,
      },
    }),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
}
