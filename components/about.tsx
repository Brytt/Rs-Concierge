import Link from "next/link"

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/radomir-portrait.jpg"
                alt="Radomir Sverckov - Professional portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm tracking-[0.2em] text-accent uppercase mb-4">About Me</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8">
              My name is<br />
              Radomir Sverckov.
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                After many years in the international automotive and business industry, I relocated to Dubai to build a private concierge and lifestyle management service focused on trusted connections, discretion and real local support.
              </p>
              <p>
                Today I personally assist clients with lifestyle requests, relocation support, premium automotive sourcing and business-related matters in the UAE.
              </p>
              <p>
                For me, concierge is not only about luxury.<br />
                It is about saving time, solving problems, creating opportunities and giving people access to the right network.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition-colors mt-10"
            >
              Private Inquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
