interface DesktopMenuProps {
  links: {
    home: React.FC
    howItWorks: React.FC
    services: React.FC
    booking: React.FC
  }
}

export function DesktopMenu(ps: DesktopMenuProps) {
  return (
    <div className="flex h-full items-center justify-between px-10 lg:container">
      <div className="flex items-center gap-20">
        <ps.links.home />
        <div className="hidden gap-7 lg:flex">
          <ps.links.howItWorks />
          <ps.links.services />
        </div>
      </div>
      <ps.links.booking />
    </div>
  )
}
