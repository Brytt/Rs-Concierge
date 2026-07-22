import { Utensils, Home, Car, Briefcase, Diamond } from "lucide-react"

const services = [
  {
    icon: Utensils,
    title: "Private Concierge",
    description: "Restaurant reservations, luxury experiences, yacht & jet arrangements, VIP assistance and personal requests.",
  },
  {
    icon: Home,
    title: "Relocation Support",
    description: "Dubai relocation, real estate support, company setup through partners, visa and local assistance.",
  },
  {
    icon: Car,
    title: "Automotive Services",
    description: "Luxury car sourcing, inspections, buying & selling support, export/import assistance for premium and collector cars.",
  },
  {
    icon: Briefcase,
    title: "Business Assistance",
    description: "Local connections, networking, business development, trusted partners and market intelligence.",
  },
  {
    icon: Diamond,
    title: "Luxury Lifestyle",
    description: "Access to exclusive events, travel arrangements, private experiences and lifestyle management.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm tracking-[0.2em] text-accent uppercase mb-4">Services</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            How I can help you
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {services.map((service) => (
            <div key={service.title} className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                <service.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
