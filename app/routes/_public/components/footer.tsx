import { FacebookIcon, InstagramIcon, PhoneIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-brand text-white py-5">
      <div className="container flex flex-col gap-5 px-10">
        <div className="flex justify-between">
          <div className="hidden md:block">
            <div className="flex items-center">
              <img
                src="/assets/infinity-doc-logo-white.svg"
                alt="InfinityDoc logo, a stethoscope"
                className="w-28 py-5"
              />
              <span className="font-bold tracking-wider text-white md:text-3xl">
                InfinityDoc
              </span>
            </div>
            <p className="text-lg">Un nuovo modo di prendersi cura di se.</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-3">
              <span className="text-lg font-bold lg:text-2xl">Menu</span>
              <ul className="flex flex-col gap-1 font-medium">
                <li className="max-w-lg flex-1">
                  <a href="/chi-siamo">Chi siamo</a>
                </li>
                <li className="max-w-lg flex-1">
                  <a href="/servizi">Servizi</a>
                </li>
                <li className="max-w-lg flex-1">
                  <a href="/contattaci">Contattaci</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-lg font-bold lg:text-2xl">Link utili</span>
              <ul className="flex flex-col gap-1 font-medium">
                <li className="max-w-lg flex-1">
                  <a href="/dona">Dona</a>
                </li>
                <li className="max-w-lg flex-1">
                  <a href="/tos">Termini di servizio</a>
                </li>
                <li className="max-w-lg flex-1">
                  <a href="/privacy">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-4">
          <ul className="flex gap-2">
            <li>
              <a
                href="https://facebook.com/InfinityDocIt"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/InfinityDocmi"
                target="_blank"
                rel="noreferrer noopener"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <div className='flex gap-4'>
                <PhoneIcon />

                <span className='text-2xl font-medium'>0039.33888770022</span>
              </div>
            </li>
          </ul>
        </div>
        <p className="lg:text-lg">
          © {new Date().getFullYear()} Infinity Doc Milano. Tutti i diritti
          riservati
        </p>
      </div>
    </footer>
  )
}
