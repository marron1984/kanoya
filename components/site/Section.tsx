import { ReactNode } from 'react'
import { Container } from './Container'

type SectionProps = {
  children: ReactNode
  className?: string
  containerClassName?: string
  id?: string
  deep?: boolean
}

export function Section({
  children,
  className = '',
  containerClassName = '',
  id,
  deep = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${deep ? 'bg-deep' : ''} ${className}`}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  )
}
