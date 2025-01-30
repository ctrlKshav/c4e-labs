import React from "react";
import { 
    IconBuildingStore,
    IconCode,
    IconFileText,
    IconUsers,
    IconChartBar
} from "@tabler/icons-react";
import { SkeletonFive } from "@/components/landing-page/bento/skeletons/skeleton5";
import { SkeletonFour } from "@/components/landing-page/bento/skeletons/skeleton4";
import { SkeletonThree } from "@/components/landing-page/bento/skeletons/skeleton3";
import { SkeletonTwo } from "@/components/landing-page/bento/skeletons/skeleton2";
import { SkeletonOne } from "@/components/landing-page/bento/skeletons/skeleton1";
import { FileText, MessageCircle, Pencil, Scale } from "lucide-react";

export const items = [
  {
    title: "LegalDocs",
    description: React.createElement(
      "span",
      { className: "text-sm" },
      "Enter your Data and Generate Downloadable Legal Documents in Seconds"
    ),
    header: React.createElement(SkeletonOne,{className:"bg-background"}),
    className: "md:col-span-1",
    icon: React.createElement(Scale, { className: "h-4 w-4 text-blue-700" }),
  },
  {
    title: "Zeon",
    description: React.createElement(
      "span",
      { className: "text-sm" },
      "Your personal branding copilot. Zeon helps you write and generate posts, automate content, and analyze performance on LinkedIn."
    ),
    header: React.createElement(SkeletonTwo),
    className: "md:col-span-1",
    icon: React.createElement(MessageCircle, { className: "h-4 w-4 text-purple-800" }),
  },
  {
    title: "Resume AI Pro",
    description: React.createElement(
      "span",
      { className: "text-sm" },
      "Optimize your resume with AI-driven ATS scoring, improvement suggestions, and expert resume reviews."
    ),
    header: React.createElement(SkeletonThree),
    className: "md:col-span-1",
    icon: React.createElement(FileText, { className: "h-4 w-4 text-violet-500" }),
  },
  {
    title: "Shopify Plugins",
    description: React.createElement(
      "span",
      { className: "text-sm" },
      "Enhance store functionality with features like marketing, payment processing, inventory management, and more."
    ),
    header: React.createElement(SkeletonFour),
    className: "md:col-span-2",
    icon: <img
    src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
    alt="Shopify Logo"
    height="40"
    width="40"
    className="h-6 w-6"
  />
  },
  {
    title: "Curattor",
    description: React.createElement(
      "span",
      { className: "text-sm" },
      "A curation-as-a-service tool for content curators. Automate workflows, generate newsletters, and manage curated content effortlessly."
    ),
    header: React.createElement(SkeletonFive),
    className: "md:col-span-1",
    icon: React.createElement(Pencil, { className: "h-4 w-4 text-blue-500" }),
  },
];
