import { Metadata } from 'next'
import { siteConfig } from './siteConfig'

type PageMetadata = {
  title?: string
  description?: string
  path?: string
  ogImage?: string
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  ogImage = '/og-image.jpg',
}: PageMetadata = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name

  const fullDescription = description || siteConfig.description

  return {
    title: fullTitle,
    description: fullDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: path,
      languages: {
        'ja': path,
        'en': `/en${path}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function generateEnPageMetadata({
  title,
  description,
  path = '',
  ogImage = '/og-image.jpg',
}: PageMetadata = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.nameEn}`
    : siteConfig.nameEn

  const fullDescription = description || siteConfig.descriptionEn

  return {
    title: fullTitle,
    description: fullDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `/en${path}`,
      languages: {
        'ja': path,
        'en': `/en${path}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: `/en${path}`,
      siteName: siteConfig.nameEn,
      locale: siteConfig.localeAlternate,
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.nameEn,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
