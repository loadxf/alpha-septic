import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
  sizes?: string
  quality?: number
  children?: React.ReactNode
}

/**
 * OptimizedImage component with Core Web Vitals best practices
 * - Automatically sets width/height to prevent CLS
 * - Uses priority for LCP images
 * - Implements proper lazy loading
 * - Supports WebP and AVIF formats
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 90,
  children,
  ...props
}: OptimizedImageProps & Omit<React.ComponentProps<typeof Image>, 'src' | 'alt' | 'width' | 'height'>) {
  // Determine if this is likely a hero/above-fold image
  const isHeroImage = priority || className?.includes('hero') || src.includes('hero');
  
  return (
    <div className={cn("relative", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={isHeroImage}
        loading={isHeroImage ? 'eager' : 'lazy'}
        sizes={sizes}
        quality={quality}
        className="transition-opacity duration-300"
        style={{
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
        {...props}
      />
      {children}
    </div>
  )
} 