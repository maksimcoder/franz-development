<script lang="ts">
  import "$lib/styles/app.scss";
  import { t } from '$lib/translations/translations';

  // Components
	import { Header, Footer, ContactForm } from '$lib/components/structure';
  import IconClose from "$lib/icons/IconClose.svelte";

  import { contactFormStore } from "$lib/stores";
</script>

<div class="wrapper">
	<Header />

	<main class="main">
		<slot />
	</main>

  <Footer />

  <div
    class="flex-col items-center justify-center fixed inset-0 z-50 bg-black"
    class:hidden={!$contactFormStore.visible}
    class:flex={$contactFormStore.visible}
  >

    <button
      class="overlay-close"
      on:click={() => {
        contactFormStore.update(value => {
          value.visible = false;
          return value;
        });
      }}
    >
      <span>{$t(`common.actions.close`)} </span>
      <span class="cross">
        <IconClose />
      </span>
    </button>

    <div class="w-full max-w-[640px]">
      <ContactForm />
    </div>
  </div>
</div>


<style lang="scss">
.overlay-close {
  @apply flex flex-row items-center justify-center;
  @apply text-2xl;
  @apply absolute;
  @apply top-5 right-5;
  @apply space-x-4;
}
</style>
