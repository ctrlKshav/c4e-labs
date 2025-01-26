import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home, MessageSquare, Bell, MoreVertical, Plus, Users, Headphones, ListTodo, Send } from "lucide-react"

export default function ProjectManagement() {
  return (
    <div className="relative overflow-hidden">
      {/* Yellow circle background */}
      <div className="absolute right-0 top-0 h-[800px] w-[800px] translate-x-1/3 translate-y-[-15%] rounded-full bg-yellow-400 opacity-90" />

      <div className="container relative mx-auto px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left column - Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-600 hover:bg-purple-100">PROJECT MANAGEMENT</Badge>
              <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
                Manage projects and move work forwards faster.
              </h2>
              <p className="text-xl text-gray-600">
                Prioritise tasks, share ideas and stay aligned. Slack brings every piece of your project together from
                start to finish.
              </p>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-6xl font-bold text-purple-600">47%</span>
              <p className="text-xl text-gray-600">
                increase in productivity for teams using Slack<sup>2</sup>
              </p>
            </div>
          </div>

          {/* Right column - Slack Interface Mock */}
          <div className="relative">
            <Card className="overflow-hidden rounded-lg border bg-[#611f69] text-white shadow-xl">
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-purple-500 p-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold">Acme Inc</span>
                  <svg viewBox="0 0 12 8" className="h-3 w-3 fill-current">
                    <path d="M12 2L10.59.59 6 5.17 1.41.59 0 2l6 6z" />
                  </svg>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="h-5 w-5" />
                  <Headphones className="h-5 w-5" />
                  <ListTodo className="h-5 w-5" />
                  <Send className="h-5 w-5" />
                </div>
              </div>

              {/* Sidebar */}
              <div className="flex h-[500px]">
                <div className="w-64 border-r border-purple-500 bg-[#4A154B]">
                  <div className="flex flex-col gap-1 p-3">
                    <Button variant="ghost" className="justify-start gap-2 text-white hover:bg-purple-700">
                      <Home className="h-5 w-5" />
                      Home
                    </Button>
                    <Button variant="ghost" className="justify-start gap-2 text-white hover:bg-purple-700">
                      <MessageSquare className="h-5 w-5" />
                      DMs
                    </Button>
                    <Button variant="ghost" className="justify-start gap-2 text-white hover:bg-purple-700">
                      <Bell className="h-5 w-5" />
                      Activity
                    </Button>
                    <Button variant="ghost" className="justify-start gap-2 text-white hover:bg-purple-700">
                      <MoreVertical className="h-5 w-5" />
                      More
                    </Button>
                  </div>

                  <div className="p-3">
                    <div className="mb-2 flex items-center justify-between px-2">
                      <span className="text-sm font-medium text-gray-300">Channels</span>
                      <Plus className="h-4 w-4 text-gray-300" />
                    </div>
                    <Button variant="ghost" className="w-full justify-start gap-2 text-white hover:bg-purple-700">
                      # marketing-campaign
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-2 text-white hover:bg-purple-700">
                      # general
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-2 text-white hover:bg-purple-700">
                      # design-team
                    </Button>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 bg-white p-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-gray-900"># marketing-campaign</span>
                      <svg viewBox="0 0 12 8" className="h-3 w-3 fill-current text-gray-500">
                        <path d="M12 2L10.59.59 6 5.17 1.41.59 0 2l6 6z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

