import React from "react"
import { Link } from "@tanstack/react-router"
import { Home } from "lucide-react"

export default function NotFoundComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Oops! Page not found</p>
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 bg-primary text-background rounded-md transition-colors"
        >
          <Home className="w-5 h-5 mr-2" />
          Go back home
        </Link>
      </div>
    </div>
  )
}

