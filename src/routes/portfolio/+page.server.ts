import { error } from '@sveltejs/kit';
import { getLocale } from '$lib/translations/helper';
import client from '$lib/services';

import type { PageServerLoad } from './$types';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ params, cookies }) => {
  try {
    const locale = cookies.get("locale") || "en";
    const criteria = {
      content_type: 'project',
      locale: getLocale(locale),
    };

    const projects = await client.getEntries(criteria);
    if (projects) {
      return {
        projects: projects?.items || [],
      };
    }
    throw error(404, 'Not found');
  }
  catch (err: any) {
    throw error(404, 'Not found');
  }
}) satisfies PageServerLoad;

