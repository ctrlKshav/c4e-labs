"use client"
import type React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"

interface Feature {
  title: string
  description: string
  image: string
  alt: string
}

const features: Feature[] = [
  {
    title: "Agile Development Process",
    description:
      "Embrace rapid iteration and continuous improvement with our Agile methodology. We deliver value faster through sprint-based development, regular feedback loops, and adaptive planning that keeps your project ahead of market demands.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&h=350&fit=crop",
    alt: "Team collaborating on sticky notes on a glass wall"
  },
  {
    title: "AI-Powered Innovation",
    description:
      "Harness the power of artificial intelligence to transform your business. From machine learning algorithms to natural language processing, we implement cutting-edge AI solutions that automate processes, predict trends, and deliver personalized experiences.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=350&fit=crop",
    alt: "Abstract visualization of artificial intelligence networks"
  },
  {
    title: "User-Centric Design",
    description:
      "Create exceptional user experiences through research-driven design. Our UX/UI team combines user research, prototyping, and iterative testing to craft intuitive interfaces that delight users while achieving your business goals.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=350&fit=crop",
    alt: "Designer working on user interface wireframes"
  },
  {
    title: "Cloud-Native Architecture",
    description:
      "Build scalable, resilient applications using modern cloud technologies. Our cloud-native approach ensures your applications are highly available, automatically scalable, and cost-efficient while maintaining peak performance.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=350&fit=crop",
    alt: "Abstract cloud computing network visualization"
  },
  {
    title: "Data-Driven Analytics",
    description:
      "Transform raw data into actionable insights. Our analytics solutions help you understand user behavior, track KPIs, and make informed decisions using advanced data visualization and real-time reporting tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop",
    alt: "Business analytics dashboard on computer screen"
  },
  {
    title: "Security-First Development",
    description:
      "Protect your digital assets with enterprise-grade security. We implement robust security measures throughout the development lifecycle, ensuring your applications are protected against modern cyber threats.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=350&fit=crop",
    alt: "Cybersecurity concept with lock and digital interface"
  }
]

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