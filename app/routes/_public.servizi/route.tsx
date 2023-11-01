import { PlanCard } from './components/plan-card'
import { plans } from './data'
import type { MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => {
  return [{ title: 'Servizi | infinitydoc' }]
}

export default function ServiziPage() {
  return (
    <div className="py-8 lg:py-20">
      <div className="flex flex-col gap-10">
        <div className="mx-auto flex max-w-2xl flex-col justify-center gap-5 text-center">
          <span className="animate-fade-in text-lg uppercase text-brand opacity-0">
            i nostri piani
          </span>
          <h1 className="animate-fade-rotate-scale-in text-3xl lg:text-6xl font-extrabold tracking-wide text-brand.secondary opacity-0 delay-200">
            Piani intelligenti e convenienti per tutti
          </h1>
          <p className="animate-fade-rotate-in-lg text-lg lg:text-2xl text-secondary opacity-0 delay-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
            dignissim aliquam interdu.
          </p>
        </div>
        <div>
          <div className="container mx-auto rounded-2xl border border-muted/20 px-8 py-10 shadow-sm">
            <div className="flex gap-8">
              {plans.map((p, i) => (
                <div key={p.title} className="flex gap-4">
                  <PlanCard {...p} />
                  {i !== plans.length - 1 && (
                    <div className="w-1 bg-muted/20" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
