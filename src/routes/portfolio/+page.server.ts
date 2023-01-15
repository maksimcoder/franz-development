import { error } from '@sveltejs/kit';
import client from '$lib/services';

import type { PageServerLoad } from './$types';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ params }) => {
  try {
    const projectsCriteria = {
      content_type: 'project',
    };

    const projects = await client.getEntries(projectsCriteria);
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

