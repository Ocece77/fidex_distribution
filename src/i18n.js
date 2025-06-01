import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../src/locales/en/translation.json';
import fr from '../src/locales/fr/translation.json';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'fr',
    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'], // sauvegarde la langue dans localStorage
    },
    interpolation: {
      escapeValue: false, 
    },
    // language resources
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    
  });

export default i18n;