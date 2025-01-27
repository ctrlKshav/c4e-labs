"use client"

import React from "react"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FooterCard from "@/components/landing-page/footer/footer-card"
import { Separator } from "@/components/ui/separator"

const SocialLinks = () => {
  const socialIcons = [
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Instagram, label: "Instagram" },
  ]

  return (
    <div className="flex space-x-4">
      {socialIcons.map(({ icon: Icon, label }, idx) => (
        <a
          key={idx}
          href="#"
          className="text-primary hover:text-muted-foreground"
          aria-label={label}
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  )
}



const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Social Links */}
          <FooterCard title="C4E Labs">
            <p className="text-foreground mb-4">Innovating the future of SaaS.</p>
            <SocialLinks />
          </FooterCard>

          {/* Products */}
          <FooterCard title="Products">
            <ul className="space-y-2">
              {[
                "TaskMaster Pro",
                "AnalyticsPro",
                "ChatBoost AI",
                "All Products",
              ].map((product, idx) => (
                <li key={idx}>
                  <a href="#" className="text-foreground hover:text-primary">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </FooterCard>

          {/* Company */}
          <FooterCard title="Company">
            <ul className="space-y-2">
              {["About Us", "Careers", "Blog", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-foreground hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </FooterCard>

          {/* Newsletter Subscription */}
          <FooterCard title="Stay Updated">
            <p className="text-foreground mb-4">
              Subscribe to our newsletter for the latest updates and innovations.
            </p>
            <form
              className="space-y-2"
              onSubmit={(e) => {
                e.preventDefault() /* Handle form submission */
              }}
            >
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </FooterCard>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} C4E Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
