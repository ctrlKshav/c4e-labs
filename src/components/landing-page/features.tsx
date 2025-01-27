﻿"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Feature {
  title: string
  description: string
  image: string
}

const features: Feature[] = [
  {
    title: "Agile Development Process",
    description:
      "We prioritize iterative and adaptive methodologies, ensuring that our products evolve with market needs.",
    image: "/api/placeholder/128/128",
  },
  {
    title: "AI-Powered Innovation",
    description:
      "Leverage cutting-edge AI and automation to build intelligent, scalable solutions tailored for the future.",
    image: "/api/placeholder/128/128",
  },
  {
    title: "User-Centric Design",
    description:
      "Focus on delivering seamless user experiences through research-driven and intuitive design frameworks.",
    image: "/api/placeholder/128/128",
  },
]

interface VerticalLineProps {
  className?: string
}

const VerticalLine: React.FC<VerticalLineProps> = ({ className }) => (
  <motion.div
    className={`hidden md:block absolute right-[-1rem] w-[2px] bg-primary ${className}`}
    initial={{ height: 0, top: "50%" }}
    animate={{
      height: ["0%", "100%", "0%"],
      top: ["50%", "0%", "50%"],
    }}
    transition={{
      duration: 3,
      ease: "easeInOut",
      repeat: Number.POSITIVE_INFINITY,
    }}
  />
)

const Features: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Building Tomorrow, Today.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            C4E Labs specializes in transforming visionary ideas into successful ventures by blending innovation,
            strategy, and execution.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-16 relative">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center bg-primary rounded-md p-6"
            >
              {index < features.length - 1 && <VerticalLine />}
              <div className="mb-6 flex justify-center">
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="w-32 h-32 object-contain text-card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-background">{feature.title}</h3>
              <p className="text-card mb-4">{feature.description}</p>
              <Button
                variant="link"
                className="text-background font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

