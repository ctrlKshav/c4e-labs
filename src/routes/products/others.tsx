import ProductBlock from '@/components/product-block'
import products from '@/data/products'
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
        <ProductBlock key={product.id} product={product} index={index} />
      ))}
    </div>
  )
}
