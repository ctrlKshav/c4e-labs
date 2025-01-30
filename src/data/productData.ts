import React from "react";
import { ProductInterface } from "@/types/productTypes";
import { FileSpreadsheet, Users, Rocket, Pencil, MessageCircle, Link, BookOpen, Clipboard, Bell, Mic, Image, FileText, Scale, File, BriefcaseBusiness } from "lucide-react";

const products: ProductInterface[] = [
  {
    id: "product0",
    name: "LegalDocs",
    icon: (className = "h-6 w-6 text-blue-500") => React.createElement(Scale, { className }),
    description:
      "Manage, track, and collaborate on legal documents with your team. LegalDocs brings every piece of your legal workflow together.",
    themeColor: "bg-blue-500",
    features: {
      title: "Key Features",
      items: [
        "Document collaboration",
        "Compliance tracking",
        "Legal workflow management",
      ],
    },
    link: "https://legaldocs-tau.vercel.app/",
    productType: "saas",
    productStatus: "Live",
    imageSrc: "/images/products/LegalDocs.webp",
  },
  {
    id: "product1",
    name: "Zeon",
    icon: (className = "h-6 w-6 text-purple-900") => React.createElement(MessageCircle, { className }),
    description:
      "Your personal branding copilot. Zeon helps you write and generate posts, automate content, and analyze performance on LinkedIn.",
    themeColor: "bg-purple-700",
    features: {
      title: "Key Features",
      items: [
        "AI-generated posts",
        "Automated content scheduling",
        "Actionable analytics",
      ],
    },
    link: "https://gozeon.com/",
    productType: "saas",
    productStatus: "Live",
    imageSrc: "/images/products/Zeon.webp",
  },
  {
    id: "product2",
    name: "ResumeAI",
    icon: (className = "h-6 w-6 text-violet-500") => React.createElement(File, { className }),
    description:
      "Optimize your resume with AI-driven ATS scoring, improvement suggestions, and expert resume reviews.",
    themeColor: "bg-violet-500",
    features: {
      title: "Key Features",
      items: [
        "ATS score analysis",
        "Resume improvement tips",
        "Expert review booking",
      ],
    },
    link: "https://resume-site-c4e.vercel.app/",
    productType: "saas",
    productStatus: "Live",
    imageSrc: "/images/products/ResumeAIPro.webp",
  },
  {
    id: "product3",
    name: "Curattor",
    icon: (className = "h-6 w-6 text-blue-500") => React.createElement(Pencil, { className }),
    description:
      "A curation-as-a-service tool for content curators. Automate workflows, generate newsletters, and manage curated content effortlessly.",
    themeColor: "bg-blue-500",
    features: {
      title: "Key Features",
      items: [
        "Link categorization",
        "Automated content discovery",
        "Newsletter generation",
      ],
    },
    link: "https://zeon-8qz.pages.dev/",
    productType: "saas",
    productStatus: "Live",
    imageSrc: "/images/products/Curattor4.webp",
  },
  {
    id: "product4",
    name: "CSV Data Analyzer",
    icon: (className = "h-6 w-6 text-orange-500") => React.createElement(FileSpreadsheet, { className }),
    description:
      "Visualize and analyze CSV data efficiently without needing advanced Excel skills.",
    themeColor: "bg-orange-500",
    features: {
      title: "Key Features",
      items: [
        "CSV file upload",
        "Custom filters and grouping",
        "Column visibility management",
      ],
    },
    link: "https://analyse-csv-data.vercel.app/",
    productType: "saas",
    productStatus: "Live",
    imageSrc: "/images/products/CSV_CSV2_CSV3.webp",
  },
  {
    id: "product5",
    name: "Finfriend",
    icon: (className = "h-6 w-6 text-pink-500") => React.createElement(Clipboard, { className }),
    description:
      "A Chrome extension to store frequently used text like PDF passwords and other snippets for quick access.",
    themeColor: "bg-pink-500",
    features: {
      title: "Key Features",
      items: [
        "Clipboard storage",
        "Quick access to saved text",
        "Chrome extension integration",
      ],
    },
    link: "https://chromewebstore.google.com/detail/finfriend/ialnbadijnahcjeflecdnkficehiohce",
    productType: "other",
    productStatus: "Live",
    imageSrc: "/images/products/FinFriend.webp",
  },
  {
    id: "product6",
    name: "WhatsApp Reminder Bot",
    icon: (className = "h-6 w-6 text-teal-500") => React.createElement(Bell, { className }),
    description:
      "Set reminders via WhatsApp messages, voice notes, emails, or phone calls. Perfect for personal and team use.",
    themeColor: "bg-teal-500",
    features: {
      title: "Key Features",
      items: [
        "Reminder setup via WhatsApp",
        "Multi-channel reminders (email, phone call)",
        "Team access for shared reminders",
      ],
    },
    productType: "other",
    productStatus: "Upcoming",
    imageSrc: "/images/products/WhatsappReminder1.webp",
  },
  {
    id: "product7",
    name: "ChatMe - WhatsApp Chat Button",
    icon: (className = "h-6 w-6 text-yellow-500") => React.createElement(MessageCircle, { className }),
    description:
      "A Shopify to add a WhatsApp chat button to your store, enabling direct customer communication.",
    themeColor: "bg-yellow-500",
    features: {
      title: "Key Features",
      items: [
        "WhatsApp chat integration",
        "Simple Shopify",
        "Direct customer communication",
      ],
    },
    link: "https://apps.shopify.com/whatsapp-chat-button-4",
    productType: "shopify plugin",
    productStatus: "Live",
    imageSrc: "/images/products/ChatMe.webp",
  },
  {
    id: "product8",
    name: "Snapcraft",
    icon: (className = "h-6 w-6 text-red-500") => React.createElement(Image, { className }),
    description:
      "Create product photos 10x faster with AI. Works directly from WhatsApp for quick image enhancements.",
    themeColor: "bg-red-500",
    features: {
      title: "Key Features",
      items: [
        "AI-powered image enhancement",
        "WhatsApp integration",
        "Quick photo editing",
      ],
    },
    link: "https://snapcraft.shipmyapp.in/",
    productType: "saas",
    productStatus: "Live",
    imageSrc: "/images/products/SnapCraft.webp",
  },
  {
    id: "product9",
    name: "TezPDF: Product Catalogues",
    icon: (className = "h-6 w-6 text-cyan-500") => React.createElement(BookOpen, { className }),
    description:
      "Create tailor-made product catalogues with customizable layouts and branding options.",
    themeColor: "bg-cyan-500",
    features: {
      title: "Key Features",
      items: [
        "Custom catalogue creation",
        "Multiple layout options",
        "Shopify integration",
      ],
    },
    link: "https://apps.shopify.com/pdf-catalog",
    productType: "shopify plugin",
    productStatus: "Live",
    imageSrc: "/images/products/Tezi.webp",
  },
  {
    id: "product10",
    name: "Tezi-B2B",
    icon: (className = "h-6 w-6 text-violet-500") => React.createElement(Users, { className }),
    description:
      "Streamline B2B customer onboarding with customizable signup forms and easy customer management.",
    themeColor: "bg-violet-500",
    features: {
      title: "Key Features",
      items: [
        "Custom signup forms",
        "B2B customer management",
        "Form builder for diverse use cases",
      ],
    },
    link: "https://apps.shopify.com/tezi-b2b",
    productType: "shopify plugin",
    productStatus: "Live",
    imageSrc: "/images/products/TeziB2B.webp",
  },
];

const mvps: ProductInterface[] = [
  ...products.slice(0,3)
];

let activeProjects = 0;

products.forEach((product, index) => {
  if(product.productStatus === "Live")
    activeProjects += 1;
})

export { activeProjects, mvps };

export default products;