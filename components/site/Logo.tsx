import Link from 'next/link'

type LogoProps = {
  variant?: 'text' | 'mark' | 'en'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  href?: string
}

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
}

export function Logo({
  variant = 'text',
  size = 'md',
  className = '',
  href = '/',
}: LogoProps) {
  const content = (
    <span
      className={`${sizeClasses[size]} ${className}`}
      style={{
        fontFamily: variant === 'mark' ? 'var(--font-serif)' : 'var(--font-en)',
        letterSpacing: '0.25em',
      }}
    >
      {variant === 'text' && 'LU NOYA'}
      {variant === 'mark' && '鹿'}
      {variant === 'en' && 'LU NOYA'}
    </span>
  )

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    )
  }

  return content
}
