import { useState } from 'react'
import { Footer } from '../../features/auth/components/Footer'
import { ForgotPasswordForm } from '../../features/auth/components/forgotPasswordForm'
import { Header } from '../../features/auth/components/Header'
import { LoginForm } from '../../features/auth/components/LoginForm'
import { SecondaryActions } from '../../features/auth/components/SecondaryActions'

export function LoginPage() {
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  const subtitle = showForgotPassword
    ? 'Informe seu e-mail para recuperar o acesso'
    : 'Informe suas credenciais para continuar'

  return (
    <div className="auth-page">
      <Header />
      <main className="auth-main">
        <section className="auth-card" aria-label="Area de autenticacao">
        <div className="auth-nav" aria-label="Cabecalho do formulario">
          <div className="auth-nav-icon" aria-hidden="true">
        🔒
          </div>
          <h1 className="auth-nav-title">Acesso ao Sistema</h1>
          <p className="auth-nav-subtitle">{subtitle}</p>
        </div>
          {showForgotPassword ? (
            <ForgotPasswordForm onBackToLogin={() => setShowForgotPassword(false)} />
          ) : (
            <LoginForm onForgotPassword={() => setShowForgotPassword(true)} />
          )}
          <SecondaryActions />
        </section>
      </main>
      <Footer />
    </div>
  )
}
