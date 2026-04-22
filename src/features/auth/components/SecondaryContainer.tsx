import ssoImg from "../../../assets/images/ssoImg.jpeg";

export function SecondaryContainer() {
  return (
    <div
      className="w-full min-h-100 px-6 py-7 rounded-bl-2xl rounded-tl-2xl bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${ssoImg})` }}
    >
      <div className="absolute bottom-0 right-0 w-11.25 h-11.25 border bg-[#871012] border-[#871012]"></div>
    </div>
  );
}
