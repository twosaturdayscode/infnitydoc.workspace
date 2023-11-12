import { Button } from '@src/components'

export const publicLinks = {
  home: () => (
    <a href="/" className="flex items-center gap-3">
      <img
        src="/assets/infinity-doc-logo.png"
        alt="Logo of infinitydoc"
        className="h-10 w-10"
      />
      <span className="text-lg text-brand">InfinityDoc</span>
    </a>
  ),
  howItWorks: () => {
    return (
      <button
        className="text-lg text-secondary transition-colors hover:text-primary"
        onClick={() => scrollTo('how-it-works')}
      >
        Come funziona
      </button>
    )
  },
  services: () => {
    return (
      <button
        className="text-lg text-secondary transition-colors hover:text-primary"
        onClick={() => scrollTo('services')}
      >
        Servizi
      </button>
    )
  },
  booking: () => (
    <Button size="lg" className="hidden text-xl lg:block">
      <a href="/booking">Prenota online</a>
    </Button>
  ),
}

const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
