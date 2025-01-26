"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Powerful Analytics",
    description: "Grow your business with an online store that anyone small business global.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iZz9z77c4PMZrsDdE5LDrGlIZGvsYr.png",
    delay: 0.2,
  },
  {
    title: "Digital Solutions",
    description: "Grow your business with an online store that anyone small business global.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iZz9z77c4PMZrsDdE5LDrGlIZGvsYr.png",
    delay: 0.4,
  },
  {
    title: "Digital Solutions",
    description: "Grow your business with an online store that anyone small business global.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iZz9z77c4PMZrsDdE5LDrGlIZGvsYr.png",
    delay: 0.6,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function FeaturesSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            We build ideas driven
            <br /> by the future.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We have three projects with this template and that is because we love the design, the large number of
            possibilities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col h-full">
              <Card className="flex flex-col h-full group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="relative h-48 mb-4"
                  >
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="ghost" className="group/button hover:text-blue-600 transition-colors duration-300">
                    Learn More{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

