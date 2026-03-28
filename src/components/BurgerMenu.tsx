import { useEffect, useState } from "react";
import { LanguageSwitch } from "./LanguageSwitch";
import { useIntl } from "react-intl";

type Props = {
  setLocale: (lang: "sr" | "en") => void;
};

const links = [
  { id: "navbar.pocetna", href: "#pocetna" },
  { id: "navbar.biografija", href: "#biografija" },
  { id: "navbar.izumi", href: "#izumi" },
  { id: "navbar.zanimljivosti", href: "#zanimljivosti" },
  { id: "navbar.galerija", href: "#galerija" },
];

export const BurgerMenu = ({ setLocale }: Props) => {
  const intl = useIntl();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-white"
                onClick={() => setIsOpen(false)}
              >
                {intl.formatMessage({ id: link.id })}
              </a>
            ))}
            <div className="mt-4">
              <LanguageSwitch setLocale={setLocale} inline />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
