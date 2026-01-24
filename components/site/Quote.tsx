import { ReactNode } from 'react'

type QuoteProps = {
  children: ReactNode
  className?: string
}

export function Quote({ children, className = '' }: QuoteProps) {
  return (
    <blockquote
      className={`text-base md:text-lg leading-loose tracking-wider text-ink-main ${className}`}
    >
      {children}
    </blockquote>
  )
}
