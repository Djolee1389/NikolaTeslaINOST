import { useState, useRef, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { getSavedLocale, type Locale } from "../utils/locale";

type LanguageSwitchProps = {
  setLocale: (lang: Locale) => void;
  inline?: boolean;
  className?: string;
};

const LANGUAGE_OPTIONS: Locale[] = ["sr", "en"];

export const LanguageSwitch = ({
  setLocale,
  inline = false,
  className = "",
}: LanguageSwitchProps) => {
  const [open, setOpen] = useState(false);
  const [locale, setLocalState] = useState<Locale>(getSavedLocale());

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (lang: Locale) => {
    setLocalState(lang);
    setLocale(lang);
    localStorage.setItem("locale", lang);
    setOpen(false);
  };

  const containerClass = inline
    ? `relative text-xs text-white select-none ${className}`
    : `fixed top-[5vh] transform -translate-y-[50%] right-4 z-1000 text-xs text-white select-none ${className}`;

  return (
    <div ref={dropdownRef} className={containerClass}>
      <button
        onClick={() => setOpen(!open)}
        className="border border-white px-2 py-1 h-8 w-15 rounded-sm flex items-center justify-between cursor-pointer transition-(--transtion)"
        aria-label="Toggle language"
        aria-expanded={open}
      >
        {locale.toUpperCase()}
        {!open ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      </button>

      {open && (
        <div className="absolute  left-0 border rounded-sm w-15  border-white  flex flex-col">
          {LANGUAGE_OPTIONS.map((lang) => (
            <button
              key={lang}
              onClick={() => handleSelect(lang)}
              className={`px-2 py-1 h-8 text-left cursor-pointer hover:font-bold transition-(--transition) } ${lang === locale ? "bg-(--subtext)" : ""}`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
