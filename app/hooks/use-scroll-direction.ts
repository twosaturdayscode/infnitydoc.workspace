import { useState, useEffect } from 'react'

/**
 * Returns the scroll direction
 *
 * @returns { 'up' | 'down' } direction
 */
export const useScrollDirection = () => {
  const [direction, setDirection] = useState<'up' | 'down'>('up')
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop)

      if (scrollTop > lastScrollTop) return setDirection('down')

      return setDirection('up')
    }

    /** should be debounced */
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [lastScrollTop])

  return { direction }
}
