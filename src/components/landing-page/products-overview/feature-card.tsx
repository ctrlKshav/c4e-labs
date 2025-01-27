import type { ProductFeatures } from "@/types/product"
import { Card } from "@/components/ui/card"

// Feature Card Component
const FeatureCard = ({ title, items }: ProductFeatures) => (
  <Card className="p-3 sm:p-4 hover:shadow-md transition-shadow">
    <h4 className="font-semibold mb-2 text-sm sm:text-base">{title}</h4>
    <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 space-y-1">
      {items.map((item, index) => (
        <li key={index} className="leading-relaxed">{item}</li>
      ))}
    </ul>
  </Card>
);

export default FeatureCard