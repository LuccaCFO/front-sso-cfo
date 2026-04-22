import { ForgotPasswordForm } from "./forgotPasswordForm";
import { LoginForm } from "./LoginForm";
import { SecondaryActions } from "./SecondaryActions";
import padlockSVG from "../../../assets/images/padlock.svg";
import { useState } from "react";

export function LoginContainer() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const subtitle = showForgotPassword
    ? "Informe seu e-mail para recuperar o acesso"
    : "Informe suas credenciais para continuar";
  return (
    <div className="min-w-full mc:min-w-[50%] px-6 py-7">
      <div className="mb-6 text-center" aria-label="Cabecalho do formulario">
        <div
          className="mx-auto mb-3 grid h-13 w-13 place-items-center rounded-xl bg-cfo-primary text-lg text-white"
          aria-hidden="true"
        >
          <img src={padlockSVG} />
        </div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Acesso aos sistemas
        </h2>
        <p className="mt-1 text-sm text-cfo-muted">{subtitle}</p>
      </div>
      {showForgotPassword ? (
        <ForgotPasswordForm
          onBackToLogin={() => setShowForgotPassword(false)}
        />
      ) : (
        <LoginForm onForgotPassword={() => setShowForgotPassword(true)} />
      )}
      <SecondaryActions />
    </div>
  );
}
