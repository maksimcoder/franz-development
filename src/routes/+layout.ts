import { loadTranslations, locale, loading } from '$lib/translations/translations';
import type { LayoutLoad } from './$types';

export const csr = true;
export const ssr = true;
export const prerender = false;

export const load: LayoutLoad = async ({ url, data }) => {
  const { pathname } = url;

  const defaultLocale = 'en';
  const initLocale = data.locale || defaultLocale;
  await loadTranslations(initLocale, pathname);
  return {};
}
