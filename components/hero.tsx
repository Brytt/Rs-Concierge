"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const slides = [
  {
    image: "/images/aviation/privatejet/jet-hangar.jpg",
    alt: "RS Concierge private jet ready for boarding on the Dubai tarmac",
    eyebrow: "RS Concierge · Private Aviation",
    heading: ["Exceptional Access", "Without Compromise"],
    subline: "Discreet private aviation, orchestrated seamlessly from departure to arrival.",
    position: "center",
  },
  {
    image: "/images/aviation/privatejet/jet-interior.jpg",
    alt: "Contemporary luxury villa framed by palm trees in Dubai",
    eyebrow: "Private Residences",
    heading: ["A Distinguished Address", "Chosen For You"],
    subline: "Exceptional residences selected with discernment, privacy and your lifestyle in mind.",
    position: "center",
  },
  {
    image: "/images/slider-pictures/slide-yacht-skyline.jpg",
    alt: "Private jet prepared inside a premium hangar",
    eyebrow: "Always Ready",
    heading: ["Private Aviation", "Precisely Arranged"],
    subline: "Aircraft, transfers and VIP handling coordinated through one trusted point of contact.",
    position: "center",
  },
  {
    image: "/images/luxury-villa/villa-modern.jpg",
    alt: "Aerial view of a luxury yacht carving through deep blue water",
    eyebrow: "Marine Experiences",
    heading: ["The Art of", "Life at Sea"],
    subline: "Distinctive yachts, accomplished crews and itineraries composed entirely around you.",
    position: "center",
  },
  {
    image: "/images/marine/marine-card.jpg",
    alt: "Luxury yacht deck and jacuzzi overlooking the Dubai skyline",
    eyebrow: "Life On Deck",
    heading: ["Dubai From", "A Private Perspective"],
    subline: "Unhurried time on the water, defined by privacy, comfort and remarkable views.",
    position: "center",
  },
  {
    image: "/images/aviation/privatejet/jet-sunset-front.jpg",
    alt: "Contemporary motor yacht cruising along the Dubai coastline",
    eyebrow: "Yacht Charter",
    heading: ["Your Passage", "Perfectly Curated"],
    subline: "From intimate escapes to hosted occasions, every detail is considered before you step aboard.",
    position: "center",
  },
]

// Word-by-word animated headline
function AnimatedHeading({ lines }: { lines: string[] }) {
  const fullHeading = lines.join(" ")

  return (
    <h1
      aria-label={fullHeading}
      className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-[-0.025em] leading-[0.98] text-white mb-8 text-balance [text-shadow:0_3px_30px_rgba(0,0,0,0.55)] [perspective:900px]"
    >
      {lines.map((line, lineIndex) => (
        <span
          key={line}
          aria-hidden="true"
          className={`block ${lineIndex === 1 ? "font-normal italic text-gold-soft" : ""}`}
        >
          {line.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="mr-[0.22em] inline-block whitespace-nowrap last:mr-0">
              {Array.from(word).map((character, characterIndex) => (
                <motion.span
                  key={`${lineIndex}-${wordIndex}-${characterIndex}`}
                  className="inline-block origin-bottom [transform-style:preserve-3d]"
                  initial={{ opacity: 0, y: 24, rotateX: -95 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -12, rotateX: 70 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.08 + lineIndex * 0.18 + (wordIndex * 5 + characterIndex) * 0.035,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {character}
                </motion.span>
              ))}
            </span>
          ))}
        </span>
      ))}
    </h1>
  )
}

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 18 }, [
    Autoplay({ delay: 5500, stopOnInteraction: false }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 800], [0, 200])
  const contentY = useTransform(scrollY, [0, 600], [0, 120])
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

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

  const slide = slides[selectedIndex]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Carousel with Parallax — no overlay layer */}
      <motion.div style={{ y: parallaxY }} className="absolute inset-0 scale-110" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((s, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full overflow-hidden">
              <motion.img
                src={s.image}
                alt={s.alt}
                className="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
                style={{ objectPosition: s.position }}
                initial={false}
                animate={index === selectedIndex ? { scale: 1.08 } : { scale: 1.0 }}
                transition={{ duration: 2.2, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/38 via-black/12 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Carousel Controls */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-background/60 backdrop-blur-sm text-foreground hover:bg-gold hover:text-primary-foreground transition-all rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-background/60 backdrop-blur-sm text-foreground hover:bg-gold hover:text-primary-foreground transition-all rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "w-8 bg-gold" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Per-slide animated content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 pt-40 w-full"
      >
        <div className="max-w-3xl lg:max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div key={selectedIndex}>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="font-sans text-sm md:text-base tracking-[0.32em] text-gold uppercase mb-6 font-medium [text-shadow:0_1px_14px_rgba(0,0,0,0.65)]"
              >
                {slide.eyebrow}
              </motion.p>

              <AnimatedHeading lines={slide.heading} />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="font-sans text-white text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 max-w-2xl font-light [text-shadow:0_2px_18px_rgba(0,0,0,0.7)]"
              >
                {slide.subline}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-primary-foreground text-sm tracking-wide font-medium hover:bg-gold-soft transition-all hover:scale-105"
            >
              Private Inquiry
            </Link>
            <Link
              href="https://wa.me/971585881338"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/60 text-white text-sm tracking-wide hover:bg-white/10 backdrop-blur-[2px] transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-6 lg:left-8 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-white/70 uppercase rotate-90 origin-center translate-y-8 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
            Scroll
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent mt-12" />
        </div>
      </motion.div>
    </section>
  )
}
