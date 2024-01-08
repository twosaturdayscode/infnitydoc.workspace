import {Button, Dialog as AriaDialog, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components'
import { X } from '@phosphor-icons/react/dist/ssr'

interface DialogProps {
  caption: string
  children: React.ReactNode
}

export function Dialog(ps: DialogProps) {
  return (
    <DialogTrigger>
      <Button className="flex flex-1 items-center gap-3 whitespace-nowrap rounded-lg border-brand bg-brand px-6 py-3 text-center font-medium capitalize leading-5 text-white ring-brand-light transition-opacity hover:bg-opacity-75 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:hover:bg-opacity-100 lg:order-2 2xl:leading-5">{ps.caption}</Button>
      <ModalOverlay
        isDismissable
        className={({ isEntering, isExiting }) => `
          fixed inset-0 z-10 overflow-y-auto bg-black/25 flex min-h-full items-center justify-center p-4 text-center backdrop-blur
          ${isEntering ? 'animate-in fade-in duration-300 ease-out' : ''}
          ${isExiting ? 'animate-out fade-out duration-200 ease-in' : ''}
        `}
      >
        <Modal
          isDismissable
          className={({ isEntering, isExiting }) => `
            w-full max-w-2xl overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl
            ${isEntering ? 'animate-in zoom-in-95 ease-out duration-300' : ''}
            ${isExiting ? 'animate-out zoom-out-95 ease-in duration-200' : ''}
          `}
        >
          <AriaDialog className='outline-none'>
            {({ close }) => (
              <div className='w-full h-full relative'>
                <button className='absolute bg-stone-200 top-3 right-3 p-2 rounded-full flex justify-center items-center' aria-label='close'>
                  <X onClick={close} />
                </button>

                {ps.children}
              </div>
            )}
          </AriaDialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  )
}
