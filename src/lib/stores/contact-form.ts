import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

interface IContactForm {
	visible: boolean;
}

const CONTACT_FORM = {
	visible: false
};

const { subscribe, set, update } = writable(CONTACT_FORM) as Writable<IContactForm>;
const clear = () => set(CONTACT_FORM);

const contactFormStore = {
	subscribe,
	set,
	update,
	clear
};

export default contactFormStore;
