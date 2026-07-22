"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react"
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from "./animations"
import { CategoryGallery } from "./category-gallery"
import { getServiceBySlug } from "@/lib/services"

// Elegant captions cycled across gallery tiles for an editorial feel.
const galleryCaptions = [
  "Private Meetings",
  "Discreet Arrangements",
  "Curated Experiences",
  "VIP Hospitality",
  "Exclusive Access",
  "Seamless Service",
  "Effortless Luxury",
]

// Bento-style sizing for a trending, magazine-like asymmetric layout.
function gallerySpan(i: number) {
  const pattern = i % 6
  if (pattern === 0) return "col-span-2 row-span-2" // large feature
  if (pattern === 3) return "md:row-span-2" // tall accent
  if (pattern === 5) return "md:col-span-2" // wide accent
  return ""
}

function GalleryTiltCard({
  src,
  alt,
  label,
  className = "",
}: {
  src: string
  alt: string
  label: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTransform(`perspective(1000px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg) scale(1.02)`)
  }

  function handleLeave() {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)")
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform, transformStyle: "preserve-3d" }}
      className={`group relative overflow-hidden bg-secondary transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      <img
        src={src || "/images/lifestyle-concierge/lifestyle-hero.png"}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.12]"
      />

      {/* Resting tint + hover scrim for caption legibility */}
      <div className="absolute inset-0 bg-foreground/10 transition-opacity duration-500 group-hover:opacity-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Thin gold frame that draws in on hover */}
      <div className="pointer-events-none absolute inset-3 border border-gold/0 transition-all duration-500 group-hover:inset-4 group-hover:border-gold/60" />

      {/* Caption slides up on hover */}
      <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="block h-px w-8 bg-gold mb-3" />
        <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-1">RS Concierge</p>
        <p className="font-serif text-lg lg:text-xl text-background leading-snug">{label}</p>
      </div>
    </div>
  )
}

export function ServiceDetail({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug)
  if (!service) return null
  const Icon = service.icon

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden bg-secondary">
        <img
          src={service.image || "/images/services/hero-bg.png"}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/40 to-secondary" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-muted-foreground hover:text-gold transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            All Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-5"
          >
            <span className="flex-shrink-0 w-16 h-16 flex items-center justify-center border border-gold/40 bg-gold/5">
              <Icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
            </span>
            <p className="text-sm tracking-[0.3em] text-gold uppercase">{service.subtitle}</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-[1.05] mt-8 text-balance"
          >
            {service.title}
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "7rem" }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
            className="h-0.5 bg-gold mt-8"
          />
        </div>
      </section>

      {/* Body */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="font-serif text-2xl md:text-3xl text-foreground leading-snug mb-10 text-balance">
              {service.description}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">{service.content}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-28 bg-secondary border-y border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <p className="text-sm tracking-[0.25em] text-gold uppercase mb-4">What&apos;s Included</p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground text-balance">
              Every detail, taken care of
            </h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {service.features.map((feature) => (
              <StaggerItem key={feature}>
                <div className="flex items-center gap-4 bg-card border border-border p-6 h-full transition-colors duration-500 hover:border-gold/50">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                    <Check className="w-5 h-5 text-gold" strokeWidth={2} />
                  </span>
                  <p className="text-foreground font-medium">{feature}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn className="mb-14 text-center">
            <p className="text-sm tracking-[0.25em] text-gold uppercase mb-4">How It Works</p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground text-balance">
              A simple, seamless process
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {service.process.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.15} className="relative">
                <span className="font-serif text-5xl text-gold/40">{String(i + 1).padStart(2, "0")}</span>
                <div className="h-px w-12 bg-gold my-5" />
                <h3 className="font-serif text-2xl font-medium text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Categorized gallery (filter tabs) — used by Automotive Services */}
      {service.categories && service.categories.length > 0 && (
        <CategoryGallery categories={service.categories} />
      )}

      {/* Gallery */}
      {(!service.categories || service.categories.length === 0) && service.gallery.length > 0 && (
        <section className="py-20 lg:py-28 bg-secondary border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeIn className="mb-12 text-center">
              <p className="text-sm tracking-[0.25em] text-gold uppercase mb-4">Gallery</p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground text-balance">
                A glimpse of the experience
              </h2>
            </FadeIn>
            <StaggerContainer className="grid grid-flow-dense grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 auto-rows-[180px] md:auto-rows-[230px]">
              {service.gallery.map((src, i) => (
                <StaggerItem key={src} className={gallerySpan(i)}>
                  <GalleryTiltCard
                    src={src}
                    alt={`${service.title} ${i + 1}`}
                    label={galleryCaptions[i % galleryCaptions.length]}
                    className="h-full w-full"
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-secondary border-t border-border">
        <AnimatedSection className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.25em] text-gold uppercase mb-6">Begin the Conversation</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-8 text-balance">
            Ready to experience {service.title.toLowerCase()}?
          </h2>
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
