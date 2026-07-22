"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { AnimatedSection, StaggerContainer, StaggerItem } from "./animations"

const pillars = [
  {
    title: "Business Concierge",
    href: "/business-concierge",
    image: "/images/business-concierge/business-district.png",
    imageAlt: "Dubai business district skyline at golden hour",
    tag: "01",
    description:
      "Company formation, visas and immigration, corporate taxation and banking — your business in the UAE, handled end to end.",
  },
  {
    title: "Lifestyle Concierge",
    href: "/lifestyle-concierge",
    image: "/images/lifestyle-concierge/lifestyle-hero.png",
    imageAlt: "Luxury Dubai lifestyle — waterfront villa, yacht and supercar",
    tag: "02",
    description:
      "Private aviation, yachts, supercars, residences, experiences and more — how you live, travel and unwind, arranged personally.",
  },
]

export function HomeServices() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <span className="text-xs tracking-[0.3em] text-accent uppercase mb-4 block">
            Services
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-4">
            How I Can Help You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Two pillars, one point of contact. Everything you need in Dubai —
            for your business and your life — managed with discretion.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.href} className="h-full">
              <Link href={pillar.href} className="group block h-full">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={pillar.image || "/images/lifestyle-concierge/lifestyle-hero.png"}
                    alt={pillar.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/15 transition-colors duration-700" />
                  <span className="absolute top-4 left-4 sm:top-6 sm:left-6 font-serif text-4xl sm:text-5xl text-background/50 group-hover:text-gold transition-colors duration-500">
                    {pillar.tag}
                  </span>
                </div>
                <div className="bg-card border border-border border-t-0 p-6 sm:p-8 lg:p-10">
                  <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm tracking-wide text-foreground border-b border-gold pb-1 group-hover:text-gold transition-colors">
                    Explore
                    <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
