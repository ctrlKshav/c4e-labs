import React from "react"
import { Link } from "@tanstack/react-router"
import { Home, AlertTriangle } from "lucide-react"

export default function ErrorComponent({ error}: { error : Error }) {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {error?.cause === 404 ? "404 - Page Not Found" : "Oops! An Error Occurred"}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {error?.cause === 404
            ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
            : "We're sorry, but something went wrong. Our team has been notified and we're working to fix it."}
        </p>
        {error?.message && <p className="text-gray-500 mb-8 max-w-md mx-auto">Error details: {error.message}</p>}
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 bg-primary text-background rounded-md hover:bg-primary/90 transition-colors"
        >
          <Home className="w-5 h-5 mr-2" />
          Go back home
        </Link>
      </div>
    </div>
  )
}

