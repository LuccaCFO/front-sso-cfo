import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { changePasswordEmailService } from '../services/changePasswordEmailService'
import { forgotPasswordSchema, type ForgotPasswordData } from '../schemas/forgotPassword.schema'

type ForgotPasswordFormProps = {
  onBackToLogin: () => void
}

export function ForgotPasswordForm({ onBackToLogin }: ForgotPasswordFormProps) {
  const [serverError, setServerError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(values: ForgotPasswordData) {
    setServerError(null)
    setSuccessMessage(null)

    try {
      const response = await changePasswordEmailService(values)
      setSuccessMessage(`E-mail de recuperacao enviado com sucesso para ${values.email}. Token: ${response.token}.`)
    } catch {
      setServerError('Nao foi possivel enviar o e-mail. Tente novamente.')
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-1.5">
        <label htmlFor="email" className="auth-label">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="Digite seu e-mail"
          className="auth-input"
          {...register('email')}
        />
        {errors.email ? (
          <p className="text-sm text-red-700" role="alert">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      {serverError ? (
        <p className="text-sm text-red-700" role="alert">
          {serverError}
        </p>
      ) : null}

      {successMessage ? <p className="text-sm text-emerald-700">{successMessage}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="auth-submit"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar recuperacao'}
      </button>

      <button type="button" className="auth-link justify-self-end" onClick={onBackToLogin}>
        Voltar para login
      </button>
    </form>
  )
}
