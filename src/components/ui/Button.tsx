import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full text-center font-bold whitespace-nowrap transition-[background-color,color,box-shadow,transform] duration-200 disabled:cursor-not-allowed disabled:opacity-60 active:translate-y-px'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-red text-white shadow-[0_10px_28px_-8px_rgba(225,29,42,0.6)] hover:bg-brand-red-dark',
  secondary: 'bg-navy text-white hover:bg-navy-deep',
  ghost: 'border border-line bg-white text-ink hover:border-navy hover:text-navy',
  onDark: 'border border-white/25 bg-white/5 text-white hover:bg-white hover:text-navy',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-14 px-7 text-base',
}

type SharedProps = {
  variant?: Variant | undefined
  size?: Size | undefined
  className?: string | undefined
  children: ReactNode
}

type LinkButtonProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement>

export function LinkButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  )
}

type ActionButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>

export function ActionButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  type = 'button',
  ...props
}: ActionButtonProps) {
  return (
    <button type={type} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
