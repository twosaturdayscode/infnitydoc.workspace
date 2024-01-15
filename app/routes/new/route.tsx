export default function NewStyle() {
  return (
    <div>
      <header className="flex h-16 items-center border-b-2 border-stone-100">
        <div className="container flex items-center">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/assets/new-id-logo.svg"
              alt="Logo of infinitydoc"
              className="h-10 w-10"
            />
            <span className="text-lg font-bold text-brand">infinitydoc</span>
          </a>
        </div>
      </header>
    </div>
  )
}
