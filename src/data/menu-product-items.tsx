import { Rocket, FileText, Scale, MapPlus, FlaskConical } from "lucide-react"
import type { MobileMenuSectionItemProps } from "@/types/navbar/mobile-menu"

export const productItems: MobileMenuSectionItemProps[] = [
  {
    title: "Zeon  ",
    href: "https://gozeon.com/",
    description: "AI-powered Personal Branding for LinkedIn",
    icon: <Rocket className="w-5 h-5" />,
    features: [
      "AI-generated posts",
      "Social media automation",
      "Performance analytics"
    ]
  },
  {
    title: "Resume AI PRO",
    href: "https://resume-site-c4e.vercel.app/",
    description: "AI-powered Resume Enhancement Tool",
    icon: <FileText className="w-5 h-5" />,
    features: [
      "ATS Score Analysis",
      "Resume Improvement Suggestions",
      "Expert Resume Review"
    ]
  },
  {
    title: "LegalDocs",
    href: "https://legaldocs-tau.vercel.app",
    description: "Simplified Legal Documentation Platform",
    icon: <Scale className="w-5 h-5" />,
    features: [
      "Document Generation",
      "Legal Template Library", 
      "AI-Assisted Drafting"
    ]
  },
  {
    title: "Explore More",
    href: "/products",
    description: "Discover Our Full Product Ecosystem",
    icon: <MapPlus className="w-5 h-5" />,
    features: [
      "Innovative Micro SaaS Solutions",
      "Cutting-Edge AI Technologies",
      "Emerging Startup Products"
    ]
  }
]

export const contentItems: MobileMenuSectionItemProps[] = [
  {
    title: "Blog",
    href: "/blog",
    description: "Latest updates and articles",
    icon: <FlaskConical className="w-5 h-5" />,
  },
  {
    title: "Documentation",
    href: "/docs",
    description: "Learn how to use our product",
    icon: <FlaskConical className="w-5 h-5" />,
  },
]