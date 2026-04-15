import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { login } from '../services/authService'
import { loginSchema, type LoginFormData } from '../schemas/login.schema'

export function LoginForm() {
  const [serverError, setServerError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: LoginFormData) {
    setServerError(null)
    setSuccessMessage(null)

    try {
      const response = await login(values)
      setSuccessMessage(`Login realizado com sucesso. Bem-vindo, ${response.userName}.`)
    } catch {
      setServerError('Nao foi possivel realizar o login. Tente novamente.')
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-1.5">
        <label htmlFor="email" className="text-sm font-semibold text-slate-700">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="seu.nome@empresa.com"
          className="rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-600 focus:ring-3 focus:ring-blue-200"
          {...register('email')}
        />
        {errors.email ? (
          <p className="text-sm text-red-700" role="alert">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="password" className="text-sm font-semibold text-slate-700">
          Senha
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="Digite sua senha"
          className="rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-600 focus:ring-3 focus:ring-blue-200"
          {...register('password')}
        />
        {errors.password ? (
          <p className="text-sm text-red-700" role="alert">
            {errors.password.message}
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
        className="mt-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  )
}
