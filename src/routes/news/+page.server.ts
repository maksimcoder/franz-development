import { error } from '@sveltejs/kit';
import client from '$lib/services';
import { getLocale } from '$lib/translations/helper';

import type { PageServerLoad } from './$types';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ params, cookies }) => {
  try {
    const locale = cookies.get("locale") || "en";
    const criteria = {
      content_type: 'post',
      locale: getLocale(locale)
    };

    const posts = await client.getEntries(criteria);
    if (posts) {
      return {
        posts: posts?.items || [],
      };
    }
    throw error(404, 'Not found');
  }
  catch (err: any) {
    throw error(404, 'Not found');
  }
}) satisfies PageServerLoad;

