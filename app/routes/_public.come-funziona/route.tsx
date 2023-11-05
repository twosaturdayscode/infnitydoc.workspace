export default function ComeFunzionaPage() {
  return (
    <div className="pt-20 text-primary">
      <div className="container flex flex-col gap-14 py-20">
        <div className="flex items-center justify-between lg:px-20">
          <img src="/assets/mobile.png" alt="" />

          <div className="flex max-w-xl flex-col gap-3">
            <h1 className="text-4xl font-semibold text-brand">
              When you're far from your doctor
            </h1>
            <p className="text-2xl font-medium text-secondary">
              Doctors in Italy helps you schedule appointments online or
              in-person with local doctors who understand you and can help you
              today.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-12 py-20">
          <div className="flex justify-between">
            <div className="flex max-w-lg flex-col gap-3">
              <span className="text-3xl font-medium uppercase text-secondary">
                step 1
              </span>
              <h2 className="text-3xl text-brand">
                Immagina avere una qualsiasi necessità medica
              </h2>
              <p className="text-xl text-secondary">
                We'll need you to fill out a quick intake form to let us know
                your needs. This will only take a few minutes. No sign-up
                required.
              </p>
            </div>
            <img src="/assets/headache.png" alt="" className="w-[420px]" />
          </div>

          <div className="flex flex-row-reverse justify-between">
            <div className="flex max-w-lg flex-col gap-3">
              <span className="text-3xl font-medium uppercase text-secondary">
                step 2
              </span>
              <h2 className="text-3xl text-brand">
                Ricevi 
              </h2>
              <p className="text-xl text-secondary">
                We'll need you to fill out a quick intake form to let us know
                your needs. This will only take a few minutes. No sign-up
                required.
              </p>
            </div>
            <img src="/assets/cards.png" alt="" className="-mt-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
