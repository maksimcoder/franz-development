import {  locale } from '$lib/translations/translations';

export const getLocale = (): string => {
  return (locale.get() === 'ru') ? 'ru' : 'en-US';
}
