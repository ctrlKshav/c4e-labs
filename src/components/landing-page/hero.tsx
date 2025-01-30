import { Star } from 'lucide-react'
import React from "react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Link } from '@tanstack/react-router'

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-radial-stripe animate-gradient-slow">
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Content */}
      <div className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mx-auto flex max-w-screen-lg flex-col gap-12">
              <h1 className="text-4xl font-extrabold lg:text-7xl ">
              We grow ideas from inception to impactful businesses.
              </h1>
              <p className="text-balance text-foreground lg:text-xl max-w-3xl mx-auto">
              C4E Labs is a venture studio where we build, launch, and grow micro SaaS products. Whether it's automation, productivity, or niche tools, we create products that solve real problems.
              </p>
            </div>
            <Link to='/products'>
              <Button
                size="lg"
                className="mt-8 sm:mt-16 sm:text-lg font-extrabold" 
              >
                OUR PRODUCTS
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
