"use client"

import type React from "react"
import { useRef } from "react"
import { FadeIn } from "./animations"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

function TiltPortrait() {
  const ref = useRef<HTMLDivElement>(null)

  // Raw pointer position, normalized to -0.5 ... 0.5
  const px = useMotionValue(0)
  const py = useMotionValue(0)

  // Smooth the motion with springs for a premium, weighty feel
  const springConfig = { stiffness: 150, damping: 18, mass: 0.6 }
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [9, -9]), springConfig)
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-12, 12]), springConfig)

  // Parallax offsets for the layered depth elements
  const frameX = useSpring(useTransform(px, [-0.5, 0.5], [18, -18]), springConfig)
  const frameY = useSpring(useTransform(py, [-0.5, 0.5], [18, -18]), springConfig)
  const sheenX = useSpring(useTransform(px, [-0.5, 0.5], [-40, 40]), springConfig)
  const sheenY = useSpring(useTransform(py, [-0.5, 0.5], [-30, 30]), springConfig)

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width - 0.5)
    py.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleLeave() {
    px.set(0)
    py.set(0)
  }

  return (
    <div className="relative [perspective:1200px]">
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative will-change-transform"
      >
        {/* Portrait image — sits at the base depth */}
        <div
          className="relative aspect-[4/5] overflow-hidden shadow-2xl shadow-foreground/20"
          style={{ transform: "translateZ(40px)" }}
        >
          <img
            src="/images/radomir-dark-suit.jpg"
            alt="Radomir Sverckov overlooking Dubai"
            className="w-full h-full object-cover"
            draggable={false}
          />
          {/* Moving sheen that reacts to the pointer for a glossy, 3D feel */}
          <motion.div
            aria-hidden
            style={{ x: sheenX, y: sheenY }}
            className="pointer-events-none absolute -inset-1/4 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.28),transparent_55%)] mix-blend-soft-light"
          />
          {/* Subtle bottom gradient to ground the portrait */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
        </div>

        {/* Gold frame — floats deeper for a layered parallax effect */}
        <motion.div
          aria-hidden
          style={{ x: frameX, y: frameY, transform: "translateZ(0px)" }}
          className="absolute -bottom-6 -right-6 w-40 h-40 border-2 border-gold -z-10"
        />
        {/* Soft navy accent block on the opposite corner for depth balance */}
        <motion.div
          aria-hidden
          style={{ x: frameX, y: frameY, transform: "translateZ(-30px)" }}
          className="absolute -top-5 -left-5 w-24 h-24 bg-navy-blue/10 -z-20"
        />
      </motion.div>
    </div>
  )
}

export function HomeIntro() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <FadeIn direction="left" className="order-2 lg:order-1">
            <TiltPortrait />
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right" className="order-1 lg:order-2">
            <span className="text-xs tracking-[0.3em] text-accent uppercase mb-4 block">About RS Concierge</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Your Personal Gateway
              <br />
              to Dubai
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              After many years in the international automotive and business industry, I relocated to Dubai to build a
              private concierge and lifestyle management service focused on trusted connections, discretion and real
              local support.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Today I personally assist clients with lifestyle requests, relocation support, premium automotive sourcing
              and business-related matters in the UAE. For me, concierge is not only about luxury. It is about saving
              time, solving problems, creating opportunities and giving people access to the right network.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-foreground font-medium group hover:text-gold transition-colors"
            >
              Learn more about me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
