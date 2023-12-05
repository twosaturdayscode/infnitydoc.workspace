import { MenuIcon, XIcon } from 'lucide-react'
import * as Sheet from '@radix-ui/react-dialog'

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
    <Sheet.Root>
      <Sheet.Trigger className="rounded-full bg-white p-2 lg:hidden">
        <MenuIcon className="text-brand" />
      </Sheet.Trigger>
      <Sheet.Portal>
        <Sheet.Overlay className="fixed inset-0 bg-white/30 backdrop-blur-sm" />
        <Sheet.Content className="fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top">
          <div className="flex flex-col gap-10">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/infinitydoc-logo-brand.svg"
                  alt=""
                  className="w-12"
                />
                <span className="font-extrabold uppercase tracking-wider text-brand md:text-2xl">
                  Infinitydoc
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5 text-left">
              <ps.links.services />
            </div>
            <ps.links.booking />
          </div>
        </Sheet.Content>
      </Sheet.Portal>
    </Sheet.Root>
  )
}
