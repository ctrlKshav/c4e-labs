import { Tabs, TabsContent } from "@/components/ui/tabs"
import type { ProductInterface } from "@/types/productTypes"
import FeatureCard from "@/components/landing-page/products-overview/feature-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const ProductTab = ({ product }: { product: ProductInterface }) => (
  <TabsContent value={product.id} className="p-4 sm:p-6">
    <Card className="overflow-hidden">
      <CardContent className="p-4 sm:p-6 bg-background">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center gap-3">
            <div className="shrink-0 ">{product.icon()}</div>
            <h3 className="text-sm sm:text-2xl font-extrabold text-primary">{product.name}</h3>
          </div>
          <p className="text-xs sm:text-lg text-foreground/80  leading-relaxed">{product.description}</p>
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <FeatureCard {...product.features} />
          </div>
          {product.link && (
            <div className="mt-4 sm:mt-6">
              <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                <Button variant="default" className="w-full text-sm sm:text-lg py-2 sm:py-3">
                  Visit Website
                </Button>
              </a>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  </TabsContent>
)

export default ProductTab

