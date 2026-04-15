import { LoginForm } from '../../features/auth/components/LoginForm'

export function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center p-6 bg-gradient-to-b from-slate-200 to-slate-50">
      <section
        className="w-full max-w-[420px] rounded-xl border border-slate-200 bg-white p-8 shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
        aria-label="Area de autenticacao"
      >
        <header className="mb-6">
          <h1 className="m-0 text-2xl text-slate-900">Entrar no sistema</h1>
          <p className="mt-2 text-sm text-slate-600">
            Use suas credenciais corporativas para acessar o painel.
          </p>
        </header>
        <LoginForm />
      </section>
    </main>
  )
}
