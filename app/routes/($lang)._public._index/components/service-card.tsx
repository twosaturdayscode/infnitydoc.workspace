import { Title } from '@src/_ref/title'
import { Button } from '@src/components'
import { createHost, createSlot } from 'create-slots'

const ServiceCardHost = (ps: { children: React.ReactElement[] }) => {
  return createHost(ps.children, h => (
    <article className="flex flex-1 flex-col justify-between gap-7 rounded-xl bg-white p-7 py-5 shadow-md transition-colors ease-in-out hover:bg-brand-light">
      <div className="flex flex-col gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-brand-light p-4">
          {h.get(ServiceCard.Icon)}
        </div>
        <div className="flex max-w-max flex-col gap-3 lg:flex-row md:justify-between">
          <Title of="article" brand>
            {h.get(ServiceCard.Title)}
          </Title>
          <span className="whitespace-nowrap text-3xl font-bold text-brand">
            {h.get(ServiceCard.Price)}
          </span>
        </div>
        <p className="text-secondary">{h.get(ServiceCard.Description)}</p>
      </div>
      <div className="flex justify-end">
        <Button className="flex items-center justify-between select-none capitalize" asChild>
          {h.get(ServiceCard.Action)}
        </Button>
      </div>
    </article>
  ))
}

export const ServiceCard = Object.assign(ServiceCardHost, {
  Icon: createSlot('div'),
  Title: createSlot('h2'),
  Price: createSlot('span'),
  Description: createSlot('p'),
  Link: createSlot('a'),
  Action: createSlot('span'),
})
