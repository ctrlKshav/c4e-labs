import ProductBlock from '@/components/product-block'
import products from '@/data/products'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/saas')({
  component: SaaSProducts,
})

export default function SaaSProducts() {
  // Filter products by productType === "saas"
  const saasProducts = products.filter(
    (product) => product.productType === 'saas',
  )

  return (
    <div className="">
      {saasProducts.map((product, index) => (
        <ProductBlock key={product.id} product={product} index={index} />
      ))}
    </div>
  )
}
