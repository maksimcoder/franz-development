// import { error, redirect } from '@sveltejs/kit';
// import type { Actions, RequestHandler } from './$types';

// export const actions: Actions = {
//   default: async (event) => {
//     // TODO log the user in

//     console.log(event);
//     const res = "success";

//     return new Response(String(res));
//   }
// };


import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST = (({ url, cookies }) => {
  const res = "success";
  // return new Response(String(res));
  return new Response(JSON.stringify({ success: true }));
}) satisfies RequestHandler;
