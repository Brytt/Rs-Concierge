"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/971585881338"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="relative flex items-center justify-center">
        {/* pulse ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-gold/40 animate-ping" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gold text-primary-foreground shadow-lg shadow-foreground/20 transition-transform group-hover:scale-110">
          <MessageCircle className="h-6 w-6" />
        </span>
      </span>
    </motion.a>
  )
}
