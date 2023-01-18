import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }) => {

  const userLocale = cookies.get("locale");
  const locale = userLocale || "en";
  return {
    locale: locale
  };
}) satisfies LayoutServerLoad;


