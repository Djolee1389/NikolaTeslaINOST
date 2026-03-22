import { createRoot } from "react-dom/client";
import React from "react";
import App from "./assets/App";
import "./index.css";
import { useState } from "react";
import { IntlProvider } from "react-intl";

import messages_sr from "./locales/sr.json";
import messages_en from "./locales/en.json";

const messages = {
  en: messages_en,
  sr: messages_sr,
};

const getSavedLocale = () => {
  const saved = localStorage.getItem("locale");
  if (saved === "en" || saved === "sr") return saved;

  const browserLang = navigator.language.split(/[-_]/)[0];
  return browserLang === "en" || browserLang === "sr" ? browserLang : "sr";
};
function Root() {
  const [locale, setLocale] = useState<"sr" | "en">(getSavedLocale());

  return (
    <React.StrictMode>
      <IntlProvider
        messages={messages[locale as keyof typeof messages] as any}
        locale={locale}
        defaultLocale="sr"
      >
        <App setLocale={setLocale} />
      </IntlProvider>
    </React.StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
