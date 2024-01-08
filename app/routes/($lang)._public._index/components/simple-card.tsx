export const SimpleCard = (props: {
  title: string
  description: string

  // icon: (ps: LucideProps) => JSX.Element
}) => (
  <div className="flex flex-col justify-between rounded-lg border border-muted px-10 py-7 shadow-lg transition-colors">
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-brand/10 p-1 lg:h-24 lg:w-24">
          {/* {props.icon({
            className: 'h-10 w-10 lg:h-16 lg:w-16 text-brand',
          })} */}
        </div>
        <h2 className="text-xl font-bold text-brand md:text-3xl">
          {props.title}
        </h2>
      </div>
      <div className="h-px w-full bg-muted/50" />
      <p className="text-secondary md:text-lg">{props.description}</p>
    </div>
    <a href="/servizi" className="mt-3 text-brand underline">
      Scopri di più
    </a>
  </div>
)
