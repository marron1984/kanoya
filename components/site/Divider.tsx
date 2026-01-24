type DividerProps = {
  className?: string
}

export function Divider({ className = '' }: DividerProps) {
  return (
    <div className={`w-full h-px bg-line-subtle ${className}`} />
  )
}
