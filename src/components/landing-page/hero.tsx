import { Star } from 'lucide-react'
import React from "react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

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
                Empowering Innovation with C4E Labs
              </h1>
              <p className="text-balance text-muted-foreground lg:text-xl max-w-3xl mx-auto">
                At C4E Labs, we build cutting-edge solutions that drive innovation and transform businesses. Discover our
                expertise in software development, AI-driven technologies, and creative problem-solving.
              </p>
            </div>
            <Button
              size="lg"
              className="mt-8 sm:mt-16"
            >
              Explore Our Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
