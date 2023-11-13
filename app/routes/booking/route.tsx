import { Button } from '@src/components'
import {
  ChevronLeftIcon,
  HomeIcon,
  HotelIcon,
  PhoneCallIcon,
  VideoIcon,
} from 'lucide-react'
/** @ts-ignore */
import { getCalApi } from '@calcom/embed-react'
import { useEffect, useState } from 'react'
import { publicLinks } from '@app/links/public'

export default function PrenotaPage() {
  const [isAllowed, setIsAllowed] = useState(false)

  useEffect(() => {
    const calcom = async () => {
      const cal = await getCalApi()
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#04B8AD' } },
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
      <div className="container flex flex-col gap-10 py-5">
        <div className="flex flex-col gap-4">
          <div>
            <Button
              variant="link"
              size="lg"
              className="text-lg decoration-[none] px-0"
              asChild
            >
              <a href="/" className="flex items-center gap-3">
                <ChevronLeftIcon className="h-5 w-5" />
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

        <div className="flex w-full flex-col gap-16">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl">
              <b>1.</b> Conferma età del paziente:{' '}
            </h2>
            <p className="text-xl">
              La prenotazione online è disponibile solo per pazienti di età
              superiore ai <b>4</b> anni.
            </p>
            <div className="py-5">
              <label className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={isAllowed}
                  onChange={() => setIsAllowed(!isAllowed)}
                  className="h-6 w-6"
                />
                <b className="text-xl">
                  Confermo che il paziente interessato è di età superiore ai 4
                  anni
                </b>
              </label>

              {/* <button
                data-cal-link="infinitydoc/video-tele-consulto"
                data-cal-config='{"layout":"month_view"}'
              >
                Video/Tele consulti
              </button> */}
            </div>
          </div>

          <div>
            {isAllowed && (
              <div className="flex animate-fade-in flex-col gap-10 opacity-0">
                <h2 className="text-3xl">
                  <b>2.</b> Scegli la tipologia di consulenza:
                </h2>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <article className="flex h-full flex-1 flex-col justify-between gap-7 rounded bg-stone-50 p-8">
                    <div className="flex flex-col gap-4">
                      <h1 className="flex w-full items-center gap-2 text-xl font-medium">
                        <PhoneCallIcon className="h-6 w-6" />
                        Teleconsulenza
                      </h1>
                      <p className="text-lg text-secondary">
                        Per consulenze mediche immediate e comode
                      </p>
                      <span className="text-3xl font-semibold">€20</span>
                      <p>
                        Una volta effettuato l'acquisto ti manderemo un link o
                        un numero telefonico per la consulenza
                      </p>
                    </div>
                    <Button data-cal-link="infinitydoc/tele-consulto">
                      Seleziona
                    </Button>
                  </article>
                  <article className="flex h-full flex-1 flex-col justify-between gap-7 rounded bg-stone-50 p-8">
                    <div className="flex flex-col gap-4">
                      <h1 className="flex w-full items-center gap-2 text-xl font-medium">
                        <VideoIcon className="h-6 w-6" />
                        Videoconsulenza
                      </h1>
                      <p className="text-lg text-secondary">
                        Per consulenze mediche immediate e comode
                      </p>
                      <span className="text-3xl font-semibold">€20</span>
                      <p>
                        Una volta effettuato l'acquisto ti manderemo un link o
                        un numero telefonico per la consulenza
                      </p>
                    </div>
                    <Button data-cal-link="infinitydoc/video-consulto">
                      Seleziona
                    </Button>
                  </article>
                  <article className="flex h-full flex-1 flex-col justify-between gap-7 rounded bg-stone-50 p-8">
                    <div className="flex flex-col gap-4">
                      <h1 className="flex w-full items-center gap-2 whitespace-pre-line text-xl font-medium">
                        <HotelIcon className="h-6 w-6" />
                        Visita in ambulatorio
                      </h1>
                      <p className="text-lg text-secondary">
                        Per consulenze mediche immediate e comode
                      </p>
                      <span className="text-3xl font-semibold">€20</span>
                      <p>
                        Una volta effettuato l'acquisto ti manderemo un link o
                        un numero telefonico per la consulenza
                      </p>
                    </div>
                    <Button data-cal-link="infinitydoc/visita-ambulatoriale">
                      Seleziona
                    </Button>
                  </article>
                  <article className="flex h-full flex-1 flex-col justify-between gap-7 rounded bg-stone-50 p-8">
                    <div className="flex flex-col gap-4">
                      <h1 className="flex w-full items-center gap-2 text-xl font-medium">
                        <HomeIcon className="h-6 w-6" />
                        Visita a domicilio
                      </h1>
                      <p className="text-lg text-secondary">
                        Per consulenze mediche immediate e comode
                      </p>
                      <span className="text-3xl font-semibold">€20</span>
                      <p>
                        Una volta effettuato l'acquisto ti manderemo un link o
                        un numero telefonico per la consulenza
                      </p>
                    </div>
                    <Button data-cal-link="infinitydoc/visita-a-domicilio">
                      Seleziona
                    </Button>
                  </article>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
