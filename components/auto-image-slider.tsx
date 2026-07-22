"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

/**
 * Drop-in replacement for a static <img> inside existing cards.
 * Auto-plays a quick crossfade between images, loops forever,
 * supports manual arrows (hover-reveal on desktop, always visible
 * on mobile), pauses on hover, lazy-loads and shows dot indicators.
 * Auto-play keeps running after a manual click.
 */
export function AutoImageSlider({
  images,
  alt,
  interval = 3500,
  className = "",
  imgClassName = "",
}: {
  images: readonly string[]
  alt: string
  interval?: number
  className?: string
  imgClassName?: string
}) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (paused || images.length <= 1) return
    timer.current = setInterval(() => {
      setActive((i) => (i + 1) % images.length)
    }, interval)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [paused, images.length, interval])

  const goPrev = () => setActive((i) => (i - 1 + images.length) % images.length)
  const goNext = () => setActive((i) => (i + 1) % images.length)

  if (images.length === 0) return null

  return (
    <div
      className={`group/slider relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src || "/images/lifestyle-concierge/lifestyle-hero.png"}
          alt={i === active ? alt : ""}
          loading={i === 0 ? "eager" : "lazy"}
          aria-hidden={i !== active}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[350ms] ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
        />
      ))}

      {images.length > 1 && (
        <>
          {/* Arrows — always visible on mobile, hover-reveal on desktop */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-primary-foreground md:opacity-0 md:group-hover/slider:opacity-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-primary-foreground md:opacity-0 md:group-hover/slider:opacity-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {images.length <= 8 ? (
            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === active ? "w-4 bg-gold" : "w-1.5 bg-background/60"
                  }`}
                />
              ))}
            </div>
          ) : (
            <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 bg-black/55 px-3 py-1 text-xs tracking-widest text-white backdrop-blur-sm">
              {active + 1} / {images.length}
            </div>
          )}
        </>
      )}
    </div>
  )
}
