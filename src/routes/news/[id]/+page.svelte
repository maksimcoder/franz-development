<script lang="ts">
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
  import dayjs from 'dayjs';

  // Props
  /** @type {import('./$types').PageData} */
  export let data: any;

  // Data
  let post        = data.post;
  let publishedAt = dayjs(post.fields.publishedAt).format('DD.MM.YYYY');

  // Reactive
  $: next         = data.next;
  $: previewUrl   = post.fields?.poster?.fields?.file?.url || '';
</script>

<svelte:head>
	<title>{post.fields.title}</title>
	<meta name="description" content={post.fields.title} />
</svelte:head>

<section
  class="project-poster"
  style={`background-image: url(${previewUrl})`}
>
  <figure class="project-poster__fader" />
</section>

<div class="page page-padded min-h-screen">
  <section class="section-fixed px-4 lg:px-0">
    <div class="content">
      <div class="post-date">
        {publishedAt}
      </div>
      <h1 class="h1">
        {@html post.fields.title}
      </h1>

      <div class="mb-20">
        {@html documentToHtmlString(post.fields.description)}
      </div>
    </div>
  </section>

  <section class="mb-[120px] next-project">
    <!-- svelte-ignore a11y-distracting-elements -->
    <marquee>
      <h2 class="h2">
        <a data-sveltekit-reload href={`/news/${next.fields.slug}`}>
          {@html next.fields.title}
        </a>
      </h2>
    </marquee>
  </section>
</div>

<style lang="scss">
  .project-poster {
    @apply mb-4;
    @apply w-full;
    @apply rounded-b-3xl;
    @apply h-screen lg:h-[746px];
    @apply bg-no-repeat bg-center bg-cover;

    &__fader {
      @apply h-32 w-full;
      background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
    }
  }

  .post-date {
    @apply text-[#606469];
    @apply bg-[#171818];
    @apply inline-block px-2 pt-1;
    @apply text-2xl font-semibold;
    @apply rounded-xl;
    @apply mb-7;
  }

  .project-gallery {
    @apply relative;
    @apply rounded-3xl;
    @apply h-[600px];

    &__preview {
      @apply h-[600px];
      @apply rounded-3xl;
      @apply bg-cover;
      @apply absolute inset-0 z-[2];
    }
    &__overlay {
      @apply h-[600px];
      @apply absolute inset-0 z-[2];
      @apply bg-black/50;
      @apply flex flex-row justify-center items-center;
    }
    > img {
      @apply absolute top-10 left-10 z-[1];
      @apply max-w-[100px];
    }
  }

  .next-project {
    @apply mx-auto;
    @apply w-full;
    @apply flex flex-row;
    @apply whitespace-nowrap;
    @apply overflow-hidden;
    @apply h-[108px];
    box-sizing: border-box;
  }
</style>
