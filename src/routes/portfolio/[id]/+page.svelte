<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
  import { t } from '$lib/translations/translations';
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

  // Components
  // import { Gallery } from '$lib/components/shared';
  import { NextProjectMarquee } from '$lib/components/shared';

  import IconBed    from '$lib/icons/IconBed.svelte';
  import IconBath   from '$lib/icons/IconBath.svelte';
  import IconToilet from '$lib/icons/IconToilet.svelte';
  import IconCar    from '$lib/icons/IconCar.svelte';
  import IconBike   from '$lib/icons/IconBike.svelte';
  import IconLivingArea   from '$lib/icons/IconLivingArea.svelte';
  import IconPlotArea     from '$lib/icons/IconPlotArea.svelte';

  // Props
  /** @type {import('./$types').PageData} */
  export let data: any;

  // Data
  let project = data.project;
  let next    = data.next;
  let sliderIndex = 0;
  let interval: any;

  // Reactive
  $: nextPreviewUrl = next.fields?.poster?.fields?.file?.url || '';

  // Methods
  const optionKeys = {
    'bedrooms': {
      'icon': IconBed,
      'hasValue': false,
      'unit': null
    },
    'bathroom': {
      'icon': IconBath,
      'hasValue': false,
      'unit': null
    },
    'toilet': {
      'icon': IconToilet,
      'hasValue': false,
      'unit': null
    },
    'cars': {
      'icon': IconCar,
      'hasValue': false,
      'unit': null
    },
    'bikes': {
      'icon': IconBike,
      'hasValue': false,
      'unit': null
    },
    'livingArea': {
      'icon': IconLivingArea,
      'hasValue': true,
      'unit': $t(`common.units.m2`),
    },
    'plotArea': {
      'icon': IconPlotArea,
      'hasValue': true,
      'unit': $t(`common.units.m2`),
    }
  };

  let options = [];

  // Options
  Object.keys(optionKeys).forEach(key => {
    if (project.fields[key]) {
      options.push({
        key,
        value: optionKeys[key].hasValue ? project.fields[key] : "",
        icon: optionKeys[key].icon,
        unit: optionKeys[key].unit,
        template: $t(`common.common.${key}`, {count: project.fields[key]}),
      });
    }
  });

  onMount(() => {
    interval = setInterval(() => {
      sliderIndex = sliderIndex + 1 < project.fields.gallery.length
        ? sliderIndex + 1
        : 0;
    }, 4000);
  });

  onDestroy(() => {
    clearInterval(interval);
  })
</script>

<svelte:head>
	<title>{project.fields.title}</title>
	<meta name="description" content={project.fields.title} />
</svelte:head>

<section class="project-poster">
  {#each project.fields.gallery as item, index}
    {#if index === sliderIndex}
      <picture
        transition:fade={{duration: 700}}
        class="project-poster__slides"
        style={`background-image: url(${item?.fields?.file?.url})`}
      />
    {/if}
  {/each}
  <figure class="project-poster__fader" />
</section>

<div class="page page-padded min-h-screen">
  <section class="section-fixed px-4 lg:px-0">
    <div class="content">
      <h1 class="h1">
        {@html project.fields.title}
      </h1>

      <div class="mb-20">
        {@html documentToHtmlString(project.fields.description)}
      </div>

      <div class="option-list lg:pr-40 mb-20">
        {#each options as option}
          <div class="option-item">
            <span>
              <svelte:component this={option.icon} />
            </span>
            <p>
              {#if option.value > 0}
                {option.value} {@html option.unit}
              {/if}
              {@html option.template}
            </p>
          </div>
        {/each}
      </div>

      {#if project.fields.specification}
        <div class="mb-20">
          <h2 class="h2">
            {$t('common.pages.portfolio.specification')}
          </h2>
          {@html documentToHtmlString(project.fields.specification)}
        </div>
      {/if}

      <div class="project-gallery mb-20">
        {#each project.fields.gallery as item}
          <img
            src={item?.fields?.file?.url}
            alt={item?.fields.title}
            class="absolute top-3 left-3 w-100px"
          >
        {/each}

        <figure
          class="project-gallery__preview"
          style={`background-image: url(${nextPreviewUrl})`}
        >
          <div class="project-gallery__overlay">
            <a data-sveltekit-reload  class="link-round" href={`/portfolio/${next.fields.slug}`}>
              {$t('common.actions.view_project')}
            </a>
          </div>
        </figure>
      </div>
    </div>
  </section>

  <section class="mb-[120px] next-project">
    <NextProjectMarquee title={next.fields.title} slug={next.fields.slug} />
  </section>
</div>

<!-- <Gallery bind:visible={visible} images={gallery} /> -->

<style lang="scss">
  .project-poster {
    @apply mb-4;
    @apply w-full;
    @apply rounded-b-3xl;
    @apply h-screen lg:h-[746px];
    @apply bg-no-repeat bg-center bg-cover;
    @apply relative overflow-hidden;

    &__slides {
      @apply absolute top-0 left-0;
      @apply w-full;
      @apply rounded-b-3xl;
      @apply h-screen lg:h-[746px];
      @apply bg-no-repeat bg-center bg-cover;
    }

    &__fader {
      @apply h-32 w-full;
      background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
    }
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
