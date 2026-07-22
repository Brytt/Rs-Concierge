"use client"

import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from "./animations"
import { Check } from "lucide-react"

const benefits = [
  "Trusted connections and strong network in Dubai",
  "Discretion, privacy and personal approach",
  "Local expertise and on-the-ground support",
  "Quality over quantity",
  "Direct communication and fast response",
]

export function HomeWhy() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <AnimatedSection>
            <span className="text-xs tracking-[0.3em] text-accent uppercase mb-4 block">
              Why RS Concierge
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              It&apos;s not about having options.<br />
              <span className="text-accent">It&apos;s about having the right ones.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              When you work with me, you get more than a service provider. You get a trusted 
              partner who understands your needs and has the connections to deliver results.
            </p>

            <StaggerContainer className="space-y-4">
              {benefits.map((benefit) => (
                <StaggerItem key={benefit}>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatedSection>

          {/* Image */}
          <FadeIn direction="left">
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/radomir-networking.jpg"
                  alt="Radomir networking with local partners in Dubai"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Caption */}
              <p className="text-sm text-muted-foreground mt-4 italic">
                Building trusted relationships with local partners
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
