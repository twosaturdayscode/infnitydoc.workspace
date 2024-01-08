import { useInterval } from '@src/hooks'
import { useState } from 'react'

export function WhatsappButton() {
  const [isVisible, setIsVisible] = useState(true)

  useInterval(() => {
    setIsVisible(false)
  }, 6000)

  return (
    <div className="fixed bottom-8 right-8 z-50 translate-y-0">
      <a href="https://wa.me/393888770022">
        <div className='flex items-center gap-4'>
          {isVisible && (
            <div className='py-2 px-4 rounded-full bg-stone-100'>
              <span className='text-xl text-stone-700'>Ti serve aiuto?</span>
            </div>
          )}
          <img src="/assets/wa.png" alt="Whatsapp" className="h-12 w-12" />
        </div>
      </a>
    </div>
  )
}
