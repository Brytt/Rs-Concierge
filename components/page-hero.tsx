"use client"

import { motion } from "framer-motion"
import { BackButton } from "./back-button"

interface PageHeroProps {
  eyebrow: string
  words: string[]
  /** Index of the word to accent in gold italic (defaults to last word) */
  accentIndex?: number
  /** Optional faint background image for page-specific personality */
  backgroundImage?: string
  backgroundAlt?: string
  /** Optional multiple background images, shown as a split panel */
  backgroundImages?: { src: string; alt: string }[]
  /** Lighter background variant with dark text */
  light?: boolean
}

export function PageHero({
  eyebrow,
  words,
  accentIndex,
  backgroundImage,
  backgroundAlt = "",
  backgroundImages,
  light = false,
}: PageHeroProps) {
  const accent = accentIndex ?? words.length - 1
  const images = backgroundImages ?? (backgroundImage ? [{ src: backgroundImage, alt: backgroundAlt }] : [])
  void light

  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-28 overflow-hidden bg-secondary">
      {/* page-specific background image(s), kept faint */}
      {images.length > 0 && (
        <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${images.length}, 1fr)` }}>
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src || "/images/slider-pictures/slide-downtown-aerial.jpg"}
              alt={img.alt}
              className="w-full h-full object-cover opacity-30"
            />
          ))}
        </div>
      )}

      {/* faint gold geometric texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/40 to-secondary" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-start mb-8"
        >
          <BackButton />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm tracking-[0.3em] text-gold uppercase mb-6"
        >
          {eyebrow}
        </motion.p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] flex flex-wrap justify-center gap-x-5 text-foreground">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease: "easeOut" }}
              className={i === accent ? "text-gold italic" : ""}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "7rem" }}
          transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
          className="h-0.5 bg-gold mt-8 mx-auto"
        />
      </div>
    </section>
  )
}
