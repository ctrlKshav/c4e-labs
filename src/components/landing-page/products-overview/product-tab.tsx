import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Product } from "@/types/product";
import FeatureCard from "@/components/landing-page/products-overview/feature-card";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

const ProductTab = ({ product }: { product: Product }) => (
  <TabsContent value={product.id} className="p-4">
    <div className="flex items-center gap-2 mb-4">
      {product.icon}
      <h3 className="text-xl font-semibold">{product.name}</h3>
    </div>
    <p className="mb-4 text-gray-600">{product.description}</p>
    <div className="grid grid-cols-2 gap-4">
      {product.features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
    {/* Add a link to the product's website */}
    {product.link && (
      <div className="mt-6">
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button variant="outline" className="w-full sm:w-auto">
            Visit Website
          </Button>
        </a>
      </div>
    )}
  </TabsContent>
);

export default ProductTab;