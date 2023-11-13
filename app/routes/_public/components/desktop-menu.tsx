interface DesktopMenuProps {
  links: {
    home: React.FC
    howItWorks: React.FC
    services: React.FC
    whereWeAre: React.FC
    booking: React.FC
  }
}

export function DesktopMenu(ps: DesktopMenuProps) {
  return (
    <div className="flex h-full items-center justify-between px-10 lg:container">
      <ps.links.home />
      <div className="hidden gap-7 lg:flex">
        <ps.links.howItWorks />
        <ps.links.services />
        <ps.links.whereWeAre />
      </div>
      <ps.links.booking />
    </div>
  )
}
