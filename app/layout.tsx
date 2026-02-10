import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import { CustomCursor } from '@/components/animations/CustomCursor'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
    languages: {
      'ja': '/',
      'en': '/en',
    },
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: '/',
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Noto+Serif+JP:wght@200;300;400;500&family=Noto+Sans+JP:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-sumi text-shironezu">
        <SmoothScrollProvider>
          <CustomCursor />
          <Header lang="ja" />
          <main>
            {children}
          </main>
          <Footer lang="ja" />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
