import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'main'
}

export function Container({
  children,
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component className={`max-w-content mx-auto px-6 md:px-8 ${className}`}>
      {children}
    </Component>
  )
}
