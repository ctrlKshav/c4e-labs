import { ProductFeatures } from "@/types/product";
import {Card} from "@/components/ui/card";

const FeatureCard = ({ title, items }: ProductFeatures) => (
    <Card className="p-4">
      <h4 className="font-semibold mb-2">{title}</h4>
      <ul className="list-disc list-inside text-sm text-gray-600">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Card>
  );
  
export default FeatureCard;