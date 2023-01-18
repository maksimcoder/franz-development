import { error } from '@sveltejs/kit';
import client from '$lib/services';

import type { PageServerLoad } from './$types';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ params }) => {
  try {
    const criteria = {
      content_type: 'post',
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

