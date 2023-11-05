import { useInterval } from '@src/hooks'
import { serviceNotes } from '../data'
import { tm } from '@src/components'
import { useState } from 'react'

export function DisplayInterval() {
  const [count, setCount] = useState(0)

  useInterval(() => {
    setCount(c => (c + 1) % serviceNotes.length)
  }, 4000)

  return (
    <div className="relative flex items-center justify-between py-10">
      <div className="flex flex-col gap-3">
        {serviceNotes.map((n, i) => (
          <div
            key={n.note}
            className={tm(
              'flex items-center gap-4 transition-opacity',
              i === count ? 'opacity-100' : 'opacity-50',
            )}
          >
            <div className="h-5 w-1 bg-brand" />
            <h3 className="text-2xl text-brand">{n.note}</h3>
          </div>
        ))}
      </div>
      <div className="h-full max-w-sm">
        {serviceNotes.map((n, i) => (
          <div
            key={n.note}
            className={tm(
              `absolute right-0 top-0 h-full transition-opacity duration-500 ${
                i === count ? 'opacity-100' : 'opacity-0'
              }`,
            )}
          >
            <img
              src={n.image}
              alt={n.note}
              className="h-full rounded-[32px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
