import Logo from "./logo"

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center relative">
      <div className="absolute inset-0">
        <div className="h-1/2 bg-black" />
        <div className="h-1/2 bg-white" />
      </div>
      <Logo />
    </main>
  )
}

