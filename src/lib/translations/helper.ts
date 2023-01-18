// import {  locale } from '$lib/translations/translations';

export const getLocale = (locale = "en"): string => {
  return (locale && locale === 'ru') ? 'ru' : 'en-US';
}
