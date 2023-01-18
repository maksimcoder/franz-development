import { error } from '@sveltejs/kit';
import client from '$lib/services';
import { getLocale } from '$lib/translations/helper';

import type { PageServerLoad } from './$types';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ params, cookies }) => {
  try {
    const locale = cookies.get("locale") || "en";
    const indexPageId = '2iEk1pjHs9Zn1qCuPZlM9d';
    const criteria = {
      content_type: 'project',
      limit: 4,
      locale: getLocale(locale)
    };

    const [ page, projects ] = await Promise.all([
      client.getEntry(indexPageId),
      client.getEntries(criteria),
    ]);

    if (projects && page) {
      return {
        locale: locale,
        page: page,
        projects: projects?.items || [],
      };
    }
    throw error(404, 'Not found');
  }
  catch (err: any) {
    throw error(404, 'Not found');
  }
}) satisfies PageServerLoad;

