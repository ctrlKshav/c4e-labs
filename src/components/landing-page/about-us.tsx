"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const AboutUs: React.FC = () => {
  return (
    <section className="py-12 sm:py-12 px-4 md:px-6 lg:px-8 bg-gradient-radial-quad">
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <Badge className="mb-4" variant="default">
            About Us
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Innovating the Future of SaaS
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            C4E Labs is a dynamic venture studio, bringing cutting-edge micro SaaS products to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:sticky md:top-24"
          >
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold">Our Mission</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Empowering businesses with innovative solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm sm:text-base">
                  At C4E Labs, we're passionate about creating innovative solutions that address real-world challenges
                  across various industries. Our team of experts combines creativity, technical expertise, and business
                  acumen to bring cutting-edge products to market.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Innovative Product Development",
                    "Agile Methodologies",
                    "Customer-Centric Approach",
                    "Continuous Improvement",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-sm sm:text-base"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    >
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-primary-foreground flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <Button
                  variant="secondary"
                  className="shadow-md w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Learn More About Us
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <img
              src="https://placehold.co/300"
              alt="C4E Labs Team"
              className="rounded-lg shadow-xl w-full h-auto"
              width={600}
              height={400}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 bg-card p-4 rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <p className="text-xl sm:text-2xl font-bold text-foreground">10+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Innovative Products</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

