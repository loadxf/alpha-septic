"use client"

interface RichContentProps {
  content: string
}

export function RichContent({ content }: RichContentProps) {
  return (
    <div 
      className="prose prose-blue max-w-none" 
      dangerouslySetInnerHTML={{ __html: content }} 
    />
  )
} 