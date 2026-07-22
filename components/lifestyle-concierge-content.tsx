"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { AnimatedSection, FadeIn } from "./animations"
import { PageHero } from "./page-hero"
import { lifestyleCategories, type LifestyleCategory } from "@/lib/lifestyle-concierge"

function CategoryCard({ category, index }: { category: LifestyleCategory; index: number }) {
  const isEven = index % 2 === 0
  const tag = String(index + 1).padStart(2, "0")

  return (
    <FadeIn direction={isEven ? "right" : "left"}>
      <div className="group relative grid overflow-hidden border border-border bg-card shadow-lg lg:overflow-visible lg:border-0 lg:bg-transparent lg:shadow-none lg:grid-cols-2 items-center gap-0">
        <div
          className={`relative overflow-hidden aspect-[16/10] ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <img
            src={category.image || "/images/lifestyle-concierge/lifestyle-hero.png"}
            alt={category.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/15 transition-colors duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
          <span className="absolute top-4 left-4 font-serif text-5xl text-background/50 group-hover:text-gold transition-colors duration-500 sm:top-6 sm:left-6 sm:text-6xl">
            {tag}
          </span>
        </div>

        <div
          className={`relative z-10 ${
            isEven
              ? "lg:order-2 lg:-ml-20"
              : "lg:order-1 lg:-mr-20 lg:text-right"
          }`}
        >
          <div className="bg-card p-6 sm:p-8 lg:border lg:border-border lg:p-12 lg:shadow-xl">
            <p className="text-xs tracking-[0.25em] text-gold uppercase mb-4">
              Lifestyle Concierge
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-5 text-balance">
              {category.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 lg:max-w-md lg:inline-block">
              {category.tagline}
            </p>
            <div className={isEven ? "" : "lg:flex lg:justify-end"}>
              <Link
                href={`/lifestyle-concierge/${category.slug}`}
                className="inline-flex items-center gap-2 text-sm tracking-wide text-foreground border-b border-gold pb-1 group/cta hover:text-gold transition-colors"
              >
                Learn More
                <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export function LifestyleConciergeContent() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="RS Concierge — Lifestyle"
        words={["Lifestyle", "Concierge"]}
        backgroundImage="/images/lifestyle-concierge/lifestyle-hero.png"
        backgroundAlt="Luxury Dubai lifestyle — waterfront villa, yacht and supercar"
      />

      {/* Intro */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-sm tracking-[0.25em] text-gold uppercase mb-6">One of Two Core Pillars</p>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug text-balance">
              Alongside Business Concierge, Lifestyle Concierge is where I take care of
              how you live, travel and unwind —{" "}
              <span className="text-gold italic">by air, by sea, by road and beyond.</span>
            </p>
            <p className="text-muted-foreground leading-relaxed mt-8 max-w-2xl mx-auto">
              Explore each category below. Every request is managed personally, with
              the discretion and precision you expect across everything I do.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Alternating image cards */}
      <section className="pb-16 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 space-y-12 sm:space-y-20 lg:space-y-28">
          {lifestyleCategories.map((category, index) => (
            <CategoryCard key={category.slug} category={category} index={index} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-secondary border-y border-border">
        <AnimatedSection className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.25em] text-gold uppercase mb-6">Begin the Conversation</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 text-balance">
            However you want to live it, I&apos;ll arrange it.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Tell me what you have in mind and I&apos;ll take care of the rest — from the
            first request to the finishing touch.
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
