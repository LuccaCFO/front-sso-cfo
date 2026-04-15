import locationSVG from '../../../../public/location.svg';
import shieldSVG from '../../../../public/shield.svg';
import phoneSVG from '../../../../public/phone.svg';
import emailSVG from '../../../../public/email.svg';


export function Header() {
  return (
    <header>
      <div className="auth-header-top">
        <div className="auth-header-top-div">
          <img src={locationSVG} alt=""/>
          <span>Brasília - DF</span>
        </div>
        <div className="auth-header-top-div">
          <img src={phoneSVG} alt=""/>
          <span>(61) 3033-449 / 3033-4469</span>
        </div>
        <div className="auth-header-top-div">
          <img src={emailSVG} alt=""/>
          <span>cfo@cfo.org.br</span>
        </div>
        <div className="auth-header-top-div">
          <img src={shieldSVG} alt=""/>
          <span>Acesso restrito a usuário autorizados</span>
        </div>
      </div>
      <div className="auth-header-brand">
        <img src="../../../../public/logo.png" alt="" />
        <span className="auth-brand-badge">CFO | Visao CFO</span>
      </div>
    </header>
)
};