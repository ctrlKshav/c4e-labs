import Product from '@/components/products/product'
import products from '@/data/products'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products')({
  component: Products,
})

export default function Products() {
  return (
    <div className="">
      {products.map((product, index) => (
        <Product key={product.id} product={product} index={index} />
      ))}
    </div>
  )
}
