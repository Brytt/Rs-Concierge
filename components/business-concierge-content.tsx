"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from "./animations"
import { PageHero } from "./page-hero"
import { ConciergeCard } from "./business/concierge-card"
import { businessCategories } from "@/lib/business-concierge"

export function BusinessConciergeContent() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="RS Concierge — Business"
        words={["Business", "Concierge"]}
        backgroundImage="/images/business-concierge/business-district.png"
        backgroundAlt="Dubai business district skyline"
      />

      {/* Intro */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-sm tracking-[0.25em] text-gold uppercase mb-6">One of Two Core Pillars</p>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug text-balance">
              Alongside Lifestyle Concierge, Business Concierge is where I handle the
              essentials of doing business in the UAE —{" "}
              <span className="text-gold italic">setup, visas, tax and banking.</span>
            </p>
            <p className="text-muted-foreground leading-relaxed mt-8 max-w-2xl mx-auto">
              Choose a category below to explore the full range of services. Every
              engagement is managed personally, with the same discretion and precision
              you expect across everything I do.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Category grid */}
      <section className="pb-16 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {businessCategories.map((category) => (
              <StaggerItem key={category.slug} className="h-full">
                <ConciergeCard
                  icon={category.icon}
                  title={category.title}
                  description={category.tagline}
                  href={`/business-concierge/${category.slug}`}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-secondary border-y border-border">
        <AnimatedSection className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.25em] text-gold uppercase mb-6">Begin the Conversation</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 text-balance">
            Let&apos;s get your business established in the UAE.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Tell me what you need and I&apos;ll handle the rest — from the first license
            to your first bank account.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold text-primary-foreground text-sm tracking-wide font-medium hover:bg-gold-soft transition-all hover:scale-105"
          >
            Enquire Now
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  )
}
