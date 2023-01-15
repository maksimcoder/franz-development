import { error } from '@sveltejs/kit';
import client from '$lib/services';

import type { PageServerLoad } from './$types';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ params }) => {
  try {
    const indexPageId = '2iEk1pjHs9Zn1qCuPZlM9d';
    const projectsCriteria = {
      content_type: 'project',
      limit: 4,
    };

    const [ page, projects ] = await Promise.all([
      client.getEntry(indexPageId),
      client.getEntries(projectsCriteria),
    ]);

    if (projects && page) {
      return {
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

