/**
 * Comprehensive category-to-image mapping utility for RS Concierge
 * Maps each service category to curated hero images and card images
 * Organized by service type with proper typing and metadata
 */

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface CategoryImage {
  path: string;
  alt: string;
  aspectRatio?: AspectRatio;
}

export interface CategoryMapping {
  name: string;
  description: string;
  heroImage: CategoryImage;
  cardImages: CategoryImage[];
  category: string;
  type: 'aviation' | 'automotive' | 'marine' | 'lifestyle' | 'sports' | 'hospitality';
}

/**
 * Hero images are the largest, highest-impact images
 * Card images are selected for variety and visual appeal
 * All paths use relative URLs from public directory
 */
export const categoryImages: Record<string, CategoryMapping> = {
  // AVIATION SERVICES
  aviation: {
    name: 'Aviation',
    description: 'Private jet charters, helicopter tours, and air ambulance services',
    heroImage: {
      path: '/images/aviation/aviation-card.jpg',
      alt: 'Luxury private jet parked at hangar',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/aviation/privatejet/jet-hangar.jpg',
        alt: 'Private jet in luxury hangar facility',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/aviation/privatejet/jet-interior.jpg',
        alt: 'Luxurious private jet interior cabin',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/aviation/privatejet/jet-sunset-front.jpg',
        alt: 'Private jet on tarmac at sunset',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/aviation/privatejet/jet-boarding.jpg',
        alt: 'Passengers boarding private jet',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/aviation/helicopter/heli-burj-al-arab.jpg',
        alt: 'Helicopter tour over iconic landmarks',
        aspectRatio: 'landscape',
      },
    ],
    category: 'aviation',
    type: 'aviation',
  },

  // AUTOMOTIVE SERVICES - SUPERCARS
  'automotives/supercars': {
    name: 'Supercars',
    description: 'Luxury supercar rentals and exotic vehicle experiences',
    heroImage: {
      path: '/images/automotives/supercarrental/PHOTO-2026-07-12-19-18-48.jpg',
      alt: 'Stunning supercar in premium showroom',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/automotives/supercarrental/PHOTO-2026-07-12-19-18-49.jpg',
        alt: 'Exotic supercar detail view',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/automotives/supercarrental/PHOTO-2026-07-12-19-18-52.jpg',
        alt: 'High-performance supercar on display',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/automotives/supercarrental/PHOTO-2026-07-12-19-18-53.jpg',
        alt: 'Luxury supercar exterior styling',
        aspectRatio: 'landscape',
      },
    ],
    category: 'automotives',
    type: 'automotive',
  },

  // AUTOMOTIVE SERVICES - LUXURY CARS
  'automotives/luxury-cars': {
    name: 'Luxury Cars',
    description: 'Premium luxury vehicle rentals and chauffeur services',
    heroImage: {
      path: '/images/automotives/luxurycarrental/PHOTO-2026-07-12-19-17-07.jpg',
      alt: 'Premium luxury sedan in professional setting',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/automotives/luxurycarrental/PHOTO-2026-07-12-19-17-08.jpg',
        alt: 'Luxury car ready for departure',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/automotives/luxurycarrental/PHOTO-2026-07-12-19-17-09.jpg',
        alt: 'High-end vehicle interior details',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/automotives/luxurycarrental/PHOTO-2026-07-12-19-17-10.jpg',
        alt: 'Executive luxury vehicle exterior',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/automotives/luxurycarrental/PHOTO-2026-07-12-19-17-11.jpg',
        alt: 'Premium car with professional driver',
        aspectRatio: 'landscape',
      },
    ],
    category: 'automotives',
    type: 'automotive',
  },

  // MARINE SERVICES - YACHTS
  'marine/yachts': {
    name: 'Yachts & Charters',
    description: 'Luxury yacht charters and superyacht experiences',
    heroImage: {
      path: '/images/marine/marine-card.jpg',
      alt: 'Luxury superyacht on azure waters',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/marine/superyatch/yacht-topdown.jpg',
        alt: 'Aerial view of luxury superyacht',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/marine/superyatch/PHOTO-2026-07-12-16-58-41.jpg',
        alt: 'Superyacht cruise experience',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/marine/superyatch/PHOTO-2026-07-12-16-58-41 2.jpg',
        alt: 'Luxury yacht deck and amenities',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/marine/yatchchatter/PHOTO-2026-07-12-16-43-45 2.jpg',
        alt: 'Yacht charter sailing adventure',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/marine/yatchchatter/PHOTO-2026-07-12-16-43-45 2.jpg',
        alt: 'Superyacht entertainment and dining',
        aspectRatio: 'landscape',
      },
    ],
    category: 'marine',
    type: 'marine',
  },

  // MARINE SERVICES - JETSKI
  'marine/jetski': {
    name: 'Jetski & Water Sports',
    description: 'High-speed jetski rentals and water sports adventures',
    heroImage: {
      path: '/images/marine/jetski/IMG_7313 (1).JPG',
      alt: 'Powerful jetski on crystal clear waters',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/marine/jetski/DSC02946.jpeg',
        alt: 'Professional jetski racing experience',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/marine/jetski/DSC03042.jpeg',
        alt: 'Jetski adventure in tropical waters',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/marine/jetski/DSC03048.jpeg',
        alt: 'High-speed water sports excitement',
        aspectRatio: 'landscape',
      },
    ],
    category: 'marine',
    type: 'marine',
  },

  // SPORTS & RECREATION - SKYDIVING
  skydiving: {
    name: 'Skydiving',
    description: 'Thrilling skydiving experiences with professional instructors',
    heroImage: {
      path: '/images/skydiving/PHOTO-2026-07-12-23-32-43.jpg',
      alt: 'Exhilarating freefall skydiving experience',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/skydiving/PHOTO-2026-07-12-23-32-42.jpg',
        alt: 'Tandem skydiving jump preparation',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/skydiving/PHOTO-2026-07-12-23-32-42 2.jpg',
        alt: 'Aerial view during skydiving adventure',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/skydiving/PHOTO-2026-07-12-23-32-42 3.jpg',
        alt: 'Skydiver in action above landscapes',
        aspectRatio: 'landscape',
      },
    ],
    category: 'skydiving',
    type: 'sports',
  },

  // SPORTS & RECREATION - GOLF
  golf: {
    name: 'Golf',
    description: 'Championship golf courses and exclusive golf experiences',
    heroImage: {
      path: '/images/golf/PHOTO-2026-07-14-10-24-45.jpg',
      alt: 'Pristine championship golf course',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/golf/PHOTO-2026-07-14-10-24-44.jpg',
        alt: 'Golf course sunset views',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/golf/PHOTO-2026-07-14-10-24-43.jpg',
        alt: 'Luxury golf resort amenities',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/golf/PHOTO-2026-07-14-10-24-44 2.jpg',
        alt: 'Championship course and greens',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/golf/PHOTO-2026-07-14-10-24-44 3.jpg',
        alt: 'Exclusive golf club experience',
        aspectRatio: 'landscape',
      },
    ],
    category: 'golf',
    type: 'sports',
  },

  // SPORTS & RECREATION - SHOOTING
  shooting: {
    name: 'Shooting',
    description: 'Professional shooting range and clay sport experiences',
    heroImage: {
      path: '/images/shooting/PHOTO-2026-07-15-00-53-44.jpg',
      alt: 'Professional shooting range facility',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/shooting/PHOTO-2026-07-15-00-53-43.jpg',
        alt: 'Precision shooting sports experience',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/shooting/PHOTO-2026-07-15-00-53-42.jpg',
        alt: 'Expert shooting instruction',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/shooting/PHOTO-2026-07-15-00-53-43 2.jpg',
        alt: 'Professional shooting event',
        aspectRatio: 'landscape',
      },
    ],
    category: 'shooting',
    type: 'sports',
  },

  // SPORTS & RECREATION - HORSE RIDING
  'horse-riding': {
    name: 'Horse Riding',
    description: 'Luxury equestrian experiences and guided riding tours',
    heroImage: {
      path: '/images/horse-riding/PHOTO-2026-07-14-20-36-21.jpg',
      alt: 'Premium horse riding experience in scenic landscape',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/horse-riding/PHOTO-2026-07-14-20-36-20.jpg',
        alt: 'Professional equestrian instruction',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/horse-riding/PHOTO-2026-07-14-20-36-20 2.jpg',
        alt: 'Guided group horse riding tour',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/horse-riding/PHOTO-2026-07-14-20-36-20 3.jpg',
        alt: 'Luxury horse stables and facilities',
        aspectRatio: 'landscape',
      },
    ],
    category: 'horse-riding',
    type: 'sports',
  },

  // SPORTS & RECREATION - CAR DRIFT
  'car-drift': {
    name: 'Car Drifting',
    description: 'High-performance car drift experiences and training',
    heroImage: {
      path: '/images/car-drift/PHOTO-2026-07-13-09-00-15.jpg',
      alt: 'Intense car drifting action',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/car-drift/PHOTO-2026-07-13-09-00-16.jpg',
        alt: 'Professional drifting technique demonstration',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/car-drift/PHOTO-2026-07-13-09-00-15 2.jpg',
        alt: 'High-speed drift racing event',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/car-drift/PHOTO-2026-07-13-09-00-15 3.jpg',
        alt: 'Advanced drifting course experience',
        aspectRatio: 'landscape',
      },
    ],
    category: 'car-drift',
    type: 'sports',
  },

  // SPORTS & RECREATION - CAR TRACK DAYS
  'car-track-days': {
    name: 'Track Days',
    description: 'Professional track day experiences and racing instruction',
    heroImage: {
      path: '/images/car-track-days/PHOTO-2026-07-13-07-46-57.jpg',
      alt: 'Professional race track experience',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/car-track-days/PHOTO-2026-07-13-07-46-57 2.jpg',
        alt: 'High-performance driving on race circuit',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/car-track-days/PHOTO-2026-07-13-07-46-58.jpg',
        alt: 'Racing instruction and coaching',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/car-track-days/PHOTO-2026-07-13-07-46-59.jpg',
        alt: 'Luxury sports car on professional track',
        aspectRatio: 'landscape',
      },
    ],
    category: 'car-track-days',
    type: 'sports',
  },

  // SPORTS & RECREATION - KARTING
  karting: {
    name: 'Karting',
    description: 'Professional go-kart racing and competitive karting events',
    heroImage: {
      path: '/images/karting/PHOTO-2026-07-13-10-42-23.jpg',
      alt: 'Competitive go-kart racing action',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/karting/PHOTO-2026-07-13-10-42-22.jpg',
        alt: 'Professional karting track facility',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/karting/PHOTO-2026-07-13-10-42-23 2.jpg',
        alt: 'Kart racing competition',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/karting/PHOTO-2026-07-13-10-42-23 3.jpg',
        alt: 'Indoor karting championship event',
        aspectRatio: 'landscape',
      },
    ],
    category: 'karting',
    type: 'sports',
  },

  // SPORTS & RECREATION - FORMULA 1
  'formula-1': {
    name: 'Formula 1',
    description: 'Exclusive Formula 1 event experiences and VIP packages',
    heroImage: {
      path: '/images/formular1/IMG_7335.JPG',
      alt: 'Thrilling Formula 1 race experience',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/formular1/IMG_7334.JPG',
        alt: 'F1 racing event atmosphere',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/formular1/IMG_7332.JPG',
        alt: 'VIP Formula 1 hospitality suite',
        aspectRatio: 'landscape',
      },
    ],
    category: 'formula-1',
    type: 'sports',
  },

  // SPORTS & RECREATION - FISHING CHARTERS
  'fishing-charters': {
    name: 'Fishing Charters',
    description: 'Premium deep-sea fishing and charter experiences',
    heroImage: {
      path: '/images/fishing-charters/PHOTO-2026-07-12-23-45-36.jpg',
      alt: 'Luxury fishing charter adventure',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/fishing-charters/PHOTO-2026-07-12-23-45-36 2.jpg',
        alt: 'Professional fishing guide experience',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/fishing-charters/PHOTO-2026-07-12-23-45-36 3.jpg',
        alt: 'Deep-sea fishing expedition',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/fishing-charters/PHOTO-2026-07-12-23-45-36 4.jpg',
        alt: 'Catch and experience on luxury boat',
        aspectRatio: 'landscape',
      },
    ],
    category: 'fishing-charters',
    type: 'sports',
  },

  // SPORTS & RECREATION - DESERT SAFARI
  'desert-safari': {
    name: 'Desert Safari',
    description: 'Thrilling desert safari experiences and dune adventures',
    heroImage: {
      path: '/images/desertsafari/IMG_7325 (1).JPG',
      alt: 'Exciting desert safari adventure',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/desertsafari/IMG_7324 (1).JPG',
        alt: 'Desert dune exploration',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/desertsafari/IMG_7326 (1).JPG',
        alt: 'Desert landscape and wildlife',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/desertsafari/IMG_7328 (1).JPG',
        alt: 'Desert safari sunset experience',
        aspectRatio: 'landscape',
      },
    ],
    category: 'desert-safari',
    type: 'sports',
  },

  // LIFESTYLE - LUXURY VILLA
  'luxury-villas': {
    name: 'Luxury Villas',
    description: 'Exclusive luxury villa rentals and high-end accommodations',
    heroImage: {
      path: '/images/luxury-villa/PHOTO-2026-07-12-19-37-22.jpg',
      alt: 'Stunning luxury villa with panoramic views',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/luxury-villa/PHOTO-2026-07-12-19-37-22 2.jpg',
        alt: 'Luxury villa interior design',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/luxury-villa/PHOTO-2026-07-12-19-37-22 3.jpg',
        alt: 'Villa pool and outdoor entertainment',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/luxury-villa/PHOTO-2026-07-12-19-37-23.jpg',
        alt: 'Luxury villa master suite',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/luxury-villa/PHOTO-2026-07-12-19-37-24.jpg',
        alt: 'Villa gardens and landscaping',
        aspectRatio: 'landscape',
      },
    ],
    category: 'luxury-villas',
    type: 'lifestyle',
  },

  // LIFESTYLE - LUXURY APARTMENT
  'luxury-apartment': {
    name: 'Luxury Apartments',
    description: 'Premium luxury apartment rentals in prime locations',
    heroImage: {
      path: '/images/luxury-apartment/PHOTO-2026-07-12-19-38-15.jpg',
      alt: 'Elegant luxury apartment with city views',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/luxury-apartment/PHOTO-2026-07-12-19-38-14.jpg',
        alt: 'Luxury apartment living space',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/luxury-apartment/PHOTO-2026-07-12-19-38-15 2.jpg',
        alt: 'Modern apartment architecture',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/luxury-apartment/PHOTO-2026-07-12-19-38-15 3.jpg',
        alt: 'Apartment dining and entertainment area',
        aspectRatio: 'landscape',
      },
    ],
    category: 'luxury-apartment',
    type: 'lifestyle',
  },

  // HOSPITALITY - RESTAURANTS
  restaurants: {
    name: 'Restaurants',
    description: 'Fine dining reservations at exclusive restaurants',
    heroImage: {
      path: '/images/restaurant-reservation/PHOTO-2026-07-12-21-42-08.jpg',
      alt: 'Exquisite fine dining culinary experience',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/restaurant-reservation/PHOTO-2026-07-12-21-42-08 2.jpg',
        alt: 'Gourmet cuisine presentation',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/restaurant-reservation/PHOTO-2026-07-12-21-42-09.jpg',
        alt: 'Upscale restaurant ambiance',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/restaurant-reservation/PHOTO-2026-07-12-21-42-06.jpg',
        alt: 'Chef-prepared fine dining dish',
        aspectRatio: 'landscape',
      },
    ],
    category: 'restaurants',
    type: 'hospitality',
  },

  // HOSPITALITY - BEACH CLUB
  'beachclub': {
    name: 'Beach Club',
    description: 'Exclusive beach club access and beach experiences',
    heroImage: {
      path: '/images/beachclub/JPEG image-443A-B186-CF-5.jpeg',
      alt: 'Luxurious beach club setting',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/beachclub/JPEG image-443A-B186-CF-5.jpeg',
        alt: 'Beach club poolside and ocean views',
        aspectRatio: 'landscape',
      },
    ],
    category: 'beachclub',
    type: 'hospitality',
  },

  // HOSPITALITY - NIGHTLIFE
  'nightlife': {
    name: 'Nightlife',
    description: 'VIP access to exclusive clubs and nightlife venues',
    heroImage: {
      path: '/images/night-life/PHOTO-2026-07-12-21-52-28.jpg',
      alt: 'Vibrant nightlife and entertainment venue',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/night-life/PHOTO-2026-07-12-21-52-28 2.jpg',
        alt: 'Exclusive club atmosphere',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/night-life/PHOTO-2026-07-12-21-52-28 3.jpg',
        alt: 'Premium nightclub experience',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/night-life/PHOTO-2026-07-12-21-52-29.jpg',
        alt: 'VIP lounge entertainment',
        aspectRatio: 'landscape',
      },
    ],
    category: 'nightlife',
    type: 'hospitality',
  },

  // HOSPITALITY - VIP EVENTS
  'vip-events': {
    name: 'VIP Events',
    description: 'Exclusive event coordination and VIP event management',
    heroImage: {
      path: '/images/vip-event/PHOTO-2026-07-12-22-22-18.jpg',
      alt: 'Elegant VIP event celebration',
      aspectRatio: 'landscape',
    },
    cardImages: [
      {
        path: '/images/vip-event/PHOTO-2026-07-12-22-22-17.jpg',
        alt: 'Luxury event setup and decoration',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/vip-event/PHOTO-2026-07-12-22-22-18 2.jpg',
        alt: 'Premium event catering experience',
        aspectRatio: 'landscape',
      },
      {
        path: '/images/vip-event/PHOTO-2026-07-12-22-22-18 3.jpg',
        alt: 'Exclusive event entertainment',
        aspectRatio: 'landscape',
      },
    ],
    category: 'vip-events',
    type: 'hospitality',
  },
};

