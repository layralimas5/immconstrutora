import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Container } from './Container'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string | undefined
  containerClassName?: string | undefined
  labelledBy?: string | undefined
}

export function Section({ id, children, className, containerClassName, labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('py-20 sm:py-28', className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}

type SectionHeadingProps = {
  id?: string | undefined
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center' | undefined
  tone?: 'light' | 'dark' | undefined
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
}: SectionHeadingProps) {
  const isDark = tone === 'dark'

  return (
    <header
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
      )}
    >
      <p
        className={cn(
          'text-xs font-bold tracking-[0.2em] uppercase',
          isDark ? 'text-navy-100' : 'text-brand-red-dark',
        )}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          'mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl',
          isDark ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed sm:text-lg',
            isDark ? 'text-navy-100' : 'text-ink-soft',
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  )
}
