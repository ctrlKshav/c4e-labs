import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Cloud, Package } from "lucide-react"
import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"

export const Route = createFileRoute('/products/')({
  component: SelectProductType
});

export default function SelectProductType() {
  const productTypes = [
    {
      id: "saas",
      name: "SaaS Products",
      description:
        "Explore our comprehensive range of Software as a Service solutions designed to streamline your business operations, boost productivity, and drive growth in the digital landscape.",
      icon: <Cloud className="h-8 w-8 text-blue-600" />,
      color: "bg-gradient-two-corners bg-white/30",
    },
    {
      id: "shopify-plugins",
      name: "Shopify Plugins",
      description:
        "Enhance your Shopify store with our powerful plugins, crafted to optimize your e-commerce experience, increase sales, and provide seamless integration with various services and features.",
      icon: <ShoppingBag className="h-8 w-8 text-green-500" />,
      color: "bg-white/30 ",
    },
    {
      id: "others",
      name: "Other Products",
      description:
        "Discover our diverse range of innovative products that don't fit the traditional SaaS or Shopify plugin categories. These unique solutions address specific needs across various industries and use cases.",
      icon: <Package className="h-8 w-8 text-gray-600" />,
      color: "bg-gradient-two-corners-top bg-white/30",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-radial-stripe animate-gradient-slow p-8">
      <div className=" mx-auto">
        <h1 className="text-5xl font-bold text-center mb-10 text-primary drop-shadow-glow-primary mt-28">
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
                  {React.cloneElement(type.icon, { className: "h-12 w-12" })}
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

