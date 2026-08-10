import { useEffect, useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'
import { CloseIcon, MenuIcon, WhatsAppIcon } from '@/components/ui/icons'
import { company, navLinks } from '@/content/site'
import { whatsappLink } from '@/lib/whatsapp'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/cn'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(16)
  const reduceMotion = useReducedMotion()
  const menuId = useId()

  /** No topo o header flutua sobre o hero escuro, então o texto precisa ser claro. */
  const solid = scrolled || menuOpen

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid ? 'border-b border-line bg-white/92 backdrop-blur-md' : 'border-b border-transparent',
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-4">
        <a
          href="#inicio"
          className="flex items-center gap-3"
          aria-label={`${company.name}, ir para o início`}
        >
          <img
            src="/img/logo.png"
            alt=""
            width={48}
            height={48}
            className="h-11 w-11 rounded-xl bg-white object-contain p-0.5 sm:h-12 sm:w-12"
          />
          <span className="text-left leading-tight">
            <span
              className={cn(
                'block text-sm font-extrabold tracking-tight transition-colors',
                solid ? 'text-navy' : 'text-white',
              )}
            >
              IMM Construtora
            </span>
            <span
              className={cn(
                'block text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors',
                solid ? 'text-ink-mute' : 'text-navy-100',
              )}
            >
              Reformas e Pinturas
            </span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                    solid
                      ? 'text-ink-soft hover:bg-surface hover:text-navy'
                      : 'text-white hover:bg-white/12',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <LinkButton href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" />
              Pedir orçamento
            </LinkButton>
          </span>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            className={cn(
              'inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden',
              solid
                ? 'border-line bg-white text-navy hover:border-navy'
                : 'border-white/30 bg-white/10 text-white hover:bg-white/20',
            )}
          >
            {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id={menuId}
            key="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-line bg-white lg:hidden"
          >
            <Container className="py-4">
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block border-b border-line/70 py-4 text-base font-semibold text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <LinkButton
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="mt-5 w-full"
                onClick={() => setMenuOpen(false)}
              >
                <WhatsAppIcon className="h-5 w-5" />
                Pedir orçamento no WhatsApp
              </LinkButton>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
