import { Hero } from "@/components/sections/Hero"
import { LogoMarquee } from "@/components/sections/LogoMarquee"
import { CoreFeatures } from "@/components/sections/CoreFeatures"
import { FeatureShowcase } from "@/components/sections/FeatureShowcase"
import { HowItWorksTimeline } from "@/components/sections/HowItWorksTimeline"
import { IndustriesGrid } from "@/components/sections/IndustriesGrid"
import { IntegrationsSection } from "@/components/sections/IntegrationsSection"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <CoreFeatures />
      <FeatureShowcase />
      <HowItWorksTimeline />
      <IndustriesGrid />
      <IntegrationsSection />
      <CTA />
    </>
  )
}
