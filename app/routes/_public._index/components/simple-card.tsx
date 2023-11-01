export const SimpleCard = (props: {
  title: string
  description: string
  icon: () => JSX.Element
}) => (
  <div className="flex flex-1 flex-col justify-between rounded-lg border border-muted px-10 py-7 shadow-lg transition-colors">
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-brand/10 p-1">
          {props.icon()}
        </div>
        <h2 className="text-xl font-bold text-brand.secondary md:text-3xl">
          {props.title}
        </h2>
      </div>
      <div className="h-px w-full bg-muted/50" />
      <p className="text-secondary md:text-lg">{props.description}</p>
    </div>
    <a href="/servizi" className="mt-3 text-brand.secondary underline">
      Scopri di più
    </a>
  </div>
)
