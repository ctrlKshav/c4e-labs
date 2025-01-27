import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Home, MessageSquare, Bell, MoreVertical, Plus, Users, Headphones, ListTodo, Send } from "lucide-react"
import type { Product } from "@/types/products/product"

interface ProductProps {
  product: Product & {
    imageSrc: string
  }
}

export default function Product({ product }: ProductProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Background circle */}
      <div
        className="absolute right-0 top-0 h-[800px] w-[800px] translate-x-1/3 translate-y-[-15%] rounded-full opacity-90"
        style={{ backgroundColor: product.theme.accent }}
      />

      <div className="container relative mx-auto px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left column - Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <Badge
                className="mb-4"
                style={{
                  backgroundColor: `${product.theme.primary}20`,
                  color: product.theme.primary,
                }}
              >
                {product.badge}
              </Badge>
              <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">{product.title}</h2>
              <p className="text-xl text-gray-600">{product.description}</p>
            </div>

            {product.statistic && (
              <div className="flex items-baseline gap-4">
                <span className="text-6xl font-bold" style={{ color: product.theme.primary }}>
                  {product.statistic.value}
                </span>
                <p className="text-xl text-gray-600">{product.statistic.label}</p>
              </div>
            )}
          </div>

          {/* Right column - Image */}
          <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-lg shadow-xl">
            <img
              src={product.imageSrc || "/https://placehold.co/400"}
              alt={`${product.name} interface`}
              
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

