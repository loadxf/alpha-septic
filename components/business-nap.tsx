import { Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"

interface BusinessNAPProps {
  businessName?: string
  locationName?: string
  phoneNumber?: string
  address?: {
    street: string
    city: string
    state: string
    zip: string
  }
  hours?: {
    days: string
    hours: string
  }[]
  showMap?: boolean
  className?: string
}

export function BusinessNAP({
  businessName = "Alpha Septic Services",
  locationName,
  phoneNumber = "+15127937867",
  address = {
    street: "396 Sunrise Terrace",
    city: "Cedar Park",
    state: "TX",
    zip: "78613"
  },
  hours = [
    { days: "Monday-Friday", hours: "8am-6pm" },
    { days: "Saturday", hours: "9am-2pm" },
    { days: "Sunday", hours: "Closed" }
  ],
  showMap = true,
  className = ""
}: BusinessNAPProps) {
  const formattedLocationName = locationName ? ` - ${locationName}` : "";
  const displayName = `${businessName}${formattedLocationName}`;
  const formattedPhone = phoneNumber.replace(/\+1/, "").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  
  return (
    <div className={`business-nap p-4 rounded-lg bg-white shadow-sm ${className}`}>
      <h3 className="font-bold text-lg mb-3">{displayName}</h3>
      
      <div className="flex items-center gap-2 mb-2">
        <Phone className="h-4 w-4 text-brand-blue shrink-0" />
        <a href={`tel:${phoneNumber}`} className="text-brand-blue hover:underline">
          {formattedPhone}
        </a>
      </div>
      
      <div className="flex items-start gap-2 mb-2">
        <MapPin className="h-4 w-4 text-brand-blue shrink-0 mt-1" />
        <address className="not-italic">
          {address.street}<br />
          {address.city}, {address.state} {address.zip}
        </address>
      </div>
      
      <div className="flex items-start gap-2 mb-3">
        <Clock className="h-4 w-4 text-brand-blue shrink-0 mt-1" />
        <div>
          {hours.map((item, index) => (
            <div key={index} className="flex gap-2">
              <span className="font-medium min-w-[100px]">{item.days}:</span>
              <span>{item.hours}</span>
            </div>
          ))}
        </div>
      </div>
      
      {showMap && (
        <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          `${businessName} ${address.street}, ${address.city}, ${address.state} ${address.zip}`
        )}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block text-sm text-brand-blue hover:underline mt-2"
        >
          View on Google Maps
        </Link>
      )}
    </div>
  )
} 