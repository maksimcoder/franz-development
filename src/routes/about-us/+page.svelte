<script lang="ts">
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

  /** @type {import('./$types').PageData} */
  export let data: any;

  // Data
  let { page } = data;
  let content = page.fields;
  console.log(content)
  let blocks = content.contentBlockReference || [];
</script>

<svelte:head>
	<title>
    {content.metaTitle}
  </title>

  {#if content.metaDescription}
	  <meta name="description" content={content.metaDescription} />
  {/if}
</svelte:head>

<div class="page page-padded page-about-us">
  <header class="section-fixed page-heading">
    <h1 class="h1 page-title">
      {@html content.title}
    </h1>
  </header>

  <section class="section-fixed section-gallery">
    <div class="content">
      <div class="hidden lg:flex lg:flex-row gap-4 lg:items-center">
        <div class="flex flex-col gap-4">
          <img src="/about-us/gal-1.png" alt="" class="w-full">
        </div>
        <div class="flex flex-col gap-4">
          <img src="/about-us/gal-2.png" alt="" class="w-full">
          <img src="/about-us/gal-3.png" alt="" class="w-full">
        </div>
        <div class="flex flex-col gap-4">
          <img src="/about-us/gal-4.png" alt="" class="w-full">
        </div>
        <div class="flex flex-col gap-4">
          <img src="/about-us/gal-5.png" alt="" class="w-full">
          <img src="/about-us/gal-6.png" alt="" class="w-full">
        </div>
        <div class="flex flex-col gap-4">
          <img src="/about-us/gal-7.png" alt="" class="w-full">
        </div>
      </div>

      <div class="flex flex-row justify-center lg:hidden gap-4 px-5 items-center">
        <div class="flex flex-col gap-4">
          <img src="/about-us/gal-1.png" alt="" class="w-full">
          <img src="/about-us/gal-4.png" alt="" class="w-full">
          <img src="/about-us/gal-6.png" alt="" class="w-full">
        </div>

        <div class="flex flex-col gap-4">
          <img src="/about-us/gal-2.png" alt="" class="w-full">
          <img src="/about-us/gal-3.png" alt="" class="w-full">
          <img src="/about-us/gal-5.png" alt="" class="w-full">
          <img src="/about-us/gal-7.png" alt="" class="w-full">
        </div>
      </div>
    </div>
  </section>

  <section class="section-fixed  section-about">
    <div class="content px-5 lg:px-0 lg:pl-[50%]">
      {@html documentToHtmlString(blocks[0].fields.content)}
    </div>
  </section>

  <section class="section-fixed section-map">
    <div class="content">
      <div class="flex flex-col lg:flex-row gap-4 items-center">
        <div class="w-full lg:w-1/2 px-5">
          <h2 class="h2">
            {@html blocks[1].fields.title}
          </h2>
          <div class="lg:max-w-[560px]">
            {@html documentToHtmlString(blocks[1].fields.content)}
          </div>
        </div>

        <div class="w-full lg:w-1/2 px-5 lg:pl-20">
          <img src="/about-us/map.png" alt="" class="w-full">
        </div>
      </div>
    </div>
  </section>
</div>

<style lang="scss">
.page-about-us {
  .page-heading {
    @apply my-20 lg:my-28;
    @apply px-5 lg:px-0;

    .page-title {
      @apply max-w-[1065px] mx-auto lg:text-center
    }
  }

  .section-gallery {
    @apply mb-8 lg:mb-[72px];
  }

  .section-about {
    @apply mb-20 sm:mb-[140px] lg:mb-[200px];
  }

  .section-map {
    @apply mb-20 sm:mb-[140px] lg:mb-[200px];
  }
}
</style>
