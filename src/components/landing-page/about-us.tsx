import type { FC } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const AboutUs: FC = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About C4E Labs</h2>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Who We Are</CardTitle>
            <CardDescription>Innovators, Creators, Problem Solvers</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              C4E Labs is a dynamic venture studio, serving as an umbrella for multiple micro SaaS products. We're
              passionate about creating innovative solutions that address real-world challenges across various
              industries.
            </p>
            <p>
              Our team of experts combines creativity, technical expertise, and business acumen to bring cutting-edge
              products to market, fostering growth and driving digital transformation.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              To empower businesses and individuals with innovative, user-friendly SaaS solutions that enhance
              productivity, streamline processes, and drive growth in the digital age.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              To be the leading venture studio, known for launching transformative micro SaaS products that shape the
              future of various industries and improve people's lives.
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">What Sets Us Apart</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Innovation-Driven</Badge>
            <Badge variant="secondary">User-Centric Design</Badge>
            <Badge variant="secondary">Agile Development</Badge>
            <Badge variant="secondary">Cross-Industry Expertise</Badge>
            <Badge variant="secondary">Continuous Improvement</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}

export  {AboutUs}

