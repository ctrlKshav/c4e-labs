"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/product-card";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const products = [
    {
      title: "Zeon",
      description:
        "Your personal branding copilot: Generate posts, automate content, and gain actionable analytics. Start with LinkedIn, and expand your reach.",
      status: "Live",
      links: [
        { label: "Website", href: "https://gozeon.com" },
        { label: "Try Zeon", href: "https://app.gozeon.com" },
      ],
    },
    {
      title: "Curattor",
      description:
        "Curation-as-a-service for content creators. Find, categorize, and automate newsletters, WhatsApp messages, and more.",
      status: "Beta",
      links: [
        { label: "Explore Curattor", href: "https://zeon-8qz.pages.dev/" },
      ],
    },
    {
      title: "Resume AI PRO",
      description:
        "Boost your resume with AI: Get ATS scores, actionable feedback, and expert advice. Resume roasting for virality coming soon!",
      status: "Prototype",
      links: [
        { label: "Test Resume AI PRO", href: "https://resume-site-c4e.vercel.app/" },
      ],
    },
  ];

  return (
    <section className="relative ">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 "
      />
      

      <div className="container relative mx-auto px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Main CTA */}
          <div className="flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6" variant={"secondary"}>Empowering SaaS Innovation</Badge>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-primary lg:text-7xl">
                Build. Grow. Transform.
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                At C4E Labs, we craft powerful micro SaaS products to simplify
                complex challenges, helping businesses and individuals achieve
                more.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button size="lg" className="group shadow-md" variant={'secondary'}>
                Discover Our Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Product Highlights */}
          <motion.div
            className="relative grid gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
