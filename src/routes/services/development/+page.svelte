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
    plot: false,
    architecture: false,
    constraction: false,
    managment: false,
  }
</script>

<svelte:head>
	<title>{page.fields.metaTitle}</title>
	<meta name="description" content={page.fields.metaDescription} />
</svelte:head>

<div class="page page-padded mb-32">
  <div
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => { animate.title = detail.inView }}
    class={`fly-transition ${animate.title ? "fly-show" : "fly-hidden"}`}
  >
    <section class="section-fixed pt-10">

      <div class="content px-4">
        <h1 class="h1">
          {@html page.fields.title}
        </h1>

        <p>
          {@html documentToHtmlString(blocks[0].fields.content)}
        </p>
      </div>
    </section>
  </div>
</div>

<div
  use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
  on:change={({ detail }) => { animate.plot = detail.inView }}
  class={`fly-transition ${animate.plot ? "fly-show" : "fly-hidden"}`}
>
  <div class="page page-padded section-plot-search lg:px-4 2xl:px-0">
    <section class="section-fixed color-invert">
      <div class="pls-content">
        <div class="pls-content-item">
          <h2 class="h2">
            {@html blocks[1].fields.title}
          </h2>
        </div>
        <div class="pls-content-item">
          {@html documentToHtmlString(blocks[1].fields.content)}
        </div>
      </div>

      <div class="pls-gallery">
        <div class="pls-gallery-item">
          <img src="/development/plot-1.png" alt="" class="w-full">
        </div>
        <div class="pls-gallery-item">
          <img src="/development/plot-2.png" alt="" class="w-full">
        </div>
      </div>
    </section>
  </div>
</div>

<div class="page lg:px-4 2xl:px-0">
  <div
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => { animate.architecture = detail.inView }}
    class={`fly-transition ${animate.architecture ? "fly-show" : "fly-hidden"}`}
  >
    <section class="section-fixed section-architect-info">
      <div class="sai-content">
        <div class="sai-content-gallery">
          <img src="/development/architecture.png" alt="" class="w-full lg:max-h-[477px]">
        </div>

        <div class="sai-content-text">
          <h2 class="h2">
            {@html blocks[2].fields.title}
          </h2>
          <p>
            {@html documentToHtmlString(blocks[2].fields.content)}
          </p>
        </div>
      </div>
    </section>
  </div>
</div>

<div
  use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
  on:change={({ detail }) => { animate.constraction = detail.inView }}
  class={`fly-transition ${animate.constraction ? "fly-show" : "fly-hidden"}`}
>
  <div class="section-white lg:px-4 2xl:px-0">
    <section class="section-fixed color-invert section-constraction">
      <div class="inner">
        <div class="sc-content">
          <h2 class="h2">
            {@html blocks[3].fields.title}
          </h2>
          <p>
            {@html documentToHtmlString(blocks[3].fields.content)}
          </p>
        </div>
        <div class="sc-gallery">
          <div>
            <img src="/development/construction-1.png" alt="" class="w-full">
          </div>
          <div class="row-span-2">
            <img src="/development/construction-3.png" alt="" class="w-full">
          </div>
          <div>
            <img src="/development/construction-2.png" alt="" class="w-full">
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

<div class="page page-padded section-managment">
  <div
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => { animate.managment = detail.inView }}
    class={`fly-transition ${animate.managment ? "fly-show" : "fly-hidden"}`}
  >
    <section class="section-fixed">
      <div class="inner-content">
        <h2 class="h2">
          {@html blocks[4].fields.title}
        </h2>
        <p>
          {@html documentToHtmlString(blocks[4].fields.content)}
        </p>
      </div>

      <div class="inner-gallery">
        <img src="/development/managment.png" alt="" class="w-full">
      </div>
    </section>
  </div>
</div>

<div class="page page-padded">
  <section class="mb-20 px-4 lg:px-10">
    <ContactForm />
  </section>
</div>

<style lang="scss">
.section-plot-search {
  @apply bg-white pb-32;

  .pls-content {
    @apply flex flex-col lg:flex-row gap-10 items-center mb-10;
    @apply px-8 lg:px-0;

    .pls-content-item {
      @apply w-full lg:w-1/2;
    }
  }

  .pls-gallery {
    @apply flex flex-col lg:flex-row gap-10 items-center;

    .pls-gallery-item {
      @apply w-full lg:w-1/2;
      @apply px-8 lg:px-0;
    }
  }
}

.section-architect-info {
  @apply py-[188px];

  .sai-content {
    @apply flex flex-col lg:flex-row gap-10 items-center;
    @apply px-4 lg:px-0;
    .sai-content-gallery {
      @apply w-full lg:w-7/12;
    }
    .sai-content-text {
      @apply w-full lg:w-5/12;
      @apply lg:px-10;
    }
  }
}

.section-white {
  @apply bg-white;
  @apply py-[56px] lg:py-[188px];
}

.section-constraction {
  @apply py-4 lg:py-10;

  .inner {
    @apply flex flex-col lg:flex-row gap-10 items-center;
  }

  .sc-content {
    @apply w-full lg:w-1/2;
    @apply px-4 lg:px-10;
    @apply order-2 lg:order-1;
  }

  .sc-gallery {
    @apply w-full lg:w-1/2 grid grid-cols-2 gap-4;
    @apply order-1 lg:order-2;
    @apply px-4 lg:px-0;
  }
}

.section-managment {
  @apply py-[56px] lg:py-[188px];

  .section-fixed {
    @apply flex flex-col lg:flex-row gap-10 items-center mb-10;

    .inner-content {
      @apply w-full lg:w-1/2;
      @apply px-4 lg:px-10;
      @apply order-2 lg:order-1;
    }

    .inner-gallery {
      @apply w-full lg:w-1/2;
      @apply px-4 lg:px-0;
      @apply order-1 lg:order-2;
    }
  }
}
</style>
