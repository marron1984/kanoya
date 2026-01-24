import Link from 'next/link'

type LogoVariant = 'text' | 'mark' | 'en'

type LogoProps = {
  variant?: LogoVariant
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
    <span className={`font-serif tracking-wider ${sizeClasses[size]} ${className}`}>
      {variant === 'text' && '奈良 鹿のや'}
      {variant === 'mark' && '鹿'}
      {variant === 'en' && 'KAN0YA'}
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
