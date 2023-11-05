import { Button } from '@src/components'
import { DisplayInterval } from './components/display-interval'
import { PlanCard } from './components/plan-card'
import { plans } from './data'
import type { MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => {
  return [{ title: 'Servizi | infinitydoc' }]
}

export default function ServiziPage() {
  return (
    <div className="pt-20 text-primary">
      <div className="flex flex-col gap-10 py-10">
        <div className=" container flex w-full flex-col gap-5 py-16">
          <div className="flex flex-col gap-3">
            <h2 className="text-5xl text-brand">
              <b>La tua salute</b> in una formula innovativa
            </h2>
            <p className="text-2xl text-secondary">
              Con InfinityDoc hai un medico 24 ore su 24, 7 giorni su 7,
              programmi consulti specialistici e tieni sott'occhio la tua storia
              medica.
            </p>
          </div>

          <DisplayInterval />
        </div>

        <div className="py-8 lg:py-12">
          <div className="flex flex-col gap-10">
            <div className="mx-auto flex max-w-2xl flex-col justify-center gap-5 text-center">
              <span className="animate-fade-in text-lg uppercase text-brand opacity-0">
                i nostri piani
              </span>
              <h1 className="animate-fade-rotate-scale-in text-3xl font-extrabold tracking-wide text-brand opacity-0 delay-200 lg:text-6xl">
                Siamo sicuri che farà al caso tuo
              </h1>
              <p className="animate-fade-rotate-in-lg text-lg text-secondary opacity-0 delay-500 lg:text-2xl">
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

        <div className="container flex flex-col gap-5 py-10">
          <div className='py-7'>
            <h2 className="text-5xl font-medium text-brand">
              Hai bisogno di un consulto rapido?
            </h2>
          </div>

          <div className="flex justify-between items-center">
            <article className="flex flex-col gap-8 rounded-xl p-8 text-brand shadow-xl">
              <span className="text-3xl">
                InfinityDoc <b>Singola visita</b>
              </span>

              <span className="text-6xl text-primary">€59,90</span>

              <p className="text-secondary">
                <b>Una</b> televisita con un medico generico
              </p>

              <Button size="lg" asChild>
                <a href="/contattaci" className="text-lg font-medium">
                  Contattaci
                </a>
              </Button>
            </article>

            <div>
              <img src="/assets/doctor-discussing.jpg" alt="" className='w-96 rounded' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
