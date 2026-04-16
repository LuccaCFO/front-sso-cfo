import locationSVG from '../../../../public/location.svg';
import shieldSVG from '../../../../public/shield.svg';
import phoneSVG from '../../../../public/phone.svg';
import emailSVG from '../../../../public/email.svg';


export function Header() {
  return (
    <header className="flex flex-col items-center gap-8">
      <div className="min-w-full flex items-center justify-center bg-cfo-primary text-white">
        <div className="flex items-center gap-2 px-6 py-3">
          <img src={locationSVG} alt=""/>
          <span>Brasília - DF</span>
        </div>
        <div className="flex items-center gap-2 px-6 py-3">
          <img src={phoneSVG} alt=""/>
          <span>(61) 3033-449 / 3033-4469</span>
        </div>
        <div className="flex items-center gap-2 px-6 py-3">
          <img src={emailSVG} alt=""/>
          <span>cfo@cfo.org.br</span>
        </div>
        <div className="flex items-center gap-2 px-6 py-3">
          <img src={shieldSVG} alt=""/>
          <span>Acesso restrito a usuário autorizados</span>
        </div>
      </div>
      <div className="flex">
        <img src="../../../../public/logo.png" alt="" />
      </div>
    </header>
)
};