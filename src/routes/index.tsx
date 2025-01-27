import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { HeroSection } from "@/components/landing-page/hero"
import { FeaturesSection } from "@/components/landing-page/features"
import AboutUs from '@/components/landing-page/about-us'
import CTASection  from "@/components/landing-page/cta"
import Footer from '@/components/landing-page/footer'
import ProjectManagement from "@/components/real";



export const Route = createFileRoute('/')({
  component: Home,
})

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ProjectManagement />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </>
  );
}
