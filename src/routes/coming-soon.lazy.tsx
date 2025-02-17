﻿import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import { Clock } from 'lucide-react'

export const Route = createLazyFileRoute('/coming-soon')({
  component: ComingSoon,
})

export default function ComingSoon() {
  return (
    <div className="min-h-screen animate-gradient-slow py-8 px-4 sm:px-8 md:px-16">
      <div className="mx-auto max-w-2xl text-center mt-28">
        <Clock className="w-24 h-24 mx-auto mb-8 text-primary animate-pulse" />
        <h1 className="text-5xl font-bold text-foreground drop-shadow-glow-primary mb-6">
          Coming Soon
        </h1>
        <p className="text-xl text-foreground mb-12">
          We're working hard to bring you something amazing. This feature will be available soon!
        </p>
        <Link to="/">
          <Button className="text-lg px-6 py-3">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  )
}