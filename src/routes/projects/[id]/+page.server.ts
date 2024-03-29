import { error } from '@sveltejs/kit';
import { getLocale } from '$lib/translations/helper';
import client from '$lib/services';

import type { PageServerLoad } from './$types';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ params, cookies }) => {
  try {
    let index = 0;
    const slug = params.id;
    const locale = cookies.get("locale") || "en";

    const projectsCriteria = {
      // 'fields.slug': slug,
      // limit: 2,
      content_type: 'project',
      locale: getLocale(locale),
    };

    const result = await client.getEntries(projectsCriteria);
    const projects = result.items
    const project  = projects.find((el, i) => {
      if (el.fields.slug === slug) {
        index = i;
        return true;
      }
      else {
        return false;
      }
    });


    index = index + 1 < projects.length ? index + 1 : 0;
    const next = projects[index];

    if (projects) {
      return {
        project,
        next,
      };
    }
    throw error(404, 'Not found');
  }
  catch (err: any) {
    throw error(404, 'Not found');
  }
}) satisfies PageServerLoad;

