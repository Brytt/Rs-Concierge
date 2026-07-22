import { lifestyleItemImageSets } from "./lifestyle-item-images.generated"

export { lifestyleItemImageSets }

const fallbackImages = ["/images/lifestyle-concierge/lifestyle-hero.png"] as const

export function getLifestyleItemImages(title: string): readonly string[] {
  return lifestyleItemImageSets[title] ?? fallbackImages
}

export function getLifestyleItemImage(title: string): string {
  return getLifestyleItemImages(title)[0]
}
