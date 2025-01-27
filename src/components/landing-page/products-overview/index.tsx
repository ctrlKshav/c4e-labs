"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductTab from "@/components/landing-page/products-overview/product-tab"
import TopBar from "@/components/landing-page/products-overview/topbar"
import products from "@/data/products"

// Hero Section Component
const HeroSection = () => (
  <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8">
    <div>
      <Badge className="mb-3 sm:mb-4 bg-card text-foreground hover:bg-slate-300">
        VENTURE STUDIO
      </Badge>
      <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        Innovate, Create, and Scale with C4E Labs
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-foreground/80">
        We're the umbrella for cutting-edge micro SaaS products, empowering businesses across industries with innovative solutions.
      </p>
    </div>
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <Button size="lg" variant="secondary" className="w-full sm:w-auto">
        Explore Our Products
      </Button>
      <Button size="lg" variant="default" className="w-full sm:w-auto">
        Get in Touch
      </Button>
    </div>
  </div>
);

// Product Showcase Component
const ProductShowcase = () => (
  <Card className="overflow-hidden rounded-lg border bg-white shadow-xl">
    <TopBar />
    <div className="overflow-hidden">
      <Tabs defaultValue="product0" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <TabsTrigger 
              key={product.id} 
              value={product.id}
              className="text-sm sm:text-base px-2 sm:px-4"
            >
              {product.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {products.map((product) => (
          <ProductTab key={product.id} product={product} />
        ))}
      </Tabs>
    </div>
  </Card>
);

// Main Component
export default function ProductsManagement() {
  return (
    <div className="relative overflow-hidden bg-gradient-two-corners-bottom min-h-screen">
      <div className="absolute left-0 top-0 h-[800px] w-[800px] translate-x-[-30%] translate-y-[-15%] rounded-full bg-primary/90 hidden lg:block" />
      
      <div className="container relative mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
          <div className="relative z-10">
            <HeroSection />
          </div>
          
          {/* Mobile decorative circle */}
          <div className="lg:hidden relative h-32 sm:h-48 w-full my-4">
            <div className="absolute inset-0 bg-primary/90 rounded-full transform scale-150 translate-x-1/4" />
          </div>
          
          <div className="relative">
            <ProductShowcase />
          </div>
        </div>
      </div>
    </div>
  );
}