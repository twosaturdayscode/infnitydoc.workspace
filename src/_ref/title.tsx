import { createElement } from 'react'

interface TitleProps {
  as?: `h${1 | 2 | 3 | 4 | 5 | 6}`
  children?: React.ReactNode
  of?: 'page' | 'section' | 'article' | 'aside' | 'header' | 'footer'
  className?: string
  id?: string
  brand?: boolean
}

export function Title(ps: TitleProps) {
  const { as = 'h1', children, of = 'page' } = ps
  const className = `${sof(of)} ${ps.brand ? 'text-brand' : ''} ${ps.className || ''}`
  return createElement(as, { className, id: ps.id }, children)
}

const sof = (of: string) => {
  switch (of) {
    case 'page':
      return 'text-2xl font-bold'
    case 'section':
      return 'font-semibold animate-fade-rotate-in-lg text-3xl font-bold opacity-0 lg:text-4xl'
    case 'article':
      return 'text-xl font-semibold'

    default:
      return 'text-lg font-medium'
  }
}
