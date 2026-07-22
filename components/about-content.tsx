"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem, GoldLine } from "./animations"
import { PageHero } from "./page-hero"

const values = [
  {
    title: "Discretion",
    description:
      "Your privacy is paramount. All matters are handled with complete confidentiality and professionalism.",
  },
  {
    title: "Personal Touch",
    description:
      "I work directly with every client. No call centers, no assistants - just direct, personal service.",
  },
  {
    title: "Quality Network",
    description:
      "Years of building trusted relationships mean I can connect you with the right people, every time.",
  },
]

const milestones = [
  {
    year: "Earlier",
    title: "International Automotive & Business",
    description:
      "Many years spent in the international automotive and business industry, building expertise and a global network.",
  },
  {
    year: "The Move",
    title: "Relocation to Dubai",
    description:
      "Relocated to Dubai to build a private concierge and lifestyle management service rooted in trust and discretion.",
  },
  {
    year: "Today",
    title: "RS Concierge",
    description:
      "Personally assisting clients with lifestyle requests, relocation, premium automotive sourcing and business matters in the UAE.",
  },
]

export function AboutContent() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="About Me"
        words={["Who", "We", "Are"]}
        backgroundImage="/images/dubai-luxury-terrace.png"
        backgroundAlt="Dubai luxury lifestyle and experiences"
      />

      {/* Story split layout */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image - slides in from left */}
            <FadeIn direction="left">
              <div className="relative group">
                <div className="overflow-hidden aspect-[4/5]">
                  <img
                    src="/images/radomir-dark-suit.jpg"
                    alt="Radomir Sverckov"
                    className="w-full h-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold -z-10" />
              </div>
            </FadeIn>

            {/* Text - slides in from right */}
            <FadeIn direction="right" delay={0.2}>
              <div>
                <p className="text-sm tracking-[0.25em] text-gold uppercase mb-4">My Story</p>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-8 text-balance">
                  My name is Radomir Sverckov.
                </h2>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    After many years in the international automotive and business industry, I relocated to Dubai to build
                    a private concierge and lifestyle management service focused on trusted connections, discretion and real
                    local support.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Today I personally assist clients with lifestyle requests, relocation support, premium automotive sourcing
                    and business-related matters in the UAE.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    For me, concierge is not only about luxury. It is about saving time, solving problems, creating opportunities
                    and giving people access to the right network.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-gold text-primary-foreground text-sm tracking-wide font-medium hover:bg-gold-soft transition-all hover:scale-105"
                >
                  Private Inquiry
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Journey / Milestone timeline */}
      <Timeline />

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <p className="text-sm tracking-[0.25em] text-gold uppercase mb-4">My Approach</p>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground text-balance">
              Values that guide my work
            </h2>
            <GoldLine className="mx-auto mt-6" width="5rem" />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="group relative h-full p-10 bg-card border border-border overflow-hidden transition-transform duration-500 hover:-translate-y-2">
                  {/* gold border reveal */}
                  <span className="absolute inset-0 border border-gold/0 group-hover:border-gold/60 transition-colors duration-500 pointer-events-none" />
                  <span className="font-serif text-5xl text-gold/40 group-hover:text-gold transition-colors duration-500">
                    {String(values.indexOf(value) + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-foreground mt-4 mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Full-width CTA */}
      <section className="relative py-28 lg:py-36 overflow-hidden bg-secondary">
        <img
          src="/images/slider-pictures/slide-downtown-aerial.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-secondary/75" />
        <AnimatedSection className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.25em] text-gold uppercase mb-6">Let&apos;s Work Together</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-10 text-balance">
            Discretion, access and a personal approach — always.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold text-primary-foreground text-sm tracking-wide font-medium hover:bg-gold-soft transition-all hover:scale-105"
          >
            Get In Touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  )
}

function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <p className="text-sm tracking-[0.25em] text-gold uppercase mb-4">The Journey</p>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground text-balance">
            A path built on trust
          </h2>
        </AnimatedSection>

        <div ref={ref} className="relative">
          {/* animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="absolute left-[7px] md:left-1/2 top-2 bottom-2 w-px bg-gold/50 md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {milestones.map((m, i) => {
              const leftSide = i % 2 === 0
              return (
                <FadeIn key={m.title} direction={leftSide ? "right" : "left"} delay={0.2 + i * 0.2}>
                  <div
                    className={`relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${
                      leftSide ? "" : "md:text-left"
                    }`}
                  >
                    {/* dot */}
                    <span className="absolute left-0 top-1.5 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-gold ring-4 ring-secondary" />
                    <div
                      className={`${
                        leftSide ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                      }`}
                    >
                      <p className="text-xs tracking-[0.25em] text-gold uppercase mb-2">{m.year}</p>
                      <h3 className="font-serif text-2xl text-foreground mb-3">{m.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
