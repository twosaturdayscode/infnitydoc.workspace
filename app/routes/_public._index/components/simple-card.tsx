export const SimpleCard = (props: {
  title: string
  description: string
  icon: () => JSX.Element
}) => (
  <div className="rounded-lg border border-muted shadow-3xl flex-1 w-full px-10 py-7 md:min-w-[400px] shrink-0 transition-colors hover:bg-brand.secondary/10">
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <div className="w-24 h-24 p-1 bg-brand/10 rounded-3xl flex items-center justify-center">
          {props.icon()}
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-brand.secondary">{props.title}</h2>
      </div>
      <div className="w-full bg-muted/50 h-px" />
      <p className="md:text-lg text-secondary">{props.description}</p>
    </div>
  </div>
)
