export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'process.env.NEXT_PUBLIC_SITE_URL';

export const BUSINESS_INFO = {
  name: "Alpha Septic Services",
  legalName: "Alpha Septic Services LLC",
  description: "Professional septic system pumping, cleaning, and maintenance services for residential and commercial properties in Austin and surrounding areas. Available 24/7 for emergency service.",
  shortDescription: "Professional septic tank pumping, cleaning, and maintenance services",
  telephone: "+15127937867",
  formattedPhone: "(512) 793-7867",
  email: "info@callalphaseptic.com",
  priceRange: "$$",
  foundingDate: "2015-01-01",
  logo: `${SITE_URL}/logo.webp`,
  image: `${SITE_URL}/images/building.jpg`,
  address: {
    streetAddress: "396 Sunrise Terrace",
    addressLocality: "Cedar Park",
    addressRegion: "TX",
    postalCode: "78613",
    addressCountry: "US",
  },
  geo: {
    latitude: 30.5204158,
    longitude: -97.799813,
  },
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      days: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/alphasepticservices",
    "https://www.instagram.com/alphasepticservices",
    "https://www.yelp.com/biz/alpha-septic-services",
    "https://www.bbb.org/us/tx/cedar-park/profile/septic-tank-service/alpha-septic-services",
    "https://www.angi.com/companylist/us/tx/cedar-park/alpha-septic-services-reviews",
    "https://www.homeadvisor.com/rated.AlphaSepticServices.123456789.html",
    "https://www.thumbtack.com/tx/cedar-park/septic-tank-services/alpha-septic-services/"
  ],
  services: [
    {
      name: "Residential Septic Pumping",
      description: "Complete septic tank pumping and cleaning for residential properties",
      url: `${SITE_URL}/services/residential`,
      image: `${SITE_URL}/images/services/residential.webp`
    },
    {
      name: "Commercial Septic Services",
      description: "Septic maintenance for businesses and commercial properties",
      url: `${SITE_URL}/services/commercial`,
      image: `${SITE_URL}/images/services/commercial.webp`
    },
    {
      name: "Emergency Septic Services",
      description: "24/7 emergency response for septic system failures and backups",
      url: `${SITE_URL}/services/emergency`,
      image: `${SITE_URL}/images/services/emergency.webp`
    },
    {
      name: "Grease Trap Cleaning",
      description: "Professional grease trap maintenance for restaurants and food service businesses",
      url: `${SITE_URL}/services/grease-trap`,
      image: `${SITE_URL}/images/services/grease-trap.webp`
    },
    {
      name: "RV Services",
      description: "Pumping and maintenance services for RV septic systems",
      url: `${SITE_URL}/services/rv-services`,
      image: `${SITE_URL}/images/services/rv.webp`
    },
    {
      name: "Seasonal Maintenance",
      description: "Seasonal maintenance and winterization for septic systems",
      url: `${SITE_URL}/services/seasonal`,
      image: `${SITE_URL}/images/services/seasonal.webp`
    }
  ],
  areaServed: [
    "Austin",
    "Round Rock",
    "Cedar Park",
    "Georgetown",
    "Leander",
    "Pflugerville",
    "Buda",
    "Kyle",
    "Dripping Springs",
    "Kingsland",
    "Hutto",
    "Manor"
  ],
  hasMap: "https://www.google.com/maps/place/Cedar+Park,+TX+78613/@30.5204158,-97.799813,15z/",
  keywords: "septic services, septic pumping, septic cleaning, grease trap cleaning, emergency septic service, Austin septic company, septic tank maintenance, septic system repair, local septic service, Central Texas septic"
}; 