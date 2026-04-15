import locationSVG from '../../../../public/location.svg';

export function Header() {
  return (
    <header>
      <div className="auth-header-top">
        <div className="auth-header-top-div">
          <img src={locationSVG}/>
          <span>Brasília - DF</span>
        </div>
        <div>
          <img src={locationSVG}/>
          <span>(61) 3033-449 / 3033-4469</span>
        </div>
        <div>
          <img src={locationSVG}/>
          <span>cfo@cfo.org.br</span>
        </div>
        <div>
          <img src={locationSVG}/>
          <span>Acesso restrito a usuário autorizados</span>
        </div>
      </div>
      <div className="auth-header-brand">
        <span className="auth-brand-badge">CFO | Visao CFO</span>
      </div>
    </header>
)
};