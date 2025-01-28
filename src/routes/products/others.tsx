import ProductSection from '@/components/product-section'
import products from '@/data/productData'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/others')({
  component: OtherProducts,
})

export default function OtherProducts() {
  // Filter products by productType === "other"
  const otherProducts = products.filter(
    (product) => product.productType === 'other',
  )

  return (
    <div className="">
      {otherProducts.map((product, index) => (
        <ProductSection key={product.id} product={product} index={index} />
      ))}
    </div>
  )
}
