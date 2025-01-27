import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ProductInterface } from "@/types/product";
import FeatureCard from "@/components/landing-page/products-overview/feature-card";
import { Button } from "@/components/ui/button";

const ProductTab = ({ product }: { product: ProductInterface }) => (
  <TabsContent value={product.id} className="p-3 sm:p-4">
    <div className="flex flex-col space-y-4">
      <div className="flex items-center gap-2">
        <div className="shrink-0">{product.icon}</div>
        <h3 className="text-lg sm:text-xl font-semibold">{product.name}</h3>
      </div>
      <p className="text-sm sm:text-base text-gray-600">{product.description}</p>
      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        {product.features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      {product.link && (
        <div className="mt-2 sm:mt-4">
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full"
          >
            <Button variant="outline" className="w-full">
              Visit Website
            </Button>
          </a>
        </div>
      )}
    </div>
  </TabsContent>
);


export default ProductTab;
