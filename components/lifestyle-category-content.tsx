"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Check } from "lucide-react"
import { AnimatedSection, FadeIn } from "./animations"
import { ServiceBreadcrumb } from "./business/service-breadcrumb"
import { BackButton } from "./back-button"
import { getLifestyleCategory, type ConciergeItem } from "@/lib/lifestyle-concierge"
import { getLifestyleItemImages } from "@/lib/lifestyle-item-images"
import { AutoImageSlider } from "./auto-image-slider"

/**
 * One editorial offering section: large themed image on one side, rich text on
 * the other. Direction alternates per offering for a magazine-like rhythm.
 */
function OfferingSection({
  item,
  index,
  reversed,
}: {
  item: ConciergeItem
  index: number
  reversed: boolean
}) {
  const images = getLifestyleItemImages(item.title)

  return (
    <AnimatedSection>
      <div
        className={`flex flex-col gap-6 sm:gap-8 lg:gap-16 lg:items-center ${
          reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: reversed ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative lg:w-[55%] shrink-0"
        >
          <div className="group relative overflow-hidden">
            <AutoImageSlider
              images={images}
              alt={item.title}
              className="w-full aspect-[4/3] transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-foreground/5 transition-opacity duration-500 group-hover:opacity-0" />
            {/* Thin gold inner frame */}
            <div className="pointer-events-none absolute inset-3 sm:inset-4 border border-background/40 transition-colors duration-500 group-hover:border-gold/60" />
          </div>
          {/* Offset gold accent line echoing the site's framing language */}
          <div
            aria-hidden="true"
            className={`hidden lg:block absolute -bottom-4 h-px w-2/3 bg-gold/50 ${
              reversed ? "right-8" : "left-8"
            }`}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="lg:flex-1"
        >
          <p className="text-sm tracking-[0.25em] text-gold uppercase mb-4">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="font-serif text-3xl md:text-4xl font-medium text-foreground text-balance mb-4">
            {item.title}
          </h3>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-5">{item.description}</p>
          {item.detail && (
            <>
              <p className="text-muted-foreground leading-relaxed mb-6">{item.detail.overview}</p>
              <ul className="space-y-3 mb-8">
                {item.detail.includes.slice(0, 4).map((inc) => (
                  <li key={inc} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center bg-gold/10">
                      <Check className="h-3 w-3 text-gold" />
                    </span>
                    <span className="text-sm text-foreground leading-relaxed">{inc}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          <Link
            href="/contact"
            className="group/link inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-gold hover:text-foreground transition-colors"
          >
            Enquire
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export function LifestyleCategoryContent({ slug }: { slug: string }) {
  const category = getLifestyleCategory(slug)

  if (!category) return null

  // Global counter so alternation continues seamlessly across group boundaries.
  let offeringIndex = -1

  return (
    <div className="bg-background">
      {/* Header with professional image */}
      <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-secondary">
        <img
          src={category.image || "/images/lifestyle-concierge/lifestyle-hero.png"}
          alt={category.title}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <BackButton className="mb-6" />
            <ServiceBreadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Lifestyle Concierge", href: "/lifestyle-concierge" },
                { label: category.title },
              ]}
            />
          </FadeIn>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-foreground mt-6 text-balance"
          >
            {category.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-lg leading-relaxed mt-6 max-w-2xl"
          >
            {category.intro}
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "7rem" }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
            className="h-0.5 bg-gold mt-8"
          />
        </div>
      </section>

      {/* Editorial offering sections */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 space-y-14 sm:space-y-20 lg:space-y-28">
          {category.groups.map((group) => (
            <div key={group.heading} className="space-y-12 sm:space-y-16 lg:space-y-24">
              <FadeIn>
                <p className="text-sm tracking-[0.25em] text-gold uppercase mb-3">{group.heading}</p>
                <div className="h-px w-full bg-border" />
              </FadeIn>
              {group.items.map((item) => {
                offeringIndex += 1
                return (
                  <OfferingSection
                    key={item.title}
                    item={item}
                    index={offeringIndex}
                    reversed={offeringIndex % 2 === 1}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-secondary border-y border-border">
        <AnimatedSection className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.25em] text-gold uppercase mb-6">Begin the Conversation</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 text-balance">
            Ready to arrange {category.title.toLowerCase()}?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Reach out and I&apos;ll walk you through the options — and take care of every
            detail on your behalf.
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
