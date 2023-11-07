import type { MetaFunction } from '@remix-run/cloudflare'
import { Button } from '@src/components'
import { cards, plans, treatments } from './content'
import { SimpleCard } from './components/simple-card'
import { ArrowRightIcon, CheckCircle2Icon } from 'lucide-react'

export const meta: MetaFunction = () => {
  return [
    { title: 'Home | InfinityDoc' },
    {
      name: 'description',
      content: 'Infinitydoc, dove la tua salute viene prima di tutto',
    },
  ]
}

export default function IndexPage() {
  return (
    <main className="relative overflow-x-hidden pt-20 text-primary">
      <img
        src="/assets/blob.svg"
        alt="blob"
        className="absolute -left-48 will-change-transform"
      />
      <img
        src="/assets/blob.svg"
        alt="blob"
        className="absolute -bottom-0 -right-48 -z-10 will-change-transform"
      />
      <div className="container flex flex-col-reverse gap-20 lg:flex-row lg:justify-between lg:py-20">
        <div className="flex flex-col gap-3 py-14 lg:max-w-2xl">
          <div className="flex animate-fade-rotate-in items-center gap-1 opacity-0">
            <div className="h-1 w-6 bg-brand" />
            <span className="uppercase text-brand">
              infinity doc studio medico
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="animate-fade-rotate-in-lg text-4xl font-black opacity-0 delay-200 md:text-5xl lg:text-7xl">
              La tua salute viene prima di tutto
            </h1>
            <p className="animate-fade-rotate-in-lg text-secondary opacity-0 delay-500 lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              mauris nulla tincidunt fermentum. Sagittis pellentesque.
            </p>
          </div>
          <div className="flex animate-fade-rotate-in-lg">
            <Button size="lg" className="mt-4 w-full lg:w-auto" asChild>
              <a href="/chi-siamo">Scopri di più</a>
            </Button>
          </div>
        </div>

        <div className="relative hidden flex-1 bg-[url(/assets/rect.png)] bg-cover xl:flex xl:items-center">
          <img
            src="/assets/doctor-watch.png"
            alt=""
            className="absolute -left-7 w-[340px] rounded-[32px] shadow-md"
          />

          <img
            src="/assets/dots.svg"
            alt=""
            className="absolute -top-5 left-52 -z-10 w-40 opacity-40"
          />
          <img
            src="/assets/dots.svg"
            alt=""
            className="absolute -bottom-10 left-20 -z-10 w-40 opacity-40"
          />

          <div className="absolute -right-40 flex flex-col gap-7">
            <img
              src="/assets/tools.png"
              alt=""
              className="w-80 rounded-[32px] shadow-md"
            />
            <img
              src="/assets/doctor-bg.png"
              alt=""
              className="w-[400px] rounded-[32px] shadow-md"
            />
          </div>
        </div>
      </div>

      <section className="relative flex flex-col gap-10 lg:px-28">
        <div className="container flex flex-col gap-4">
          <span
            id="come-funziona"
            className="animate-fade-rotate-in-lg text-base font-medium uppercase text-brand opacity-0 md:text-xl"
          >
            Di cosa si tratta?
          </span>
          <h2 className="animate-fade-rotate-in-lg py-5 text-3xl font-bold opacity-0 delay-500 lg:text-5xl">
            Ecco come funziona InfinityDoc
          </h2>
          <p className="text-xl text-secondary">
            Con InfinityDoc hai un medico 24 ore su 24, anche di notte e nei
            weekend, puoi programmare consulti specialistici e tenere sotto
            controllo i tuoi parametri vitali. Avrai sempre con te la tua storia
            medica e i tuoi dati da app e da pc.
          </p>
        </div>

        <div className="container flex flex-col gap-8 px-20">
          <div className="flex items-center justify-between">
            <div className="flex max-w-lg flex-col gap-3">
              <span className="text-lg font-medium uppercase text-brand">
                step 1
              </span>
              <h2 className="text-3xl font-semibold">
                Seleziona un piano di abbonamento
              </h2>
              <p className="text-xl text-secondary">
                We'll need you to fill out a quick intake form to let us know
                your needs. This will only take a few minutes. No sign-up
                required.
              </p>
            </div>
            <img src="/assets/headache.png" alt="" className="w-[420px]" />
          </div>

          <div className="flex flex-row-reverse items-center justify-between">
            <div className="flex max-w-lg flex-col gap-3">
              <span className="text-lg font-medium uppercase text-brand">
                step 2
              </span>
              <h2 className="text-3xl font-semibold">
                Seleziona un piano di abbonamento
              </h2>
              <p className="text-xl text-secondary">
                We'll need you to fill out a quick intake form to let us know
                your needs. This will only take a few minutes. No sign-up
                required.
              </p>
            </div>
            <img src="/assets/headache.png" alt="" className="w-[420px]" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex max-w-lg flex-col gap-3">
              <span className="text-lg font-medium uppercase text-brand">
                step 3
              </span>
              <h2 className="text-3xl font-semibold">
                Seleziona un piano di abbonamento
              </h2>
              <p className="text-xl text-secondary">
                We'll need you to fill out a quick intake form to let us know
                your needs. This will only take a few minutes. No sign-up
                required.
              </p>
            </div>
            <img src="/assets/headache.png" alt="" className="w-[420px]" />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="container flex flex-col gap-4">
            <span className="animate-fade-rotate-in-lg text-base font-medium uppercase text-brand opacity-0 md:text-xl">
              I nostri piani
            </span>
            <h2 className="animate-fade-rotate-in-lg text-3xl font-bold opacity-0 delay-500 lg:text-5xl">
              Scegli il piano che fa per te
            </h2>
            <p className="text-xl text-secondary">
              Con InfinityDoc hai un medico 24 ore su 24, anche di notte e nei
              weekend, puoi programmare consulti specialistici e tenere sotto
              controllo i tuoi parametri vitali. Avrai sempre con te la tua
              storia medica e i tuoi dati da app e da pc.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex justify-center gap-10">
              {plans.map(p => (
                <div
                  key={p.title}
                  className="flex max-w-md flex-1 flex-col justify-between gap-8 rounded bg-stone-50 px-7 py-8"
                >
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-3">
                      <span className="text-xl text-secondary">
                        {p.description}
                      </span>
                      <h1 className="text-4xl font-semibold">{p.title}</h1>
                      <p className="flex items-center gap-2 text-4xl">
                        <b>{p.price}</b>
                        <span className="text-xl text-secondary">/mese</span>
                      </p>
                    </div>
                    <div className="flex">
                      <Button
                        size="lg"
                        className="flex w-full items-center justify-between text-2xl"
                      >
                        Acquista
                        <ArrowRightIcon className="ml-2 h-6 w-6" />
                      </Button>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                      {p.features.map(f => (
                        <div key={f} className="flex flex-1 items-center gap-3">
                          <CheckCircle2Icon className="h-7 w-7 text-brand" />
                          <span className="flex-1 text-xl">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <footer className="flex justify-end self-end">
                    <a href="/" className="underline">
                      <span className="text-xl text-secondary">
                        Vedi dettagli
                      </span>
                    </a>
                  </footer>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-7 py-10">
            <div className="container flex flex-col gap-4">
              <span
                id="servizi"
                className="animate-fade-rotate-in-lg text-base font-medium uppercase text-brand opacity-0 md:text-xl"
              >
                I nostri servizi
              </span>
              <h2 className="animate-fade-rotate-in-lg py-5 text-3xl font-bold opacity-0 delay-500 lg:text-5xl">
                I nostri servizi pensati per te
              </h2>
              <p className="text-xl text-secondary">
                Con InfinityDoc hai un medico 24 ore su 24, anche di notte e nei
                weekend, puoi programmare consulti specialistici e tenere sotto
                controllo i tuoi parametri vitali. Avrai sempre con te la tua
                storia medica e i tuoi dati da app e da pc.
              </p>
            </div>

            <div className="flex justify-between gap-16">
              <article className="flex flex-1 flex-col justify-between rounded bg-stone-50 p-8">
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl font-medium">
                    Teleconsulenza/Videconsulenza
                  </h1>
                  <p className="text-2xl text-secondary">
                    Per consulenze mediche immediate e comode
                  </p>
                  <span className="text-5xl font-semibold">€20</span>
                  <p>
                    Una volta effettuato l'acquisto ti manderemo un link o un
                    numero telefonico per la consulenza
                  </p>
                </div>
                <div className="flex justify-end">
                  <Button
                    size="lg"
                    className="flex items-center justify-between text-2xl"
                    asChild
                  >
                    <a href="/prenota">
                      Prenota
                      <ArrowRightIcon className="ml-2 h-6 w-6" />
                    </a>
                  </Button>
                </div>
              </article>
              <article className="flex flex-1 flex-col justify-between gap-7 rounded bg-stone-50 p-8">
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl font-medium">
                    Consulenza in ambulatorio
                  </h1>
                  <p className="text-2xl text-secondary">
                    Per consulenze mediche immediate e comode
                  </p>
                  <span className="text-5xl font-semibold">€20</span>
                  <p>
                    Una volta effettuato l'acquisto ti manderemo un link o un
                    numero telefonico per la consulenza
                  </p>
                </div>
                <div className="flex justify-end">
                  <Button
                    size="lg"
                    className="flex items-center justify-between text-2xl"
                    asChild
                  >
                    <a href="/prenota">
                      Prenota
                      <ArrowRightIcon className="ml-2 h-6 w-6" />
                    </a>
                  </Button>
                </div>
              </article>
              <article className="flex flex-1 flex-col justify-between rounded bg-stone-50 p-8">
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl font-medium">
                    Consulenza a domicilio
                  </h1>
                  <p className="text-2xl text-secondary">
                    Consulenza medica a domicilio
                  </p>
                  <div className="flex items-center gap-3">
                    <span>A partire da</span>
                    <span className="text-5xl font-semibold">€60</span>
                  </div>
                  <p>
                    Una volta prenotato il servizio ed organizzato la visita, il
                    medico si recherà presso il tuo domicilio per la visita.
                  </p>
                </div>
                <div className="flex flex-col gap-0">
                  <p className="text-sm">Solo per la città di Milano.</p>
                  <div className="flex justify-end">
                    <Button
                      size="lg"
                      className="flex items-center justify-between text-2xl"
                      asChild
                    >
                      <a href="/prenota">
                        Prenota
                        <ArrowRightIcon className="ml-2 h-6 w-6" />
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-10">
          <div className="container flex flex-col gap-4">
            <span className="animate-fade-rotate-in-lg text-base font-medium uppercase text-brand opacity-0 md:text-xl">
              Perchè scegliere noi?
            </span>
            <h2 className="animate-fade-rotate-in-lg text-3xl font-bold opacity-0 delay-500 lg:text-5xl">
              Siamo sicuri che farà al caso tuo
            </h2>
            <p className="text-xl text-secondary">
              Con InfinityDoc hai un medico 24 ore su 24, anche di notte e nei
              weekend, puoi programmare consulti specialistici e tenere sotto
              controllo i tuoi parametri vitali. Avrai sempre con te la tua
              storia medica e i tuoi dati da app e da pc.
            </p>
          </div>

          <div className="grid grid-flow-row grid-cols-1 gap-10 px-10 md:grid-cols-2 2xl:grid-cols-4">
            {cards.map((card, index) => (
              <SimpleCard key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex flex-col gap-14 py-40">
        <img
          src="/assets/blob.svg"
          alt="blob"
          className="absolute right-48 top-0 will-change-transform"
        />

        <div className="container flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-medium uppercase">
              I nostri punti forti
            </span>
            <h2 className="text-3xl font-bold md:text-5xl">
              Tante funzionalità per la tua salute
            </h2>
            <p className="max-w-3xl text-xl text-secondary md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
              dignissim aliquam interdum id tincidunt sed vitae lom elementum
              sapien. In amet sapien.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {treatments.map((r, i) => (
              <div key={i} className="flex flex-1 items-center gap-4">
                <CheckCircle2Icon className="h-10 w-10 text-brand" />
                <span className="flex-1 text-2xl">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand.secondary/10 py-16">
        <div className="container flex flex-col items-center justify-between gap-10 md:flex-row-reverse md:gap-20">
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-medium uppercase text-brand">
              La nostra missione
            </span>
            <h2 className="text-3xl font-bold md:text-5xl">
              Rendere l'assistenza medica più accessibile e conveniente
            </h2>
            <p className="max-w-3xl text-xl text-secondary  md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
              dignissim aliquam interdum id tincidunt sed vitae lom elementum
              sapien. In amet sapien.
            </p>
          </div>

          <div className="w-full max-w-xl">
            <img src="/assets/happy-woman.png" alt="" className="shadow" />
          </div>
        </div>
      </section>
    </main>
  )
}
