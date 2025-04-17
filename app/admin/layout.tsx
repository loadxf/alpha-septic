"use client"

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { getStorageItem, removeStorageItem } from '@/lib/client-storage'
import { verifyAuthToken, isTokenExpiringSoon } from '@/lib/auth-utils'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [tokenWarning, setTokenWarning] = useState<string | null>(null)

  useEffect(() => {
    // Skip auth check for login page
    if (pathname === '/admin/login') {
      setIsLoading(false)
      return
    }

    // Check if we're in a browser environment
    if (typeof window === 'undefined') return

    // Check if user is authenticated
    const token = getStorageItem<string>("admin_token")
    if (!token) {
      // Redirect to login if no token
      router.push("/admin/login")
      return
    }
    
    // Verify the token
    const authUser = verifyAuthToken(token)
    if (!authUser) {
      // Token is invalid or expired
      removeStorageItem("admin_token")
      router.push("/admin/login")
      return
    }
    
    // Check if token is expiring soon
    if (isTokenExpiringSoon(authUser.tokenExpiry)) {
      setTokenWarning("Your session is about to expire. Please refresh the page or log in again to continue.")
    }
    
    setIsAuthenticated(true)
    setIsLoading(false)
  }, [pathname, router])

  // Skip layout for login page or while loading
  if (pathname === '/admin/login' || isLoading) {
    return <>{children}</>
  }

  if (!isAuthenticated) {
    // Will redirect in useEffect
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-center">Checking authentication...</p>
        </div>
      </div>
    )
  }

  const handleLogout = () => {
    // Use the safe wrapper to remove the token
    removeStorageItem("admin_token")
    router.push("/admin/login")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-blue-600 font-bold text-lg">Alpha Septic Admin</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link 
                  href="/admin/dashboard" 
                  className={`${pathname === '/admin/dashboard' ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Dashboard
                </Link>
                <Link 
                  href="/admin/backlink-outreach" 
                  className={`${pathname === '/admin/backlink-outreach' ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Backlink Outreach
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Session expiry warning */}
      {tokenWarning && (
        <div className="bg-yellow-50 border-t border-yellow-200 p-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  {tokenWarning}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </div>
  )
}
