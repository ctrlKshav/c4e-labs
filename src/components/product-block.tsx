﻿"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { ProductFeatures, ProductInterface } from "@/types/productTypes"
import { useRef, useEffect, useState } from "react"

export default function ProductBlock({ product, index }: { product: ProductInterface; index: number }) {
  const [isScrollable, setIsScrollable] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const checkScrollable = () => {
      if (imageRef.current) {
        setIsScrollable(imageRef.current.scrollHeight > imageRef.current.clientHeight)
      }
    }

    checkScrollable()
    window.addEventListener("resize", checkScrollable)

    return () => window.removeEventListener("resize", checkScrollable)
  }, [])

  return (
    <div
      className={`relative overflow-hidden text-background min-[512px]:text-foreground ${index % 2 === 0 ? "bg-gradient-radial-stripe" : "bg-gradient-radial-quad"}`}
    >
      {/* Background circle */}
      {product.themeColor && (
        <div
          className={`absolute right-0 top-0 h-[800px] w-[800px] translate-x-1/3 translate-y-[-15%] rounded-full opacity-90 ${product.themeColor}`}
        />
      )}

      <div className="container relative mx-auto px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left column - Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              {/* Badge (if applicable) */}
              {product.themeColor && (
                <Badge className={`mb-4 bg-${product.themeColor}/20 text-${product.themeColor}`}>{product.name}</Badge>
              )}

              {/* Title */}
              <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">{product.name}</h2>

              {/* Description */}
              <p className="text-xl text-gray-100/80 min-[544px]:text-gray-700/80">{product.description}</p>
            </div>

            {/* Features */}
            <div className="space-y-4 ">
              {product.features.map((feature: ProductFeatures, index: number) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <ul className="list-disc pl-6 text-gray-100/80 blob1:text-gray-700/80">
                    {feature.items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Link (if applicable) */}
            {product.link ? (
              <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button variant="default" className="w-1/2">
                  Visit Website
                </Button>
              </a>
            ) : (
              <Button variant="secondary" className="w-1/2">
                Coming Soon ...
              </Button>
            )}
          </div>

          {/* Right column - Image */}
          <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-lg shadow-xl">
            <div className="h-full overflow-y-auto">
              <img
                ref={imageRef}
                src={product.imageSrc || "https://placehold.co/400"} // Fallback to placeholder if no imageSrc
                alt={`${product.name} interface`}
                className="object-contain w-full"
              />
            </div>
            {isScrollable && (
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

