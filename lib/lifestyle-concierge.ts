import {
  Plane,
  Ambulance,
  PlaneTakeoff,
  Luggage,
  Ship,
  Sailboat,
  Waves,
  Car,
  Gauge,
  CarFront,
  ShieldCheck,
  KeyRound,
  Home,
  Building2,
  Hotel,
  UtensilsCrossed,
  Umbrella,
  Wine,
  Sparkles,
  Compass,
  Tent,
  Flag,
  PartyPopper,
  Medal,
  Target,
  Timer,
  Route,
  TrafficCone,
  Feather,
  Fish,
  ChefHat,
  Flower2,
  Dumbbell,
  HeartPulse,
  Shield,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react"
import type { ConciergeGroup } from "./business-concierge"

// Re-use the exact same item/group/detail shapes as Business Concierge so the
// shared ExpandableConciergeCard and grouping logic work unchanged.
export type { ConciergeItem, ConciergeGroup, ItemDetail } from "./business-concierge"

export type LifestyleCategory = {
  slug: string
  title: string
  /** One-line description shown on the landing card */
  tagline: string
  /** Longer intro paragraph shown on the sub-page */
  intro: string
  icon: LucideIcon
  image: string
  groups: ConciergeGroup[]
}

export const lifestyleCategories: LifestyleCategory[] = [
  {
    slug: "aviation",
    title: "Aviation",
    tagline: "Private and premium air travel, arranged end to end.",
    intro:
      "Private and premium air travel services — from on-demand jet charter to medical evacuation and seamless VIP handling at the terminal. Wherever you need to be, I arrange the aircraft, the crew and every detail on the ground.",
    icon: Plane,
    image: "/images/aviation/helicopter/heli-burj-al-arab.jpg",
    groups: [
      {
        heading: "Air Travel",
        items: [
          {
            title: "Private Jets",
            description: "On-demand private jet charter to any destination, on your schedule.",
            icon: Plane,
            detail: {
              overview:
                "Access to a global fleet of light, midsize and heavy private jets for point-to-point travel on your own timetable. I match the right aircraft to your route, passenger count and preferences, then manage catering, ground transfers and crew so you simply arrive and fly.",
              forWho:
                "Executives, families and groups who value privacy, flexibility and time — whether for a single leg or a multi-city itinerary.",
              includes: [
                "Aircraft sourcing and competitive quoting",
                "Bespoke catering and cabin preferences",
                "Chauffeur transfers to and from the aircraft",
                "Dedicated flight coordinator throughout the trip",
              ],
              process:
                "Share your route and dates and I return tailored aircraft options, typically within a few hours, with confirmed availability.",
            },
          },
          {
            title: "Air Ambulance",
            description: "Medically-equipped aircraft with clinical crew for urgent transfers.",
            icon: Ambulance,
            detail: {
              overview:
                "Rapid-response air ambulance services with fully equipped medical aircraft and accompanying clinical teams for emergency evacuation or planned patient transfer between cities and countries.",
              forWho:
                "Patients requiring medical repatriation, families managing a health emergency abroad, and corporate duty-of-care teams.",
              includes: [
                "ICU-equipped aircraft and specialist medical crew",
                "Bed-to-bed coordination with hospitals",
                "Ground ambulance and customs facilitation",
                "24/7 case management and family updates",
              ],
              process:
                "Available around the clock — one call mobilises the medical team, aircraft and hospital coordination simultaneously.",
            },
          },
          {
            title: "Helicopter Charter",
            description: "Scenic flights and fast city-to-city helicopter transfers.",
            icon: PlaneTakeoff,
            detail: {
              overview:
                "Private helicopter charter for panoramic city tours, rapid transfers that skip road traffic, and access to destinations without a runway — including yachts, resorts and remote venues.",
              forWho:
                "Travellers short on time, couples seeking a memorable experience, and guests heading to hard-to-reach locations.",
              includes: [
                "Sightseeing and transfer routing",
                "Helipad access and landing permissions",
                "Photography and special-occasion arrangements",
                "Onward ground or marine transfers",
              ],
              process:
                "Tell me your pick-up point and destination and I confirm the aircraft, helipads and timing.",
            },
          },
          {
            title: "VIP Airport Assistance",
            description: "Fast-track, lounge and meet-and-greet through any terminal.",
            icon: Luggage,
            detail: {
              overview:
                "Discreet meet-and-greet service through departures and arrivals — expedited immigration, private lounge access, porter assistance and escorted transfer to your car or gate at airports worldwide.",
              forWho:
                "Frequent flyers, VIPs and families who want to avoid queues and move through the airport seamlessly.",
              includes: [
                "Personal greeter from kerb to gate",
                "Fast-track immigration and security",
                "Premium lounge access",
                "Baggage handling and chauffeur handover",
              ],
              process:
                "Provide your flight details and I arrange the greeter and fast-track at both ends of the journey.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "marine",
    title: "Marine",
    tagline: "Yachting and marine leisure across the Gulf and beyond.",
    intro:
      "Yachting and marine leisure services — from day charters and jet ski hire to fully crewed superyacht experiences. I handle the vessel, the crew, provisioning and the itinerary so your time on the water is effortless.",
    icon: Ship,
    image: "/images/aviation/aviation-card.jpg",
    groups: [
      {
        heading: "On the Water",
        items: [
          {
            title: "Yacht Charter",
            description: "Half-day, full-day and weekly yacht charters with crew.",
            icon: Sailboat,
            detail: {
              overview:
                "Crewed yacht charters for a few hours or several days, complete with captain, catering and water toys. Choose from sleek day boats to spacious cruisers for entertaining, celebrations or simply relaxing offshore.",
              forWho:
                "Groups celebrating an occasion, families on a day out, and anyone wanting a private day at sea.",
              includes: [
                "Vessel selection to suit your party size",
                "Professional captain and crew",
                "Catering, beverages and water toys",
                "Custom cruising itinerary",
              ],
              process:
                "Share your date, group size and vibe and I present matched vessels with pricing.",
            },
          },
          {
            title: "Superyachts",
            description: "Fully crewed superyacht experiences for extended voyages.",
            icon: Ship,
            detail: {
              overview:
                "Access to a portfolio of superyachts for multi-day charters and voyages, each with full crew, chef and an array of amenities. I manage provisioning, itinerary planning and every guest preference on board.",
              forWho:
                "Discerning guests and large parties seeking the pinnacle of privacy, space and service at sea.",
              includes: [
                "Curated superyacht selection",
                "Full crew, chef and interior team",
                "Bespoke multi-day itineraries",
                "Provisioning and special requests",
              ],
              process:
                "Given your dates and cruising region, I shortlist available yachts and arrange viewings where possible.",
            },
          },
          {
            title: "Jet Ski Rental",
            description: "Guided and independent jet ski hire along the coastline.",
            icon: Waves,
            detail: {
              overview:
                "Premium jet ski rental for solo riders and groups, with guided coastal tours past landmark waterfronts or free-ride sessions in designated zones — all safety equipment provided.",
              forWho:
                "Thrill-seekers, groups of friends and families looking for an active few hours on the water.",
              includes: [
                "Late-model jet skis",
                "Safety briefing and equipment",
                "Optional guided landmark tours",
                "Flexible session lengths",
              ],
              process:
                "Pick your slot and I reserve the skis and guide, with hotel or marina pick-up if needed.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "automotive",
    title: "Automotive",
    tagline: "Luxury and performance vehicles, with or without a driver.",
    intro:
      "Luxury and performance vehicle services — from prestige and supercar rental to professional chauffeurs, security drivers and doorstep delivery. Whatever you want to drive, or be driven in, I arrange it.",
    icon: Car,
    image: "/images/automotives/supercarrental/PHOTO-2026-07-12-19-18-49.jpg",
    groups: [
      {
        heading: "Rentals",
        items: [
          {
            title: "Luxury Car Rental",
            description: "Prestige saloons and SUVs for daily, weekly or monthly hire.",
            icon: Car,
            detail: {
              overview:
                "A fleet of prestige saloons, SUVs and grand tourers available for short and long-term hire, with flexible delivery and collection anywhere in the city.",
              forWho:
                "Business visitors, residents and travellers who want a refined car without the commitment of ownership.",
              includes: [
                "Latest-model luxury vehicles",
                "Daily, weekly and monthly rates",
                "Delivery and collection to your location",
                "Comprehensive insurance options",
              ],
              process:
                "Tell me the model and dates and I confirm availability with delivery to your door.",
            },
          },
          {
            title: "Supercar Rental",
            description: "Exotic and performance cars for the ultimate drive.",
            icon: Gauge,
            detail: {
              overview:
                "Access to marquee supercars and exotics for a day, a weekend or a special occasion — the perfect way to experience a dream car on the region's finest roads.",
              forWho:
                "Enthusiasts, special occasions and anyone wanting an unforgettable driving experience.",
              includes: [
                "Flagship supercar and hypercar models",
                "Flexible rental durations",
                "Delivery to home, hotel or track",
                "Guidance on mileage and insurance",
              ],
              process:
                "Choose your car and dates and I handle reservation, deposit and delivery.",
            },
          },
          {
            title: "Luxury Car Delivery",
            description: "Doorstep delivery and collection of your chosen vehicle.",
            icon: KeyRound,
            detail: {
              overview:
                "Enclosed, insured delivery and collection of any rented or owned luxury vehicle to your home, hotel, office or the airport — keys handed over wherever suits you.",
              forWho:
                "Clients who value convenience and want their vehicle ready and waiting on arrival.",
              includes: [
                "Door-to-door delivery and collection",
                "Airport and hotel handovers",
                "Vehicle walkthrough on handover",
                "Flexible timing, including out of hours",
              ],
              process:
                "Confirm the vehicle, location and time and I coordinate the handover to the minute.",
            },
          },
        ],
      },
      {
        heading: "Drivers",
        items: [
          {
            title: "Chauffeur Service",
            description: "Professional chauffeurs for business and leisure.",
            icon: CarFront,
            detail: {
              overview:
                "Discreet, professional chauffeurs in premium vehicles for meetings, events, airport runs or a full day at your disposal — punctual, polished and knowledgeable about the city.",
              forWho:
                "Executives, event guests and travellers who prefer to be driven in comfort.",
              includes: [
                "Uniformed, vetted chauffeurs",
                "Executive saloons and SUVs",
                "Hourly, daily and multi-day hire",
                "Multi-stop and event itineraries",
              ],
              process:
                "Share your schedule and I assign a chauffeur and vehicle for the duration.",
            },
          },
          {
            title: "Security Chauffeur",
            description: "Trained security drivers for discreet, protected travel.",
            icon: ShieldCheck,
            detail: {
              overview:
                "Specially trained security drivers combining chauffeur service with close-protection driving skills, for clients who require an additional layer of discretion and safety on the move.",
              forWho:
                "High-profile individuals, executives and families with elevated security needs.",
              includes: [
                "Advanced and defensive-trained drivers",
                "Discreet armoured vehicle options",
                "Route planning and risk awareness",
                "Coordination with protection teams",
              ],
              process:
                "After a brief needs assessment, I assign an appropriately trained driver and vehicle.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "accommodation",
    title: "Accommodation",
    tagline: "Premium stays and property rentals for any length of visit.",
    intro:
      "Premium stays and property rentals — from private villas and serviced apartments to landmark hotels and flexible short or long-term homes. I secure the right address and arrange everything that makes a stay effortless.",
    icon: Home,
    image: "/images/luxury-villa/PHOTO-2026-07-12-19-37-22.jpg",
    groups: [
      {
        heading: "Private Residences",
        items: [
          {
            title: "Luxury Villas",
            description: "Private villas with pools, staff and prime locations.",
            icon: Home,
            detail: {
              overview:
                "Handpicked private villas with pools, gardens and optional staff, in the most sought-after neighbourhoods and beachfronts — ideal for families and groups wanting space and privacy.",
              forWho:
                "Families, groups and anyone preferring a private home over a hotel.",
              includes: [
                "Curated villa portfolio",
                "Optional housekeeping and private chef",
                "Concierge and maintenance on call",
                "Pre-arrival provisioning",
              ],
              process:
                "Tell me your dates, party size and preferred area and I shortlist matching villas.",
            },
          },
          {
            title: "Luxury Apartments",
            description: "High-end serviced apartments in landmark towers.",
            icon: Building2,
            detail: {
              overview:
                "Elegant serviced apartments in the city's landmark residential towers, combining hotel-grade amenities with the comfort and space of a private home.",
              forWho:
                "Solo travellers, couples and business guests seeking a central, self-contained base.",
              includes: [
                "Prime-location serviced apartments",
                "Housekeeping and building amenities",
                "Flexible stay lengths",
                "Concierge support throughout",
              ],
              process:
                "Share your requirements and I present available apartments with full amenity details.",
            },
          },
        ],
      },
      {
        heading: "Hotels & Rentals",
        items: [
          {
            title: "Hotels & Resorts",
            description: "Suites and rates at the region's finest hotels.",
            icon: Hotel,
            detail: {
              overview:
                "Preferential access to suites, upgrades and amenities at leading hotels and resorts, with reservations handled personally and special requests communicated ahead of arrival.",
              forWho:
                "Guests who want the service of a landmark hotel with added recognition and perks.",
              includes: [
                "Suite and room bookings with perks",
                "Upgrade and late-checkout requests",
                "Special-occasion arrangements",
                "Dining and spa reservations on property",
              ],
              process:
                "Give me your dates and preferred properties and I secure the best available rate and benefits.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "lifestyle",
    title: "Lifestyle",
    tagline: "Dining, nightlife, events and personal shopping.",
    intro:
      "Dining, nightlife, events and personal shopping — the everyday luxuries that make life in the city effortless. From the best table in town to VIP entry and curated shopping, consider it arranged.",
    icon: Sparkles,
    image: "/images/restaurant-reservation/PHOTO-2026-07-12-21-42-09 3.jpg",
    groups: [
      {
        heading: "Dining & Nightlife",
        items: [
          {
            title: "Restaurant Reservations",
            description: "Priority tables at the most in-demand restaurants.",
            icon: UtensilsCrossed,
            detail: {
              overview:
                "Access to sought-after tables at the city's finest and most in-demand restaurants, including last-minute bookings, private dining rooms and chef's-table experiences.",
              forWho:
                "Food lovers, hosts and anyone wanting the right table on the right night.",
              includes: [
                "Priority and last-minute reservations",
                "Private dining and chef's table",
                "Dietary and occasion notes relayed",
                "Menu and wine pre-arrangement",
              ],
              process:
                "Tell me the restaurant, date and party size and I secure the table.",
            },
          },
          {
            title: "Beach Clubs",
            description: "Sunbeds, cabanas and table service at top beach clubs.",
            icon: Umbrella,
            detail: {
              overview:
                "Reserved sunbeds, cabanas and daybeds at the most fashionable beach clubs, with minimum-spend management and table service arranged in advance.",
              forWho:
                "Groups and couples wanting a premium day by the water without the queue.",
              includes: [
                "Prime sunbed and cabana bookings",
                "Table service and bottle arrangements",
                "Group and celebration setups",
                "Entry and guest-list management",
              ],
              process:
                "Share your date and group size and I confirm the best available setup.",
            },
          },
          {
            title: "Nightlife",
            description: "Guest list, tables and bottle service at leading venues.",
            icon: Wine,
            detail: {
              overview:
                "VIP entry, prime tables and bottle service at the city's leading clubs, lounges and bars, with hosts who ensure a seamless night from arrival to close.",
              forWho:
                "Groups celebrating and guests who want the VIP nightlife experience.",
              includes: [
                "Guest-list and VIP entry",
                "Prime table and bottle service",
                "Host coordination on the night",
                "Transport between venues",
              ],
              process:
                "Let me know the venue and headcount and I arrange entry and a table.",
            },
          },
        ],
      },
      {
        heading: "Events",
        items: [
          {
            title: "VIP Events",
            description: "Access and hospitality at exclusive, invitation-only events.",
            icon: Sparkles,
            detail: {
              overview:
                "Access and premium hospitality at exclusive galas, launches, fashion and cultural events — including invitations that are otherwise difficult to obtain.",
              forWho:
                "Guests who want to be where it matters, with hospitality handled.",
              includes: [
                "Access to invitation-only events",
                "Premium and hospitality packages",
                "Transfers and dress-code guidance",
                "On-site host where available",
              ],
              process:
                "Share your interests and I alert you to relevant events and secure access.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "experiences",
    title: "Experiences",
    tagline: "Curated adventures and leisure, on land, sea and air.",
    intro:
      "Curated adventures and leisure activities — from desert safaris and skydiving to motorsport, golf and yacht parties. Tell me how you want to spend the day and I will design and arrange it.",
    icon: Compass,
    image: "/images/desertsafari/IMG_7324 (1).JPG",
    groups: [
      {
        heading: "Adventure",
        items: [
          {
            title: "Desert Safari",
            description: "Private dune drives, camps and sunset desert experiences.",
            icon: Tent,
            detail: {
              overview:
                "Private desert safaris with premium 4x4s, dune driving, sunset camps and gourmet dining under the stars — from short thrill drives to full evening experiences.",
              forWho:
                "Families, couples and groups seeking a signature desert experience.",
              includes: [
                "Private 4x4 with expert driver",
                "Dune driving and sandboarding",
                "Luxury camp and gourmet dining",
                "Entertainment and stargazing",
              ],
              process:
                "Choose a time of day and group size and I tailor the safari accordingly.",
            },
          },
          {
            title: "Yacht Parties",
            description: "Fully hosted celebrations afloat, from décor to DJ.",
            icon: PartyPopper,
            detail: {
              overview:
                "Fully produced yacht parties and celebrations — vessel, catering, décor, entertainment and crew coordinated for birthdays, launches or simply a memorable day on the water.",
              forWho:
                "Hosts planning a celebration with a wow factor.",
              includes: [
                "Yacht selection and crew",
                "Catering, bar and décor",
                "DJ and entertainment",
                "Guest transfers and photography",
              ],
              process:
                "Share your occasion, guest count and budget and I design the full experience.",
            },
          },
          {
            title: "Skydiving",
            description: "Tandem and licensed jumps over landmark drop zones.",
            icon: Feather,
            detail: {
              overview:
                "Tandem and licensed skydiving experiences over iconic drop zones, with professional instructors, full briefing and video packages to capture the moment.",
              forWho:
                "Adventure-seekers and bucket-list celebrants.",
              includes: [
                "Tandem jumps with instructors",
                "Full safety briefing and gear",
                "Iconic drop-zone views",
                "Photo and video packages",
              ],
              process:
                "Pick your date and I reserve the slot and arrange transfers.",
            },
          },
          {
            title: "Fishing Charters",
            description: "Private deep-sea and sport fishing with crew and gear.",
            icon: Fish,
            detail: {
              overview:
                "Private deep-sea and sport fishing charters with experienced crew, quality tackle and refreshments — half or full day, for beginners and seasoned anglers alike.",
              forWho:
                "Anglers, families and groups wanting a relaxed or sporting day at sea.",
              includes: [
                "Well-equipped charter vessel",
                "Experienced crew and tackle",
                "Refreshments on board",
                "Catch handling arranged",
              ],
              process:
                "Tell me your date and experience level and I match the right charter.",
            },
          },
        ],
      },
      {
        heading: "Motorsport",
        items: [
          {
            title: "Car Track Days",
            description: "Supercars on a private circuit with professional coaching.",
            icon: Timer,
            detail: {
              overview:
                "Track day experiences on professional circuits, driving supercars and race machinery with instructor coaching, safety equipment and timing — for genuine high-performance thrills.",
              forWho:
                "Driving enthusiasts wanting to push a car safely at its limits.",
              includes: [
                "Circuit and supercar access",
                "Professional driving coach",
                "Helmet and safety gear",
                "Lap timing and debrief",
              ],
              process:
                "Choose your circuit and car and I book the session and coaching.",
            },
          },
          {
            title: "Car Drift",
            description: "Guided drift sessions with coaching and safety cover.",
            icon: Route,
            detail: {
              overview:
                "Drift experiences on a controlled skid pad or circuit, with purpose-built cars, professional coaching and full safety cover — learn car control or ride along with a pro.",
              forWho:
                "Motorsport fans and thrill-seekers curious about car control.",
              includes: [
                "Drift-prepared vehicles",
                "Professional instruction",
                "Ride-along or drive options",
                "Full safety equipment",
              ],
              process:
                "Pick a date and I arrange the venue, car and instructor.",
            },
          },
          {
            title: "Karting",
            description: "Private track hire and grand-prix style group races.",
            icon: TrafficCone,
            detail: {
              overview:
                "Indoor and outdoor karting from casual sessions to private track hire and grand-prix format races with timing, podium and trophies — ideal for groups and corporate events.",
              forWho:
                "Friends, families and corporate teams after competitive fun.",
              includes: [
                "Private track and kart hire",
                "Grand-prix race format",
                "Timing, podium and trophies",
                "Group and corporate packages",
              ],
              process:
                "Share your group size and I arrange the track and race format.",
            },
          },
        ],
      },
      {
        heading: "Sport & Leisure",
        items: [
          {
            title: "Golf",
            description: "Tee times and lessons at championship courses.",
            icon: Flag,
            detail: {
              overview:
                "Priority tee times, lessons with professionals and hospitality at championship golf courses, including equipment hire and playing partners where desired.",
              forWho:
                "Golfers of every level and groups planning a golfing day.",
              includes: [
                "Priority tee times",
                "Professional lessons and clinics",
                "Equipment and buggy hire",
                "Clubhouse dining and hospitality",
              ],
              process:
                "Tell me the course and date and I arrange the tee time and extras.",
            },
          },
          {
            title: "Horse Riding",
            description: "Private lessons, desert hacks and equestrian experiences.",
            icon: Medal,
            detail: {
              overview:
                "Private horse riding experiences from beginner lessons to desert hacks and stable visits at premier equestrian facilities, with qualified instructors and well-schooled horses.",
              forWho:
                "Beginners, families and experienced riders alike.",
              includes: [
                "Lessons for all levels",
                "Desert and arena riding",
                "Qualified instructors",
                "Safety equipment provided",
              ],
              process:
                "Share your experience level and I match the right stable and session.",
            },
          },
          {
            title: "Shooting Range",
            description: "Guided sessions with instruction across disciplines.",
            icon: Target,
            detail: {
              overview:
                "Supervised shooting range experiences across clay, pistol and rifle disciplines with certified instructors, full safety protocols and all equipment provided.",
              forWho:
                "First-timers and enthusiasts wanting a supervised, safe experience.",
              includes: [
                "Certified instructor supervision",
                "Multiple shooting disciplines",
                "All equipment and safety gear",
                "Beginner briefings",
              ],
              process:
                "Pick your discipline and date and I book the range and instructor.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "wellness",
    title: "Wellness",
    tagline: "Personal health, beauty and wellbeing, brought to you.",
    intro:
      "Personal health, beauty and wellbeing services — private chefs, spa treatments, trainers, beauty professionals and medical concierge, delivered to your home, villa or yacht on your schedule.",
    icon: HeartPulse,
    image: "/images/personaltrainer/PHOTO-2026-07-19-17-38-40 2.jpg",
    groups: [
      {
        heading: "Health & Wellbeing",
        items: [
          {
            title: "Private Chef",
            description: "Personal chefs for everyday dining or special occasions.",
            icon: ChefHat,
            detail: {
              overview:
                "Talented private chefs for a single dinner party or ongoing daily meals, designing menus around your tastes and dietary needs and handling shopping, cooking and clean-up.",
              forWho:
                "Hosts, families and health-focused clients who want restaurant-quality dining at home.",
              includes: [
                "Bespoke menu design",
                "Grocery sourcing and provisioning",
                "In-home cooking and service",
                "Dietary and allergy tailoring",
              ],
              process:
                "Tell me the occasion and preferences and I match a chef and menu.",
            },
          },
          {
            title: "Spa & Wellness",
            description: "In-villa treatments and access to leading spas.",
            icon: Flower2,
            detail: {
              overview:
                "In-villa and in-suite spa treatments as well as priority access to the finest spas — massage, facials and holistic therapies delivered by vetted professionals.",
              forWho:
                "Anyone seeking relaxation and recovery on their own schedule.",
              includes: [
                "Mobile therapists to your location",
                "Massage, facials and therapies",
                "Access to leading spas",
                "Couples and group sessions",
              ],
              process:
                "Choose your treatment and time and I arrange the therapist or spa booking.",
            },
          },
          {
            title: "Personal Trainer",
            description: "One-to-one coaching at home, hotel or gym.",
            icon: Dumbbell,
            detail: {
              overview:
                "Qualified personal trainers for one-to-one sessions wherever you are — home gym, hotel or beach — with programmes tailored to your goals and fitness level.",
              forWho:
                "Travellers and residents keeping up a routine or starting a new one.",
              includes: [
                "Certified personal trainers",
                "Sessions at your location",
                "Tailored training programmes",
                "Nutrition guidance on request",
              ],
              process:
                "Share your goals and schedule and I match a trainer and plan.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "security",
    title: "Security",
    tagline: "Personal and event protection, handled with discretion.",
    intro:
      "Personal and event protection services — from close protection officers and event security teams to secure transportation. Professional, discreet and tailored to your risk profile.",
    icon: Shield,
    image: "/images/lifestyle-concierge/security.png",
    groups: [
      {
        heading: "Protection Services",
        items: [
          {
            title: "Close Protection",
            description: "Trained bodyguards and personal protection details.",
            icon: Shield,
            detail: {
              overview:
                "Professional close protection officers providing discreet personal security for individuals and families, from single-event cover to ongoing details, tailored to a considered risk assessment.",
              forWho:
                "High-profile individuals, executives and families requiring personal security.",
              includes: [
                "Vetted, trained protection officers",
                "Risk assessment and planning",
                "Discreet single or team details",
                "Coordination with venues and drivers",
              ],
              process:
                "A confidential assessment defines the detail, then I deploy the right team.",
            },
          },
          {
            title: "Event Security",
            description: "Discreet security teams for private and corporate events.",
            icon: ShieldAlert,
            detail: {
              overview:
                "Complete event security — from access control and guest screening to crowd management and VIP protection — designed to keep private and corporate events safe and seamless.",
              forWho:
                "Hosts and organisers of private parties, launches and corporate events.",
              includes: [
                "Access control and screening",
                "Uniformed and plain-clothes teams",
                "VIP and guest protection",
                "Coordination with venue and organisers",
              ],
              process:
                "Share the event details and I plan and staff the security operation.",
            },
          },
        ],
      },
    ],
  },
]

export function getLifestyleCategory(slug: string): LifestyleCategory | undefined {
  return lifestyleCategories.find((category) => category.slug === slug)
}
