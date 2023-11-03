import { Button } from '@src/components'
import type { Plan } from '../data'
import { CheckCircle2Icon } from 'lucide-react'

export function PlanCard(ps: Plan) {
  return (
    <div className="flex w-full flex-col justify-between gap-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold text-brand">{ps.title}</h2>
          <p className="text-lg text-secondary">{ps.description}</p>
        </div>
        <ul className="flex flex-col gap-2">
          {ps.features.map(f => (
            <li className="flex flex-1 items-center gap-3" key={f}>
              <CheckCircle2Icon className="h-7 w-7 fill-brand.secondary text-white" />
              <span className="flex-1 text-xl font-semibold text-brand">
                {f}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-center gap-2">
          <span className="text-6xl font-bold text-brand">€ {ps.price}</span>
          <span className="text-xl text-secondary">/mese</span>
        </div>
        <Button size="lg" asChild>
          <a href="/contattaci" className="text-lg">
            Contattaci
          </a>
        </Button>
      </div>
    </div>
  )
}
