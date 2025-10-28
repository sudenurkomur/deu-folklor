import type { ReactNode } from "react"

interface SectionProps {
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function Section({ title, subtitle, children, className }: SectionProps) {
  return (
    <section className={className}>
      {(title || subtitle) && (
        <div className="mb-8 text-center">
          {title && <h2 className="mb-2">{title}</h2>}
          {subtitle && (
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  )
}

