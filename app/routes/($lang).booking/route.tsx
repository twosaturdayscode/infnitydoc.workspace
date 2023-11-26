import { Button } from '@src/components'
/** @ts-ignore */
import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import { publicLinks } from '@app/links/public'
import { useLoaderData } from '@remix-run/react'
import { ServiceCard } from '../($lang)._public._index/components/service-card'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import { Footer } from '../($lang)._public/components/footer'
import { type LoaderFunctionArgs, json, redirect } from '@remix-run/cloudflare'

import it from '../../locales/it/booking.json'
import en from '../../locales/en/booking.json'
import { serviceCardsIconMap } from '../($lang)._public._index/content'

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

export default function PrenotaPage() {
  const { t } = useLoaderData<typeof loader>()

  useEffect(() => {
    const calcom = async () => {
      const cal = await getCalApi()
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#04B7AC' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    }

    calcom()
  }, [])

  return (
    <div className="text-primary">
      <header className="h-20 w-full border-b-2 border-border">
        <div className="container flex h-full items-center">
          <publicLinks.home />
        </div>
      </header>
      <div className="flex flex-col gap-20 py-5">
        <div className="container flex flex-col gap-4">
          <div>
            <Button
              variant="link"
              size="lg"
              className="px-0 text-lg decoration-[none]"
              asChild
            >
              <a href="/" className="flex items-center gap-3">
                <ArrowLeft className="h-5 w-5" />
                {t['general']['go_back']}
              </a>
            </Button>
          </div>
          <h1 className="text-2xl font-medium">{t['page']['title']}</h1>
          <p className="text-lg text-secondary">{t['page']['description']}</p>
        </div>

        <div className="container mb-20 flex w-full flex-col gap-16 px-10">
          <div className="flex animate-fade-in flex-col gap-10 opacity-0">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
              {t['services'].map((s, i) => (
                <ServiceCard key={i}>
                  <ServiceCard.Icon>
                    {serviceCardsIconMap[i]()}
                  </ServiceCard.Icon>
                  <ServiceCard.Title>{s['title']}</ServiceCard.Title>
                  <ServiceCard.Price>{s['pricing']}</ServiceCard.Price>
                  <ServiceCard.Description>
                    {s['description']}
                  </ServiceCard.Description>
                  <ServiceCard.Action>
                    <Button data-cal-link="infinitydoc/tele-consulto">{s['cta']}</Button>
                  </ServiceCard.Action>
                </ServiceCard>
              ))}
            </div>

            <div className="flex flex-col gap-4 text-secondary">
              {t['footnote'].map((f, i) => (
                <span key={i} className="">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
