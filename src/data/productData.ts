import React from "react";
import { ProductInterface } from "@/types/productTypes";
import { FileSpreadsheet, Users, Rocket, Pencil, MessageCircle, Link, BookOpen, Clipboard, Bell, Mic, Image, FileText, Scale, File, BriefcaseBusiness } from "lucide-react";

const products: ProductInterface[] = [
  {
    id: "product0",
    name: "LegalDocs",
    icon: React.createElement(Scale, { className: "h-6 w-6 text-blue-500" }),
    description:
      "Manage, track, and collaborate on legal documents with your team. LegalDocs brings every piece of your legal workflow together.",
    themeColor: "bg-blue-500",
    features: [
      {
        title: "Key Features",
        items: [
          "Document collaboration",
          "Compliance tracking",
          "Legal workflow management",
        ],
      },
      {
        title: "Capabilities",
        items: [
          "85% reduction in document processing time",
          "Streamlined contract review",
          "Team collaboration tools",
        ],
      },
    ],
    link: "https://legaldocs-tau.vercel.app/",
    productType: "saas",
    productStatus: "Live",
    imageSrc: "/src/assets/images/LegalDocs.png"
  },
  {
    id: "product1",
    name: "Zeon",
    icon: React.createElement(MessageCircle, { className: "h-6 w-6 text-purple-700" }),
    description:
      "Your personal branding copilot. Zeon helps you write and generate posts, automate content, and analyze performance on LinkedIn.",
    themeColor: "bg-purple-700",
    features: [
      {
        title: "Key Features",
        items: [
          "AI-generated posts",
          "Automated content scheduling",
          "Actionable analytics",
        ],
      },
      {
        title: "Capabilities",
        items: [
          "Cross-platform posting (LinkedIn first)",
          "Goal-based social media strategies",
          "Network exploration tools",
        ],
      },
    ],
    link: "https://gozeon.com/",
    productType: "saas",
    productStatus: "Live",
    imageSrc: "/src/assets/images/Zeon.png"
  },
  {
    id: "product2",
    name: "Resume AI PRO",
    icon: React.createElement(File, { className: "h-6 w-6 text-violet-500" }),
    description:
      "Optimize your resume with AI-driven ATS scoring, improvement suggestions, and expert resume reviews.",
    themeColor: "bg-violet-500",
    features: [
      {
        title: "Key Features",
        items: [
          "ATS score analysis",
          "Resume improvement tips",
          "Expert review booking",
        ],
      },
      {
        title: "Capabilities",
        items: [
          "Resume roasting (AI-driven)",
          "Increased resume visibility",
          "Tailored suggestions for improvement",
        ],
      },
    ],
    link: "https://resume-site-c4e.vercel.app/",
    productType: "saas",
    productStatus: "Live",
    imageSrc: "/src/assets/images/ResumeAIPro.png"
  },
  {
    id: "product3",
    name: "Curattor",
    icon: React.createElement(Pencil, { className: "h-6 w-6 text-blue-500" }),
    description:
      "A curation-as-a-service tool for content curators. Automate workflows, generate newsletters, and manage curated content effortlessly.",
    themeColor: "bg-blue-500",
    features: [
      {
        title: "Key Features",
        items: [
          "Link categorization",
          "Automated content discovery",
          "Newsletter generation",
        ],
      },
      {
        title: "Capabilities",
        items: [
          "WhatsApp message automation",
          "Custom workflows",
          "Integration with multiple platforms",
        ],
      },
    ],
    link: "https://zeon-8qz.pages.dev/",
    productType: "saas",
    productStatus: "Live",
    imageSrc: "/src/assets/images/Curattor4.jpg"
  },
  {
    id: "product4",
    name: "CSV Data Analyzer",
    icon: React.createElement(FileSpreadsheet, { className: "h-6 w-6 text-orange-500" }),
    description:
      "Visualize and analyze CSV data efficiently without needing advanced Excel skills.",
    themeColor: "bg-orange-500",
    features: [
      {
        title: "Key Features",
        items: [
          "CSV file upload",
          "Custom filters and grouping",
          "Column visibility management",
        ],
      },
      {
        title: "Capabilities",
        items: [
          "Data visualization tools",
          "Multi-level grouping and searching",
          "User-friendly interface",
        ],
      },
    ],
    link: "https://analyse-csv-data.vercel.app/",
    productType: "saas",
    productStatus: "Live",
    imageSrc: "/src/assets/images/CSV_CSV2_CSV3.jpeg"
  },
  {
    id: "product5",
    name: "Finfriend",
    icon: React.createElement(Clipboard, { className: "h-6 w-6 text-pink-500" }),
    description:
      "A Chrome extension to store frequently used text like PDF passwords and other snippets for quick access.",
    themeColor: "bg-pink-500",
    features: [
      {
        title: "Key Features",
        items: [
          "Clipboard storage",
          "Quick access to saved text",
          "Chrome extension integration",
        ],
      },
      {
        title: "Capabilities",
        items: [
          "Secure text storage",
          "Easy-to-use interface",
          "Frequently used text management",
        ],
      },
    ],
    link: "https://chromewebstore.google.com/detail/finfriend/ialnbadijnahcjeflecdnkficehiohce",
    productType: "other",
    productStatus: "Live",
    imageSrc: "/src/assets/images/FinFriend.png"
  },
  {
    id: "product6",
    name: "WhatsApp Reminder Bot",
    icon: React.createElement(Bell, { className: "h-6 w-6 text-teal-500" }),
    description:
      "Set reminders via WhatsApp messages, voice notes, emails, or phone calls. Perfect for personal and team use.",
    themeColor: "bg-teal-500",
    features: [
      {
        title: "Key Features",
        items: [
          "Reminder setup via WhatsApp",
          "Multi-channel reminders (email, phone call)",
          "Team access for shared reminders",
        ],
      },
      {
        title: "Capabilities",
        items: [
          "Voice note reminders",
          "Web portal for team management",
          "Customizable reminder options",
        ],
      },
    ],
    productType: "other",
    productStatus: "Upcoming",
    imageSrc: "/src/assets/images/WhatsappReminder1.png"
  },
  {
    id: "product7",
    name: "ChatMe - WhatsApp Chat Button",
    icon: React.createElement(MessageCircle, { className: "h-6 w-6 text-yellow-500" }),
    description:
      "A Shopify to add a WhatsApp chat button to your store, enabling direct customer communication.",
    themeColor: "bg-yellow-500",
    features: [
      {
        title: "Key Features",
        items: [
          "WhatsApp chat integration",
          "Simple Shopify",
          "Direct customer communication",
        ],
      },
      {
        title: "Capabilities",
        items: [
          "500+ store installs",
          "Easy setup and use",
          "Enhanced customer engagement",
        ],
      },
    ],
    link: "https://apps.shopify.com/whatsapp-chat-button-4",
    productType: "shopify plugin",
    productStatus: "Live",
    imageSrc: "/src/assets/images/ChatMe.jpeg"
  },
  {
    id: "product8",
    name: "Snapcraft",
    icon: React.createElement(Image, { className: "h-6 w-6 text-red-500" }),
    description:
      "Create product photos 10x faster with AI. Works directly from WhatsApp for quick image enhancements.",
    themeColor: "bg-red-500",
    features: [
      {
        title: "Key Features",
        items: [
          "AI-powered image enhancement",
          "WhatsApp integration",
          "Quick photo editing",
        ],
      },
      {
        title: "Capabilities",
        items: [
          "5k+ images enhanced",
          "Featured in international newsletters",
          "Visitors from 80+ countries",
        ],
      },
    ],
    link: "https://snapcraft.shipmyapp.in/",
    productType: "saas",
    productStatus: "Live",
    imageSrc: "/src/assets/images/SnapCraft.png"
  },
  {
    id: "product9",
    name: "TezPDF: Product Catalogues",
    icon: React.createElement(BookOpen, { className: "h-6 w-6 text-cyan-500" }),
    description:
      "Create tailor-made product catalogues with customizable layouts and branding options.",
    themeColor: "bg-cyan-500",
    features: [
      {
        title: "Key Features",
        items: [
          "Custom catalogue creation",
          "Multiple layout options",
          "Shopify integration",
        ],
      },
      {
        title: "Capabilities",
        items: [
          "Time-saving catalogue generation",
          "Custom branding options",
          "Enhanced product presentation",
        ],
      },
    ],
    link: "https://apps.shopify.com/pdf-catalog",
    productType: "shopify plugin",
    productStatus: "Live",
    imageSrc: "/src/assets/images/Tezi.jpeg"
  },

  {
    id: "product10",
    name: "Tezi-B2B",
    icon: React.createElement(Users, { className: "h-6 w-6 text-violet-500" }),
    description:
      "Streamline B2B customer onboarding with customizable signup forms and easy customer management.",
    themeColor: "bg-violet-500",
    features: [
      {
        title: "Key Features",
        items: [
          "Custom signup forms",
          "B2B customer management",
          "Form builder for diverse use cases",
        ],
      },
      {
        title: "Capabilities",
        items: [
          "Simplified onboarding process",
          "Fully customizable forms",
          "Enhanced customer data management",
        ],
      },
    ],
    link: "https://apps.shopify.com/tezi-b2b",
    productType: "shopify plugin",
    productStatus: "Live",
    imageSrc: "/src/assets/images/TeziB2B.jpeg"
  },
];

export default products;