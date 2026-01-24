/**
 * Site Configuration
 * Environment-based settings with fallbacks
 */

export const siteConfig = {
  name: '奈良 鹿のや',
  nameEn: 'KANOYA',
  description: '奈良公園のほど近く、春日の森に寄り添う五室だけの小さなオーベルジュ旅館',
  descriptionEn: 'A small auberge style inn near Nara Park and Kasuga Forest. Just five rooms.',

  // Contact
  tel: process.env.NEXT_PUBLIC_TEL || '0742-XX-XXXX',
  telHours: process.env.NEXT_PUBLIC_TEL_HOURS || '9:00–20:00',
  telInternational: '+81-742-XX-XXXX',

  // Reservation
  reservationUrl: process.env.NEXT_PUBLIC_RESERVATION_URL || '/reserve',

  // Address (to be updated)
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
