import React from "react"
import type { Metadata } from "next"
import { features } from "@/data/features"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { CTA } from "@/components/sections/CTA"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Features | Merchant Orders",
  description: "Explore the complete suite of tools to take control of your orders, understand your customers, and scale your restaurant brand.",
}

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/20 blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-500/10 blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Powerful Features for <br className="hidden md:block" />Modern Restaurants
            </h1>
            <p className="text-xl text-slate-300 mb-10">
              Everything you need to launch, manage, and grow your digital restaurant experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Detailed List */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-32">
            {features.map((feature, index) => (
              <div 
                key={feature.id} 
                id={feature.id}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } scroll-mt-32`}
              >
                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <AnimatedSection animation={index % 2 === 1 ? "fade-up" : "fade-up"}>
                    <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                      <feature.icon size={32} />
                    </div>
                    
                    {feature.headline && (
                      <p className="font-bold text-emerald-600 mb-2">{feature.headline}</p>
                    )}
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{feature.title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">{feature.description}</p>
                    
                    <ul className="space-y-4 mb-8">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={24} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-lg">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact">
                      <Button variant="outline" className="group">
                        Get Started with {feature.title}
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </AnimatedSection>
                </div>

                {/* Visual Side */}
                <div className="w-full lg:w-1/2">
                  <AnimatedSection delay={0.2} animation="scale-up">
                    <div className="relative w-full rounded-[2rem] bg-slate-900 border border-slate-800 shadow-sm overflow-hidden flex items-center justify-center group hover:shadow-lg transition-all duration-500">
                      <img 
                        src={`/images/feature-page-${feature.id}.webp`}
                        alt={feature.title} 
                        className="w-full h-auto block"
                      />
                      {/* Fallback CSS mockup */}
                      <div className="fallback hidden absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="fallback hidden w-full max-w-md bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden transform transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 flex-col z-10">
                        {/* Fake Header */}
                        <div className="h-12 border-b border-slate-100 flex items-center px-4 gap-2">
                          <div className="w-3 h-3 rounded-full bg-slate-200" />
                          <div className="w-3 h-3 rounded-full bg-slate-200" />
                          <div className="w-3 h-3 rounded-full bg-slate-200" />
                        </div>
                        {/* Fake Content */}
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                              <feature.icon size={24} />
                            </div>
                            <div>
                              <div className="w-32 h-4 bg-slate-200 rounded-full mb-2" />
                              <div className="w-24 h-3 bg-slate-100 rounded-full" />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="w-full h-8 bg-slate-50 rounded-md" />
                            <div className="w-full h-8 bg-slate-50 rounded-md" />
                            <div className="w-3/4 h-8 bg-slate-50 rounded-md" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTA />
    </>
  )
}
