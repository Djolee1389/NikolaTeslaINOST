import React from "react";
import { BurgerMenu } from "./BurgerMenu";
import { LanguageSwitch } from "./LanguageSwitch";
import { useIntl } from "react-intl";

type reference = React.RefObject<HTMLDivElement | null>;

type Props = {
  heroRef: reference;
  bioRef: reference;
  izumiRef: reference;
  factsRef: reference;
  galerijaRef: reference;
  setLocale: (lang: "sr" | "en") => void;
};

function Navbar({
  heroRef,
  bioRef,
  izumiRef,
  factsRef,
  galerijaRef,
  setLocale,
}: Props) {
  const intl = useIntl();
  const clicked = (ref: reference): void => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav className="w-full h-[10vh] bg-(--black) fixed top-0 flex justify-between md:justify-center  items-center px-8 z-50 sm:px-15">
        <div className="flex w-full lg:w-2/3 justify-between items-center md:gap-0">
          <div
            onClick={() => clicked(bioRef)}
            className="nav-link hidden md:block text-center flex-1"
          >
            <span>{intl.formatMessage({ id: "navbar.biografija" })}</span>
          </div>
          <div
            onClick={() => clicked(izumiRef)}
            className="nav-link hidden md:block text-center flex-1"
          >
            <span>{intl.formatMessage({ id: "navbar.izumi" })}</span>
          </div>
          <div className="h-10  flex items-center md:h-15 md:p-1 justify-center md:flex-1">
            <img
              src="/Logo.png"
              alt="munja"
              className="h-full"
              onClick={() => clicked(heroRef)}
            />
          </div>
          <div
            onClick={() => clicked(factsRef)}
            className="nav-link hidden md:block text-center flex-1"
          >
            <span>{intl.formatMessage({ id: "navbar.zanimljivosti" })}</span>
          </div>
          <div
            onClick={() => clicked(galerijaRef)}
            className="nav-link hidden md:block text-center flex-1"
          >
            <span>{intl.formatMessage({ id: "navbar.galerija" })}</span>
          </div>
          <div className="md:hidden">
            <BurgerMenu
              heroRef={heroRef}
              bioRef={bioRef}
              izumiRef={izumiRef}
              factsRef={factsRef}
              galerijaRef={galerijaRef}
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