/**
 * Fallback/default category for images not found
 */
const DEFAULT_CATEGORY: CategoryMapping = {
  name: 'RS Concierge Services',
  description: 'Premium concierge services',
  heroImage: {
    path: '/images/aviation/aviation-card.jpg',
    alt: 'RS Concierge luxury services',
    aspectRatio: 'landscape',
  },
  cardImages: [
    {
      path: '/images/aviation/aviation-card.jpg',
      alt: 'Premium concierge experience',
      aspectRatio: 'landscape',
    },
    {
      path: '/images/marine/marine-card.jpg',
      alt: 'Luxury services and experiences',
      aspectRatio: 'landscape',
    },
  ],
  category: 'default',
  type: 'lifestyle',
};

/**
 * Retrieve images for a specific category
 * Returns the category mapping with all associated images
 * Fallback to default category if not found
 *
 * @param category - The category slug (e.g., 'aviation', 'automotives/supercars')
 * @returns CategoryMapping with hero and card images
 *
 * @example
 * const aviationImages = getImagesByCategory('aviation');
 * const supercarImages = getImagesByCategory('automotives/supercars');
 */
export function getImagesByCategory(category: string): CategoryMapping {
  const normalized = category.toLowerCase().trim();

  // Direct lookup
  if (categoryImages[normalized]) {
    return categoryImages[normalized];
  }

  // Handle potential variations
  const variations = [
    normalized,
    normalized.replace(/_/g, '-'),
    normalized.replace(/-/g, '_'),
    `${normalized}-safari`,
    `${normalized.replace(/-/g, '_')}`,
  ];

  for (const variation of variations) {
    if (categoryImages[variation]) {
      return categoryImages[variation];
    }
  }

  // Fallback
  console.warn(
    `Category "${category}" not found in image mapping. Using default.`
  );
  return DEFAULT_CATEGORY;
}

