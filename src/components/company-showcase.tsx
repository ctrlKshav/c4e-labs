import { Card } from "@/components/ui/card"

const companies = [
  {
    name: "Stripe",
    logo: "https://v0.dev/placeholder.svg?height=60&width=120",
  },
  {
    name: "Airbnb",
    logo: "https://v0.dev/placeholder.svg?height=60&width=120",
  },
  {
    name: "Instacart",
    logo: "https://v0.dev/placeholder.svg?height=60&width=120",
  },
  {
    name: "DoorDash",
    logo: "https://v0.dev/placeholder.svg?height=60&width=120",
  },
  {
    name: "Cruise",
    logo: "https://v0.dev/placeholder.svg?height=60&width=120",
  },
  {
    name: "Twitch",
    logo: "https://v0.dev/placeholder.svg?height=60&width=120",
  },
  {
    name: "Coinbase",
    logo: "https://v0.dev/placeholder.svg?height=60&width=120",
  },
  {
    name: "Pagerduty",
    logo: "https://v0.dev/placeholder.svg?height=60&width=120",
  },
  // Add more companies as needed
]

export default function CompanyShowcase() {
  return (
    <section className="w-full py-12 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Top YC companies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {companies.map((company) => (
            <Card
              key={company.name}
              className="flex items-center justify-center p-6 bg-card hover:bg-accent/50 transition-colors"
            >
              <img
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Card>
          ))}
          <Card className="flex items-center justify-center p-6 bg-card hover:bg-accent/50 transition-colors">
            <div className="text-2xl font-semibold text-muted-foreground">+</div>
          </Card>
        </div>
      </div>
    </section>
  )
}

