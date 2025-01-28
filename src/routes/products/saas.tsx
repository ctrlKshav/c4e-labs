import ProductSection from '@/components/product-section'
import products from '@/data/productData'
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
        <ProductSection key={product.id} product={product} index={index} />
      ))}
    </div>
  )
}
