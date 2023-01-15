// import { error } from '@sveltejs/kit';

import { redirect } from '@sveltejs/kit';
import { loadTranslations } from '$lib/translations/translations';

// Services
// import client from '$lib/services';

// Types
import type { LayoutServerLoad } from './$types';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ cookies, url, locals }) => {
  // Localization loading
  const { pathname, searchParams } = url;

  if (searchParams.has('lang')) {
    const newLang = searchParams.get('lang');
    cookies.set('lang', newLang);
    throw redirect(307, pathname);
  }
  else {
    const lang = cookies.get("locale");
    if (!lang) {
      cookies.set("locale", 'en')
    }
  }

  const userLocale = cookies.get('lang');
  const localeList = ['en', 'ru'];

  const initLocale = userLocale && localeList.includes(userLocale)
    ? userLocale
    : 'en';

  // await loadTranslations(initLocale);
  return {};
}) satisfies LayoutServerLoad;


// export const actions: Actions = {
//   default: async ({ request, cookies }) => {
//       const formData = await request.formData();
//       console.log(formData)
//       // const login = formData.get('login');
//       // const password = formData.get('password');

//       // if (login == 'admin' && password == '...') {
//       //     cookies.set(
//       //         'auth', '42',
//       //         {
//       //             path: '/',
//       //             maxAge: 60 * 60 * 24 * 365,
//       //             httpOnly: false, // <-- if you want to read it in the browser
//       //         },
//       //     );
//       //     throw redirect(302, '/');
//       // }
//       // return invalid(400, { error: 'Invalid login or password' });
//   },
// }
