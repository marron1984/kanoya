import type { Metadata } from 'next'
import { Header, Footer } from '@/components/site'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: {
    default: siteConfig.nameEn,
    template: `%s | ${siteConfig.nameEn}`,
  },
  description: siteConfig.descriptionEn,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/en',
    languages: {
      'ja': '/',
      'en': '/en',
    },
  },
  openGraph: {
    title: siteConfig.nameEn,
    description: siteConfig.descriptionEn,
    url: '/en',
    siteName: siteConfig.nameEn,
    locale: siteConfig.localeAlternate,
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.nameEn,
      },
    ],
  },
}

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header lang="en" />
      <main className="pt-16 md:pt-20">
        {children}
      </main>
      <Footer lang="en" />
    </>
  )
}
