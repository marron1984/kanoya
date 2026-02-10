'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

type ParallaxImageProps = {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  speed?: number
  priority?: boolean
  sizes?: string
}

export function ParallaxImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  speed = 0.3,
  priority = false,
  sizes = '100vw',
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`])

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${containerClassName}`}
    >
      <motion.div
        className={`relative w-full h-full ${className}`}
        style={{ y, scale: 1.2 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      </motion.div>

      {/* Depth vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(13, 13, 13, 0.2) 100%)',
        }}
      />
    </div>
  )
}
