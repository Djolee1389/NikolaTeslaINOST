import { BurgerMenu } from "./BurgerMenu";
import { LanguageSwitch } from "./LanguageSwitch";
import { useIntl } from "react-intl";


type Props = {
  setLocale: (lang: "sr" | "en") => void;
};

function Navbar({ setLocale }: Props) {
  const intl = useIntl();

  return (
    <>
      <nav className="w-full h-[10vh] bg-(--black) fixed top-0 flex justify-between md:justify-center  items-center px-8 z-50 sm:px-15">
        <div className="flex w-full lg:w-2/3 justify-between items-center md:gap-0">
          <a href="#biografija"
            className="nav-link hidden md:block text-center flex-1"
          >
            <span>{intl.formatMessage({ id: "navbar.biografija" })}</span>
          </a>
          <a
          href="#izumi"
            className="nav-link hidden md:block text-center flex-1"
          >
            <span>{intl.formatMessage({ id: "navbar.izumi" })}</span>
          </a>
          <a href="#pocetna" className="h-10  flex items-center md:h-15 md:p-1 justify-center md:flex-1">
            <img
              src="/Logo.png"
              alt="munja"
              className="h-full"
            />
          </a>
          <a
            href="#zanimljivosti"
            className="nav-link hidden md:block text-center flex-1"
          >
            <span>{intl.formatMessage({ id: "navbar.zanimljivosti" })}</span>
          </a>
          <a
            href="#galerija"
            className="nav-link hidden md:block text-center flex-1"
          >
            <span>{intl.formatMessage({ id: "navbar.galerija" })}</span>
          </a>
          <div className="md:hidden">
            <BurgerMenu
              setLocale={setLocale}
            />
          </div>
        </div>
        <div className="hidden md:block">
          <LanguageSwitch setLocale={setLocale} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
