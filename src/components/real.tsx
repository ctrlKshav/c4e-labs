import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, Rocket, Zap, BarChart, Users, Headphones, ListTodo, Send, Plus, MessageSquare } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Blue circle background */}
      <div className="absolute left-0 top-0 h-[800px] w-[800px] translate-x-[-30%] translate-y-[-15%] rounded-full bg-blue-400 opacity-90" />

      <div className="container relative mx-auto px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left column - Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-600 hover:bg-blue-100">VENTURE STUDIO</Badge>
              <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
                Innovate, Create, and Scale with C4E Labs
              </h1>
              <p className="text-xl text-gray-600">
                We're the umbrella for cutting-edge micro SaaS products, empowering businesses across industries with
                innovative solutions.
              </p>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-6xl font-bold text-blue-600">10+</span>
              <p className="text-xl text-gray-600">Micro SaaS products launched and growing</p>
            </div>

            <div className="flex gap-4">
              <Button size="lg">Explore Our Products</Button>
              <Button size="lg" variant="outline">
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right column - Product Showcase */}
          <div className="relative">
            <Card className="overflow-hidden rounded-lg border bg-white shadow-xl">
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center gap-2">
                  <Rocket className="h-6 w-6 text-blue-600" />
                  <span className="text-lg font-semibold">C4E Labs Products</span>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="h-5 w-5" />
                  <Headphones className="h-5 w-5" />
                  <ListTodo className="h-5 w-5" />
                  <Send className="h-5 w-5" />
                </div>
              </div>

              {/* Product Showcase */}
              <div className="h-[500px]">
                <Tabs defaultValue="product1" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="product1">TaskMaster</TabsTrigger>
                    <TabsTrigger value="product2">AnalyticsPro</TabsTrigger>
                    <TabsTrigger value="product3">ChatBoost</TabsTrigger>
                  </TabsList>
                  <TabsContent value="product1" className="p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="h-6 w-6 text-yellow-500" />
                      <h3 className="text-xl font-semibold">TaskMaster</h3>
                    </div>
                    <p className="mb-4 text-gray-600">
                      Streamline your workflow with our intuitive task management solution.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="p-4">
                        <h4 className="font-semibold mb-2">Key Features</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          <li>Drag-and-drop interface</li>
                          <li>Team collaboration tools</li>
                          <li>Automated reminders</li>
                        </ul>
                      </Card>
                      <Card className="p-4">
                        <h4 className="font-semibold mb-2">Integrations</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          <li>Slack</li>
                          <li>Google Calendar</li>
                          <li>Jira</li>
                        </ul>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="product2" className="p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart className="h-6 w-6 text-green-500" />
                      <h3 className="text-xl font-semibold">AnalyticsPro</h3>
                    </div>
                    <p className="mb-4 text-gray-600">Gain actionable insights with our powerful analytics platform.</p>
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="p-4">
                        <h4 className="font-semibold mb-2">Key Features</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          <li>Real-time data visualization</li>
                          <li>Custom report builder</li>
                          <li>Predictive analytics</li>
                        </ul>
                      </Card>
                      <Card className="p-4">
                        <h4 className="font-semibold mb-2">Data Sources</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          <li>Google Analytics</li>
                          <li>Salesforce</li>
                          <li>MySQL databases</li>
                        </ul>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="product3" className="p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <MessageSquare className="h-6 w-6 text-purple-500" />
                      <h3 className="text-xl font-semibold">ChatBoost</h3>
                    </div>
                    <p className="mb-4 text-gray-600">
                      Enhance customer engagement with our AI-powered chatbot solution.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="p-4">
                        <h4 className="font-semibold mb-2">Key Features</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          <li>Natural language processing</li>
                          <li>Multi-language support</li>
                          <li>Customizable workflows</li>
                        </ul>
                      </Card>
                      <Card className="p-4">
                        <h4 className="font-semibold mb-2">Integrations</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          <li>Zendesk</li>
                          <li>Intercom</li>
                          <li>Facebook Messenger</li>
                        </ul>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

