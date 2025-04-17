import React from "react"
import Link from "next/link"
import { MapPin } from "lucide-react"

interface NearbyArea {
  name: string
  url: string
}

interface NearbyServiceAreasProps {
  currentLocation: string
  nearbyAreas: NearbyArea[]
}

export function NearbyServiceAreas({ currentLocation, nearbyAreas }: NearbyServiceAreasProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-custom">
      <h3 className="text-xl font-bold mb-4">Septic Services Near {currentLocation}</h3>
      <p className="text-gray-500 mb-4">
        We also provide our professional septic services to these nearby communities:
      </p>
      <ul className="space-y-2">
        {nearbyAreas.map((area) => (
          <li key={area.name} className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
            <Link href={area.url} className="text-brand-blue hover:underline">
              <span>{area.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
} 