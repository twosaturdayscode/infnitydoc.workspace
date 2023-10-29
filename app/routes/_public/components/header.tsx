import { Button, Sheet } from '@src/components'
import { MenuIcon, XIcon } from 'lucide-react'

const menu = [
  {
    title: 'Home',
    href: '/',
  },
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
    <div className="bg-white h-28 py-5 lg:h-32">
      <Sheet>
        <header className="px-10 flex justify-between items-center h-full lg:container">
          <div className="flex gap-20 items-center">
            <div className="flex items-center gap-3">
              <img
                src="/assets/infinitydoc-logo-brand.svg"
                alt=""
                className="w-12"
              />
              <span className="font-bold md:text-2xl tracking-wider text-brand.secondary">
                InfinityDoc
              </span>
            </div>
            <div className='hidden lg:flex gap-7'>
              {menu.map(item => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-brand.secondary font-bold text-lg"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <Button size="lg">
              <span className="text-white">Contattaci</span>
            </Button>
          </div>
          <Sheet.Trigger className="bg-white rounded-full p-2 lg:hidden">
            <MenuIcon className="text-brand" />
          </Sheet.Trigger>
          <Sheet.Content side="right" className="bg-white">
            <div className="flex flex-col gap-10">
              <div className="flex justify-between">
                <img
                  src="/assets/infinitydoc-logo-brand.svg"
                  alt=""
                  className="w-12"
                />
                <Sheet.Close>
                  <XIcon />
                </Sheet.Close>
              </div>
              <div className="flex flex-col gap-5">
                {menu.map(item => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="text-brand.secondary font-bold text-lg"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
              <Button>
                <span className="text-white">Contattaci</span>
              </Button>
            </div>
          </Sheet.Content>
        </header>
      </Sheet>
    </div>
  )
}
