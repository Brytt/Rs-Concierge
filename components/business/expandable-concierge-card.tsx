"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Plus, Check } from "lucide-react"
import type { ConciergeItem } from "@/lib/business-concierge"

interface ExpandableConciergeCardProps {
  item: ConciergeItem
  isOpen: boolean
  onToggle: () => void
}

export function ExpandableConciergeCard({ item, isOpen, onToggle }: ExpandableConciergeCardProps) {
  const { icon: Icon, title, description, detail } = item
  const panelId = `panel-${title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`

  return (
    <div
      className={`h-full bg-card border transition-all duration-500 ${
        isOpen ? "border-gold/60 shadow-xl" : "border-border shadow-sm hover:border-gold/60 hover:shadow-xl"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="group w-full text-left p-8 flex flex-col"
      >
        <div className="flex items-start justify-between gap-4">
          <div
            className={`w-14 h-14 flex items-center justify-center border transition-all duration-300 ${
              isOpen ? "border-gold bg-gold/5" : "border-gold/30 group-hover:border-gold group-hover:bg-gold/5"
            }`}
          >
            <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
          </div>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-1 text-gold shrink-0"
            aria-hidden="true"
          >
            <Plus className="w-5 h-5" />
          </motion.span>
        </div>
        <h3 className="font-serif text-xl text-foreground mt-6 mb-3 text-balance">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 pt-2">
              <div className="h-px w-full bg-border mb-6" />

              <p className="text-sm text-foreground/90 leading-relaxed mb-6">{detail.overview}</p>

              <div className="mb-6">
                <p className="text-xs tracking-[0.2em] text-gold uppercase mb-2">Who it&apos;s for</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{detail.forWho}</p>
              </div>

              <div className="mb-6">
                <p className="text-xs tracking-[0.2em] text-gold uppercase mb-3">What&apos;s included</p>
                <ul className="space-y-2">
                  {detail.includes.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" strokeWidth={2} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {detail.process && (
                <div className="bg-secondary border-l-2 border-gold px-5 py-4">
                  <p className="text-xs tracking-[0.2em] text-gold uppercase mb-2">Process</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{detail.process}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
