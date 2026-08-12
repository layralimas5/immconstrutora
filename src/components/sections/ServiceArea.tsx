import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { PinIcon } from '@/components/ui/icons'
import { company } from '@/content/site'

export function ServiceArea() {
  return (
    <div className="border-y border-line bg-surface py-14">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                <PinIcon className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-lg font-extrabold text-ink">Onde a IMM atende</h2>
                <p className="mt-1 text-[15px] text-ink-soft">
                  Grande Vitória, com foco em Vila Velha e Vitória.
                </p>
              </div>
            </div>

            <ul className="flex flex-wrap justify-center gap-2">
              {company.areas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-navy-100 bg-white px-4 py-2 text-sm font-semibold text-navy transition-colors duration-300 hover:animate-pulse-soft hover:border-navy hover:bg-navy-50 motion-reduce:hover:animate-none"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
