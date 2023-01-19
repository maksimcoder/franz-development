<script lang="ts">
  import { t } from '$lib/translations/translations';

  // Data
  const form = {
    full_name: '',
    email: '',
    message: '',
  }

  /**
   * On form submit
   */
  const onSubmit = async (): Promise<any> => {
    const url = "/send-mail";
    const options = {
      method: "post",
      body: JSON.stringify({
        name: "Andrew",
      }),
    }
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
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
    placeholder={$t("common.contact_form.name")}
    class="form-control"
    bind:value={form.full_name}
  >
  <input
    type="email"
    placeholder={$t("common.contact_form.email")}
    class="form-control"
    bind:value={form.email}
  >
  <input
    type="text"
    placeholder={$t("common.contact_form.message")}
    class="form-control"
    bind:value={form.message}
  >

  <footer class="contact-form--footer">
    <button class="link-round">
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
