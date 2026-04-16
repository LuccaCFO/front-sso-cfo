import { Footer } from '../../features/auth/components/Footer'
import { Header } from '../../features/auth/components/Header'
import { SecondaryContainer } from '../../features/auth/components/SecondaryContainer'
import { LoginContainer } from '../../features/auth/components/LoginContainer'

export function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grid flex-1 place-items-center px-4 py-10">
        <section
          className="flex justify-between w-full max-w-[1000px] rounded-2xl border border-cfo-border bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          aria-label="Area de autenticacao"
        >
          <SecondaryContainer/>
          <LoginContainer/>
        </section>
      </main>
      <Footer />
    </div>
  )
}
