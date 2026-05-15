import React from "react"
import type { Metadata } from "next"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { CTA } from "@/components/sections/CTA"
import { ShieldCheck, Heart, Zap, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Merchant Orders",
  description: "Learn about Merchant Orders, our mission, and our values in helping modern restaurants succeed.",
}

export default function AboutPage() {
  const values = [
    {
      title: "Restaurant First",
      description: "We build tools that protect restaurant margins and elevate their brand, not ours.",
      icon: Heart
    },
    {
      title: "Speed & Reliability",
      description: "In the restaurant industry, every second counts. Our platform is built for speed and uptime.",
      icon: Zap
    },
    {
      title: "Data Ownership",
      description: "Your customers are yours. We give you the data and insights to build lasting relationships.",
      icon: ShieldCheck
    },
    {
      title: "Premium Experience",
      description: "We believe ordering food should be as delightful as eating it. Design matters.",
      icon: Award
    }
  ]

  return (
    <>
      <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Empowering Restaurants to Own Their Future
            </h1>
            <p className="text-xl text-slate-600">
              We are a team of technologists, designers, and food lovers dedicated to building the best digital ordering experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                The restaurant industry is evolving rapidly, but the tools to adapt shouldn't cost you your hard-earned margins. Our mission is to provide powerful, commission-free technology that helps you compete, grow, and maintain direct relationships with your guests.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                By focusing on seamless integrations, beautiful design, and actionable analytics, Merchant Orders is here to level the playing field for modern restaurants.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} animation="scale-up">
              <div className="rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl relative group">
                <img 
                  src="/images/about-mission.webp" 
                  alt="Restaurant team and technology" 
                  className="w-full h-auto block"
                />
                <div className="fallback hidden w-full h-full bg-emerald-50 p-8 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-emerald-200/50 flex items-center justify-center animate-pulse">
                    <div className="w-32 h-32 rounded-full bg-emerald-300/50" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-slate-400">
              The principles that guide how we build our products and support our partners.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1} animation="fade-up">
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 h-full">
                  <div className="w-12 h-12 rounded-xl bg-slate-700 text-emerald-400 flex items-center justify-center mb-6">
                    <value.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-slate-400">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
