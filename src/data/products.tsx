import { Product } from "@/types/product";
import { FileSpreadsheet, Users, ShoppingCart, Pencil, MessageCircle, Link, BookOpen, Clipboard, Bell, Mic, Image, FileText, Scale } from "lucide-react";

const products: Product[] = [
  {
    id: "product0",
    name: "LegalDocs",
    icon: <Scale className="h-6 w-6 text-blue-500" />,
    description:
      "Manage, track, and collaborate on legal documents with your team. LegalDocs brings every piece of your legal workflow together.",
    iconColor: "text-blue-500",
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
    link: "https://legaldocs-tau.vercel.app/", // Added link
  },
  {
    id: "product1",
    name: "Zeon",
    icon: <Pencil className="h-6 w-6 text-blue-900" />,
    description:
      "Your personal branding copilot. Zeon helps you write and generate posts, automate content, and analyze performance on LinkedIn.",
    iconColor: "text-purple-500",
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
    link: "https://gozeon.com/", // Added link
  },
  {
    id: "product2",
    name: "Resume AI PRO",
    icon: <FileText className="h-6 w-6 text-purple-500" />,
    description:
      "Optimize your resume with AI-driven ATS scoring, improvement suggestions, and expert resume reviews.",
    iconColor: "text-green-500",
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
    link: "https://resume-site-c4e.vercel.app/", // Added link
  },
  {
    id: "product3",
    name: "Curattor",
    icon: <BookOpen className="h-6 w-6 text-blue-500" />,
    description:
      "A curation-as-a-service tool for content curators. Automate workflows, generate newsletters, and manage curated content effortlessly.",
    iconColor: "text-blue-500",
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
    link: "https://zeon-8qz.pages.dev/", // Added link
  },
  {
    id: "product4",
    name: "CSV Data Analyzer",
    icon: <FileSpreadsheet className="h-6 w-6 text-orange-500" />,
    description:
      "Visualize and analyze CSV data efficiently without needing advanced Excel skills.",
    iconColor: "text-orange-500",
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
    link: "https://analyse-csv-data.vercel.app/", // Added link
  },
  {
    id: "product5",
    name: "Finfriend",
    icon: <Clipboard className="h-6 w-6 text-pink-500" />,
    description:
      "A Chrome extension to store frequently used text like PDF passwords and other snippets for quick access.",
    iconColor: "text-pink-500",
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
    link: "https://chromewebstore.google.com/detail/finfriend/ialnbadijnahcjeflecdnkficehiohce", // Added link
  },
  {
    id: "product6",
    name: "WhatsApp Reminder Bot",
    icon: <Bell className="h-6 w-6 text-teal-500" />,
    description:
      "Set reminders via WhatsApp messages, voice notes, emails, or phone calls. Perfect for personal and team use.",
    iconColor: "text-teal-500",
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
    link: "https://whatsapp.any.do/", // Added link
  },
  {
    id: "product7",
    name: "OkLink",
    icon: <Link className="h-6 w-6 text-indigo-500" />,
    description:
      "A Linktree alternative to manage and share multiple links in one place.",
    iconColor: "text-indigo-500",
    features: [
      {
        title: "Key Features",
        items: [
          "Link management",
          "Customizable link pages",
          "Easy sharing",
        ],
      },
      {
        title: "Capabilities",
        items: [
          "User-friendly interface",
          "Custom branding options",
          "Quick link updates",
        ],
      },
    ],
    link: "https://oklink.vercel.app/", // Added link
  },
  {
    id: "product8",
    name: "ChatMe - WhatsApp Chat Button",
    icon: <MessageCircle className="h-6 w-6 text-yellow-500" />,
    description:
      "A Shopify plugin to add a WhatsApp chat button to your store, enabling direct customer communication.",
    iconColor: "text-yellow-500",
    features: [
      {
        title: "Key Features",
        items: [
          "WhatsApp chat integration",
          "Simple Shopify plugin",
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
    link: "https://apps.shopify.com/whatsapp-chat-button-4", // Added link
  },
  {
    id: "product9",
    name: "Snapcraft",
    icon: <Image className="h-6 w-6 text-red-500" />,
    description:
      "Create product photos 10x faster with AI. Works directly from WhatsApp for quick image enhancements.",
    iconColor: "text-red-500",
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
    link: "https://snapcraft.in/", // Added link
  },
  {
    id: "product10",
    name: "TezPDF: Product Catalogues",
    icon: <FileText className="h-6 w-6 text-cyan-500" />,
    description:
      "Create tailor-made product catalogues with customizable layouts and branding options.",
    iconColor: "text-cyan-500",
    features: [
      {
        title: "Key Features",
        items: [
          "Custom catalogue creation",
          "Multiple layout options",
          "Shopify plugin integration",
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
    link: "https://apps.shopify.com/pdf-catalog", // Added link
  },
  {
    id: "product11",
    name: "SmartBrand",
    icon: <ShoppingCart className="h-6 w-6 text-lime-500" />,
    description:
      "A one-stop ERP solution for brands, covering everything from order management to commission tracking.",
    iconColor: "text-lime-500",
    features: [
      {
        title: "Key Features",
        items: [
          "Invoice and order management",
          "Commission tracking",
          "Centralized brand operations",
        ],
      },
      {
        title: "Capabilities",
        items: [
          "Streamlined workflows",
          "Customizable forms",
          "End-to-end brand management",
        ],
      },
    ],
    link: "https://online.smartbrand.one/", // Added link
  },
  {
    id: "product12",
    name: "Tezi-B2B",
    icon: <Users className="h-6 w-6 text-violet-500" />,
    description:
      "Streamline B2B customer onboarding with customizable signup forms and easy customer management.",
    iconColor: "text-violet-500",
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
    link: "https://apps.shopify.com/tezi-b2b", // Added link
  },
];

export default products;