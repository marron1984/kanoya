'use client'

import Image from 'next/image'
import { useState } from 'react'

type GalleryImage = {
  src: string
  alt: string
}

type GalleryProps = {
  images: GalleryImage[]
  className?: string
  columns?: 1 | 2 | 3
  aspectRatio?: 'gallery' | 'wide' | 'detail'
}

const aspectClasses = {
  gallery: 'aspect-gallery',
  wide: 'aspect-wide',
  detail: 'aspect-detail',
}

const columnClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
}

export function Gallery({
  images,
  className = '',
  columns = 2,
  aspectRatio = 'gallery',
}: GalleryProps) {
  return (
    <div className={`grid ${columnClasses[columns]} gap-4 md:gap-6 ${className}`}>
      {images.map((image, index) => (
        <GalleryItem
          key={index}
          src={image.src}
          alt={image.alt}
          aspectRatio={aspectRatio}
        />
      ))}
    </div>
  )
}

type GalleryItemProps = {
  src: string
  alt: string
  aspectRatio?: 'gallery' | 'wide' | 'detail' | 'hero'
  className?: string
}

export function GalleryItem({
  src,
  alt,
  aspectRatio = 'gallery',
  className = '',
}: GalleryItemProps) {
  const [hasError, setHasError] = useState(false)
  const aspectClass = aspectRatio === 'hero' ? 'aspect-hero' : aspectClasses[aspectRatio]

  return (
    <figure className={`relative ${aspectClass} overflow-hidden bg-[#F1E6D6] ${className}`}>
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#F1E6D6] to-[#E8DCC8] border border-[#6E5A4B]/10">
          <span className="text-[#6E5A4B]/30 text-xs tracking-wider">{alt || 'Image'}</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setHasError(true)}
        />
      )}
    </figure>
  )
}
