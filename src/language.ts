import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    english: {
      translation: {
        test: 'English',
      },
    },
    korean: {
      translation: {
        test: '한국어',
      },
    },
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
