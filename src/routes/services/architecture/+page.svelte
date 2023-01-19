<script lang="ts">
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	import { ContactForm } from '$lib/components/structure';

  /** @type {import('./$types').PageData} */
  export let data: any;

  // Data
  const { page } = data;
  const blocks = page.fields.contentBlockReference;
</script>

<svelte:head>
	<title>{page.fields.metaTitle}</title>
	<meta name="description" content={page.fields.metaDescription} />
</svelte:head>

<div class="page page-padded min-h-screen page-architecture">
  <section class="section-fixed pt-10 lg:mb-32">
    <div class="content px-4 lg:px-0">
      <h1 class="h1">
        {@html blocks[0].fields.title}
      </h1>
      {@html documentToHtmlString(blocks[0].fields.content)}
    </div>
  </section>

  <section class="section-fixed mb-32 px-4 lg:px-0">
    <div class="section-gallery">
      <div class="slide-1">
        <img src="/architecture/architecture-1.png" alt="" class="w-full">
      </div>
      <div class="slide-2">
        <img src="/architecture/architecture-2.png" alt="" class="w-full">
      </div>
      <div class="slide-3">
        <img src="/architecture/architecture-3.png" alt="" class="w-full">
      </div>
    </div>
  </section>

  <section class="mb-20 px-4 lg:px-0">
    <ContactForm />
  </section>
</div>

<style lang="scss">
  .page-architecture {

    .section-gallery {
      @apply flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap;
      @apply items-end;
      @apply space-y-4 lg:space-y-0;

      .slide-1 {
        @apply w-full sm:w-7/12 lg:w-[490px];
      }
      .slide-2 {
        @apply w-full sm:w-5/12 lg:w-[306px];
        @apply sm:pl-4;
      }

      .slide-3 {
        @apply w-full lg:w-auto;
        @apply lg:pl-4;
      }
    }
  }
</style>
