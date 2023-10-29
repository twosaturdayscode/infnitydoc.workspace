import { Outlet } from '@remix-run/react'
import { Header } from './components/header'
import { Footer } from './components/footer'

export default function HomeLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
