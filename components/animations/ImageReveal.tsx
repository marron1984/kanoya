'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

type ImageRevealProps = {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  containerClassName?: string
  delay?: number
  variant?: 'zoom-out' | 'slit' | 'fade' | 'slide-up'
  priority?: boolean
  sizes?: string
  aspectRatio?: string
}

export function ImageReveal({
  src,
  alt,
  fill = true,
  width,
  height,
  className = '',
  containerClassName = '',
  delay = 0,
  variant = 'zoom-out',
  priority = false,
  sizes = '100vw',
  aspectRatio,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const easeQuint: [number, number, number, number] = [0.22, 1, 0.36, 1]
  const easeCustom: [number, number, number, number] = [0.76, 0, 0.24, 1]

  const variants = {
    'zoom-out': {
      initial: { scale: 1.2, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 2, delay, ease: easeQuint },
    },
    'slit': {
      initial: { clipPath: 'inset(50% 0 50% 0)', opacity: 0 },
      animate: { clipPath: 'inset(0% 0 0% 0)', opacity: 1 },
      transition: { duration: 1.5, delay, ease: easeCustom },
    },
    'fade': {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1.5, delay, ease: easeQuint },
    },
    'slide-up': {
      initial: { clipPath: 'inset(100% 0 0% 0)', opacity: 0 },
      animate: { clipPath: 'inset(0% 0 0% 0)', opacity: 1 },
      transition: { duration: 1.5, delay, ease: easeQuint },
    },
  }

  const v = variants[variant]

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${containerClassName}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <motion.div
        className={`relative w-full h-full ${className}`}
        initial={v.initial}
        animate={isInView ? v.animate : v.initial}
        transition={v.transition}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes={sizes}
            priority={priority}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width || 1200}
            height={height || 800}
            className="object-cover w-full h-full"
            sizes={sizes}
            priority={priority}
          />
        )}
      </motion.div>

      {/* Grain overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay z-10"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}
