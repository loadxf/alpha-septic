"use client"

import { useState, useEffect } from "react"
import { BacklinkManager } from "@/components/backlink-manager"
import { AUSTIN_LOCAL_CITATIONS } from "@/lib/local-citations"
import { BUSINESS_INFO } from "@/lib/config"

export default function BacklinkOutreachPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Just a simulation of loading data
    setTimeout(() => setIsLoading(false), 300)
  }, [])

  // Extract unique locations from citations
  const uniqueLocations = Array.from(
    new Set(
      AUSTIN_LOCAL_CITATIONS.map(citation => {
        // Extract location from citation name
        const nameParts = citation.name.split(" ")
        const locationPart = nameParts.find(part => 
          BUSINESS_INFO.areaServed.includes(part)
        )
        return locationPart || "Austin"
      })
    )
  )

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-center">Loading backlink data...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Local Backlink Outreach Strategy</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Backlink Strategy Overview</h2>
        <p className="mb-4">
          This page provides tools and templates for implementing our local backlink acquisition strategy.
          Consistent NAP (Name, Address, Phone) information across all citations is crucial for local SEO.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <h3 className="font-bold text-lg mb-2">SEO Impact of Local Citations</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Improves local search visibility in Austin and surrounding areas</li>
            <li>Strengthens Google Business Profile rankings</li>
            <li>Establishes local authority and trust signals</li>
            <li>Creates consistent NAP information across the web</li>
            <li>Builds geographic relevance for target service areas</li>
          </ul>
        </div>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Citation Tracking</h2>
          <p className="mb-4">We have {AUSTIN_LOCAL_CITATIONS.length} potential citation sources identified.</p>
          
          <div className="overflow-auto max-h-[400px] border rounded">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {AUSTIN_LOCAL_CITATIONS.map((citation, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 whitespace-nowrap">
                      <a href={citation.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {citation.name}
                      </a>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{citation.type}</td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pending Outreach
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">NAP Consistency</h2>
          <p className="mb-4">Ensure this exact information is used in all citations:</p>
          
          <div className="bg-gray-50 p-4 rounded border mb-4">
            <dl className="grid grid-cols-[120px_1fr] gap-2">
              <dt className="font-semibold">Business Name:</dt>
              <dd>{BUSINESS_INFO.name}</dd>
              
              <dt className="font-semibold">Address:</dt>
              <dd>{BUSINESS_INFO.address.streetAddress}, {BUSINESS_INFO.address.addressLocality}, {BUSINESS_INFO.address.addressRegion} {BUSINESS_INFO.address.postalCode}</dd>
              
              <dt className="font-semibold">Phone:</dt>
              <dd><a href={`tel:${BUSINESS_INFO.telephone}`} className="text-blue-600">{BUSINESS_INFO.formattedPhone}</a></dd>
              
              <dt className="font-semibold">Website:</dt>
              <dd><a href="process.env.NEXT_PUBLIC_SITE_URL" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">callalphaseptic.com</a></dd>
              
              <dt className="font-semibold">Categories:</dt>
              <dd>Septic Services, Septic Tank Pumping, Grease Trap Cleaning</dd>
            </dl>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4">Outreach Templates by Location</h2>
        
        <div className="space-y-8">
          {uniqueLocations.map((location, index) => (
            <div key={index} className="border-t pt-6">
              <BacklinkManager location={location} showOutreachTemplate={true} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
} 