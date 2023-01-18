<script lang="ts">
  const form = {
    full_name: '',
    email: '',
    message: '',
  }

  /**
   * On form submit
   */
  const onSubmit = (): void => {
    // console.log(form);
  }
</script>

<form
  class="contact-form"
  on:submit|preventDefault={onSubmit}
>
  <h3 class="h3 contact-form--title">
    Get in <i>touch</i>
  </h3>

  <input
    type="text"
    placeholder="Full name"
    class="form-control"
    bind:value={form.full_name}
  >
  <input
    type="email"
    placeholder="Email"
    class="form-control"
    bind:value={form.email}
  >
  <input
    type="text"
    placeholder="Message..."
    class="form-control"
    bind:value={form.message}
  >

  <footer class="contact-form--footer">
    <button class="link-round">
      Send
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
