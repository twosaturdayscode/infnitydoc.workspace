import type { MetaFunction } from '@remix-run/cloudflare'
import { Button } from '@src/components'
import { cards, reasons } from './content'
import { SimpleCard } from './components/simple-card'
import { CheckCircle2Icon } from 'lucide-react'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <main className="relative overflow-x-hidden text-primary">
      <img
        src="/assets/blob.svg"
        alt="blob"
        className="absolute -left-48 will-change-transform"
      />
      <img
        src="/assets/blob.svg"
        alt="blob"
        className="absolute -right-48 top-44 will-change-transform"
      />
      <div className="container flex flex-col-reverse bg-white lg:flex-row lg:py-20">
        <div className="flex flex-col gap-3 py-14 lg:max-w-2xl">
          <div className="flex animate-fade-rotate-in items-center gap-1 opacity-0">
            <div className="h-1 w-6 bg-brand" />
            <span className="text-sm uppercase text-brand">
              clinica infinity doc
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="animate-fade-rotate-in-lg text-3xl font-black text-brand.secondary opacity-0 delay-200 md:text-5xl lg:text-7xl">
              La tua salute viene prima di tutto
            </h1>
            <p className="animate-fade-rotate-in-lg text-secondary opacity-0 delay-500 lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              mauris nulla tincidunt fermentum. Sagittis pellentesque.
            </p>
          </div>
          <div className="flex animate-fade-rotate-in-lg">
            <Button size="lg" className="mt-4 w-full lg:w-auto">
              Prenota una visita
            </Button>
          </div>
        </div>

        <div className="flex-1">
          <img
            src="/assets/doctor-remote.svg"
            alt="Illustrazione medico che esce dal pc"
            className="mx-auto max-h-[500px] animate-fade-rotate-in-lg opacity-0 delay-1000"
          />
        </div>
      </div>

      <section className="relative flex flex-col gap-10 px-10 lg:px-28">
        <div className="container flex flex-col gap-4">
          <span className="animate-fade-rotate-in-lg text-base font-medium uppercase text-brand opacity-0 md:text-xl">
            I nostri servizi
          </span>
          <h2 className="animate-fade-rotate-in-lg text-3xl font-bold text-brand.secondary opacity-0 delay-500 lg:text-5xl">
            La tua salute a 360 gradi
          </h2>
          <p className="text-xl text-secondary">
            Con Infinitydoc hai un medico 24 ore su 24, anche di notte e nei
            weekend, puoi programmare consulti specialistici e tenere sotto
            controllo i tuoi parametri vitali. Avrai sempre con te la tua storia
            medica e i tuoi dati da app e da pc.
          </p>
        </div>

        <div className="grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <SimpleCard key={index} {...card} />
          ))}
        </div>

        {/* <div className="flex justify-center">
          <Button size="lg" className="mt-4 w-full lg:w-auto" asChild>
            <a href="/servizi">Scopri di più</a>
          </Button>
        </div> */}
      </section>

      <section className="relative flex flex-col gap-14 py-40">
        <img
          src="/assets/blob.svg"
          alt="blob"
          className="absolute right-48 top-0 will-change-transform"
        />
        <div className="flex justify-center px-5">
          <img
            src="/assets/doctore-remote-f.svg"
            alt=""
            className="lg:max-w-4xl"
          />
        </div>

        <div className="container flex flex-col justify-between gap-10 lg:flex-row">
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-medium uppercase text-brand">
              I nostri punti forti
            </span>
            <h2 className="text-3xl font-bold text-brand.secondary md:text-5xl">
              Tante funzionalità per la tua salute
            </h2>
            <p className="max-w-3xl text-lg text-brand.secondary/70 md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
              dignissim aliquam interdum id tincidunt sed vitae lom elementum
              sapien. In amet sapien.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {reasons.map((r, i) => (
              <div key={i} className="flex flex-1 items-center gap-4">
                <CheckCircle2Icon className="h-10 w-10 text-brand.secondary" />
                <span className="flex-1 text-xl text-brand.secondary">{r}</span>
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
            <h2 className="text-3xl font-bold text-brand.secondary md:text-5xl">
              Rendere l'assistenza medica più accessibile e conveniente
            </h2>
            <p className="max-w-3xl text-xl text-brand.secondary/70  md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
              dignissim aliquam interdum id tincidunt sed vitae lom elementum
              sapien. In amet sapien.
            </p>
          </div>

          <div className="w-full max-w-2xl">
            <img src="/assets/doctors.svg" alt="" />
          </div>
        </div>
      </section>
    </main>
  )
}
