import Link from "next/link"
import { ArrowUpRight, type LucideIcon } from "lucide-react"

interface ConciergeCardProps {
  icon: LucideIcon
  title: string
  description: string
  /** When provided the whole card becomes a link and shows an explore affordance */
  href?: string
}

export function ConciergeCard({ icon: Icon, title, description, href }: ConciergeCardProps) {
  const inner = (
    <div className="h-full flex flex-col bg-card border border-border p-6 sm:p-8 shadow-sm transition-all duration-500 hover:border-gold/60 hover:shadow-xl hover:-translate-y-1">
      <div className="w-12 h-12 sm:w-14 sm:h-14 mb-5 sm:mb-6 flex items-center justify-center border border-gold/30 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
        <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-xl text-foreground mb-3 text-balance">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>
      {href && (
        <span className="mt-6 inline-flex items-center gap-2 text-sm tracking-wide text-foreground border-b border-gold pb-1 self-start transition-colors group-hover:text-gold">
          Explore
          <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="group block h-full">
        {inner}
      </Link>
    )
  }

  return <div className="group h-full">{inner}</div>
}
