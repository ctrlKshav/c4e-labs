"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-teal-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-teal-200 text-teal-800 hover:bg-teal-300">About Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-800">Innovating the Future of SaaS</h2>
          <p className="text-lg text-teal-600 max-w-2xl mx-auto">
            C4E Labs is a dynamic venture studio, bringing cutting-edge micro SaaS products to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="pb-0">
                <CardTitle className="text-2xl font-bold text-teal-800">Our Mission</CardTitle>
                <CardDescription className="text-teal-600">
                  Empowering businesses with innovative solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-teal-700 mb-4">
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
                      className="flex items-center text-teal-700"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    >
                      <ArrowRight className="h-5 w-5 mr-2 text-teal-500" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">Learn More About Us</Button>
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
              src="/placeholder.svg?height=400&width=600"
              alt="C4E Labs Team"
              className="rounded-lg shadow-xl"
              width={600}
              height={400}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <p className="text-2xl font-bold text-teal-800">10+</p>
              <p className="text-sm text-teal-600">Innovative Products</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

