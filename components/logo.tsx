import Image from "next/image"

export function Logo() {
  return (
    <Image
      src="/logo.webp"
      alt="Alpha Septic Services Logo"
      width={150}
      height={75}
      priority
      className="transition-transform hover:scale-105"
    />
  )
}
