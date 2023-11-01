import type { MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => {
  return [{ title: 'Contattaci | infinitydoc' }]
}

export default function ChiSiamoPage() {
  return (
    <div className="container py-20">
      <div className="flex flex-col gap-10">
        <div className="flex max-w-2xl flex-col gap-5">
          <span className="animate-fade-in text-xl uppercase text-brand opacity-0">
            qui per ascoltarti
          </span>
          <h1 className="animate-fade-rotate-scale-in text-6xl font-extrabold tracking-wide text-brand.secondary opacity-0 delay-200">
            Contattaci
          </h1>
          <p className="animate-fade-rotate-in-lg text-2xl text-secondary opacity-0 delay-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
            dignissim aliquam interdum id tincidunt sed vitae lom elementum
            sapien. In amet sapien.
          </p>
        </div>

        <section className="relative">
          <div className="mx-auto flex flex-wrap py-10 sm:flex-nowrap">
            <div className="relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-10 sm:mr-10 md:w-1/2 lg:w-2/3">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398.622823347059!2d9.209506224148608!3d45.48499786482145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6dcb62ddc15%3A0xc9f0dbb97cdd103b!2sCaiazzo!5e0!3m2!1sen!2sit!4v1698854624071!5m2!1sen!2sit"
                style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
              ></iframe>
              <div className="relative flex flex-wrap rounded bg-white py-6 shadow-md">
                <div className="px-6 lg:w-1/2">
                  <h2 className="font-semibold tracking-widest text-brand.secondary">
                    Indirizzo
                  </h2>
                  <p className="mt-1 flex flex-col gap-2">
                    Piazzale Caiazzo, 2 Milano, 20124, Italia Vicino a fermata
                    metro verde M2 Caiazzo
                    <a
                      href="https://maps.app.goo.gl/bbAJ6GcJN4pi2N246"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand.secondary underline"
                    >
                      Vedi su Google Maps
                    </a>
                  </p>
                </div>
                <div className="mt-4 px-6 lg:mt-0 lg:w-1/2">
                  <h2 className="font-semibold tracking-widest text-brand.secondary">
                    Email
                  </h2>
                  <a
                    href="mailto:info@infinidydoc.it"
                    className="leading-relaxed text-brand"
                  >
                    info@infinidydoc.it
                  </a>
                  <h2 className="mt-4 font-semibold tracking-widest text-brand.secondary">
                    Telefono
                  </h2>
                  <p className="leading-relaxed">338 887 70022</p>
                </div>
              </div>
            </div>
            <form className="mt-8 flex w-full flex-col text-brand.secondary md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3">
              <p className="mb-5 text-lg text-secondary">
                Per favore lasciaci il tuo nome e la tua email e ti risponderemo
                il prima possibile.
              </p>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7">
                  Messaggio o note
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                ></textarea>
              </div>
              <button
                type="submit"
                className="rounded border-0 bg-brand px-6 py-2 text-lg text-white hover:bg-brand/60 focus:outline-none"
              >
                Invia
              </button>
              <p className="mt-3 text-gray-500">Nessun impegno e no spam.</p>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
