'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Logo } from './Logo'
import { siteConfig } from '@/lib/siteConfig'

type HeaderProps = {
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

export function Header({ lang = 'ja' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = lang === 'ja' ? navItemsJa : navItemsEn
  const homeHref = lang === 'ja' ? '/' : '/en'
  const reserveHref = lang === 'ja' ? '/reserve' : '/en/reserve'
  const langSwitchHref = lang === 'ja' ? '/en' : '/'
  const langSwitchLabel = lang === 'ja' ? 'EN' : 'JP'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-main/95 backdrop-blur-sm">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo variant="text" size="sm" href={homeHref} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-wider text-ink-muted hover:text-ink-main transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact & Language */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href={langSwitchHref}
              className="text-xs tracking-wider text-ink-muted hover:text-ink-main transition-colors duration-300"
            >
              {langSwitchLabel}
            </Link>

            <div className="text-right text-xs tracking-wider">
              <p className="text-ink-muted">
                {lang === 'ja' ? 'ご予約・お問い合わせ' : 'Reservations'}
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.tel.replace(/-/g, '')}`}
                  className="hover:text-ink-muted transition-colors duration-300"
                >
                  TEL {lang === 'ja' ? siteConfig.tel : siteConfig.telInternational}
                </a>
              </p>
              <p className="text-ink-muted">{siteConfig.telHours}</p>
            </div>

{siteConfig.reservationUrl.startsWith('http') ? (
              <a
                href={siteConfig.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-quiet text-xs"
              >
                {lang === 'ja' ? '空室確認・予約' : 'Reserve'}
              </a>
            ) : (
              <Link
                href={reserveHref}
                className="btn-quiet text-xs"
              >
                {lang === 'ja' ? '空室確認・予約' : 'Reserve'}
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 -mr-2"
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block w-full h-px bg-ink-main transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-full h-px bg-ink-main transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-full h-px bg-ink-main transition-transform duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="border-t border-line-subtle">
          <div className="max-w-content mx-auto px-6 py-8">
            <nav className="space-y-4 mb-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm tracking-wider py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="pt-6 border-t border-line-subtle space-y-4">
              <div className="text-sm tracking-wider">
                <p className="text-ink-muted mb-1">
                  {lang === 'ja' ? 'ご予約・お問い合わせ' : 'Reservations'}
                </p>
                <p>
                  <a href={`tel:${siteConfig.tel.replace(/-/g, '')}`}>
                    TEL {lang === 'ja' ? siteConfig.tel : siteConfig.telInternational}
                  </a>
                </p>
                <p className="text-ink-muted text-xs mt-1">{siteConfig.telHours}</p>
              </div>

              <div className="flex gap-4">
                {siteConfig.reservationUrl.startsWith('http') ? (
                  <a
                    href={siteConfig.reservationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-quiet text-xs"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {lang === 'ja' ? '空室確認・予約' : 'Reserve'}
                  </a>
                ) : (
                  <Link
                    href={reserveHref}
                    className="btn-quiet text-xs"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {lang === 'ja' ? '空室確認・予約' : 'Reserve'}
                  </Link>
                )}
                <Link
                  href={langSwitchHref}
                  className="btn-quiet text-xs"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {langSwitchLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
