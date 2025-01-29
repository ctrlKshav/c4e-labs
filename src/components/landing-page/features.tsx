"use client"
import type React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"

import { features } from "@/data/c4eFeaturesData"

const Features: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-radial-quad">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Building Tomorrow's Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            C4E Labs combines cutting-edge technology with innovative thinking to create solutions that drive digital transformation. Our comprehensive approach ensures your business stays ahead in the rapidly evolving tech landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <motion.img
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-background">
                  {feature.title}
                </h3>
                <p className="text-card mb-4 line-clamp-3">
                  {feature.description}
                </p>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features