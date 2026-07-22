import Link from "next/link"

const images = [
  {
    src: "/images/luxury-villa/PHOTO-2026-07-12-19-37-22 5.jpg",
    alt: "Luxury Dubai villa interior with premium finishes",
  },
  {
    src: "/images/beachclub/IMG_7367.PNG",
    alt: "Dubai beach club lifestyle experience",
  },
  {
    src: "/images/lifestyle/mansion-supercars.png",
    alt: "Dubai skyline with luxury properties",
  },
  {
    src: "/images/marine/yatchchatter/PHOTO-2026-07-12-16-43-45 2.jpg",
    alt: "Dubai Marina waterfront living",
  },
]

export function Lifestyle() {
  return (
    <section id="lifestyle" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm tracking-[0.2em] text-accent uppercase mb-4">Dubai Lifestyle</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Living. Working. Enjoying.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="aspect-[3/4] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-muted-foreground max-w-md">
            Dubai offers unlimited opportunities.<br />
            I help you access the right ones.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-foreground text-foreground text-sm tracking-wide hover:bg-foreground/5 transition-colors"
          >
            Private Inquiry
          </Link>
        </div>
      </div>
    </section>
  )
}
