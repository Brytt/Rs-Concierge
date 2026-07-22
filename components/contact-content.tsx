"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Instagram, Globe, MessageCircle, ArrowUpRight } from "lucide-react"
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from "./animations"
import { PageHero } from "./page-hero"

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+971 58 588 1338",
    href: "https://wa.me/971585881338",
    description: "Preferred for quick inquiries",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@R4DOMIR",
    href: "https://instagram.com/R4DOMIR",
    description: "Follow for Dubai lifestyle",
  },
  {
    icon: Mail,
    label: "Email",
    value: "your@rsconcierge.com",
    href: "mailto:your@rsconcierge.com",
    description: "For detailed inquiries",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.rsconcierge.com",
    href: "https://www.rsconcierge.com",
    description: "Learn more about services",
  },
]

function FloatingField({
  id,
  label,
  type = "text",
  textarea = false,
}: {
  id: string
  label: string
  type?: string
  textarea?: boolean
}) {
  const [value, setValue] = useState("")
  const filled = value.length > 0

  const sharedClasses =
    "peer w-full bg-transparent border-b border-border pt-6 pb-2 text-foreground placeholder-transparent focus:border-gold focus:outline-none transition-colors"

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          rows={4}
          placeholder={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`${sharedClasses} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={sharedClasses}
        />
      )}
      <label
        htmlFor={id}
        className={`absolute left-0 text-muted-foreground transition-all duration-300 pointer-events-none ${
          filled ? "top-0 text-xs text-gold" : "top-6 text-base"
        } peer-focus:top-0 peer-focus:text-xs peer-focus:text-gold`}
      >
        {label}
      </label>
    </div>
  )
}

export function ContactContent() {
  return (
    <div className="bg-background">
      <PageHero eyebrow="Contact" words={["Let's", "Connect"]} />

      {/* Split: form + details */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <FadeIn direction="left">
              <p className="text-sm tracking-[0.25em] text-gold uppercase mb-4">Send a Message</p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-10 text-balance">
                Tell me what you have in mind.
              </h2>
              <form
                className="space-y-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid sm:grid-cols-2 gap-8">
                  <FloatingField id="name" label="Full Name" />
                  <FloatingField id="email" label="Email Address" type="email" />
                </div>
                <FloatingField id="subject" label="Subject" />
                <FloatingField id="message" label="Your Message" textarea />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 px-10 py-4 bg-gold text-primary-foreground text-sm tracking-wide font-medium hover:bg-gold-soft transition-colors"
                >
                  Send Message
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.button>
              </form>
            </FadeIn>

            {/* Details */}
            <FadeIn direction="right" delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                For private assistance and inquiries, please contact me directly.
                I personally respond to all messages and am available to discuss how I can help with your needs in Dubai.
              </p>

              <StaggerContainer className="space-y-4">
                {contactMethods.map((method) => (
                  <StaggerItem key={method.label}>
                    <Link
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-6 bg-card border border-border hover:border-gold/50 transition-colors duration-500 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                        <method.icon className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{method.label}</p>
                        <p className="text-lg font-medium text-foreground">{method.value}</p>
                        <p className="text-sm text-muted-foreground mt-1">{method.description}</p>
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* WhatsApp CTA */}
              <Link
                href="https://wa.me/971585881338"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 px-8 py-4 bg-gold text-primary-foreground text-sm tracking-wide font-medium hover:bg-gold-soft transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                Message on WhatsApp
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Dark-styled map */}
      <AnimatedSection>
        <div className="relative h-[420px] w-full overflow-hidden bg-secondary">
          <iframe
            title="Dubai location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57721.4!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zRHViYWk!5e0!3m2!1sen!2sae!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.3) contrast(0.95) brightness(1.02)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/20" />
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <section className="py-24 lg:py-32">
        <AnimatedSection className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-4 text-balance">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Send me a message on WhatsApp for the fastest response. I&apos;m here to help with all your Dubai needs.
          </p>
          <Link
            href="https://wa.me/971585881338"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold text-primary-foreground text-sm tracking-wide font-medium hover:bg-gold-soft transition-all hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            Message on WhatsApp
          </Link>
        </AnimatedSection>
      </section>
    </div>
  )
}
