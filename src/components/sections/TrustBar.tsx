import { trustPoints } from '@/content/site'

/**
 * Quantas voltas da lista entram em cada metade do trilho. A animação desloca
 * o trilho em -50%, então cada metade precisa ser mais larga que a tela para a
 * faixa nunca abrir um vão vazio, inclusive em monitor ultrawide.
 */
const REPEATS_PER_HALF = 3

const halfItems = Array.from({ length: REPEATS_PER_HALF }, (_, repeat) =>
  trustPoints.map((point) => ({ ...point, key: `${repeat}-${point.value}` })),
).flat()

function TrustHalf({ duplicate = false }: { readonly duplicate?: boolean }) {
  return (
    <ul aria-hidden={duplicate || undefined} className="flex shrink-0 items-center">
      {halfItems.map((point) => (
        <li
          key={point.key}
          className="flex shrink-0 items-center gap-3 pr-10 whitespace-nowrap sm:pr-14"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="text-sm font-extrabold text-white">{point.value}</span>
          <span className="text-sm text-navy-100">{point.label}</span>
        </li>
      ))}
    </ul>
  )
}

export function TrustBar() {
  return (
    <div className="group border-y border-navy-deep bg-navy">
      <div className="relative flex h-12 items-center overflow-hidden">
        <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <TrustHalf />
          <TrustHalf duplicate />
        </div>
      </div>
    </div>
  )
}
