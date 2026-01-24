import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const routes = [
    '',
    '/rooms',
    '/dining',
    '/experience',
    '/access',
    '/faq',
    '/reserve',
    '/en',
    '/en/rooms',
    '/en/dining',
    '/en/reserve',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' || route === '/en' ? 1 : 0.8,
  }))
}
