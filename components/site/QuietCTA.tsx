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
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} ${className}`}
        {...linkProps}
      >
        {children}
      </Link>
    )
  }

  return (
    <button className={`${baseClasses} ${className}`}>
      {children}
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
  label = '空室確認・予約',
}: ReservationCTAProps) {
  const reservationUrl = siteConfig.reservationUrl

  // If no external URL, link to internal reserve page
  const isExternal = reservationUrl.startsWith('http')
  const href = isExternal ? reservationUrl : '/reserve'

  return (
    <QuietCTA
      variant={variant}
      href={href}
      external={isExternal}
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
    <div className={`text-sm tracking-wider ${className}`}>
      <p className="text-ink-muted mb-1">ご予約・お問い合わせ</p>
      <p>
        <a
          href={`tel:${siteConfig.tel.replace(/-/g, '')}`}
          className="link-subtle"
        >
          TEL {siteConfig.tel}
        </a>
      </p>
      {showHours && (
        <p className="text-ink-muted text-xs mt-1">{siteConfig.telHours}</p>
      )}
    </div>
  )
}
