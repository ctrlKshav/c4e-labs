import * as React from 'react'
import { createFileRoute, createRoute } from '@tanstack/react-router'

import Hero from '@/components/landing-page/hero'
import Features from '@/components/landing-page/features'
import AboutUs from '@/components/landing-page/about-us'
import CTA from '@/components/landing-page/cta'
import Footer from '@/components/landing-page/footer'
import ProductsOverview from '@/components/landing-page/products-overview'
import MVPS from '@/components/landing-page/mvps'
import C4ELabsBentoGrid from '@/components/landing-page/bento'
import CompanyShowcase from '@/components/company-showcase'

export const Route = createFileRoute('/')({
  component: Home,
})

export default function Home() {
  return (
    <>
      <Hero />
      {/* <CompanyShowcase /> */}
      {/* <C4ELabsBentoGrid /> */}
      <ProductsOverview />
      <AboutUs />
      <MVPS />
      <Features />
      <CTA />
      <Footer />
    </>
  )
}
