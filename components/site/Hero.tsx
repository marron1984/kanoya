'use client'

import Image from 'next/image'
import { ReactNode, useState } from 'react'

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
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative w-full ${className}`}>
      {/* Image container with fixed aspect ratio */}
      <div className="relative aspect-hero w-full overflow-hidden bg-[#F1E6D6]">
        {hasError ? (
          // White placeholder with label
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#F1E6D6] to-[#E8DCC8]">
            <span className="text-[#6E5A4B]/40 text-sm tracking-wider">Hero Image</span>
          </div>
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            onError={() => setHasError(true)}
          />
        )}

        {/* Depth overlay */}
        {overlay && !hasError && (
          <>
            {/* Vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, transparent 30%, rgba(28, 21, 17, 0.25) 100%)',
              }}
            />
            {/* Bottom gradient for text readability */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(28, 21, 17, 0.5) 0%, transparent 60%)',
              }}
            />
          </>
        )}

        {/* Light overlay for placeholder readability */}
        {hasError && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(28, 21, 17, 0.15) 0%, transparent 60%)',
            }}
          />
        )}
      </div>

      {/* Content overlay */}
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
      className={`text-ink-main text-2xl md:text-3xl lg:text-4xl font-normal tracking-wider leading-relaxed ${className}`}
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
      className={`text-ink-main text-sm md:text-base tracking-wider mt-4 opacity-80 ${className}`}
    >
      {children}
    </p>
  )
}
