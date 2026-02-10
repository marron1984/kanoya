/**
 * Site Images Configuration
 * Centralized image source management
 *
 * Using actual L'Artisan KANOYA photography.
 */

export const siteImages = {
  // Hero images (wide format)
  hero: {
    top: '/images/image-07.jpg',          // Kumiko lounge — first impression
    rooms: '/images/image-02.jpg',         // Room with twin beds and shoji screens
    dining: '/images/image-20.jpg',        // Counter dining overview with lattice
    experience: '/images/image-18.jpg',    // Autumn Nara park with deer
    access: '/images/image-03.jpg',        // Building exterior
    faq: '/images/image-04.jpg',           // Bedroom through doorway
    reserve: '/images/image-19.jpg',       // L'Artisan KANOYA night sign
  },

  // Room images
  rooms: {
    overview: '/images/image-01.jpg',      // Spacious room with sofa and bed
    window: '/images/image-11.jpg',        // Living area with garden view through shoji
    wall: '/images/image-09.jpg',          // Room with gold-patterned bedding
    lighting: '/images/image-10.jpg',      // Warm ambient room lighting
    amenity: '/images/image-12.jpg',       // Tea and coffee set
    washbasin: '/images/image-14.jpg',     // Washbasin with amenities
    bath: '/images/image-15.jpg',          // Bathroom with bath
  },

  // Dining images
  dining: {
    counter: '/images/image-21.jpg',       // Counter with chef at work
    dish: '/images/image-31.jpg',          // Beef cutlet — top-down plating
    vessel: '/images/image-29.jpg',        // Fish on ceramic vessel
    chef: '/images/image-25.jpg',          // Chef hands plating a dish
    atmosphere: '/images/image-26.jpg',    // Counter at night with wine glasses
  },

  // Experience images
  experience: {
    morning: '/images/image-18.jpg',       // Nara park autumn morning
    afternoon: '/images/image-07.jpg',     // Check-in lounge
    evening: '/images/image-27.jpg',       // Counter dining set up
    night: '/images/image-04.jpg',         // Bedroom at night
  },

  // Access images
  access: {
    map: '/images/image-06.jpg',           // KANOYA entrance sign
    exterior: '/images/image-03.jpg',      // Building exterior
    surroundings: '/images/image-18.jpg',  // Nara park surroundings
  },

  // Amenity detail images
  amenity: {
    yukata: '/images/image-16.jpg',        // Bathroom amenity set
    towel: '/images/image-17.jpg',         // Towels in basket
    tea: '/images/image-13.jpg',           // Ceramics drawer
  },
} as const

export type ImageCategory = keyof typeof siteImages
export type HeroImageKey = keyof typeof siteImages.hero
export type RoomsImageKey = keyof typeof siteImages.rooms
export type DiningImageKey = keyof typeof siteImages.dining
export type ExperienceImageKey = keyof typeof siteImages.experience
export type AccessImageKey = keyof typeof siteImages.access
export type AmenityImageKey = keyof typeof siteImages.amenity
