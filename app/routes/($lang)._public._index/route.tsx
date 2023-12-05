import {
  redirect,
  type LoaderFunctionArgs,
  type MetaFunction,
  json,
} from '@remix-run/cloudflare'
import { Dialog } from '@src/components'
import { serviceCardsIconMap } from './content'
import {
  CheckCircle,
  PhoneCall,
  WhatsappLogo,
  Chat,
} from '@phosphor-icons/react/dist/ssr'
import { Title } from '@src/_ref/title'
import { ServiceCard } from './components/service-card'
import { WhatsappButton } from './components/whatsapp-button'
import it from '../../locales/it/public.json'
import en from '../../locales/en/public.json'
import { useLoaderData } from '@remix-run/react'
import { Mail } from 'lucide-react'

export const meta: MetaFunction = () => {
  return [
    { title: 'Home | InfinityDoc' },
    {
      name: 'description',
      content: 'Infinitydoc, dove la tua salute viene prima di tutto',
    },
  ]
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { lang } = params

  if (!lang) {
    return redirect('/it')
  }

  switch (lang) {
    case 'en':
      return json({ t: en })

    default:
      return json({ t: it })
  }
}

export default function IndexPage() {
  const { t } = useLoaderData<typeof loader>()

  return (
    <div className="relative overflow-x-hidden pt-20 text-primary">
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
          <div className="flex flex-col gap-6">
            <h1 className="animate-fade-rotate-in-lg text-4xl font-medium opacity-0 delay-200 md:text-5xl lg:text-7xl">
              {t['hero']['title']}
            </h1>
            <p className="animate-fade-rotate-in-lg tracking-wide text-secondary opacity-0 delay-500 lg:text-lg">
              {t['hero']['description']}
            </p>
          </div>
        </div>

        <div className="relative hidden flex-1 rounded-2xl bg-[url(/assets/rect.png)] bg-cover xl:flex xl:items-center">
          <img
            src="/assets/doctor-watch.png"
            alt=""
            className="absolute -left-7 w-[340px] animate-fade-rotate-in-lg rounded-[32px] opacity-0 shadow-md"
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

          <div className="absolute -right-40 flex animate-fade-rotate-in-lg flex-col gap-7 opacity-0">
            <img
              src="/assets/tools.png"
              alt=""
              className="w-80 rounded-[32px] shadow-md"
            />
            <img
              src="/assets/doctor-bg.png"
              alt=""
              className="w-[400px] animate-fade-rotate-in-lg rounded-[32px] opacity-0 shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7 py-20">
        <div className="container flex flex-col gap-4">
          <span
            id="services"
            className="animate-fade-rotate-in-lg text-base font-medium uppercase text-brand opacity-0 md:text-lg"
          >
            {t['services']['intro']}
          </span>
          <Title as="h2" of="section">
            {t['services']['title']}
          </Title>
          <p className="text-lg text-secondary">
            {t['services']['description']}
          </p>
        </div>

        <div className="container grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {t['services']['content']['list'].map((c, i) => (
            <ServiceCard key={i}>
              <ServiceCard.Icon>{serviceCardsIconMap[i]()}</ServiceCard.Icon>
              <ServiceCard.Title>{c['title']}</ServiceCard.Title>
              <ServiceCard.Price>{c['price']}</ServiceCard.Price>
              <ServiceCard.Description>
                {c['description']}
              </ServiceCard.Description>
              <ServiceCard.Action>
                <Dialog>
                  <Dialog.Trigger asChild>
                    <button className="group order-1 block whitespace-nowrap rounded-lg border-brand bg-brand px-6 py-3 text-center font-medium capitalize leading-5 text-white ring-brand-light transition-opacity hover:bg-opacity-75 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:hover:bg-opacity-100 lg:order-2 2xl:leading-5">
                      {c['cta']}
                    </button>
                  </Dialog.Trigger>
                  <Dialog.Content>
                    <div className="flex flex-col gap-5 py-8">
                      <div className="flex w-full flex-col gap-4 px-6">
                        <h1 className="text-3xl font-medium text-brand">
                          {c['title']}
                        </h1>
                        <span className="text-2xl font-medium text-secondary">
                          {c['price']}
                        </span>
                      </div>
                      <div className="flex flex-col gap-4 px-8">
                        <p>{c['description']} </p>
                        <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                          <a
                            href={`https://wa.me/393888770022?text=Salve%21%20Sono%20interessato%20a%20prenotare%20una%20${encodeURI(
                              c['title'].toUpperCase(),
                            )}%2C%20preferibilmente%20%28specifica%20quando%29.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-1 items-center gap-3 whitespace-nowrap rounded-lg border-brand bg-brand px-6 py-3 text-center font-medium capitalize leading-5 text-white ring-brand-light transition-opacity hover:bg-opacity-75 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:hover:bg-opacity-100 lg:order-2 2xl:leading-5"
                          >
                            <WhatsappLogo className="h-6 w-6" />
                            Whatsapp
                          </a>
                          <a
                            href={`mailto:info@infinitydoc.it?subject=Prenotazione%20${encodeURI(
                              c['title'].toUpperCase(),
                            )}&body=Salve%21%20Sono%20interessato%20a%20prenotare%20una%20${encodeURI(
                              c['title'].toUpperCase(),
                            )}%2C%20preferibilmente%20%28specifica%20quando%29.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-1 items-center gap-3 whitespace-nowrap rounded-lg border-brand bg-brand px-6 py-3 text-center font-medium capitalize leading-5 text-white ring-brand-light transition-opacity hover:bg-opacity-75 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:hover:bg-opacity-100 lg:order-2 2xl:leading-5"
                          >
                            <Mail className="h-6 w-6" />
                            Email
                          </a>
                          <a
                            href="sms:+393888770022"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-1 items-center gap-3 whitespace-nowrap rounded-lg border-brand bg-brand px-6 py-3 text-center font-medium capitalize leading-5 text-white ring-brand-light transition-opacity hover:bg-opacity-75 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:hover:bg-opacity-100 lg:order-2 2xl:leading-5"
                          >
                            <Chat className="h-6 w-6" />
                            SMS
                          </a>
                          <a
                            href="tel:+393888770022"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-1 items-center gap-3 whitespace-nowrap rounded-lg border-brand bg-brand px-6 py-3 text-center font-medium capitalize leading-5 text-white ring-brand-light transition-opacity hover:bg-opacity-75 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:hover:bg-opacity-100 lg:order-2 2xl:leading-5"
                          >
                            <PhoneCall className="h-6 w-6" />
                            Telefono
                          </a>
                        </div>
                      </div>
                    </div>
                  </Dialog.Content>
                </Dialog>
              </ServiceCard.Action>
            </ServiceCard>
          ))}
        </div>
      </div>

      <section className="relative flex flex-col gap-14 py-20">
        <img
          src="/assets/blob.svg"
          alt="blob"
          className="absolute right-48 top-0 will-change-transform"
        />

        <div className="container flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-lg font-medium uppercase text-brand">
              {t['cures']['intro']}
            </span>
            <Title of="section">{t['cures']['title']}</Title>
            <p className="text-lg text-secondary">
              {t['cures']['description']}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {t['cures']['content']['list'].map((r, i) => (
              <div key={i} className="flex flex-1 items-center gap-4">
                <CheckCircle className="h-10 w-10 text-brand" />
                <span className="flex-1 text-lg">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand/10 py-20">
        <div className="container flex flex-col items-center justify-between gap-10 md:flex-row-reverse md:gap-20">
          <div className="flex flex-col gap-4">
            <span className="text-lg font-medium uppercase text-brand">
              {t['mission']['intro']}
            </span>
            <Title of="section">{t['mission']['title']}</Title>
            <p className="text-lg text-secondary">
              {t['mission']['description']}
            </p>
          </div>

          <div className="w-full max-w-xl">
            <img
              src="/assets/happy-woman.png"
              alt=""
              className="-rotate-6 rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="container" id="where-we-are">
        <div className="flex flex-col items-center justify-center gap-10 py-8 lg:py-20">
          <div className="flex max-w-3xl flex-col justify-center gap-5 text-center">
            <span className="animate-fade-in text-lg font-medium uppercase text-brand opacity-0">
              {t['contacts']['intro']}
            </span>
            <Title of="section">{t['contacts']['title']}</Title>
            <p className="animate-fade-rotate-in-lg text-lg text-secondary opacity-0 delay-500">
              {t['contacts']['description']}
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-lg bg-gray-300 p-8 lg:w-2/3">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398.622823347059!2d9.209506224148608!3d45.48499786482145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6dcb62ddc15%3A0xc9f0dbb97cdd103b!2sCaiazzo!5e0!3m2!1sen!2sit!4v1698854624071!5m2!1sen!2sit"
              style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
            />
            <div className="relative flex flex-1 flex-wrap rounded bg-white py-6 shadow-md">
              <div className="px-6 lg:w-1/2">
                <h2 className="font-semibold tracking-widest text-brand">
                  Indirizzo
                </h2>
                <p className="mt-1 flex flex-col gap-2">
                  Piazzale Caiazzo, 2 Milano, 20124, Italia Vicino a fermata
                  metro verde M2 Caiazzo
                  <a
                    href="https://maps.app.goo.gl/bbAJ6GcJN4pi2N246"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand underline"
                  >
                    Vedi su Google Maps
                  </a>
                </p>
              </div>
              <div className="mt-4 px-6 lg:mt-0 lg:w-1/2">
                <h2 className="font-semibold tracking-widest text-brand">
                  Email
                </h2>
                <a
                  href="mailto:info@infinidydoc.it"
                  className="leading-relaxed text-brand"
                >
                  info@infinidydoc.it
                </a>
                <h2 className="mt-4 font-semibold tracking-widest text-brand">
                  Telefono
                </h2>
                <p className="leading-relaxed">388 877 0022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsappButton />
    </div>
  )
}
