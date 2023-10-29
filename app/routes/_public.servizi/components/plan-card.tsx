import { Button } from '@src/components'
import type { Plan } from '../data'
import { CheckCircle2Icon } from 'lucide-react'

export function PlanCard(ps: Plan) {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-5">
        <img src={ps.image.src} alt="" className="w-24 h-24" />
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-4xl text-brand.secondary">
            {ps.title}
          </h2>
          <p className="text-secondary text-lg">{ps.description}</p>
        </div>
        <ul className="flex flex-col gap-2">
          {ps.features.map(f => (
            <li className="flex items-center gap-3 flex-1" key={f}>
              <CheckCircle2Icon className="text-white fill-brand.secondary w-7 h-7" />
              <span className="text-brand.secondary text-xl flex-1 font-semibold">
                {f}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2 justify-center">
          <span className="text-6xl font-bold text-brand.secondary">
            € {ps.price}
          </span>
          <span className="text-secondary text-xl">/mese</span>
        </div>
        <Button size="lg">
          <span className="text-lg">Contattaci</span>
        </Button>
      </div>
    </div>
  )
}
