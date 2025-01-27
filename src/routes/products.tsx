import Product from '@/components/products/product'
import { products } from '@/data/products/products'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products')({
  component: Products,
})

export default function Products() {
  return (
    <div className="space-y-32">
      {products.map((product) => (
        <Product key={product.name} product={product} />
      ))}
    </div>
  )
}
