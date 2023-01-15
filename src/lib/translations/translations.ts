import i18n  from 'sveltekit-i18n';
import lang from './langs.json';
import ru from './ru/common.json';
import en from './en/common.json';


/** @type {import('sveltekit-i18n').Config} */
const config = ({
  fallbackLocale: 'en',
  translations: {
    en: { lang },
    ru: { lang },
  },
  loaders: [
    {
      locale: 'en',
      key: 'common',
      loader: async () => (
        await import('./en/common.json')
      ).default,
    },

    {
      locale: 'ru',
      key: 'common',
      loader: async () => (
        await import('./ru/common.json')
      ).default,
    },
  ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
