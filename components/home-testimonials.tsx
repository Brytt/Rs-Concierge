"use client"

import { AnimatedSection, StaggerContainer, StaggerItem } from "./animations"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Alexander M.",
    location: "Germany",
    text: "Radomir helped us relocate our entire family to Dubai. From visa processing to finding the perfect home, everything was handled professionally. His local network is invaluable.",
    service: "Relocation Support",
  },
  {
    name: "James W.",
    location: "United Kingdom",
    text: "I needed a specific classic car in Dubai and Radomir sourced it within two weeks. His automotive connections and attention to detail exceeded my expectations.",
    service: "Automotive Services",
  },
  {
    name: "Sarah K.",
    location: "Switzerland",
    text: "The level of discretion and personal attention is remarkable. Whether it&apos;s restaurant reservations or business introductions, Radomir delivers every time.",
    service: "Private Concierge",
  },
]

export function HomeTestimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] text-gold uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl mb-4 text-foreground">
            What Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by discerning clients from around the world
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="bg-card border border-border p-8 h-full flex flex-col shadow-sm">
                <Quote className="w-8 h-8 text-gold mb-6" strokeWidth={1} />
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-xs text-gold mt-1">{testimonial.service}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
