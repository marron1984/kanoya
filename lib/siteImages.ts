/**
 * Site Images Configuration
 * Centralized image source management for easy updates
 *
 * Naming convention: page-subject-angle.jpg
 * - English lowercase
 * - Hyphens only
 * - No numbers or Japanese
 */

export const siteImages = {
  // Hero images (16:9)
  hero: {
    top: '/images/hero/hero-entrance-evening.jpg',
    rooms: '/images/hero/hero-room-window.jpg',
    dining: '/images/hero/hero-dining-counter.jpg',
    experience: '/images/hero/hero-garden-morning.jpg',
    access: '/images/hero/hero-nara-park.jpg',
    faq: '/images/hero/hero-interior-detail.jpg',
    reserve: '/images/hero/hero-lobby-calm.jpg',
  },

  // Room images (4:5 for gallery, 3:2 for wide)
  rooms: {
    overview: '/images/rooms/rooms-overview-wide.jpg',
    window: '/images/rooms/rooms-window-light.jpg',
    wall: '/images/rooms/rooms-wall-texture.jpg',
    lighting: '/images/rooms/rooms-lighting-night.jpg',
    amenity: '/images/rooms/rooms-amenity-detail.jpg',
    washbasin: '/images/rooms/rooms-washbasin-detail.jpg',
    bath: '/images/rooms/rooms-bath-evening.jpg',
  },

  // Dining images (4:5 for gallery, 3:2 for wide)
  dining: {
    counter: '/images/dining/dining-counter-wide.jpg',
    dish: '/images/dining/dining-dish-seasonal.jpg',
    vessel: '/images/dining/dining-vessel-detail.jpg',
    chef: '/images/dining/dining-chef-hands.jpg',
    atmosphere: '/images/dining/dining-atmosphere-night.jpg',
  },

  // Experience images (4:5 for gallery)
  experience: {
    morning: '/images/experience/experience-park-morning.jpg',
    afternoon: '/images/experience/experience-checkin-quiet.jpg',
    evening: '/images/experience/experience-dinner-ambience.jpg',
    night: '/images/experience/experience-room-night.jpg',
  },

  // Access images (3:2 for wide)
  access: {
    map: '/images/access/access-map-illustration.jpg',
    exterior: '/images/access/access-exterior-entrance.jpg',
    surroundings: '/images/access/access-nara-park.jpg',
  },

  // Amenity detail images (1:1)
  amenity: {
    yukata: '/images/amenity/amenity-yukata-folded.jpg',
    towel: '/images/amenity/amenity-towel-stack.jpg',
    tea: '/images/amenity/amenity-tea-set.jpg',
  },
} as const

export type ImageCategory = keyof typeof siteImages
export type HeroImageKey = keyof typeof siteImages.hero
export type RoomsImageKey = keyof typeof siteImages.rooms
export type DiningImageKey = keyof typeof siteImages.dining
export type ExperienceImageKey = keyof typeof siteImages.experience
export type AccessImageKey = keyof typeof siteImages.access
export type AmenityImageKey = keyof typeof siteImages.amenity
