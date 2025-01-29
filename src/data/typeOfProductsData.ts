import React from "react";
import { Cloud, ShoppingBag, Package } from "lucide-react";

export const productTypes = [
  {
    id: "saas",
    name: "SaaS Products",
    description:
      "Powerful software solutions that streamline your business and boost productivity in today's digital world.",
    icon: (className = "h-8 w-8 text-blue-600") => React.createElement(Cloud, { className }),
    color: "bg-gradient-two-corners bg-white/30",
  },
  {
    id: "shopify-plugins",
    name: "Shopify Plugins",
    description:
      "Level up your Shopify store with plugins that boost sales and seamlessly integrate with the tools you love.",
    icon: (className = "h-8 w-8 text-green-500") => React.createElement(ShoppingBag, { className }),
    color: "bg-white/30",
  },
  {
    id: "others",
    name: "Other Products",
    description:
      "Innovative solutions for unique challenges — when you need something different from the usual tools.",
    icon: (className = "h-8 w-8 text-gray-600") => React.createElement(Package, { className }),
    color: "bg-gradient-two-corners-top bg-white/30",
  },
] as const;