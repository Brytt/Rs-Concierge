import Link from "next/link"
import { Instagram, MessageCircle, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy-blue text-background border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/images/logo.png"
                alt="RS Concierge"
                className="h-24 w-auto invert"
              />
            </Link>
            <p className="text-background/70 leading-relaxed max-w-sm mb-6">
              Private lifestyle and business assistance in Dubai. Trusted connections,
              discretion, and real local support for your every need in the UAE.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://instagram.com/R4DOMIR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/20 text-background/70 hover:border-gold hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://wa.me/971585881338"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/20 text-background/70 hover:border-gold hover:text-gold transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm tracking-[0.2em] text-gold uppercase mb-6">Explore</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-background/70 hover:text-background transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-sm text-background/70 hover:text-background transition-colors">
                Services
              </Link>
              <Link href="/services/luxury-lifestyle" className="text-sm text-background/70 hover:text-background transition-colors">
                Lifestyle
              </Link>
              <Link href="/about" className="text-sm text-background/70 hover:text-background transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm text-background/70 hover:text-background transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm tracking-[0.2em] text-gold uppercase mb-6">Contact</h3>
            <div className="flex flex-col gap-4">
              <a href="https://wa.me/971585881338" className="flex items-center gap-3 text-sm text-background/70 hover:text-background transition-colors">
                <Phone className="w-4 h-4 text-gold" />
                +971 58 588 1338
              </a>
              <a href="mailto:info@rsconcierge.com" className="flex items-center gap-3 text-sm text-background/70 hover:text-background transition-colors">
                <Mail className="w-4 h-4 text-gold" />
                info@rsconcierge.com
              </a>
              <a href="https://instagram.com/R4DOMIR" className="flex items-center gap-3 text-sm text-background/70 hover:text-background transition-colors">
                <Instagram className="w-4 h-4 text-gold" />
                @R4DOMIR
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-background/60">
            © RS Concierge. All rights reserved.
          </p>
          <p className="text-sm text-background/60">
            Private Lifestyle & Business Assistance in Dubai
          </p>
        </div>
      </div>
    </footer>
  )
}
