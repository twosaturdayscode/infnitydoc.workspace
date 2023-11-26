import { Outlet, useLoaderData } from '@remix-run/react'
import { Footer } from './components/footer'
import { createHost, createSlot } from 'create-slots'
import { tm } from '@src/components'
import { useScrollDirection } from '@app/hooks'
import { DesktopMenu } from './components/desktop-menu'
import { MobileMenu } from './components/mobile-menu'
import { publicLinks } from '@app/links/public'
import { Clock, MapPin, Phone } from '@phosphor-icons/react/dist/ssr'
import { redirect, type LoaderFunctionArgs, json } from '@remix-run/cloudflare'

import it from '../../locales/it/public.json'
import en from '../../locales/en/public.json'

export const loader = ({ params }: LoaderFunctionArgs) => {
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

export default function IndexRouteLayout() {
  const { t } = useLoaderData<typeof loader>()
  return (
    <Layout>
      <Layout.Topbar>
        <>
          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-2">
              <Phone size={20} className="stroke-1" />
              <span>388 877 0022</span>
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
              <MapPin size={20} className="stroke-1" />
              <span>Piazzale Caiazzo, 2 Milano, 20124</span>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-3 text-sm lg:w-auto lg:text-base">
            <Clock size={20} className="stroke-1" />
            <span className="hidden lg:block">Orari ambulatorio:</span>
            <span>{t['general']['office_hours']}</span>
          </div>
        </>
      </Layout.Topbar>
      <Layout.Header>
        <DesktopMenu links={publicLinks} />
        <MobileMenu links={publicLinks} />
      </Layout.Header>

      <Layout.Body>
        <Outlet />
      </Layout.Body>

      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  )
}

const LayoutHost: React.FC<{ children: React.ReactNode }> = ps => {
  const { direction } = useScrollDirection()

  return createHost(ps.children, h => {
    return (
      <>
        <div className="h-12 w-full bg-brand py-3 text-base font-light text-white">
          <div
            {...h.getProps(Layout.Topbar)}
            className="container flex items-center justify-between gap-3"
          />
        </div>
        <header
          {...h.getProps(Layout.Header)}
          className={tm(
            'flex w-full items-center justify-between border-b border-gray-100 bg-white/90 px-10 py-5 shadow-sm backdrop-blur-sm',
            direction === 'down' && '-top-20',
          )}
        />
        <main {...h.getProps(Layout.Body)} />
        <footer {...h.getProps(Layout.Footer)} />
      </>
    )
  })
}

const Layout = Object.assign(LayoutHost, {
  Topbar: createSlot('div'),
  Header: createSlot('header'),
  Body: createSlot('main'),
  Footer: createSlot('footer'),
})
