"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from "./animations"
import { ExpandableConciergeCard } from "./business/expandable-concierge-card"
import { ServiceBreadcrumb } from "./business/service-breadcrumb"
import { BackButton } from "./back-button"
import { getBusinessCategory } from "@/lib/business-concierge"

export function BusinessCategoryContent({ slug }: { slug: string }) {
  const category = getBusinessCategory(slug)
  // Tracks the single open card per group (accordion behaviour): key is the
  // group heading, value is the open item's title (or null when all collapsed).
  const [openByGroup, setOpenByGroup] = useState<Record<string, string | null>>({})

  if (!category) return null

  return (
    <div className="bg-background">
      {/* Header with professional image */}
      <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-secondary">
        <img
          src={category.image || "/images/business-concierge/business-district.png"}
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
                { label: "Business Concierge", href: "/business-concierge" },
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

      {/* Grouped card sections */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
          {category.groups.map((group) => (
            <div key={group.heading}>
              <FadeIn className="mb-6 sm:mb-8 lg:mb-10">
                <p className="text-sm tracking-[0.25em] text-gold uppercase mb-3">{group.heading}</p>
                <div className="h-px w-full bg-border" />
              </FadeIn>
              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-start">
                {group.items.map((item) => {
                  const isOpen = openByGroup[group.heading] === item.title
                  return (
                    <StaggerItem key={item.title}>
                      <ExpandableConciergeCard
                        item={item}
                        isOpen={isOpen}
                        onToggle={() =>
                          setOpenByGroup((prev) => ({
                            ...prev,
                            [group.heading]: isOpen ? null : item.title,
                          }))
                        }
                      />
                    </StaggerItem>
                  )
                })}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-secondary border-y border-border">
        <AnimatedSection className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.25em] text-gold uppercase mb-6">Begin the Conversation</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 text-balance">
            Ready to get started with {category.title.toLowerCase()}?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Reach out and I&apos;ll walk you through exactly what&apos;s needed — and take
            care of it on your behalf.
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
