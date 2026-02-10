'use client'

import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import { FadeIn, LineReveal } from '@/components/animations/TextReveal'

type FooterProps = {
  lang?: 'ja' | 'en'
}

const navItemsJa = [
  { href: '/rooms', label: '客室' },
  { href: '/dining', label: '料理' },
  { href: '/experience', label: '過ごし方' },
  { href: '/access', label: 'アクセス' },
  { href: '/faq', label: 'よくあるご質問' },
]

const navItemsEn = [
  { href: '/en/rooms', label: 'Rooms' },
  { href: '/en/dining', label: 'Dining' },
  { href: '/en/reserve', label: 'Reserve' },
]

export function Footer({ lang = 'ja' }: FooterProps) {
  const navItems = lang === 'ja' ? navItemsJa : navItemsEn
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sumi-deep py-20 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12">
            {/* Logo & Info */}
            <div>
              <span
                className="text-lg text-shironezu/80"
                style={{ fontFamily: 'var(--font-en)', letterSpacing: '0.25em' }}
              >
                LU NOYA
              </span>
              <p className="mt-2 text-xs text-shironezu/30" style={{ letterSpacing: '0.15em' }}>
                {siteConfig.tagline}
              </p>
              <address className="not-italic text-sm text-shironezu/40 mt-6 leading-loose" style={{ letterSpacing: '0.08em' }}>
                <p>{siteConfig.address.full}</p>
              </address>
            </div>

            {/* Navigation */}
            <div>
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-sm text-shironezu/40 hover:text-kinnezu transition-colors duration-600"
                    style={{ letterSpacing: '0.12em' }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <p className="text-sm text-shironezu/40 mb-4" style={{ letterSpacing: '0.12em' }}>
                {lang === 'ja' ? 'ご予約・お問い合わせ' : 'Reservations'}
              </p>
              <p className="text-lg text-shironezu/60 mb-2" style={{ letterSpacing: '0.1em' }}>
                <a
                  href={`tel:${siteConfig.tel.replace(/-/g, '')}`}
                  className="hover:text-kinnezu transition-colors duration-600"
                >
                  TEL {lang === 'ja' ? siteConfig.tel : siteConfig.telInternational}
                </a>
              </p>
              <p className="text-sm text-shironezu/30" style={{ letterSpacing: '0.08em' }}>
                {siteConfig.telHours}
              </p>
              <div className="mt-6">
                <a
                  href={siteConfig.reservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs text-kinnezu-dark border border-kinnezu-dark/30 px-6 py-2 hover:text-kinnezu hover:border-kinnezu-dark/60 transition-all duration-600"
                  style={{ letterSpacing: '0.15em' }}
                >
                  {lang === 'ja' ? '予約を確認する' : 'Reserve'}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Bottom */}
        <LineReveal className="mt-16" />
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-shironezu/25" style={{ letterSpacing: '0.1em' }}>
            {currentYear} {siteConfig.name}
          </p>
          <Link
            href={lang === 'ja' ? '/en' : '/'}
            className="text-xs text-shironezu/25 hover:text-shironezu/50 transition-colors duration-600"
            style={{ letterSpacing: '0.1em' }}
          >
            {lang === 'ja' ? 'English' : '日本語'}
          </Link>
        </div>
      </div>
    </footer>
  )
}
