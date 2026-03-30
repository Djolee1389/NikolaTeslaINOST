export type Locale = "sr" | "en";

export const getSavedLocale = (): Locale => {
  const saved = localStorage.getItem("locale");
  if (saved === "en" || saved === "sr") return saved;

  const browserLang = navigator.language.split(/[-_]/)[0];
  return browserLang === "en" || browserLang === "sr" ? (browserLang as Locale) : "sr";
};
