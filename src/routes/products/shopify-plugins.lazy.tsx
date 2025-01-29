import ProductSection from '@/components/product-section'
import products from '@/data/productData'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/products/shopify-plugins')({
  component: ShopifyPlugins,
})

export default function ShopifyPlugins() {
  // Filter products by productType === "shopify plugin"
  const shopifyPlugins = products.filter(
    (product) => product.productType === 'shopify plugin',
  )

  return (
    <div className="">
      {shopifyPlugins.map((product, index) => (
        <ProductSection key={product.id} product={product} index={index} />
      ))}
    </div>
  )
}
