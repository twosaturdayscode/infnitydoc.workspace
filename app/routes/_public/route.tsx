import { Outlet } from '@remix-run/react'
import { Footer } from './components/footer'
import { createHost, createSlot } from 'create-slots'
import { tm } from '@src/components'
import { useScrollDirection } from '@app/hooks'
import { DesktopMenu } from './components/desktop-menu'
import { MobileMenu } from './components/mobile-menu'
import { publicLinks } from '@app/links/public'

export default function IndexRouteLayout() {
  return (
    <Layout>
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
        <header
          {...h.getProps(Layout.Header)}
          className={tm(
            'fixed top-0 z-50 h-20 w-full border-b border-gray-200 bg-white/90 py-5 shadow-sm backdrop-blur-sm transition-all',
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
  Header: createSlot('header'),
  Body: createSlot('main'),
  Footer: createSlot('footer'),
})
