import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../services/authService";
import { loginSchema, type LoginFormData } from "../schemas/login.schema";
import doorSVG from "../../../assets/images/doorSVG.svg";

type LoginFormProps = {
  onForgotPassword: () => void;
};

export function LoginForm({ onForgotPassword }: LoginFormProps) {
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginFormData) {
    setServerError(null);
    setSuccessMessage(null);

    try {
      const response = await login(values);
      setSuccessMessage(
        `Login realizado com sucesso. Bem-vindo, ${response.userName}.`,
      );
    } catch {
      setServerError("Nao foi possivel realizar o login. Tente novamente.");
    }
  }
  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-1.5">
        <label
          htmlFor="email"
          className="text-[11px] font-semibold tracking-wide text-slate-600 uppercase"
        >
          E-mail
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="Digite seu e-mail"
          className="mt-1 w-full rounded-lg border border-cfo-border-1 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-cfo-primary"
          {...register("email")}
        />
        {errors.email ? (
          <p className="text-sm text-red-700" role="alert">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div className="grid gap-1.5">
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="text-[11px] font-semibold tracking-wide text-slate-600 uppercase"
          >
            Senha
          </label>
          <button
            type="button"
            className="text-xs font-medium text-cfo-primary hover:underline"
            onClick={onForgotPassword}
          >
            Esqueci minha senha
          </button>
        </div>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="Digite sua senha"
          className="mt-1 w-full rounded-lg border border-cfo-border-1 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-cfo-primary"
          {...register("password")}
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

      {successMessage ? (
        <p className="text-sm text-emerald-700">{successMessage}</p>
      ) : null}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full rounded-lg bg-cfo-primary px-4 py-2.5 text-sm font-semibold text-white hover:brightness-110"
      >
        <div className="flex gap-2 justify-center">
          <img src={doorSVG} alt="Ícone de uma porta" />
          <p>{isSubmitting ? "Entrando" : "Entrar"}</p>
        </div>
      </button>
    </form>
  );
}
