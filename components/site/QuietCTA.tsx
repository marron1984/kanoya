import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

type QuietCTAProps = {
  variant?: 'primary' | 'secondary'
  href?: string
  external?: boolean
  children: React.ReactNode
  className?: string
}

export function QuietCTA({
  variant = 'primary',
  href,
  external = false,
  children,
  className = '',
}: QuietCTAProps) {
  const baseClasses = variant === 'primary'
    ? 'btn-primary'
    : 'btn-quiet'

  const linkProps = external
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {}

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} ${className}`}
        {...linkProps}
      >
        <span className="relative z-10">{children}</span>
      </Link>
    )
  }

  return (
    <button className={`${baseClasses} ${className}`}>
      <span className="relative z-10">{children}</span>
    </button>
  )
}

type ReservationCTAProps = {
  variant?: 'primary' | 'secondary'
  className?: string
  label?: string
}

export function ReservationCTA({
  variant = 'primary',
  className = '',
  label = '予約を確認する',
}: ReservationCTAProps) {
  return (
    <QuietCTA
      variant={variant}
      href={siteConfig.reservationUrl}
      external={true}
      className={className}
    >
      {label}
    </QuietCTA>
  )
}

type TelCTAProps = {
  className?: string
  showHours?: boolean
}

export function TelCTA({ className = '', showHours = true }: TelCTAProps) {
  return (
    <div className={`text-sm ${className}`} style={{ letterSpacing: '0.12em' }}>
      <p className="text-shironezu/40 mb-1">ご予約・お問い合わせ</p>
      <p>
        <a
          href={`tel:${siteConfig.tel.replace(/-/g, '')}`}
          className="text-shironezu/70 hover:text-kinnezu transition-colors duration-600"
        >
          TEL {siteConfig.tel}
        </a>
      </p>
      {showHours && (
        <p className="text-shironezu/30 text-xs mt-1">{siteConfig.telHours}</p>
      )}
    </div>
  )
}
