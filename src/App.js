import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Trans, useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <h1>{t("myName")}</h1>
      <h4>
        {/* That's how we pass the singular or plural value. */}
        {t("notification", {
          count: 2,
        })}
      </h4>
      <Trans i18nKey="intro" components={{ bold: <b />, italic: <i /> }} />

      <div>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("fr")}>Français</button>
      </div>
    </div>
  );
}

export default App;
