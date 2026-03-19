import React from "react";
import { useEffect, useState } from "react";
// import LanguageSwitch from "./LanguageSwitch";

type reference = React.RefObject<HTMLDivElement | null>;

type Props = {
  heroRef: reference;
  bioRef: reference;
  izumiRef: reference;
  factsRef: reference;
  galerijaRef: reference;
};

export const BurgerMenu = ({
  heroRef,
  bioRef,
  izumiRef,
  factsRef,
  galerijaRef,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const clicked = (ref: reference): void => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        title={isOpen ? "Close menu" : "Open menu"}
        onKeyDown={(e) => {
          if (e.key === "Escape") setIsOpen(false);
        }}
        className="relative z-50 flex flex-col gap-1 "
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all transform ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all transform ${
            isOpen ? "-rotate-45 -translate-y-1" : ""
          }`}
        ></span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 pt-20 bg-(--black)  z-40 flex flex-col justify-between p-8 transition-(--transition)">
          <div className="flex flex-col gap-6">
            <span onClick={() => clicked(heroRef)}>Pocetna</span>
            <span onClick={() => clicked(bioRef)}>Biografija</span>
            <span onClick={() => clicked(galerijaRef)}>Galerija</span>
            <span onClick={() => clicked(izumiRef)}>Izumi</span>
            <span onClick={() => clicked(factsRef)}>Zanimljivosti</span>
          </div>
        </div>
      )}
    </div>
  );
};
