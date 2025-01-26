import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { HeroSection } from "@/components/landing-page/hero"
import { FeaturesSection } from "@/components/landing-page/features"
import { PricingSection } from "@/components/landing-page/pricing"
import { FaqSection } from "@/components/landing-page/faq-section"
import { CtaSection } from "@/components/landing-page/cta"
import ProjectManagement from "@/components/real";



export const Route = createFileRoute('/')({
  component: Home,
})

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectManagement />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
