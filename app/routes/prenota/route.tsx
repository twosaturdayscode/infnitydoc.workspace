import { Button, RadioGroup } from '@src/components'
import { ChevronLeftIcon } from 'lucide-react'
import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

export default function PrenotaPage() {
  useEffect(() => {
    const calcom = async () => {
      const cal = await getCalApi()
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#94CCDC' } },
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
          <Button
            variant="link"
            size="lg"
            className="text-2xl decoration-[none]"
            asChild
          >
            <a href="/" className="flex items-center gap-3">
              <ChevronLeftIcon className="h-8 w-8" />
              Torna al sito
            </a>
          </Button>
        </div>
      </header>
      <div className="container flex flex-col gap-10 py-20">
        <div className="flex flex-col gap-5">
          <h1 className="text-center text-5xl font-medium">
            Prenotazione online
          </h1>
          <p className="text-lg text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            voluptatibus, voluptate, quidem, quibusdam dolorum molestiae
            voluptatum quae quos repellendus officiis voluptas. Quos, quidem
            voluptates? Quo, voluptatibus. Quisquam, voluptate. Quisquam, quia
            voluptas?
          </p>
        </div>

        <div className="flex w-full flex-col justify-center">
          <div>
            <h2 className="text-center text-3xl">
              1. Seleziona il servizio che desideri:{' '}
            </h2>
            <div className="flex items-center justify-center gap-5 py-10">
              {/* <RadioGroup name="service" className="flex gap-10">
                <RadioGroup.Item
                  value="tele-video-consult"
                  id="tele-video-consult"
                  className="group flex items-center gap-7 rounded-lg border-2 border-transparent bg-stone-50 p-6 data-[state=checked]:border-primary"
                >
                  <div className="flex aspect-square h-4 w-4 items-center justify-center rounded-full border border-primary text-primary">
                    <RadioGroup.Indicator />
                  </div>

                  <label
                    htmlFor="tele-video-consult"
                    className="flex flex-col rounded bg-stone-50 text-left"
                  >
                    <h1 className="text-3xl font-medium">
                      Tele-Video Consulto
                    </h1>
                    <p>Disponibili 24/7 per qualsiasi necessità</p>
                  </label>
                </RadioGroup.Item>
                <RadioGroup.Item
                  value="office-consult"
                  id="office-consult"
                  className="flex items-center gap-7 rounded-lg border-2 border-transparent bg-stone-50 p-6 data-[state=checked]:border-primary"
                >
                  <div className="flex aspect-square h-4 w-4 items-center justify-center rounded-full border border-primary text-primary">
                    <RadioGroup.Indicator />
                  </div>

                  <label
                    htmlFor="office-consult"
                    className="flex flex-col rounded bg-stone-50 text-left"
                  >
                    <h1 className="text-3xl font-medium">
                      Consulto in ambulatorio
                    </h1>
                    <p>Disponibili 24/7 per qualsiasi necessità</p>
                  </label>
                </RadioGroup.Item>
                <RadioGroup.Item
                  value="home-consult"
                  id="home-consult"
                  className="group flex items-center gap-7 rounded-lg border-2 border-transparent bg-stone-50 p-6 data-[state=checked]:border-primary"
                >
                  <div className="flex aspect-square h-4 w-4 items-center justify-center rounded-full border border-primary text-primary">
                    <RadioGroup.Indicator />
                  </div>

                  <label
                    htmlFor="home-consult"
                    className="flex flex-col rounded bg-stone-50 text-left"
                  >
                    <h1 className="text-3xl font-medium">
                      Consulto a domicilio
                    </h1>
                    <p>Disponibili 24/7 per qualsiasi necessità</p>
                  </label>
                </RadioGroup.Item>
              </RadioGroup> */}

              <button
                data-cal-link="infinitydoc/video-tele-consulto"
                data-cal-config='{"layout":"month_view"}'
              >
                Video/Tele consulti
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
