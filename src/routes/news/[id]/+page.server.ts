import { error } from '@sveltejs/kit';
import client from '$lib/services';
import { getLocale } from '$lib/translations/helper';

import type { PageServerLoad } from './$types';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ params, cookies }) => {
  try {
    let index = 0;
    const slug = params.id;
    const locale = cookies.get("locale") || "en";
    const criteria = {
      content_type: 'post',
      locale: getLocale(locale)
    };

    const result = await client.getEntries(criteria);
    const posts = result.items
    const post  = posts.find((el, i) => {
      if (el.fields.slug === slug) {
        index = i;
        return true;
      }
      else {
        return false;
      }
    });


    index = index + 1 < posts.length ? index + 1 : 0;
    const next = posts[index];

    if (posts) {
      return {
        post,
        next,
      };
    }
    throw error(404, 'Not found');
  }
  catch (err: any) {
    throw error(404, 'Not found');
  }
}) satisfies PageServerLoad;

