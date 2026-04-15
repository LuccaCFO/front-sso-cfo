export function SecondaryActions() {
  return (
    <div className="auth-secondary-actions">
      <p className="auth-separator">OU</p>

      <button type="button" className="auth-secondary-button">
        <span className="auth-secondary-content">
          <span className="auth-secondary-icon" aria-hidden="true">
            +
          </span>
          <span>
            <strong className="auth-secondary-title block">Solicitar novo usuario</strong>
            <span className="auth-secondary-description block">Primeiro acesso ao sistema</span>
          </span>
        </span>
        <span className="auth-secondary-chevron" aria-hidden="true">
          {'>'}
        </span>
      </button>

      <button type="button" className="auth-secondary-button">
        <span className="auth-secondary-content">
          <span className="auth-secondary-icon" aria-hidden="true">
            []
          </span>
          <span>
            <strong className="auth-secondary-title block">Verificar status da solicitacao</strong>
            <span className="auth-secondary-description block">Acompanhe seu pedido de acesso</span>
          </span>
        </span>
        <span className="auth-secondary-chevron" aria-hidden="true">
          {'>'}
        </span>
      </button>
    </div>
  )
}
