import { Utensils, Diamond, Building2, Briefcase, Car, type LucideIcon } from "lucide-react"

export type ProcessStep = {
  title: string
  description: string
}

export type GalleryItem = {
  src: string
  title: string
  caption: string
}

export type GalleryCategory = {
  id: string
  label: string
  heading: string
  description: string
  images: GalleryItem[]
}

export type Service = {
  slug: string
  tag: string
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  image: string
  content: string
  features: string[]
  process: ProcessStep[]
  gallery: string[]
  // Optional categorized gallery (filter tabs). When present, it replaces the
  // simple `gallery` grid on the service detail page.
  categories?: GalleryCategory[]
}

export const services: Service[] = [
  {
    slug: "private-concierge",
    tag: "01",
    icon: Utensils,
    title: "Private Concierge",
    subtitle: "Anything, Anytime",
    description: "Restaurant reservations, luxury experiences, yacht & jet arrangements, VIP assistance.",
    image: "/images/services/vip.png",
    content:
      "From the most coveted dinner reservations to private yacht days and last-minute jet charters, my concierge service is your single point of contact for everything Dubai has to offer. Every request is handled with absolute discretion and a personal touch. Consider it done — quietly, quickly and exactly as you imagined.",
    features: [
      "24/7 availability",
      "Multilingual support",
      "Verified luxury partners",
      "Same-day arrangements",
    ],
    process: [
      { title: "Reach Out", description: "Tell me what you need, any time of day or night." },
      { title: "I Arrange", description: "I coordinate every detail with my trusted network." },
      { title: "You Enjoy", description: "Show up and experience it — everything is handled." },
    ],
    // Luxury private meetings + hospitality / beach club arrangement shots.
    // The first image becomes the large feature tile in the gallery layout.
    gallery: [
      "/images/concierge/private-meeting-1.png",
      "/images/concierge/private-meeting-2.png",
      "/images/beachclub/IMG_7363.PNG",
      "/images/beachclub/IMG_7366.PNG",
      "/images/beachclub/IMG_7367.PNG",
      "/images/beachclub/IMG_7368.PNG",
      "/images/beachclub/IMG_7369.PNG",
    ],
  },
  {
    slug: "luxury-lifestyle",
    tag: "02",
    icon: Diamond,
    title: "Luxury Lifestyle",
    subtitle: "Curated Living",
    description: "Access to exclusive events, travel arrangements and lifestyle management.",
    image: "/images/services/events.png",
    content:
      "Step into a calendar of private galas, fashion previews and members-only experiences that rarely reach the public. I curate bespoke travel, manage the details of everyday luxury and open doors that are usually closed. Your lifestyle, elevated and effortlessly managed around your schedule.",
    features: [
      "Members-only event access",
      "Bespoke travel curation",
      "Personal lifestyle management",
      "Exclusive partner privileges",
    ],
    process: [
      { title: "Discover", description: "We define the experiences and access that matter to you." },
      { title: "Curate", description: "I build a tailored calendar of events and arrangements." },
      { title: "Live It", description: "Enjoy a seamlessly managed luxury lifestyle, always." },
    ],
    // Generated jet & yacht stock (no jets/yachts were uploaded yet — swap in real uploads here later)
    gallery: [
      "/images/lifestyle/jet-exterior-1.png",
      "/images/lifestyle/yacht-aerial-1.png",
      "/images/lifestyle/jet-cabin-1.png",
      "/images/lifestyle/yacht-deck-1.png",
      "/images/lifestyle/jet-exterior-2.png",
      "/images/lifestyle/yacht-aerial-2.png",
    ],
  },
  {
    slug: "relocation-support",
    tag: "03",
    icon: Building2,
    title: "Relocation Support",
    subtitle: "Your New Home",
    description: "Dubai relocation, real estate support, company setup, visa and local assistance.",
    image: "/images/dubai-luxury-terrace.png",
    content:
      "Relocating to Dubai becomes seamless with the right guidance. I assist with sourcing premium real estate, navigating company formation, securing visas and settling into local life. From the first viewing to the day you receive your keys, every step is handled with care and local expertise.",
    features: [
      "Premium real estate sourcing",
      "Visa & company setup",
      "School & community guidance",
      "End-to-end settling-in support",
    ],
    process: [
      { title: "Plan", description: "We map your relocation needs, timeline and priorities." },
      { title: "Settle", description: "I handle property, visas, paperwork and logistics." },
      { title: "Arrive", description: "Move in with everything ready for your new life here." },
    ],
    // Uploaded apartment / residence interiors
    gallery: [
      "/images/luxury-villa/villa-modern.jpg",
      "/images/luxury-villa/PHOTO-2026-07-12-19-37-22.jpg",
      "/images/luxury-apartment/PHOTO-2026-07-12-19-38-15.jpg",
      "/images/luxury-apartment/PHOTO-2026-07-12-19-38-14.jpg",
      "/images/hotel-reservations /PHOTO-2026-07-12-20-59-05.jpg",
      "/images/hotel-reservations /PHOTO-2026-07-12-20-59-06.jpg",
    ],
  },
  {
    slug: "business-assistance",
    tag: "04",
    icon: Briefcase,
    title: "Business Assistance",
    subtitle: "Connections That Count",
    description: "Local connections, networking, business development and market intelligence.",
    image: "/images/radomir-networking.jpg",
    content:
      "Success in Dubai is built on the right relationships. I provide warm introductions to key decision-makers, support your business development and share the market intelligence that gives you an edge. Whether you are entering the market or expanding, you will have a trusted partner on the ground.",
    features: [
      "Warm executive introductions",
      "Market intelligence briefings",
      "Business development support",
      "Trusted local network access",
    ],
    process: [
      { title: "Understand", description: "We clarify your goals, market and ideal connections." },
      { title: "Connect", description: "I open doors to the right people and opportunities." },
      { title: "Grow", description: "Build momentum with a trusted partner on the ground." },
    ],
    // Global business mix: generated stock (boardroom, discussion, finance) +
    // your uploaded networking shots.
    // TODO: Replace the /images/business/* stock placeholders with your own
    // global business-meeting / bank / financial imagery as you upload it.
    gallery: [
      "/images/business/boardroom-meeting.png",
      "/images/business/business-discussion.png",
      "/images/business/financial-institution.png",
      "/images/business/boardroom-meeting.png",
      "/images/radomir-networking.jpg",
      "/images/concierge/private-meeting-1.png",
    ],
  },
  {
    slug: "automotive-services",
    tag: "05",
    icon: Car,
    title: "Automotive Services",
    subtitle: "Drive in Style",
    description: "Luxury car sourcing, inspections, buying & selling support for premium vehicles.",
    image: "/images/services/cars.png",
    content:
      "From sourcing rare supercars to managing inspections and paperwork, I take the complexity out of buying and selling premium vehicles. Every car is vetted, every transaction handled transparently. Whether you are acquiring a collector's piece or refreshing your garage, the process is smooth from start to finish.",
    features: [
      "Rare & supercar sourcing",
      "Independent inspections",
      "Transparent transactions",
      "Buying & selling support",
    ],
    process: [
      { title: "Specify", description: "Tell me the vehicle or collection you have in mind." },
      { title: "Source & Vet", description: "I find, inspect and verify every option for you." },
      { title: "Drive Away", description: "Paperwork handled — collect the keys and enjoy." },
    ],
    // The simple gallery is unused for automotive — see `categories` below.
    gallery: [],
    categories: [
      {
        id: "luxury-cars",
        label: "Luxury Cars",
        heading: "Luxury Cars",
        description:
          "Sourcing, inspection, and arrangement of the world's finest vehicles for purchase, rental, or short-term use.",
        // Sourced from /public/images/automotives — edit the captions below to match each car.
        images: [
          {
            src: "/images/automotives/chauffeurservice/IMG_7373.PNG",
            title: "Premium Supercar",
            caption: "Luxury vehicle — available for rental",
          },
          {
            src: "/images/automotives/chauffeurservice/IMG_7384.PNG",
            title: "Premium Supercar",
            caption: "Luxury vehicle — available for purchase",
          },
          {
            src: "/images/automotives/chauffeurservice/IMG_7389.PNG",
            title: "Premium Supercar",
            caption: "Luxury vehicle — available for short-term use",
          },
          {
            src: "/images/automotives/chauffeurservice/IMG_7391.PNG",
            title: "Premium Supercar",
            caption: "Luxury vehicle — sourced on request",
          },
        ],
      },
      {
        id: "private-drivers",
        label: "Private Drivers",
        heading: "Private Drivers",
        description:
          "Professional, discreet chauffeurs for airport transfers, business travel, and everyday luxury mobility.",
        // TODO: No driver images uploaded yet — add them to /public/images/automotives
        // (or a new folder) and list them here following the shape above.
        images: [],
      },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}
