import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Import translation files
import enTranslations from "./locales/en.json";
import deTranslations from "./locales/de.json";
import frTranslations from "./locales/fr.json";
import itTranslations from "./locales/it.json";
import plTranslations from "./locales/pl.json";

const resources = {
    en: {
        translation: enTranslations,
    },
    de: {
        translation: deTranslations,
    },
    fr: {
        translation: frTranslations,
    },
    it: {
        translation: itTranslations,
    },
    pl: {
        translation: plTranslations,
    },
};

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        debug: process.env.NODE_ENV === "development",

        detection: {
            order: ["localStorage", "cookie", "htmlTag", "path", "subdomain"],
            caches: ["localStorage", "cookie"],
        },

        interpolation: {
            escapeValue: false, // React already escapes values
        },

        react: {
            useSuspense: false,
        },
    });

export default i18n;
