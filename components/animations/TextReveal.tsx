'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type TextRevealProps = {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  delay?: number
  charByChar?: boolean
  lineByLine?: boolean
  staggerDelay?: number
}

export function TextReveal({
  children,
  className = '',
  as: Component = 'p',
  delay = 0,
  charByChar = false,
  lineByLine = false,
  staggerDelay = 0.04,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  if (charByChar) {
    const chars = children.split('')
    return (
      <Component className={className} ref={ref as React.Ref<HTMLHeadingElement>}>
        {chars.map((char, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: '100%', opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: delay + i * staggerDelay,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          </span>
        ))}
      </Component>
    )
  }

  if (lineByLine) {
    const lines = children.split('\n')
    return (
      <div ref={ref} className={className}>
        {lines.map((line, i) => (
          <div key={i} className="overflow-hidden">
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
              transition={{
                duration: 1,
                delay: delay + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Component>{line}</Component>
            </motion.div>
          </div>
        ))}
      </div>
    )
  }

  // Default: fade up as whole block
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
        transition={{
          duration: 1.2,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Component className={className}>{children}</Component>
      </motion.div>
    </div>
  )
}

// FadeIn wrapper for arbitrary content
type FadeInProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  duration?: number
}

export function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 40,
  duration = 1.2,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }

  const initial = {
    opacity: 0,
    ...directionMap[direction],
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

// Line reveal (horizontal line animation)
export function LineReveal({
  className = '',
  delay = 0,
}: {
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className={`w-full overflow-hidden ${className}`}>
      <motion.div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(232, 228, 223, 0.08) 20%, rgba(232, 228, 223, 0.08) 80%, transparent 100%)',
        }}
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: 1.5,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
      />
    </div>
  )
}
