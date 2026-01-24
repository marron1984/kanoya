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
 * Uploaded images will replace the SVG placeholders
 */

export const siteImages = {
  // Hero images (16:9)
  hero: {
    top: '/images/hero/hero-top.jpg',
    rooms: '/images/hero/hero-rooms.jpg',
    dining: '/images/hero/hero-dining.jpg',
    experience: '/images/hero/hero-experience.jpg',
    access: '/images/hero/hero-access.jpg',
    faq: '/images/hero/hero-faq.jpg',
    reserve: '/images/hero/hero-reserve.jpg',
  },

  // Room images (4:5 for gallery, 3:2 for wide)
  rooms: {
    overview: '/images/rooms/rooms-overview.jpg',
    window: '/images/rooms/rooms-window.jpg',
    wall: '/images/rooms/rooms-wall.jpg',
    lighting: '/images/rooms/rooms-lighting.jpg',
    amenity: '/images/rooms/rooms-amenity.jpg',
    washbasin: '/images/rooms/rooms-washbasin.jpg',
    bath: '/images/rooms/rooms-bath.jpg',
  },

  // Dining images (4:5 for gallery, 3:2 for wide)
  dining: {
    counter: '/images/dining/dining-counter.jpg',
    dish: '/images/dining/dining-dish.jpg',
    vessel: '/images/dining/dining-detail.jpg',
    chef: '/images/dining/dining-counter.jpg',
    atmosphere: '/images/dining/dining-detail.jpg',
  },

  // Experience images (4:5 for gallery)
  experience: {
    morning: '/images/experience/experience-morning.jpg',
    afternoon: '/images/experience/experience-checkin.jpg',
    evening: '/images/experience/experience-dinner.jpg',
    night: '/images/experience/experience-night.jpg',
  },

  // Access images (3:2 for wide)
  access: {
    map: '/images/access/access-surroundings.jpg',
    exterior: '/images/access/access-surroundings.jpg',
    surroundings: '/images/access/access-surroundings.jpg',
  },

  // Amenity detail images (1:1)
  amenity: {
    yukata: '/images/rooms/rooms-amenity.jpg',
    towel: '/images/rooms/rooms-amenity.jpg',
    tea: '/images/rooms/rooms-amenity.jpg',
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
 * Fallback image for when JPG doesn't exist yet
 * Components should use onError to fall back to SVG or this placeholder
 */
export const placeholderImage = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080"><rect fill="#2A1F17" width="1920" height="1080"/><text x="960" y="540" font-family="serif" font-size="48" fill="#F1E6D6" text-anchor="middle" opacity="0.5">Image Placeholder</text></svg>')}`
