import { PlanCard } from './components/plan-card'
import { plans } from './data'

export default function ServiziPage() {
  return (
    <div className='py-20'>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col justify-center text-center gap-5 max-w-2xl mx-auto">
          <span className="text-xl uppercase text-brand opacity-0 animate-fade-in">i nostri piani</span>
          <h1 className="text-6xl font-extrabold text-brand.secondary tracking-wide opacity-0 animate-fade-rotate-scale-in delay-200">
            Piani intelligenti e convenienti per tutti
          </h1>
          <p className="text-secondary text-2xl opacity-0 animate-fade-rotate-in-lg delay-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
            dignissim aliquam interdu.
          </p>
        </div>
        <div>
          <div className="px-8 mx-auto container py-10 border border-muted/20 shadow-sm rounded-2xl">
            <div className="flex gap-8">
              {plans.map((p,i) => (
                <div key={p.title} className='flex gap-4'>
                  <PlanCard {...p} />
                  {i !== plans.length - 1  && <div className='w-1 bg-muted/20' />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
