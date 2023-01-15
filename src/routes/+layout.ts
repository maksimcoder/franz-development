import { loadTranslations, locale, loading } from '$lib/translations/translations';
import type { LayoutLoad } from './$types';

export const csr = true;
export const ssr = true;
export const prerender = true;

export const load: LayoutLoad = async ({ url }) => {
  // const { pathname } = url;
  // const defaultLocale = 'en'; // get from cookie, user session, ...
  // const initLocale = locale.get() || defaultLocale; // set default if no locale already set
  // await loadTranslations(initLocale, pathname); // keep this just before the `return`


  // loading.subscribe($loading => {
  //   if ($loading ) {
  //     console.log('Loading translations...')
  //   }
  //   else {
  //     console.log('Loading translations done')
  //   }
  // });
  return {};
}
