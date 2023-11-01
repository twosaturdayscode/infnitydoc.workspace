export default function ChiSiamoPage() {
  return (
    <div className="container py-20">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row-reverse md:gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-brand.secondary md:text-5xl">
            Rendere l'assistenza medica più accessibile e conveniente
          </h2>
          <p className="max-w-3xl text-xl text-brand.secondary/70  md:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
            dignissim aliquam interdum id tincidunt sed vitae lom elementum
            sapien. In amet sapien.
          </p>
        </div>

        <div className="w-full max-w-2xl">
          <img src="/assets/doctors.svg" alt="" />
        </div>
      </div>
    </div>
  )
}
