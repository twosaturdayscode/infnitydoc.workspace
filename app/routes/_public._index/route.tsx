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
    <main className="text-primary">
      <div className="container bg-white flex flex-col-reverse lg:flex-row lg:py-20">
        <div className="py-14 flex flex-col gap-3 lg:max-w-2xl">
          <div className="flex gap-1 items-center">
            <div className="w-6 h-1 bg-brand" />
            <span className="text-sm text-brand uppercase">
              clinica infinity doc
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-brand.secondary">
              La tua salute viene prima di tutto
            </h1>
            <p className="text-secondary lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              mauris nulla tincidunt fermentum. Sagittis pellentesque.
            </p>
          </div>
          <div className="flex">
            <Button size="lg" className="mt-4 w-full lg:w-auto">
              Prenota una visita
            </Button>
          </div>
        </div>

        <div className="flex-1">
          <img
            src="/assets/doctor-remote.svg"
            alt="Illustrazioni di due medici e un'infermiera"
            className="max-h-[400px] mx-auto"
          />
        </div>
      </div>

      <section className="flex flex-col gap-10 px-10 lg:px-28">
        <div className="flex flex-col gap-4 container">
          <span className="text-brand font-medium uppercase text-base md:text-xl">
            I nostri servizi
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-brand.secondary">
            La tua salute a 360 gradi
          </h2>
        </div>

        <div className="flex justify-between gap-10 flex-col md:flex-row flex-wrap">
          {cards.map((card, index) => (
            <SimpleCard key={index} {...card} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button size="lg" className="mt-4 w-full lg:w-auto">
            Scopri di più
          </Button>
        </div>
      </section>

      <section className="py-40 flex flex-col gap-14">
        <div className="container flex flex-col lg:flex-row gap-10 justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-brand font-medium uppercase text-2xl">
              I nostri punti forti
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand.secondary">
              Tante funzionalità per la tua salute
            </h2>
            <p className="text-brand.secondary/70 max-w-3xl text-lg md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
              dignissim aliquam interdum id tincidunt sed vitae lom elementum
              sapien. In amet sapien.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {reasons.map((r, i) => (
              <div key={i} className="flex flex-1 gap-4 items-center">
                <CheckCircle2Icon className="text-brand w-10 h-10" />
                <span className="text-brand.secondary text-xl flex-1">{r}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center px-5">
          <img src="/assets/doctore-remote-f.svg" alt="" />
        </div>
      </section>

      <section className="py-16 bg-brand.secondary/10">
        <div className="container flex flex-col md:flex-row-reverse justify-between items-center gap-10 md:gap-20">
          <div className="flex flex-col gap-4">
            <span className="text-brand font-medium uppercase text-2xl">
              La nostra missione
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand.secondary">
              Rendere l'assistenza medica più accessibile e conveniente
            </h2>
            <p className="text-brand.secondary/70 max-w-3xl text-xl  md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
              dignissim aliquam interdum id tincidunt sed vitae lom elementum
              sapien. In amet sapien.
            </p>
          </div>

          <div>
            <img src="/assets/doctors.svg" alt="" />
          </div>
        </div>
      </section>
    </main>
  )
}
