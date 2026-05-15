import React from "react"
import type { Metadata } from "next"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { CTA } from "@/components/sections/CTA"
import { LogoMarquee } from "@/components/sections/LogoMarquee"
import { integrations } from "@/data/integrations"

export const metadata: Metadata = {
  title: "Integrations | Merchant Orders",
  description: "Merchant Orders integrates with your favorite POS systems, payment gateways, and delivery networks.",
}

export default function IntegrationsPage() {
  const categories = [
    { title: "POS Systems", data: integrations.pos },
    { title: "Payment Gateways", data: integrations.payments },
    { title: "Delivery Partners", data: integrations.delivery },
    { title: "Loyalty & Marketing", data: integrations.loyalty }
  ]

  return (
    <>
      <section className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img 
            src="/images/hero-integrations.webp" 
            alt="Software integrations" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Connect Your Entire Restaurant Stack
            </h1>
            <p className="text-xl text-slate-300 mb-10">
              We play nice with others. Sync your existing tools to Merchant Orders for a seamless, automated workflow.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <LogoMarquee />

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Supported Integrations
            </h2>
            <p className="text-slate-600 text-lg">
              Don't see your tool listed? Contact us—we're constantly adding new partners.
            </p>
          </AnimatedSection>

          <div className="space-y-20 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <div key={index}>
                <AnimatedSection animation="fade-up">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100 flex items-center">
                    <span className="w-2 h-8 bg-emerald-500 rounded-full mr-4 inline-block" />
                    {category.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {category.data.map((item, i) => (
                      <div 
                        key={i} 
                        className="bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-center aspect-video hover:shadow-md hover:border-emerald-200 transition-all group"
                      >
                        <div className="w-12 h-12 bg-slate-200 rounded-full mb-4 group-hover:scale-110 transition-transform flex items-center justify-center text-slate-400 text-xs">
                          Logo
                        </div>
                        <span className="font-semibold text-slate-700">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
