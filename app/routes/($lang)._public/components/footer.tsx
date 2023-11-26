import type { loader } from '@app/routes/($lang)._public._index/route'
import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from '@phosphor-icons/react/dist/ssr'
import { Link, useLoaderData } from '@remix-run/react'
import { publicLinks } from '@app/links/public'

export function Footer() {
  const { t } = useLoaderData<typeof loader>()
  return (
    <footer className="flex flex-col gap-10 bg-brand-light pb-14 pt-20 text-secondary">
      <div className="container flex flex-col md:flex-row md:gap-32">
        <div className="flex max-w-xs flex-col gap-10">
          <div className="flex items-center gap-3">
            <img
              src="/assets/new-id-logo.svg"
              alt="InfinityDoc logo, a stethoscope"
              className="w-14"
            />
            <span className="font-bold text-brand md:text-xl">infinitydoc</span>
          </div>

          <p className="text-lg">{t['footer']['description']}</p>

          <ul className="flex gap-2">
            <li>
              <a
                href="https://facebook.com/InfinityDocMI"
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
              <a
                href="https://wa.me/393888770022"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="flex items-center gap-4">
                  <WhatsappLogo size={32} />
                  {/* <span className="text-lg font-medium">+39 388 877 0022</span> */}
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row">
          <div className="flex flex-col gap-6">
            <span className="text-lg font-bold lg:text-2xl">
              {t.footer.links.menu.title}
            </span>
            <ul className="flex max-w-lg flex-col gap-1 font-medium">
              {t.footer.links.menu.links.map((l, i) => (
                <li key={i} className="flex-1">
                  {footerMenuLinks[i]()}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-lg font-bold lg:text-2xl">
              {t.footer.links.utils.title}
            </span>
            <ul className="flex max-w-lg flex-col gap-1 font-medium">
              {t.footer.links.utils.links.map((l, i) => (
                <li key={i} className="flex-1">
                  <Link to={l.url}>{l.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-lg font-bold lg:text-2xl">
              {t.footer.contact}
            </span>
            <ul className="flex max-w-lg flex-col gap-3 font-medium">
              {t.footer.contacts.map((c, i) => (
                <li key={i} className="flex-1">
                  <span>{c}</span>
                </li>
              ))}
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

const footerMenuLinks = [
  () => <publicLinks.howItWorks />,
  () => <publicLinks.services />,
  () => <publicLinks.whereWeAre />,
]
