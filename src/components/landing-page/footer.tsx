import React from "react"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-teal-50 border-t border-teal-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800">C4E Labs</h2>
            <p className="text-teal-600">Innovating the future of SaaS.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-teal-500 hover:text-teal-600">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-teal-500 hover:text-teal-600">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-teal-500 hover:text-teal-600">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-teal-500 hover:text-teal-600">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-800">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-teal-600 hover:text-teal-700">
                  TaskMaster Pro
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-600 hover:text-teal-700">
                  AnalyticsPro
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-600 hover:text-teal-700">
                  ChatBoost AI
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-600 hover:text-teal-700">
                  All Products
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-800">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-teal-600 hover:text-teal-700">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-600 hover:text-teal-700">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-600 hover:text-teal-700">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-600 hover:text-teal-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-800">Stay Updated</h3>
            <p className="text-teal-600 mb-4">Subscribe to our newsletter for the latest updates and innovations.</p>
            <form
              className="space-y-2"
              onSubmit={(e) => {
                e.preventDefault() /* Handle form submission */
              }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border-teal-200 focus:border-teal-500 focus:ring-teal-500"
              />
              <Button type="submit" className="w-full bg-teal-600 text-white hover:bg-teal-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-teal-200 text-center text-teal-600">
          <p>&copy; {new Date().getFullYear()} C4E Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

