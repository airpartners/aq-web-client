/**
 * This file is specifically for localization.
 * Documentation can be found here:
 * https://react.i18next.com/legacy-v9/step-by-step-guide
 */
import i18n from "i18next";
import LngDetector from "i18next-browser-languagedetector";
import {reactI18nextModule} from "react-i18next";

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationESMX from './locales/es-MX/translation.json';

// Add translation resources here
const resources = {
    en: {
        translation: translationEN
    },
    es: {
        translation: translationES
    },
    esMX: {
        translation: translationESMX
    }
};

i18n
    .use(LngDetector)
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: ["en", "es", "esMX"],
        detection: {
            // order and from where user language should be detected
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

            // keys or params to lookup language from
            lookupQuerystring: 'lng',
            lookupCookie: 'i18next',
            lookupLocalStorage: 'i18nextLng',
            lookupFromPathIndex: 0,
            lookupFromSubdomainIndex: 0,

            // cache user language on
            caches: ['localStorage', 'cookie'],
            excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

            // only detect languages that are in the whitelist
            checkWhitelist: true
        },
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
