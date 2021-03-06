import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from '../translations/en.json';


const resources = {
  en: {
    translation: translationEn
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false 
    },
    debug: true,
    fallbackLng: 'en',
  });

  export default i18n;