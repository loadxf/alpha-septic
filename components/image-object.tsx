/**
 * ImageObject component
 * 
 * A dedicated component for creating schema.org ImageObject structured data.
 * This component is designed to be used with JSON-LD to improve SEO for images.
 */

import { JsonLd } from "@/components/json-ld"

export interface ImageObjectProps {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
  caption?: string;
  name?: string;
  contentUrl?: string;
  thumbnail?: string;
  id?: string;
}

/**
 * ImageObject component for SEO
 * 
 * Renders JSON-LD structured data for an image according to schema.org
 * https://schema.org/ImageObject
 * 
 * @param {ImageObjectProps} props - Properties for the image object
 * @returns {JSX.Element} - JSON-LD structured data component
 */
export function ImageObject({
  url,
  width,
  height,
  alt,
  caption,
  name,
  contentUrl,
  thumbnail,
  id = "image-schema",
}: ImageObjectProps) {
  const imageData = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: contentUrl || url,
    url,
    width: width ? width.toString() : undefined,
    height: height ? height.toString() : undefined,
    name: name || alt,
    description: caption || alt,
    thumbnail: thumbnail || undefined,
  };

  // Remove undefined properties
  const cleanedData = Object.fromEntries(
    Object.entries(imageData).filter(([_, value]) => value !== undefined)
  );

  return <JsonLd data={cleanedData} id={id} />;
}

export default ImageObject; 