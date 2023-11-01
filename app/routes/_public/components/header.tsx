import { Button, Sheet } from '@src/components'
import { MenuIcon, XIcon } from 'lucide-react'

const menu = [
  {
    title: 'I nostri servizi',
    href: '/servizi',
  },
  {
    title: 'Chi siamo',
    href: '/chi-siamo',
  },
]

export function Header() {
  return (
    <div className="sticky w-full top-0 h-20 bg-white/90 backdrop-blur-sm  py-5 lg:h-32 z-50">
      <Sheet>
        <header className="flex h-full items-center justify-between px-10 lg:container">
          <div className="flex items-center gap-20">
            <a href="/">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/infinitydoc-logo-brand.svg"
                  alt=""
                  className="w-12"
                />
                <span className="font-extrabold tracking-wider text-brand.secondary md:text-2xl">
                  Infinitydoc
                </span>
              </div>
            </a>
            <div className="hidden gap-7 lg:flex">
              {menu.map(item => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-xl text-brand.secondary transition-colors hover:text-brand"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <Button size="lg" asChild>
              <a href="/contattaci" className="text-white">
                Contattaci
              </a>
            </Button>
          </div>
          <Sheet.Trigger className="rounded-full bg-white p-2 lg:hidden">
            <MenuIcon className="text-brand" />
          </Sheet.Trigger>
          <Sheet.Content side="right" className="bg-white">
            <div className="flex flex-col gap-10">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/infinitydoc-logo-brand.svg"
                    alt=""
                    className="w-12"
                  />
                  <span className="font-extrabold tracking-wider text-brand.secondary md:text-2xl">
                    Infinitydoc
                  </span>
                </div>
                <Sheet.Close>
                  <XIcon />
                </Sheet.Close>
              </div>
              <div className="flex flex-col gap-5">
                {menu.map(item => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="text-lg font-bold text-brand.secondary"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
              <Button asChild>
                <a href="/contattaci" className="text-white">
                  Contattaci
                </a>
              </Button>
            </div>
          </Sheet.Content>
        </header>
      </Sheet>
    </div>
  )
}
