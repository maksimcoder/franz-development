<script lang="ts">
  import IconArrowLeft  from "$lib/icons/IconArrowLeft.svelte";
  import IconArrowRight from "$lib/icons/IconArrowRight.svelte";
  import IconClose      from "$lib/icons/IconClose.svelte";
  import type { IPicture } from "$lib/types/picture";

  // Props
  export let images: IPicture[];
  export let visible = false;
  export let index = 0

  // Data
  let total = images.length;

  // Reactive
  $: currentImage = images[index]

  // Methods
  const onClickClose = () => {
    visible = false;
  }

  const onClickPrev = () => {
    index = index - 1 >= 0 ? index - 1 : total - 1;
  }

  const onClickNext = () => {
    index = index + 1 < total ? index + 1 : 0;
  }
</script>

{#if visible}
  <section class="gallery">
    <!-- style={`background-image: url(${currentImage.file.url})`} -->
    <figure class="gallery__slider">
      <img src={currentImage.file.url} alt="" class="rounded-[32px]">
      <button on:click={onClickClose} class="control control-close">
        <IconClose />
      </button>
      <button on:click={onClickPrev} class="control control-prev">
        <IconArrowLeft />
      </button>
      <button on:click={onClickNext} class="control control-next">
        <IconArrowRight />
      </button>
    </figure>
  </section>
{/if}

<style lang="scss">
  .gallery {
    @apply fixed inset-0 z-[100];
    @apply px-4;
    @apply bg-black/50 backdrop-blur-md;
    @apply flex flex-col justify-center items-center;

    &__slider {
      @apply relative;
      @apply h-auto max-w-[1024] w-fit;
      // @apply bg-no-repeat bg-center bg-cover;
      // @apply h-[70%] max-w-[1024] w-full;
      @apply bg-black;
      @apply rounded-[32px];
    }

    .control {
      @apply absolute z-[1];
      @apply flex flex-col justify-center items-center;
    }

    .control-close {
      @apply top-1 right-1;
      @apply rounded-[32px];
      @apply h-[60px];
      @apply w-[60px];
      @apply bg-black/50;
    }

    .control-prev,
    .control-next {
      @apply h-[80px] lg:h-[120px];
      @apply w-[80px] lg:w-[120px];
      @apply bg-[var(--color-middle-black)];
      @apply bottom-0;
    }
    .control-prev {
      @apply left-0;
      @apply rounded-tr-[32px];
      @apply rounded-bl-[30px];
    }
    .control-next {
      @apply right-0;
      @apply rounded-tl-[32px];
      @apply rounded-br-[30px];
    }
  }
</style>
