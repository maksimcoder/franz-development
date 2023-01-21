<script lang="ts">
  import { fly } from 'svelte/transition';
  import { browser } from "$app/environment";
  import { z } from "zod";
  import { t } from '$lib/translations/translations';
  import emailjs from '@emailjs/browser';

  const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Data
  const form = {
    loading: false,
    full_name: '',
    email: '',
    message: '',
    is_sent: false,
    errors: [],
  }

  const FormValidator = z.object({
    full_name: z.string().min(1).max(20),
    email: z.string().email(),
    message: z.string().min(5).max(200),
  });

  $: isValid = validateFormData(form);

  function validateFormData(input: unknown): boolean {
    if (browser) {
      const isValidData = FormValidator.safeParse(input);
      if (!isValidData.success) {
        form.errors = isValidData.error.issues;
        return false;
      }
      else {
        return true;
      }
    }
  }

  /**
   * On form submit
   */
  const onSubmit = async (event: Event): Promise<any> => {
    form.loading = true;

    try {
      const contactForm = event.target as HTMLFormElement
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, contactForm, PUBLIC_KEY);

      form.is_sent   = true;
      form.full_name = "";
      form.email     = "";
      form.message   = "";

      setTimeout(() => {
        form.is_sent = false;
      }, 5000);
    }
    catch(err) {
      throw new Error(err)
    }
    finally {
      form.loading = false;
    }
  }
</script>

<form
  class="contact-form"
  on:submit|preventDefault={onSubmit}
>
  <h3 class="h3 contact-form--title">
    {@html $t("common.contact_form.title")}
  </h3>

  <input
    type="text"
    name="full_name"
    placeholder={$t("common.contact_form.name")}
    disabled={form.loading}
    class="form-control"
    bind:value={form.full_name}
  >
  <input
    type="email"
    name="email"
    placeholder={$t("common.contact_form.email")}
    disabled={form.loading}
    class="form-control"
    bind:value={form.email}
  >
  <input
    type="text"
    name="message"
    placeholder={$t("common.contact_form.message")}
    disabled={form.loading}
    class="form-control"
    bind:value={form.message}
  >

  {#if form.is_sent}
    <div transition:fly={{ y: 15, duration: 300 }}>
      <p class="text-lg">{$t("common.contact_form.submitted")}</p>
    </div>
  {/if}

  <footer class="contact-form--footer">
    <button class="link-round" disabled={form.loading || !isValid}>
      {$t("common.actions.send")}
    </button>
  </footer>
</form>

<style lang="scss">
  .contact-form {
    @apply w-full max-w-[var(--max-content-width)] mx-auto;
    @apply flex flex-col;

    .form-control {
      @apply bg-transparent rounded-none outline-none;
      @apply text-2xl;
      @apply py-4;
      @apply mb-8;
      @apply border-b border-solid border-b-[var(--color-light-gray)];
      @apply placeholder:text-gray-500;

      &:focus {
        @apply outline-none;
        @apply border-b-white;
      }
    }

    &--footer {
      @apply py-4;
    }
  }
</style>
