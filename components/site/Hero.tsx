'use client'

import Image from 'next/image'
import { ReactNode } from 'react'

type HeroProps = {
  imageSrc: string
  imageAlt: string
  children: ReactNode
  className?: string
  overlay?: boolean
}

export function Hero({
  imageSrc,
  imageAlt,
  children,
  className = '',
  overlay = true,
}: HeroProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative aspect-hero w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {overlay && (
          <>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, transparent 30%, rgba(13, 13, 13, 0.3) 100%)',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(13, 13, 13, 0.6) 0%, transparent 60%)',
              }}
            />
          </>
        )}
      </div>

      <div className="absolute inset-0 flex items-end justify-start">
        <div className="w-full max-w-content mx-auto px-6 md:px-8 pb-12 md:pb-20">
          {children}
        </div>
      </div>
    </div>
  )
}

type HeroTitleProps = {
  children: ReactNode
  className?: string
}

export function HeroTitle({ children, className = '' }: HeroTitleProps) {
  return (
    <h1
      className={`text-shironezu text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed ${className}`}
      style={{ textShadow: '0 2px 20px rgba(13, 13, 13, 0.4)', letterSpacing: '0.12em' }}
    >
      {children}
    </h1>
  )
}

type HeroSubtitleProps = {
  children: ReactNode
  className?: string
}

export function HeroSubtitle({ children, className = '' }: HeroSubtitleProps) {
  return (
    <p
      className={`text-shironezu text-sm md:text-base mt-4 opacity-80 ${className}`}
      style={{ textShadow: '0 1px 10px rgba(13, 13, 13, 0.4)', letterSpacing: '0.15em' }}
    >
      {children}
    </p>
  )
}
