import { FacebookIcon, InstagramIcon, PhoneIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="text-brand.secondary py-8">
      <div className="container px-10 flex flex-col gap-10">
        <div className="flex justify-between">
          <div className='hidden md:block'>
            <div className="flex items-center">
              <img
                src="/assets/infinitydoc-logo-brand.svg"
                alt="InfinityDoc logo, a stethoscope"
                className="w-28 py-5"
              />
              <span className="font-bold md:text-3xl tracking-wider text-brand.secondary">
                InfinityDoc
              </span>
            </div>
            <p className='text-secondary'>Un nuovo modo di prendersi cura di se.</p>
          </div>
          <div className="flex gap-5 items-center">
            <div className="flex flex-col gap-3">
              <span className="font-bold text-2xl">Menu</span>
              <ul className="flex flex-col gap-1 font-medium text-xl">
                <li className="flex-1 max-w-lg">
                  <a href="/">Chi siamo</a>
                </li>
                <li className="flex-1 max-w-lg">
                  <a href="/">Servizi</a>
                </li>
                <li className="flex-1 max-w-lg">
                  <a href="/">Contattaci</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-bold text-2xl">Link utili</span>
              <ul className="flex flex-col gap-1 font-medium text-xl">
                <li className="flex-1 max-w-lg">
                  <a href="/">Dona</a>
                </li>
                <li className="flex-1 max-w-lg">
                  <a href="/">Termini di servizio</a>
                </li>
                <li className="flex-1 max-w-lg">
                  <a href="/">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-4">
          <ul className="flex gap-2">
            <li>
              <a href="/">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <PhoneIcon />
              </a>
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
