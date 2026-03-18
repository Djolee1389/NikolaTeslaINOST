import React from "react";
import { BurgerMenu } from "./BurgerMenu";

type reference = React.RefObject<HTMLDivElement | null>;

type Props = {
  heroRef: reference;
  bioRef: reference;
  izumiRef: reference;
  factsRef: reference;
  galerijaRef: reference;
};

function Navbar({ heroRef, bioRef, izumiRef, factsRef, galerijaRef }: Props) {
  const clicked = (ref: reference): void => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="w-full h-[15dvh] fixed p-10 md:p-0 top-0 flex justify-between items-center   z-50 md:justify-around ">
      <span onClick={() => clicked(bioRef)} className="nav-link hidden md:block">Biografija</span>
      <span onClick={() => clicked(izumiRef)} className="nav-link hidden md:block">Izumi</span>
      <div className="h-full md:h-[60%] flex items-center">
        <img
          src="/Logo.png"
          alt="munja"
          className="h-full"
          onClick={() => clicked(heroRef)}
        />
      </div>
      <span onClick={() => clicked(factsRef)} className="nav-link hidden md:block">Zanimljivosti</span>
      <span onClick={() => clicked(galerijaRef)} className="nav-link hidden md:block">Galerija</span>
     <div className="md:hidden">
        <BurgerMenu
          heroRef={heroRef}
          bioRef={bioRef}
          izumiRef={izumiRef}
          factsRef={factsRef}
          galerijaRef={galerijaRef}
        />
     </div>
    </nav>
  );
}

export default Navbar;
