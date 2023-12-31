export const publicLinks = {
  home: () => (
    <a href="/" className="flex items-center gap-3">
      <img
        src="/assets/new-id-logo.svg"
        alt="Logo of infinitydoc"
        className="h-14 w-14"
      />
      <span className="text-lg font-bold text-brand">infinitydoc</span>
    </a>
  ),
  howItWorks: (ps: { content: string }) => {
    return (
      <button
        className="text-lg text-secondary transition-colors hover:text-primary"
        onClick={() => scrollTo('how_it_works')}
      >
        {ps.content}
      </button>
    )
  },
  services: (ps: { content: string }) => {
    return (
      <button
        className="text-lg text-secondary transition-colors hover:text-primary"
        onClick={() => scrollTo('services')}
      >
        {ps.content}
      </button>
    )
  },
  findUs: (ps: { content: string }) => {
    return (
      <button
        className="text-lg text-secondary transition-colors hover:text-primary"
        onClick={() => scrollTo('find-us')}
      >
        {ps.content}
      </button>
    )
  },
  booking: (ps: { content: string }) => (
    <button
      className="group order-1 block whitespace-nowrap rounded-lg border-brand bg-brand px-6 py-3 text-center font-medium capitalize leading-5 text-white ring-brand-light transition-opacity hover:bg-opacity-75 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:hover:bg-opacity-100 lg:order-2 2xl:leading-5"
      onClick={() => scrollTo('services')}
    >
      {ps.content}
    </button>
  ),
}

const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
