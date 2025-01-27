import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

import Hero from "@/components/landing-page/hero"
import Features from "@/components/landing-page/features"
import AboutUs from '@/components/landing-page/about-us'
import CTA  from "@/components/landing-page/cta"
import Footer from '@/components/landing-page/footer'
import ProductsManagement from '@/components/landing-page/products-overview'


export const Route = createFileRoute('/')({
  component: Home,
})

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <ProductsManagement />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}
