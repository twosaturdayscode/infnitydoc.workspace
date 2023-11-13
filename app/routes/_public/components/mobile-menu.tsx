import { Sheet } from '@src/components'
import { MenuIcon, XIcon } from 'lucide-react'

interface MobileMenuProps {
  links: {
    home: React.FC
    howItWorks: React.FC
    services: React.FC
    booking: React.FC
  }
}

export const MobileMenu: React.FC<MobileMenuProps> = ps => {
  return (
    <Sheet>
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
              <span className="font-extrabold tracking-wider text-brand md:text-2xl uppercase">
                Infinitydoc
              </span>
            </div>
            <Sheet.Close>
              <XIcon />
            </Sheet.Close>
          </div>
          <div className="flex flex-col gap-5 text-left">
            <ps.links.howItWorks />
            <ps.links.services />
          </div>
          <ps.links.booking />
        </div>
      </Sheet.Content>
    </Sheet>
  )
}
