import documentSVG from "../../../../public/document.svg"
import userSVG from "../../../../public/user.svg"

export function SecondaryActions() {
  return (
    <div className="grid gap-2">
      <p className="my-5 flex items-center gap-3 text-xs text-slate-400 before:content-[''] before:h-px before:flex-1 before:bg-cfo-border after:content-[''] after:h-px after:flex-1 after:bg-cfo-border">
        OU
      </p>
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-xl border border-cfo-border px-4 py-3 text-left text-slate-300 transition hover:bg-slate-50 hover:text-black"
      >
        <div className="flex gap-3">
          <img src={documentSVG} alt="Ícone de usuário" />
          <div>
            <strong className="block text-lg font-semibold text-slate-800">Solicitar novo usuario</strong>
            <p className="block text-sm text-slate-400">Primeiro acesso ao sistema</p>
          </div>
        </div>
        <span className="text-lg" aria-hidden="true">
          {'>'}
        </span>
      </button>
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-xl border border-cfo-border px-4 py-3 text-left text-slate-300 transition hover:bg-slate-50 hover:text-black">
        <div className="flex gap-3">
          <img src={userSVG} alt="ícone de documento" />
          <div>
            <strong className="block text-lg font-semibold text-slate-800">Verificar status da solicitacao</strong>
            <p className="block text-sm text-slate-400">Acompanhe seu pedido de acesso</p>
          </div>
        </div>
        <span className="text-lg" aria-hidden="true">
          {'>'}
        </span>
      </button>
    </div>
  )
}
