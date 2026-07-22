"use client"

import { AnimatedSection, StaggerContainer, StaggerItem } from "./animations"

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Clients Served" },
  { value: "50+", label: "Business Partners" },
  { value: "24/7", label: "Availability" },
]

export function HomeStats() {
  return (
    <section className="py-20 bg-secondary border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-border">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center px-4">
                <p className="font-serif text-4xl lg:text-6xl text-gold mb-3">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
