import ProductBlock from '@/components/product-block'
import products from '@/data/products'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/shopify-plugins')({
  component: ShopifyPlugins,
})

export default function ShopifyPlugins() {
  // Filter products by productType === "shopify plugin"
  const shopifyPlugins = products.filter((product) => product.productType === "shopify plugin")

  return (
    <div className="">
      {shopifyPlugins.map((product, index) => (
        <ProductBlock key={product.id} product={product} index={index} />
      ))}
    </div>
  )
}