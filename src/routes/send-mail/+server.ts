import sendmail from "sendmail";

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';


export const POST = (async (event) => {
  const data = await event.request.formData();

  const email     = data.get('email');
  const full_name = data.get('full_name');
  const message   = data.get('message');

  const mailClient = sendmail();
  mailClient({
    from: 'no-reply@franz-group.com',
    to: 'a.dugaev@yandex.ru', // 'no-reply@franz-group.com',
    subject: 'Contact form message',
    text: `Email: ${email} \r\nName: ${full_name} \r\nMessage: ${message}`,
  },
    function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
  });

  return json({ success: true });
}) satisfies RequestHandler;
