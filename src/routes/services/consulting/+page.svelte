<script lang="ts">
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

  import { ContactForm } from '$lib/components/structure';
  import { PointItem } from '$lib/components/shared';
  import { inview } from 'svelte-inview';

  /** @type {import('./$types').PageData} */
  export let data: any;

  // Data
  const { page } = data;
  const blocks = page.fields.contentBlockReference;

  const pointBlocks = blocks.filter(el => el.fields.slug.includes("consulting-points"));
  const points = [
    {
      icon: "color-swatch",
      title: "",
      content: pointBlocks[0]?.fields?.content ? documentToHtmlString(pointBlocks[0]?.fields?.content) : "",
    }, {
      icon: "status-up",
      title: "",
      content: pointBlocks[1]?.fields?.content ? documentToHtmlString(pointBlocks[1]?.fields?.content) : "",
    }, {
      icon: "math",
      title: "",
      content: pointBlocks[2]?.fields?.content ? documentToHtmlString(pointBlocks[2]?.fields?.content) : "",
    }, {
      icon: "shield-tick",
      title: "",
      content: pointBlocks[3]?.fields?.content ? documentToHtmlString(pointBlocks[3]?.fields?.content) : "",
    }, {
      icon: "wallet",
      title: "",
      content: pointBlocks[4]?.fields?.content ? documentToHtmlString(pointBlocks[4]?.fields?.content) : "",
    },
  ];
  const animate = {
    title: false,
    other: false,
  }
</script>

<svelte:head>
	<title>{page.fields.metaTitle}</title>
	<meta name="description" content={page.fields.metaDescription} />
</svelte:head>

<div class="page page-padded min-h-screen page-consulting lg:px-4 2xl:px-0">
    <div
      use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
      on:change={({ detail }) => { animate.title = detail.inView }}
      class={`fly-transition ${animate.title ? "fly-show" : "fly-hidden"}`}
    >
      <section class="section-fixed pt-10 mb-32">
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
            <img src="/consulting/consulting-1.png" alt="" class="w-full">
          </div>
          <div class="slide-2">
            <img src="/consulting/consulting-2.png" alt="" class="w-full">
          </div>
          <div class="slide-3">
            <img src="/consulting/consulting-3.png" alt="" class="w-full">
          </div>
        </div>
      </section>
    </div>

  <div
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => { animate.other = detail.inView }}
    class={`fly-transition ${animate.other ? "fly-show" : "fly-hidden"}`}
  >
    <section class="section-fixed mb-32 px-4 lg:px-0">
      <h2 class="h2">
        {@html blocks[1].fields.title}
      </h2>

      <div class="point-list mb-16 w-full sm:w-[75%] lg:w-full">
        {#each points as point}
          <PointItem {point} />
        {/each}
      </div>
    </section>
  </div>

  <section class="mb-20 px-4 lg:px-0">
    <ContactForm />
  </section>
</div>


<style lang="scss">
  .page-consulting {

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
