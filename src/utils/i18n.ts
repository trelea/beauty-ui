import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import ro from "./locales/ro/translation.json";
import ru from "./locales/ru/translation.json";

const resources = { en, ro, ru };

i18n.use(initReactI18next)
    // .use(LanguageDetector)
    .init({
        resources,
        debug: false,
        fallbackLng: "ro",
        lng: localStorage.getItem("beauty-i18n-Lang") || "ro",
        interpolation: { escapeValue: false },
        // detection: {
        //     order: ["path", "localStorage"],
        // },
    });
