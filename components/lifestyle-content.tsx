"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ArrowUpRight } from "lucide-react"
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem, GoldLine } from "./animations"
import { PageHero } from "./page-hero"

const lifestyleImages = [
  {
    src: "/images/lifestyle/yacht-aerial-1.png",
    alt: "Luxury yacht anchored in pristine blue waters",
    category: "Enjoying",
  },
  {
    src: "/images/luxury-apartment/PHOTO-2026-07-12-19-38-15.jpg",
    alt: "Modern luxury apartment with premium finishes",
    category: "Living",
  },
  {
    src: "/images/vip-event/PHOTO-2026-07-12-22-22-18.jpg",
    alt: "Exclusive VIP event with elegant ambiance",
    category: "Exploring",
  },
  {
    src: "/images/lifestyle/jet-cabin-1.png",
    alt: "Luxurious private jet cabin interior",
    category: "Enjoying",
  },
  {
    src: "/images/beachclub/IMG_7367.PNG",
    alt: "Pristine beach club setting with panoramic views",
    category: "Living",
  },
  {
    src: "/images/golf/PHOTO-2026-07-14-10-24-45.jpg",
    alt: "Championship golf course in Dubai",
    category: "Driving",
  },
]

const highlights = [
  {
    title: "World-Class Infrastructure",
    description: "Dubai offers modern infrastructure, efficient services, and a business-friendly environment.",
  },
  {
    title: "Tax Benefits",
    description: "No personal income tax and competitive corporate rates make Dubai attractive for global professionals.",
  },
  {
    title: "Strategic Location",
    description: "Positioned between Europe, Asia, and Africa with excellent connectivity worldwide.",
  },
  {
    title: "Safety & Security",
    description: "One of the safest cities in the world with low crime rates and stable governance.",
  },
]

function EditorialCard({
  image,
  className = "",
}: {
  image: (typeof lifestyleImages)[number]
  className?: string
}) {
  return (
    <div className={`group relative overflow-hidden cursor-pointer ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
      />
      {/* gold-tinted overlay */}
      <div className="absolute inset-0 bg-foreground/15 group-hover:bg-gold/25 transition-colors duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/10 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-xs tracking-[0.25em] text-gold uppercase">{image.category}</span>
        <p className="font-serif text-2xl text-background mt-1">{image.alt}</p>
        <div className="flex items-center gap-2 mt-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <span className="text-sm tracking-wide text-background">Explore</span>
          <ArrowUpRight className="h-4 w-4 text-gold" />
        </div>
      </div>
    </div>
  )
}

function MoodReel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="relative h-[80vh] min-h-[500px] overflow-hidden bg-secondary">
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {lifestyleImages.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full">
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-foreground/45" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <FadeIn>
          <p className="text-sm tracking-[0.3em] text-gold uppercase mb-6">The Mood</p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-background text-balance max-w-4xl">
            Live the <span className="text-gold italic">Dubai Life</span>
          </h2>
        </FadeIn>
      </div>

      {/* indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {lifestyleImages.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "w-8 bg-gold" : "w-2 bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export function LifestyleContent() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Dubai Lifestyle"
        words={["Living.", "Working.", "Enjoying."]}
        backgroundImage="/images/lifestyle/mansion-supercars.png"
        backgroundAlt="Dubai luxury lifestyle - mansion with supercars"
      />

      {/* Editorial magazine grid */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mb-16 max-w-2xl">
            <p className="text-sm tracking-[0.25em] text-gold uppercase mb-4">A Curated Life</p>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground text-balance">
              Every corner of Dubai, at your fingertips
            </h2>
            <GoldLine className="mt-6" width="5rem" />
          </AnimatedSection>

          {/* asymmetric editorial grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-[260px]">
            <StaggerItem className="md:col-span-4 md:row-span-2">
              <EditorialCard image={lifestyleImages[0]} className="h-full" />
            </StaggerItem>
            <StaggerItem className="md:col-span-2">
              <EditorialCard image={lifestyleImages[1]} className="h-full" />
            </StaggerItem>
            <StaggerItem className="md:col-span-2">
              <EditorialCard image={lifestyleImages[2]} className="h-full" />
            </StaggerItem>
            <StaggerItem className="md:col-span-2">
              <EditorialCard image={lifestyleImages[3]} className="h-full" />
            </StaggerItem>
            <StaggerItem className="md:col-span-2">
              <EditorialCard image={lifestyleImages[4]} className="h-full" />
            </StaggerItem>
            <StaggerItem className="md:col-span-2">
              <EditorialCard image={lifestyleImages[5]} className="h-full" />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Mood reel */}
      <MoodReel />

      {/* Why Dubai */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <p className="text-sm tracking-[0.25em] text-gold uppercase mb-4">Why Dubai</p>
              <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-6 text-balance">
                Dubai offers unlimited opportunities. I help you access the right ones.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you&apos;re relocating, investing, or seeking a new lifestyle, Dubai provides the perfect environment
                for growth and success.
              </p>
              <GoldLine className="mt-8" width="6rem" />
            </FadeIn>

            <StaggerContainer className="grid sm:grid-cols-2 gap-5">
              {highlights.map((item, i) => (
                <StaggerItem key={item.title}>
                  <div className="group relative h-full p-8 bg-card border border-border hover:border-gold/50 transition-colors duration-500">
                    <span className="font-serif text-3xl text-gold/40 group-hover:text-gold transition-colors duration-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-xl font-medium text-foreground mt-3 mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <AnimatedSection className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            Ready to explore what Dubai has to offer?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold text-primary-foreground text-sm tracking-wide font-medium hover:bg-gold-soft transition-all hover:scale-105 mt-4"
          >
            Private Inquiry
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  )
}
