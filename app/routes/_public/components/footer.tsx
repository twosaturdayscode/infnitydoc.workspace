import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from '@phosphor-icons/react/dist/ssr'

export function Footer() {
  return (
    <footer className="flex flex-col gap-10 bg-brand-light pb-14 pt-20 text-secondary">
      <div className="container flex flex-col md:gap-32">
        <div className="flex max-w-xs flex-col gap-10">
          <div className="flex items-center gap-3">
            <img
              src="/assets/new-id-logo.svg"
              alt="InfinityDoc logo, a stethoscope"
              className="w-14"
            />
            <span className="font-bold text-brand md:text-xl">infinitydoc</span>
          </div>

          <p className="text-lg">
            InfinityDoc cerca di migliorare costantemente il proprio servizio
            per garantire la migliore esperienza possibile ai propri pazienti.
          </p>

          <ul className="flex gap-2">
            <li>
              <a
                href="https://facebook.com/InfinityDocIt"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FacebookLogo size={32} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/InfinityDocmi"
                target="_blank"
                rel="noreferrer noopener"
              >
                <InstagramLogo size={32} />
              </a>
            </li>
            <li>
              <div className="flex items-center gap-4">
                <WhatsappLogo size={32} />

                <span className="text-lg font-medium">0039 388 877 0022</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row">
          <div className="flex flex-col gap-6">
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
          <div className="flex max-w-lg flex-col gap-6">
            <span className="text-lg font-bold lg:text-xl">Link utili</span>
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
          <div className="flex max-w-xs flex-col gap-6">
            <span className="text-lg font-bold lg:text-xl">Contatti</span>
            <ul className="flex flex-col gap-5 font-medium">
              <li>
                <p>
                  Piazzale Caiazzo, 2 Milano, 20124, Italia Vicino a fermata
                  metro verde M2 Caiazzo
                </p>
              </li>
              <li>
                <span>info@infinitydoc.it</span>
                <span>infinitydoc.it</span>
              </li>
              <li>
                <span>+39 388 877 0022</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <p>
          © {new Date().getFullYear()} Infinity Doc Milano. Tutti i diritti
          riservati
        </p>
      </div>
    </footer>
  )
}
