"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from "./animations"
import { PageHero } from "./page-hero"
import { services, type Service } from "@/lib/services"

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "24/7", label: "Concierge Access" },
  { value: "10+", label: "Years in Dubai" },
  { value: "100%", label: "Discretion" },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const isEven = index % 2 === 0

  return (
    <FadeIn direction={isEven ? "right" : "left"}>
      <div className="group relative grid overflow-hidden border border-border bg-card shadow-lg lg:overflow-visible lg:border-0 lg:bg-transparent lg:shadow-none lg:grid-cols-2 items-center gap-0">
        <div
          className={`relative overflow-hidden aspect-[16/10] ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/15 transition-colors duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
          <span className="absolute top-4 left-4 font-serif text-5xl text-background/50 group-hover:text-gold transition-colors duration-500 sm:top-6 sm:left-6 sm:text-6xl">
            {service.tag}
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
              {service.subtitle}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-5 text-balance">
              {service.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 lg:max-w-md lg:inline-block">
              {service.description}
            </p>
            <div className={isEven ? "" : "lg:flex lg:justify-end"}>
              <Link
                href={`/services/${service.slug}`}
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

export function ServicesContent() {
  return (
    <div className="bg-background">
      <PageHero eyebrow="RS Concierge — Services" words={["Exclusive", "Experiences"]} />

      <section className="py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-sm tracking-[0.25em] text-gold uppercase mb-6">How I Can Help You</p>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug text-balance">
              A single point of contact for an entire world of luxury. Whatever you
              need in Dubai, <span className="text-gold italic">consider it handled.</span>
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 space-y-12 sm:space-y-20 lg:space-y-28">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-secondary border-y border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-sm tracking-[0.25em] text-gold uppercase mb-4">Why Choose Us</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
              Trusted by those who expect more
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 divide-x divide-border">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center px-2 sm:px-4">
                  <p className="font-serif text-4xl lg:text-6xl text-gold mb-3">{stat.value}</p>
                  <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative py-16 sm:py-28 lg:py-40 overflow-hidden bg-secondary">
        <img
          src="/images/services/hero-bg.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-secondary/75" />
        <AnimatedSection className="relative z-10 mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.25em] text-gold uppercase mb-6">Begin the Conversation</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8 text-balance">
            Your next experience starts with a single message.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Tell me what you have in mind. Everything else is taken care of —
            privately, personally and without compromise.
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
