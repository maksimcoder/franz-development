
import contentful from 'contentful';

const DELIVERY_TOKEN = import.meta.env.VITE_CONTENTFUl_DELIVERY_TOKEN;
const SPACE_ID       = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const HOST           = import.meta.env.VITE_CONTENTFUL_HOST;

export const client = contentful.createClient({
  accessToken: DELIVERY_TOKEN,
  space: SPACE_ID,
  host: HOST
});
