"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { getStorageItem, setStorageItem } from "@/lib/client-storage"
import { verifyAdminCredentials, generateAuthToken } from "@/lib/auth-utils"

// Add a comment about production auth
// In a production app, authentication would be handled server-side
// with proper password hashing, JWT tokens, and secure cookie handling

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [storageAvailable, setStorageAvailable] = useState(false)
  const router = useRouter()

  // Check if localStorage is available and if user is already authenticated
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return

    // Check for existing authentication
    const token = getStorageItem<string>("admin_token")
    
    // Determine if storage is working - this affects the UI and auth behavior
    const isStorageWorking = token !== undefined || 
      // Only set this if we can successfully read (true or null is fine)
      document.cookie.indexOf('testStorage=1') > -1
    
    setStorageAvailable(isStorageWorking)
    
    if (token) {
      setIsAuthenticated(true)
      router.push("/admin/dashboard")
    }
    
    // Set a test cookie as a fallback for browsers where localStorage fails
    try {
      document.cookie = "testStorage=1; path=/; max-age=86400; SameSite=Strict"
    } catch (e) {
      // Ignore errors 
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simple validation
      if (!email.trim() || !password.trim()) {
        throw new Error("Email and password are required")
      }

      // For demo purposes - simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Verify credentials using our auth utility
      if (verifyAdminCredentials(email, password)) {
        // Generate a secure token with expiration
        const token = generateAuthToken(email)
        
        // Try to save auth state
        const saved = setStorageItem("admin_token", token)
        
        // If storage failed, inform the user but continue
        if (!saved && !storageAvailable) {
          setError("Warning: Your browser storage is disabled or in private mode. Your login will not persist if you close this tab.")
          // We don't return early, as we still want to "log in" for this session
        }
        
        setIsAuthenticated(true)
        router.push("/admin/dashboard")
      } else {
        throw new Error("Invalid email or password")
      }
    } catch (err: any) {
      setError(err.message || "Authentication failed")
      setIsLoading(false)
    }
  }

  // Show a loading state or redirect if already authenticated
  if (isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-center">You are authenticated. Redirecting...</p>
        </div>
      </div>
    )
  }

  // Production warning notice
  const isProduction = process.env.NODE_ENV === 'production';
  const usingDemoCredentials = process.env.NEXT_PUBLIC_ADMIN_EMAIL === 'admin@callalphaseptic.com' || 
                              process.env.NEXT_PUBLIC_ADMIN_PASSWORD === 'admin123';
  const showSecurityWarning = isProduction && usingDemoCredentials;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Admin Login</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Access the admin dashboard</p>
          
          {/* Only show demo credentials info in development mode */}
          {!isProduction && (
            <div className="mt-2 text-center text-xs text-blue-600 bg-blue-50 p-2 rounded-md">
              <strong>Demo Credentials:</strong> admin@callalphaseptic.com / admin123
            </div>
          )}
          
          {/* Show security warning in production with demo credentials */}
          {showSecurityWarning && (
            <div className="mt-2 text-center text-xs text-red-700 bg-red-50 p-2 rounded-md">
              <strong>Security Warning:</strong> This site is using demo credentials in production.
              This is not secure and should be changed immediately in a real production environment.
            </div>
          )}
          
          {!storageAvailable && (
            <div className="mt-2 text-center text-xs text-amber-700 bg-amber-50 p-2 rounded-md">
              <strong>Warning:</strong> Your browser may be in private browsing mode. Login state won't persist between page refreshes.
            </div>
          )}
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <p>{error}</p>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">
            Return to homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
