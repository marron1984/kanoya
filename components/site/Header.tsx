'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [isScrolled, setIsScrolled] = useState(false)
  const navItems = lang === 'ja' ? navItemsJa : navItemsEn
  const homeHref = lang === 'ja' ? '/' : '/en'
  const langSwitchHref = lang === 'ja' ? '/en' : '/'
  const langSwitchLabel = lang === 'ja' ? 'EN' : 'JP'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-800 ${
          isScrolled
            ? 'bg-sumi-deep/90 backdrop-blur-md'
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href={homeHref} className="inline-block group">
              <span
                className="text-sm md:text-base text-shironezu/90 group-hover:text-kinnezu transition-colors duration-600"
                style={{ fontFamily: 'var(--font-en)', letterSpacing: '0.25em' }}
              >
                LU NOYA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-shironezu/50 hover:text-kinnezu transition-colors duration-600"
                  style={{ letterSpacing: '0.2em' }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href={langSwitchHref}
                className="text-xs text-shironezu/40 hover:text-kinnezu transition-colors duration-600"
                style={{ letterSpacing: '0.2em' }}
              >
                {langSwitchLabel}
              </Link>

              <a
                href={siteConfig.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-kinnezu border border-kinnezu-dark/40 px-6 py-2.5 hover:bg-kinnezu-dark/20 transition-all duration-600"
                style={{ letterSpacing: '0.2em' }}
              >
                {lang === 'ja' ? '予約' : 'Reserve'}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 -mr-2 relative w-10 h-10 flex items-center justify-center"
              aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            >
              <div className="w-6 h-4 flex flex-col justify-between">
                <motion.span
                  className="block w-full h-px bg-shironezu/70"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 7.5 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                />
                <motion.span
                  className="block w-full h-px bg-shironezu/70"
                  animate={{ opacity: isMenuOpen ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block w-full h-px bg-shironezu/70"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -7.5 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-sumi-deep/98 backdrop-blur-lg flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="text-center space-y-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    className="block text-lg text-shironezu/80 hover:text-kinnezu transition-colors duration-400"
                    style={{ letterSpacing: '0.2em' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="pt-8 border-t border-shironezu/10"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  delay: navItems.length * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <a
                  href={siteConfig.reservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-kinnezu border border-kinnezu-dark/40 px-8 py-3"
                  style={{ letterSpacing: '0.2em' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {lang === 'ja' ? '予約を確認する' : 'Reserve'}
                </a>

                <div className="mt-6">
                  <Link
                    href={langSwitchHref}
                    className="text-xs text-shironezu/40"
                    style={{ letterSpacing: '0.2em' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {langSwitchLabel}
                  </Link>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
