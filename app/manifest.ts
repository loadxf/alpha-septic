import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alpha Septic Services",
    short_name: "Alpha Septic",
    description:
      "Professional septic services for residential and commercial properties in Austin and surrounding areas.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0055b8",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icons/icon-192.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/icons/icon-512.webp",
        sizes: "512x512",
        type: "image/webp",
      },
      {
        src: "/icons/icon-maskable.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "maskable",
      },
    ],
  }
}
