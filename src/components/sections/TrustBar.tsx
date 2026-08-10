import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { trustPoints } from '@/content/site'

export function TrustBar() {
  return (
    <div className="border-b border-line bg-surface">
      <Container className="grid gap-px overflow-hidden py-0 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((point, index) => (
          <Reveal key={point.value} delay={index * 0.06}>
            <div className="border-b border-line/70 px-1 py-8 sm:border-b-0 sm:px-6 lg:px-4">
              <p className="text-xl font-extrabold text-navy">{point.value}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{point.label}</p>
            </div>
          </Reveal>
        ))}
      </Container>
    </div>
  )
}
