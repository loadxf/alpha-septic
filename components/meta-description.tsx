import Head from "next/head"

interface MetaDescriptionProps {
  description: string
}

export function MetaDescription({ description }: MetaDescriptionProps) {
  return (
    <Head>
      <meta name="description" content={description} />
    </Head>
  )
}
