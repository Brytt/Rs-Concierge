"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "./animations"
import type { GalleryCategory } from "@/lib/services"

function GalleryCard({
  item,
  className = "",
}: {
  item: GalleryCategory["images"][number]
  className?: string
}) {
  return (
    <div className={`group relative overflow-hidden cursor-pointer ${className}`}>
      <img
        src={item.src || "/images/lifestyle-concierge/lifestyle-hero.png"}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
      />
      {/* gold-tinted overlay */}
      <div className="absolute inset-0 bg-foreground/15 group-hover:bg-gold/25 transition-colors duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/10 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="font-serif text-2xl text-background">{item.title}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm tracking-wide text-background/80">{item.caption}</span>
          <ArrowUpRight className="h-4 w-4 text-gold opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" />
        </div>
      </div>
    </div>
  )
}

export function CategoryGallery({ categories }: { categories: GalleryCategory[] }) {
  const [active, setActive] = useState(categories[0]?.id ?? "")
  const current = categories.find((c) => c.id === active) ?? categories[0]

  if (!current) return null

  return (
    <section className="py-20 lg:py-28 bg-secondary border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mb-10 text-center">
          <p className="text-sm tracking-[0.25em] text-gold uppercase mb-4">The Collection</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground text-balance">
            Explore by category
          </h2>
        </FadeIn>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {categories.map((cat) => {
            const isActive = cat.id === active
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-6 py-2.5 text-sm tracking-wide transition-all duration-300 border ${
                  isActive
                    ? "bg-navy-blue text-background border-navy-blue"
                    : "bg-transparent text-muted-foreground border-border hover:border-gold hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Category heading + description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
          >
            <div className="max-w-2xl mb-12">
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-3">
                {current.heading}
              </h3>
              <div className="h-px w-12 bg-gold mb-4" />
              <p className="text-muted-foreground text-lg leading-relaxed">{current.description}</p>
            </div>

            {current.images.length > 0 ? (
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-[280px]">
                {current.images.map((item, i) => (
                  <StaggerItem
                    key={item.src}
                    className={i % 3 === 0 ? "md:col-span-4" : "md:col-span-2"}
                  >
                    <GalleryCard item={item} className="h-full" />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            ) : (
              <div className="border border-dashed border-border bg-card/50 py-20 text-center">
                <p className="text-muted-foreground">
                  Images for this category are coming soon.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
