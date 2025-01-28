"use client"
import React from "react"
import FooterCard from "@/components/landing-page/footer/footer-card"
import { socialMedia } from "@/data/footer"
import { productLinks, companyLinks } from "@/data/footer"

const SocialLinks = () => {
  return (
    <FooterCard title="C4E Labs">
      <p className="text-foreground mb-4">Innovating the future of SaaS.</p>
      <div className="flex space-x-6">
        {socialMedia.map((social, index) => (
          <a
            key={index}
            href={social.link}
            className="text-primary hover:text-muted-foreground"
            aria-label={social.label}
          >
            {React.createElement(social.icon, { size: 24 })}
          </a>
        ))}
      </div>
    </FooterCard>
  )
}

const ProductLinks = () => {
  return (
    <FooterCard title="Products">
      <ul className="space-y-2">
        {productLinks.map((product, idx) => (
          <li key={idx}>
            <a href={product.href} className="text-foreground hover:text-primary">
              {product.name}
            </a>
          </li>
        ))}
      </ul>
    </FooterCard>
  )
}

const CompanyLinks = () => {
  return (
    <FooterCard title="Company">
      <ul className="space-y-2">
        {companyLinks.map((item, idx) => (
          <li key={idx}>
            <a href={item.href} className="text-foreground hover:text-primary">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </FooterCard>
  )
}

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Social Links */}
          <SocialLinks />
          
          {/* Products */}
          <ProductLinks />
          
          {/* Company */}
          <CompanyLinks />
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
