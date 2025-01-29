import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"
import { productTypes } from "@/data/typeOfProductsData"

export const Route = createFileRoute('/products/')({
  component: SelectProductType
});

export default function SelectProductType() {
  
  return (
    <div className="min-h-screen bg-gradient-radial-stripe animate-gradient-slow p-8">
      <div className=" mx-auto">
        <h1 className="text-5xl font-bold text-center mb-10 text-foreground drop-shadow-glow-primary mt-28">
          Select Product Type
        </h1>
        <p className="text-center text-xl mb-16 text-foreground max-w-2xl mx-auto">
          Choose the type of products you'd like to explore
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {productTypes.map((type) => (
            <Card key={type.id} className={`${type.color} hover:shadow-xl transition-all duration-300 overflow-hidden`}>
              <CardHeader className="pb-4">
                <div className="flex flex-col items-center justify-center space-y-3">
                  {type.icon("h-12 w-12")}
                  <CardTitle className="text-2xl font-semibold text-primary text-center">{type.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <CardDescription className="text-foreground text-lg text-center">{type.description}</CardDescription>
              </CardContent>
              <CardFooter className="pb-6">
                <Link to={`/products/${type.id}`} className="mx-auto">
                  <Button className="text-lg px-6 py-3">
                    View Products
                  </Button>
                </Link>
                
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

