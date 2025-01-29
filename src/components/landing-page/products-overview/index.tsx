"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductTab from "@/components/landing-page/products-overview/product-tab"
import TopBar from "@/components/landing-page/products-overview/topbar"
import products from "@/data/productData"
import { Link } from "@tanstack/react-router"

// Hero Section Component
const HeroSection = () => (
  <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8 ">
    <div>
      <Badge className="mb-3 sm:mb-4 bg-card text-foreground hover:bg-slate-100">
        VENTURE STUDIO
      </Badge>
      <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-background blob3:text-foreground">
        Innovate, Create, and Scale with C4E Labs
      </h1> 
      <p className="hidden mobile:block  text-base sm:text-lg md:text-xl text-card/80 blob3:text-foreground/80">
        We're an umbrella of cutting-edge micro SaaS products, empowering businesses across industries with innovative solutions.
      </p>
    </div>
    <div className="flex flex-col items-start mobile:flex-row mobile:justify-start gap-4">
        <Link to="/products" className=" text-center">
        <Button variant="secondary" className=" sm:w-auto">
            Explore Our Products
        </Button>
        </Link>

    </div>
  </div>
);

// Product Showcase Component
const ProductShowcase = () => (
  <Card className="overflow-hidden rounded-lg border bg-background shadow-xl ">
    <TopBar />
    <div className="">
      <Tabs defaultValue="product0" className="w-full ">
        <TabsList className="grid grid-cols-3 bg-primary text-background px-4 py-2 rounded-none h-fit">
          {products.slice(0, 3).map((product) => (
            <TabsTrigger key={product.id} value={product.id} className="text-xs sm:text-sm lg:text-base font-extrabold">
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
)

// Main Component
export default function ProductOverview() {
  return (
    <div className="relative overflow-hidden bg-gradient-four-corners min-h-screen ">
      <div className="absolute left-0 top-0 h-[600px] w-[600px]  mobile:w-[800px] sm:h-[800px] lg:w-[1000px] lg:h-[1000px] translate-x-[-30%] translate-y-[-15%] rounded-full bg-primary/90" />
      
      <div className=" relative mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 lg:py-24 ">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 ">
          <div className="relative z-10 ">
            <HeroSection />
          </div>
          
          <div className="relative ">
            <ProductShowcase />
          </div>
        </div>
      </div>
    </div>
  );
}