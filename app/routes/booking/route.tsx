import { Button } from '@src/components'
/** @ts-ignore */
import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import { publicLinks } from '@app/links/public'
import { useNavigate } from '@remix-run/react'
import { ServiceCard } from '../($lang)._public._index/components/service-card'
import {
  ArrowLeft,
  Buildings,
  HouseLine,
  Microphone,
  VideoCamera,
} from '@phosphor-icons/react/dist/ssr'
import { Footer } from '../($lang)._public/components/footer'
import { Faq } from '../($lang)._public._index/components/faq'

export default function PrenotaPage() {
  const nav = useNavigate()
  useEffect(() => {
    const calcom = async () => {
      const cal = await getCalApi()
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#04B7AC' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })

      cal('on', {
        action: 'bookingSuccessful',
        callback: () => {
          return nav('/booking/success')
        },
      })
    }

    calcom()
  }, [nav])

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
                Torna al sito
              </a>
            </Button>
          </div>
          <h1 className="text-2xl font-medium">Prenotazione online</h1>
          <p className="text-lg text-secondary">
            Benvenuto sul nostro servizio di prenotazione online. Da qui puoi
            scegliere le prestazioni che desideri e selezionare il giorno e
            l'orario che preferisci.
          </p>
        </div>

        <div className="flex w-full flex-col gap-16 px-10 lg:px-40">
          <div className="flex animate-fade-in flex-col gap-10 opacity-0">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
              <ServiceCard>
                <ServiceCard.Icon>
                  <Microphone className="h-7 w-7 text-brand" />
                </ServiceCard.Icon>
                <ServiceCard.Title>Teleconsulenza</ServiceCard.Title>
                <ServiceCard.Price>€ 30</ServiceCard.Price>
                <ServiceCard.Description>
                  Disponibile 24 ore su 24, 7 giorni su 7. Telefonata immediata
                  con uno dei nostri medici professionisti.
                </ServiceCard.Description>
                <ServiceCard.Action data-cal-link="infinitydoc/tele-consulto">
                  Seleziona
                </ServiceCard.Action>
              </ServiceCard>
              <ServiceCard>
                <ServiceCard.Icon>
                  <VideoCamera className="h-7 w-7 text-brand" />
                </ServiceCard.Icon>
                <ServiceCard.Title>Videoconsulenza</ServiceCard.Title>
                <ServiceCard.Description>
                  Disponibile 24 ore su 24, 7 giorni su 7. Videochiamata
                  immediata con uno dei nostri medici professionisti.
                </ServiceCard.Description>
                <ServiceCard.Price>€ 30</ServiceCard.Price>
                <ServiceCard.Action data-cal-link="infinitydoc/video-consulto">
                  Seleziona
                </ServiceCard.Action>
              </ServiceCard>
              <ServiceCard>
                <ServiceCard.Icon>
                  <Buildings className="h-7 w-7 text-brand" />
                </ServiceCard.Icon>
                <ServiceCard.Title>Consulenza in ambulatorio</ServiceCard.Title>
                <ServiceCard.Description>
                  Prenota una visita presso la nostra clinica in centro a
                  Milano.
                </ServiceCard.Description>
                <ServiceCard.Price>€ 30</ServiceCard.Price>
                <ServiceCard.Action data-cal-link="infinitydoc/visita-ambulatoriale">
                  Seleziona
                </ServiceCard.Action>
              </ServiceCard>
              <ServiceCard>
                <ServiceCard.Icon>
                  <HouseLine className="h-7 w-7 text-brand" />
                </ServiceCard.Icon>
                <ServiceCard.Title>Consulenza a domicilio</ServiceCard.Title>
                <ServiceCard.Description>
                  Ti raggiungiamo ovunque tu sia in tutta Milano e provincia.*
                </ServiceCard.Description>
                <ServiceCard.Price>€ 60</ServiceCard.Price>
                <ServiceCard.Action data-cal-link="infinitydoc/visita-a-domicilio">
                  Seleziona
                </ServiceCard.Action>
              </ServiceCard>
            </div>
          </div>
        </div>

        <Faq />
      </div>
      <Footer />
    </div>
  )
}
