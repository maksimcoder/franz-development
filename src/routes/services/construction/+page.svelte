<script lang="ts">
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	import { ContactForm } from '$lib/components/structure';
  import { inview } from 'svelte-inview';

  /** @type {import('./$types').PageData} */
  export let data: any;

  // Data
  const { page } = data;
  const blocks = page.fields.contentBlockReference;

  const animate = {
    title: false,
    gallery: false,
  }
</script>

<svelte:head>
	<title>{page.fields.metaTitle}</title>
	<meta name="description" content={page.fields.metaDescription} />
</svelte:head>

<div class="page page-padded min-h-screen">
  <section class="section-fixed pt-10 mb-32">
    <div
      use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
      on:change={({ detail }) => { animate.title = detail.inView }}
      class={`fly-transition ${animate.title ? "fly-show" : "fly-hidden"}`}
    >
      <div class="content px-4 lg:px-0">
        <h1 class="h1 max-w-[68%]">
          {@html blocks[0].fields.title}
        </h1>

        {@html documentToHtmlString(blocks[0].fields.content)}
      </div>
    </div>
  </section>

  <section class="section-fixed mb-32 px-4 lg:px-0">
    <div
      use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
      on:change={({ detail }) => { animate.gallery = detail.inView }}
      class={`fly-transition ${animate.gallery ? "fly-show" : "fly-hidden"}`}
    >
      <div class="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-4">
        <img src="/construction/construction-1.png" alt="" class="w-full sm:w-auto lg:w-full sm:max-h-[160px] lg:max-h-[auto]">
        <img src="/construction/construction-2.png" alt="" class="w-full sm:w-auto lg:w-full sm:max-h-[160px] lg:max-h-[auto]">
        <img src="/construction/construction-3.png" alt="" class="hidden lg:block lg:w-full">
      </div>
      <img src="/construction/construction-3.png" alt="" class="block lg:hidden w-full mt-4">
    </div>
  </section>

  <section class="mb-20 px-4 lg:px-0">
    <ContactForm />
  </section>
</div>
