'use client'

import { ReactNode, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type CardProps = {
  children: ReactNode
  className?: string
  href?: string
}

export function Card({ children, className = '', href }: CardProps) {
  const content = (
    <article className={`${className}`}>
      {children}
    </article>
  )

  if (href) {
    return (
      <Link href={href} className="block group">
        {content}
      </Link>
    )
  }

  return content
}

type CardImageProps = {
  src: string
  alt: string
  aspectRatio?: 'gallery' | 'wide' | 'detail' | 'hero'
  className?: string
}

const aspectClasses = {
  gallery: 'aspect-gallery',
  wide: 'aspect-wide',
  detail: 'aspect-detail',
  hero: 'aspect-hero',
}

export function CardImage({
  src,
  alt,
  aspectRatio = 'wide',
  className = '',
}: CardImageProps) {
  const [hasError, setHasError] = useState(false)

  return (
    <figure className={`relative ${aspectClasses[aspectRatio]} overflow-hidden bg-[#F1E6D6] ${className}`}>
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#F1E6D6] to-[#E8DCC8] border border-[#6E5A4B]/10 group-hover:from-[#EDE1D0] transition-colors duration-300">
          <span className="text-[#6E5A4B]/30 text-xs tracking-wider">{alt || 'Image'}</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-800 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={() => setHasError(true)}
        />
      )}
    </figure>
  )
}

type CardContentProps = {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`pt-6 md:pt-8 ${className}`}>
      {children}
    </div>
  )
}

type CardTitleProps = {
  children: ReactNode
  className?: string
  as?: 'h2' | 'h3' | 'h4'
}

export function CardTitle({
  children,
  className = '',
  as: Component = 'h3',
}: CardTitleProps) {
  return (
    <Component className={`text-lg md:text-xl tracking-wider mb-4 ${className}`}>
      {children}
    </Component>
  )
}

type CardTextProps = {
  children: ReactNode
  className?: string
}

export function CardText({ children, className = '' }: CardTextProps) {
  return (
    <div className={`text-sm text-ink-muted leading-loose tracking-wider ${className}`}>
      {children}
    </div>
  )
}
