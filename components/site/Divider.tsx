type DividerProps = {
  className?: string
}

export function Divider({ className = '' }: DividerProps) {
  return (
    <div
      className={`w-full h-px ${className}`}
      style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(232, 228, 223, 0.06) 20%, rgba(232, 228, 223, 0.06) 80%, transparent 100%)',
      }}
    />
  )
}
