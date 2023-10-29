import { PlanCard } from './components/plan-card'
import { plans } from './data'

export default function ServiziPage() {
  return (
    <div className='py-20'>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col justify-center text-center gap-5 max-w-2xl mx-auto">
          <span className="text-xl uppercase text-brand">i nostri piani</span>
          <h1 className="text-6xl font-extrabold text-brand.secondary tracking-wide">
            Piani intelligenti e convenienti per tutti
          </h1>
          <p className="text-secondary text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
            dignissim aliquam interdu.
          </p>
        </div>
        <div>
          <div className="px-8 mx-auto container py-10 border border-muted/20 shadow-sm rounded-2xl">
            <div className="flex gap-8">
              {plans.map((p,i) => (
                <>
                  <PlanCard {...p} key={p.title} />
                  {i !== plans.length - 1  && <div className='w-1 bg-muted/20' />}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
