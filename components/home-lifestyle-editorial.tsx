import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const stories = [
  { title: "Private Aviation", label: "Premium travel", href: "/lifestyle-concierge/aviation", image: "/images/aviation/privatejet/jet-hangar.jpg", alt: "Private jet prepared inside a premium hangar" },
  { title: "Skydiving Dubai", label: "Trending adventure", href: "/lifestyle-concierge/experiences", image: "/images/skydiving/PHOTO-2026-07-12-23-32-43.jpg", alt: "Skydiver in freefall above Dubai" },
  { title: "Yacht Charters", label: "Luxury on the water", href: "/lifestyle-concierge/marine", image: "/images/aviation/privatejet/jet-sunset-front.jpg", alt: "Private aircraft on the Dubai tarmac at sunset" },
  { title: "Desert Escapes", label: "Adventure", href: "/lifestyle-concierge/experiences", image: "/images/desertsafari/IMG_7325 (1).JPG", alt: "Premium desert safari experience in Dubai" },
  { title: "Hotels & Resorts", label: "Travel & stays", href: "/lifestyle-concierge/accommodation", image: "/images/hotel-reservations /PHOTO-2026-07-12-20-59-05.jpg", alt: "Luxury hotel and resort accommodation" },
  { title: "Fine Dining", label: "Food & dining", href: "/lifestyle-concierge/lifestyle", image: "/images/restaurant-reservation/PHOTO-2026-07-12-21-42-08.jpg", alt: "Elegant fine-dining restaurant interior" },
  { title: "Wellness", label: "Health & beauty", href: "/lifestyle-concierge/wellness", image: "/images/lifestyle-concierge/wellness.png", alt: "Private luxury wellness treatment" },
  { title: "VIP Events", label: "Entertainment", href: "/lifestyle-concierge/lifestyle", image: "/images/vip-event/PHOTO-2026-07-12-22-22-18.jpg", alt: "Exclusive VIP event and entertainment experience" },
] as const

export function HomeLifestyleEditorial() {
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-32" aria-labelledby="lifestyle-stories-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Curated in Dubai</p>
            <h2 id="lifestyle-stories-heading" className="font-serif text-4xl text-foreground lg:text-6xl">
              Lifestyle stories & experiences
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              From private aviation and high-altitude adventure to landmark stays, dining,
              wellness and invitation-only events — every experience is personally arranged.
            </p>
          </div>
          <Link href="/lifestyle-concierge" className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-gold">
            Explore all categories
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:justify-end">
          <span>Swipe to explore</span>
          <ArrowRight className="h-4 w-4 text-gold" aria-hidden="true" />
        </div>

        <div
          className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-6 sm:gap-5 sm:px-6 lg:-mx-8 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Curated lifestyle experiences"
        >
          {stories.map((story) => (
            <Link
              key={story.title}
              href={story.href}
              className="group relative w-[82vw] max-w-[21rem] shrink-0 snap-start overflow-hidden bg-secondary shadow-sm ring-1 ring-border/70 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:w-[19rem] lg:w-[21rem]"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  sizes="(max-width: 640px) 82vw, 336px"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">{story.label}</p>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <h3 className="font-serif text-2xl text-white lg:text-3xl">{story.title}</h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/35 bg-black/15 text-white backdrop-blur-sm transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
