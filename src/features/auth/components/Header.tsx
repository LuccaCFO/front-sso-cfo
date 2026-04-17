import locationSVG from '../../../assets/images/location.svg';
import shieldSVG from '../../../assets/images/shield.svg';
import phoneSVG from '../../../assets/images/phone.svg';
import emailSVG from '../../../assets/images/email.svg';
import logoCFO from '../../../assets/images/logo.png'


export function Header() {
  return (
    <header className="flex flex-col items-center gap-8">
      <div className="min-w-full flex items-center justify-center flex-wrap bg-cfo-primary text-white">
        <div className="flex items-center gap-2 px-6 py-0 mc:py-3">
          <img src={locationSVG} alt="Ícone de seta, indicando localização"/>
          <span>Brasília - DF</span>
        </div>
        <div className="flex items-center gap-2 px-6 py-0 mc:py-3">
          <img src={phoneSVG} alt="Ícone de telefone"/>
          <span>(61) 3033-4499 / 3033-4469</span>
        </div>
        <div className="flex items-center gap-2 px-6 py-0 mc:py-3">
          <img src={emailSVG} alt="Ícone de uma carta"/>
          <span>cfo@cfo.org.br</span>
        </div>
        <div className="flex items-center gap-2 px-6 py-0 mc:py-3">
          <img src={shieldSVG} alt="Ícone de um escudo"/>
          <span>Acesso restrito a usuário autorizados</span>
        </div>
      </div>
      <div className="flex">
        <img src={logoCFO} alt="Brasão do Brasil e logo do CFO" />
      </div>
    </header>
)
};