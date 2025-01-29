import React from "react";
import { Cloud, ShoppingBag, Package } from "lucide-react";

export const productTypes = [
  {
    id: "saas",
    name: "SaaS Products",
    description:
      "Explore our comprehensive range of Software as a Service solutions designed to streamline your business operations, boost productivity, and drive growth in the digital landscape.",
    icon: (className = "h-8 w-8 text-blue-600") => React.createElement(Cloud, { className }),
    color: "bg-gradient-two-corners bg-white/30",
  },
  {
    id: "shopify-plugins",
    name: "Shopify Plugins",
    description:
      "Enhance your Shopify store with our powerful plugins, crafted to optimize your e-commerce experience, increase sales, and provide seamless integration with various services and features.",
    icon: (className = "h-8 w-8 text-green-500") => React.createElement(ShoppingBag, { className }),
    color: "bg-white/30",
  },
  {
    id: "others",
    name: "Other Products",
    description:
      "Discover our diverse range of innovative products that don't fit the traditional SaaS or Shopify plugin categories. These unique solutions address specific needs across various industries and use cases.",
    icon: (className = "h-8 w-8 text-gray-600") => React.createElement(Package, { className }),
    color: "bg-gradient-two-corners-top bg-white/30",
  },
] as const;