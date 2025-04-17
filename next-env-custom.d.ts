// Custom type declarations for Next.js modules
// This file supplements the auto-generated next-env.d.ts file
// to resolve "Cannot find module" errors

declare module 'next' {
  import { FC, ReactNode } from 'react';
  
  export interface Metadata {
    title?: string;
    description?: string;
    keywords?: string | string[];
    authors?: Array<{ name: string; url?: string }>;
    openGraph?: {
      title?: string;
      description?: string;
      url?: string;
      siteName?: string;
      images?: Array<{
        url: string;
        width?: number;
        height?: number;
        alt?: string;
      }> | string;
      locale?: string;
      type?: string;
      publishedTime?: string;
    };
    twitter?: {
      card?: "summary" | "summary_large_image" | "app" | "player";
      title?: string;
      description?: string;
      images?: string | string[];
      creator?: string;
    };
    alternates?: {
      canonical?: string;
    };
    robots?: {
      index?: boolean;
      follow?: boolean;
      [key: string]: any;
    };
    verification?: {
      [key: string]: string | string[];
    };
    metadataBase?: URL;
  }
  
  // Updated PageProps type to align with Next.js 15 expectations
  export interface PageProps<P = {}, Q = {}> {
    params: P;
    searchParams: Q;
  }
}

declare module 'next/navigation' {
  export function notFound(): never;
  export function useRouter(): {
    push(url: string): void;
    replace(url: string): void;
    back(): void;
    forward(): void;
    refresh(): void;
  };
  export function usePathname(): string;
  export function useSearchParams(): URLSearchParams;
}

declare module 'next/image' {
  import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
  
  export interface ImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    quality?: number;
    priority?: boolean;
    loading?: 'lazy' | 'eager';
    sizes?: string;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    className?: string;
    style?: React.CSSProperties;
  }
  
  const Image: React.FC<ImageProps>;
  export default Image;
}

declare module 'next/link' {
  import { AnchorHTMLAttributes } from 'react';
  
  export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    as?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    prefetch?: boolean;
  }
  
  const Link: React.FC<LinkProps>;
  export default Link;
}

declare module 'next/script' {
  export interface ScriptProps {
    src?: string;
    strategy?: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload';
    onLoad?: () => void;
    onError?: () => void;
    onReady?: () => void;
    id?: string;
    children?: React.ReactNode;
  }
  
  const Script: React.FC<ScriptProps>;
  export default Script;
}

// Add declarations for other Next.js modules as needed 