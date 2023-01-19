import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (({ url, cookies }) => {

  const defaultLocale = "en";
  const localeList = ["en", "ru"];
  const locale = url.searchParams.get('locale');

  const newLocale = (localeList.includes(<string>locale)) ? locale : defaultLocale;
  cookies.set("locale", <string>newLocale);
  const cookiesLocale = cookies.get("locale");

  throw redirect(307, '/');
  // return new Response(String(cookiesLocale));
}) satisfies RequestHandler;
