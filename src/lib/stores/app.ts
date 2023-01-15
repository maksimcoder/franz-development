import { writable } from 'svelte-local-storage-store';
import { DEFAULT_LOCALE } from '$lib/constants/languages';

const $$app = {
  locale: DEFAULT_LOCALE
}

const { subscribe, set, update } = writable('app', $$app);
const clear = () => set($$app);

const setLocale = (locale: string): void => {
  update(value => ({locale}));
};

const appStore = {
  subscribe,
  set,
  update,
  clear,
  setLocale,
};

export default appStore;
