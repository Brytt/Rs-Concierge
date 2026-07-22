import Link from "next/link"
import { MessageCircle, Instagram, Mail } from "lucide-react"

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+971 58 588 1338",
    href: "https://wa.me/971585881338",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@R4DOMIR",
    href: "https://instagram.com/R4DOMIR",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@rsconcierge.com",
    href: "mailto:info@rsconcierge.com",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <div>
            <p className="text-sm tracking-[0.2em] text-accent uppercase mb-4">Contact</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
              {"Let's connect"}
            </h2>
            <p className="text-muted-foreground mb-10">
              For private assistance and inquiries<br />
              please contact me directly.
            </p>

            <div className="space-y-6 mb-10">
              {contactMethods.map((method) => (
                <Link
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full border border-accent flex items-center justify-center">
                    <method.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="text-foreground group-hover:text-accent transition-colors">{method.value}</p>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="https://wa.me/971585881338"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground text-sm tracking-wide hover:bg-accent/90 transition-colors"
            >
              Private Inquiry
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/lifestyle/mansion-supercars.png"
                alt="Dubai luxury lifestyle - contact for concierge services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
