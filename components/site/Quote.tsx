import { ReactNode } from 'react'

type QuoteProps = {
  children: ReactNode
  className?: string
}

export function Quote({ children, className = '' }: QuoteProps) {
  return (
    <blockquote
      className={`text-base md:text-lg leading-loose text-shironezu/80 ${className}`}
      style={{ letterSpacing: '0.12em' }}
    >
      {children}
    </blockquote>
  )
}
