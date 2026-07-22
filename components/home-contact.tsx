"use client"

import { AnimatedSection, FadeIn } from "./animations"
import { Phone, Mail, Instagram, MapPin } from "lucide-react"
import Link from "next/link"

export function HomeContact() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <AnimatedSection>
            <span className="text-xs tracking-[0.3em] text-accent uppercase mb-4 block">
              Contact
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
              Let&apos;s Connect
            </h2>


            <div className="space-y-6 mb-10">
              <a
                href="https://wa.me/971585881338"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-foreground/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="text-foreground font-medium">+971 58 588 1338</p>
                </div>
              </a>

              <a
                href="https://instagram.com/R4DOMIR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-foreground/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Instagram className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Instagram</p>
                  <p className="text-foreground font-medium">@R4DOMIR</p>
                </div>
              </a>

              <a
                href="mailto:info@rsconcierge.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-foreground/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">info@rsconcierge.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-foreground/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm tracking-wide hover:bg-foreground/90 transition-colors"
            >
              Private Inquiry
            </Link>
          </AnimatedSection>

          {/* Map */}
          <FadeIn direction="left">
            <div className="h-full min-h-[400px] lg:min-h-full relative bg-muted overflow-hidden">
              {/* Dubai Map - Using OpenStreetMap embed */}
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=55.1,25.1,55.4,25.3&layer=mapnik&marker=25.2048,55.2708"
                className="w-full h-full border-0 grayscale opacity-80"
                title="Dubai Location Map"
                loading="lazy"
              />
              {/* Map Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent pointer-events-none" />
              {/* Location Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-4 h-4 bg-accent rounded-full animate-ping absolute" />
                  <div className="w-4 h-4 bg-accent rounded-full relative" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
