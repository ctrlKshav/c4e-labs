"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-radial-stripe">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Powering Ideas at C4E Labs.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore innovative micro SaaS projects and transform your ideas into reality.
            </p>
            <Link to="/products">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2"
                size="lg"
              >

                  Get Started
                
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <img
                src="/images/CTA.jpg"
                alt="C4E Labs showcase visualization"
                className="w-full h-full object-cover rounded-2xl"
                width={600}
                height={600}
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
            </div>
            {/* Background blur effect */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-gradient-to-br from-primary via-primary/50 to-background" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
