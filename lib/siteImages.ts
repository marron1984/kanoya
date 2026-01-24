/**
 * Site Images Configuration
 * Centralized image source management for easy updates
 *
 * Naming convention: page-subject-angle.jpg
 * - English lowercase
 * - Hyphens only
 * - No numbers or Japanese
 *
 * Images can be uploaded via /admin page
 * Uploaded images (.jpg) will replace the SVG placeholders
 */

export const siteImages = {
  // Hero images (16:9)
  hero: {
    top: '/images/hero/hero-top.svg',
    rooms: '/images/hero/hero-rooms.svg',
    dining: '/images/hero/hero-dining.svg',
    experience: '/images/hero/hero-experience.svg',
    access: '/images/hero/hero-access.svg',
    faq: '/images/hero/hero-faq.svg',
    reserve: '/images/hero/hero-reserve.svg',
  },

  // Room images (4:5 for gallery, 3:2 for wide)
  rooms: {
    overview: '/images/rooms/rooms-overview.svg',
    window: '/images/rooms/rooms-window.svg',
    wall: '/images/rooms/rooms-wall.svg',
    lighting: '/images/rooms/rooms-lighting.svg',
    amenity: '/images/rooms/rooms-amenity.svg',
    washbasin: '/images/rooms/rooms-washbasin.svg',
    bath: '/images/rooms/rooms-bath.svg',
  },

  // Dining images (4:5 for gallery, 3:2 for wide)
  dining: {
    counter: '/images/dining/dining-counter.svg',
    dish: '/images/dining/dining-dish.svg',
    vessel: '/images/dining/dining-detail.svg',
    chef: '/images/dining/dining-counter.svg',
    atmosphere: '/images/dining/dining-detail.svg',
  },

  // Experience images (4:5 for gallery)
  experience: {
    morning: '/images/experience/experience-morning.svg',
    afternoon: '/images/experience/experience-checkin.svg',
    evening: '/images/experience/experience-dinner.svg',
    night: '/images/experience/experience-night.svg',
  },

  // Access images (3:2 for wide)
  access: {
    map: '/images/access/access-surroundings.svg',
    exterior: '/images/access/access-surroundings.svg',
    surroundings: '/images/access/access-surroundings.svg',
  },

  // Amenity detail images (1:1)
  amenity: {
    yukata: '/images/rooms/rooms-amenity.svg',
    towel: '/images/rooms/rooms-amenity.svg',
    tea: '/images/rooms/rooms-amenity.svg',
  },
} as const

export type ImageCategory = keyof typeof siteImages
export type HeroImageKey = keyof typeof siteImages.hero
export type RoomsImageKey = keyof typeof siteImages.rooms
export type DiningImageKey = keyof typeof siteImages.dining
export type ExperienceImageKey = keyof typeof siteImages.experience
export type AccessImageKey = keyof typeof siteImages.access
export type AmenityImageKey = keyof typeof siteImages.amenity

/**
 * Fallback placeholder image (data URI)
 */
export const placeholderImage = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080"><rect fill="#2A1F17" width="1920" height="1080"/><text x="960" y="540" font-family="serif" font-size="48" fill="#F1E6D6" text-anchor="middle" opacity="0.5">Image Placeholder</text></svg>')}`
