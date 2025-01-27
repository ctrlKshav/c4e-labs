"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductTab from "@/components/landing-page/products-management/product-tab"
import TopBar from "@/components/landing-page/products-management/topbar"
import products from "@/data/products"

// Components
const HeroSection = () => (
  <div className="flex flex-col justify-center space-y-8">
    <div>
      <Badge className="mb-4 bg-card text-foreground hover:bg-slate-300">VENTURE STUDIO</Badge>
      <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
        Innovate, Create, and Scale with C4E Labs
      </h1>
      <p className="text-xl text-foreground/80">
        We're the umbrella for cutting-edge micro SaaS products, empowering businesses across industries with
        innovative solutions.
      </p>
    </div>
    <div className="flex gap-4">
      <Button size="lg" variant={"secondary"}>Explore Our Products</Button>
      <Button size="lg" variant={"default"}>
        Get in Touch
      </Button>
    </div>
  </div>
);


const ProductShowcase = () => (
  <Card className="overflow-hidden rounded-lg border bg-white shadow-xl pb-8">
    <TopBar />
    <div className="">
      <Tabs defaultValue="product0" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {products.slice(0,3).map((product) => (
            <TabsTrigger key={product.id} value={product.id}>
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

export default function ProductsManagement() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 h-[800px] w-[800px] translate-x-[-30%] translate-y-[-15%] rounded-full bg-primary/90" />
      <div className="container relative mx-auto px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <HeroSection />
          <div className="relative">
            <ProductShowcase />
          </div>
        </div>
      </div>
    </div>
  );
}