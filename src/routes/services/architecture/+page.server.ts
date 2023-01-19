import { error } from '@sveltejs/kit';
import { getLocale } from '$lib/translations/helper';

import client from '$lib/services';

import type { PageServerLoad } from './$types';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ cookies }) => {
  try {
    const pageId = '2bqARoBxTrRg9GjskWmBUW';
    const query = {
      locale: getLocale(cookies.get("locale"))
    };

    const page = await client.getEntry(pageId, query);

    if (page) {
      return {
        page: page,
      };
    }
    throw error(404, 'Not found');
  }
  catch (err: any) {
    throw error(404, 'Not found');
  }
}) satisfies PageServerLoad;

