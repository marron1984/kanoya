import Link from 'next/link'
import { Logo } from './Logo'
import { siteConfig } from '@/lib/siteConfig'

type FooterProps = {
  lang?: 'ja' | 'en'
}

const navItemsJa = [
  { href: '/rooms', label: '客室' },
  { href: '/dining', label: '料理' },
  { href: '/experience', label: '過ごし方' },
  { href: '/access', label: 'アクセス' },
  { href: '/faq', label: 'よくあるご質問' },
  { href: '/reserve', label: 'ご予約' },
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
    <footer className="bg-bg-deep text-bg-main py-16 md:py-24">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
          {/* Logo & Basic Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Logo variant="mark" size="lg" href="" className="text-bg-main" />
              <span className="text-sm tracking-wider">{siteConfig.name}</span>
            </div>
            <address className="not-italic text-sm tracking-wider leading-loose text-bg-main/70">
              <p>{siteConfig.address.full}</p>
            </address>
          </div>

          {/* Navigation */}
          <div>
            <nav className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm tracking-wider text-bg-main/70 hover:text-bg-main transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm tracking-wider text-bg-main/70 mb-4">
              {lang === 'ja' ? 'ご予約・お問い合わせ' : 'Reservations'}
            </p>
            <p className="text-lg tracking-wider mb-2">
              <a
                href={`tel:${siteConfig.tel.replace(/-/g, '')}`}
                className="hover:text-bg-main/70 transition-colors duration-300"
              >
                TEL {lang === 'ja' ? siteConfig.tel : siteConfig.telInternational}
              </a>
            </p>
            <p className="text-sm tracking-wider text-bg-main/70">
              {siteConfig.telHours}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-bg-main/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs tracking-wider text-bg-main/50">
            {currentYear} {siteConfig.name}
          </p>
          <div className="flex gap-6">
            <Link
              href={lang === 'ja' ? '/en' : '/'}
              className="text-xs tracking-wider text-bg-main/50 hover:text-bg-main/70 transition-colors duration-300"
            >
              {lang === 'ja' ? 'English' : '日本語'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
