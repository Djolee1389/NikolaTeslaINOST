import { createRoot } from "react-dom/client";
import React from "react";
import App from "./assets/App";
import "./index.css";
import { useState } from "react";
import { IntlProvider } from "react-intl";
import { getSavedLocale } from "./utils/locale";

import messages_sr from "./locales/sr.json";
import messages_en from "./locales/en.json";

const messages = {
  en: messages_en,
  sr: messages_sr,
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

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(<Root />);
}