/**
 * Get all available categories
 * @returns Array of category keys
 */
export function getAllCategories(): string[] {
  return Object.keys(categoryImages);
}

/**
 * Get categories grouped by type
 * @returns Object with categories grouped by service type
 */
export function getCategoriesByType(): Record<
  string,
  CategoryMapping[]
> {
  const grouped: Record<string, CategoryMapping[]> = {
    aviation: [],
    automotive: [],
    marine: [],
    lifestyle: [],
    sports: [],
    hospitality: [],
  };

  Object.values(categoryImages).forEach((category) => {
    if (grouped[category.type]) {
      grouped[category.type].push(category);
    }
  });

  return grouped;
}

/**
 * Get all images for a category (hero + cards combined)
 * @param category - The category slug
 * @returns Array of all images for that category
 */
export function getAllImagesForCategory(category: string): CategoryImage[] {
  const mapping = getImagesByCategory(category);
  return [mapping.heroImage, ...mapping.cardImages];
}

/**
 * Get hero image for a category
 * @param category - The category slug
 * @returns Hero image or undefined
 */
export function getHeroImage(category: string): CategoryImage | undefined {
  return getImagesByCategory(category)?.heroImage;
}

/**
 * Get card images for a category
 * @param category - The category slug
 * @returns Array of card images
 */
export function getCardImages(category: string): CategoryImage[] {
  return getImagesByCategory(category)?.cardImages || [];
}
