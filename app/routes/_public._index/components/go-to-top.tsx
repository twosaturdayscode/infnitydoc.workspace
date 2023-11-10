import { tm } from '@src/components'
import { useState, useEffect } from 'react'

export function GoToTopButton() {
  const dir = useScrollDirection()

  return (
    <button
      className={tm(
        'fixed bottom-4 right-4 z-50 translate-y-0 rounded-full bg-brand/70 p-2 text-white transition-all duration-300',
        dir === 'down' && 'translate-y-16',
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 11l7-7 7 7M5 19l7-7 7 7"
        ></path>
      </svg>
    </button>
  )
}

const useScrollDirection = () => {
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

  return direction
}
