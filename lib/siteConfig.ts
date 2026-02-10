/**
 * Site Configuration - Lu Noya
 * 最高級オーベルジュ旅館
 */

export const siteConfig = {
  name: 'Lu Noya',
  nameJa: 'ル ノヤ',
  nameEn: 'LU NOYA',
  tagline: '静寂と美食の宿',
  taglineEn: 'Silence & Gastronomy',
  description: '奈良の深い静寂の中に佇む、五室だけの最高級オーベルジュ旅館。美食と空間の調和が、特別な時間を紡ぎます。',
  descriptionEn: 'A luxury auberge inn of five rooms, nestled in the profound silence of Nara. Where gastronomy and space compose extraordinary moments.',

  // Contact
  tel: process.env.NEXT_PUBLIC_TEL || '0742-XX-XXXX',
  telHours: process.env.NEXT_PUBLIC_TEL_HOURS || '9:00–20:00',
  telInternational: '+81-742-XX-XXXX',

  // Reservation
  reservationUrl: 'https://www.booking.com/hotel/jp/lu-noya.ja.html?chal_t=1770704306457&force_referer=https%3A%2F%2Fwww.google.com%2F',

  // Address
  address: {
    postalCode: '630-XXXX',
    prefecture: '奈良県',
    city: '奈良市',
    line: '住所は確定後に反映',
    full: '奈良県奈良市 住所は確定後に反映',
  },

  // Social / External
  url: 'https://kanoya.jp',

  // SEO
  locale: 'ja_JP',
  localeAlternate: 'en_US',
} as const

export type SiteConfig = typeof siteConfig
