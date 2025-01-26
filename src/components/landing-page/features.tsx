import { Zap, Shield, BarChart, Users, Cloud, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized platform.",
    icon: Zap,
  },
  {
    title: "Secure by Default",
    description: "Enterprise-grade security built into every layer of the platform.",
    icon: Shield,
  },
  {
    title: "Advanced Analytics",
    description: "Gain valuable insights with our comprehensive analytics suite.",
    icon: BarChart,
  },
  {
    title: "Team Collaboration",
    description: "Work seamlessly with your team in real-time.",
    icon: Users,
  },
  {
    title: "Cloud Native",
    description: "Built on modern cloud infrastructure for maximum reliability.",
    icon: Cloud,
  },
  {
    title: "Customizable",
    description: "Tailor the platform to your specific needs with ease.",
    icon: Settings,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage and grow your business in one powerful platform.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="h-8 w-8 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

