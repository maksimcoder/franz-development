<script lang="ts">
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

  // Components
  import { Gallery } from '$lib/components/shared';

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
  let project   = data.project;
  $: next       = data.next;
  $: previewUrl = project.fields?.poster?.fields?.file?.url || '';
  $: gallery    = project.fields.gallery.map(el => el.fields);
  $: visible    = false;

  // Methods
  const openGallery = () => {
    visible = true;
  }

  const optionKeys = {
    'bedrooms': {
      'icon': IconBed,
      'template': `{val} bedroom`,
    },
    'bathroom': {
      'icon': IconBath,
      'template': `{val} bathroom`,
    },
    'toilet': {
      'icon': IconToilet,
      'template': `{val} toilet`,
    },
    'cars': {
      'icon': IconCar,
      'template': `{val} car`,
    },
    'bikes': {
      'icon': IconBike,
      'template': `{val} bike`,
    },
    'livingArea': {
      'icon': IconLivingArea,
      'template': `{val} m<sup>2</sup> living area`,
    },
    'plotArea': {
      'icon': IconPlotArea,
      'template': `{val} m<sup>2</sup> plot`,
    }
  };

  let options = [];

  // Options
  Object.keys(optionKeys).forEach(key => {
    if (project.fields[key]) {
      options.push({
        key,
        value: project.fields[key],
        icon: optionKeys[key].icon,
        template: optionKeys[key].template.replace('{val}', project.fields[key]),
      });
    }
  });
</script>

<svelte:head>
	<title>{project.fields.title}</title>
	<meta name="description" content={project.fields.title} />
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
      <h1 class="h1">
        {@html project.fields.title}
      </h1>

      <div class="mb-20">
        {@html documentToHtmlString(project.fields.description)}
      </div>

      <div class="option-list mb-20">
        {#each options as option}
          <div class="option-item">
            <span>
              <svelte:component this={option.icon} />
            </span>
            <p>
              {@html option.template}
            </p>
          </div>
        {/each}
      </div>

      {#if project.fields.specification}
        <div class="mb-20">
          <h2 class="h2">
            Specification
          </h2>
          {@html documentToHtmlString(project.fields.specification)}
        </div>
      {/if}

      <div class="project-gallery mb-20">
        <figure
          class="project-gallery__preview"
          style={`background-image: url(${gallery[0].file.url})`}
        >
          <div class="project-gallery__overlay">
            <button class="link-round" on:click={openGallery}>
              View project
            </button>
          </div>
        </figure>

        {#each gallery as item}
          <img src={item.file.url} alt={item.title}>
        {/each}
      </div>
    </div>
  </section>

  <section class="mb-[120px] next-project">
    <!-- svelte-ignore a11y-distracting-elements -->
    <marquee>
      <h2 class="h2">
        <a data-sveltekit-reload href={`/portfolio/${next.fields.slug}`}>
          {@html next.fields.title}
        </a>
      </h2>
    </marquee>
  </section>
</div>

<Gallery bind:visible={visible} images={gallery} />

<style lang="scss">
  .project-poster {
    @apply mb-4;
    @apply w-full;
    @apply rounded-b-3xl;
    @apply h-[746px];
    @apply bg-no-repeat bg-center bg-cover;


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

  .option-list {
    @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8;
    @apply lg:pr-40;

    .option-item {
      @apply h-[200px] bg-[var(--color-middle-black)];
      @apply flex flex-col items-center justify-center;
      @apply rounded-[40px];
      @apply space-y-2;

      p {
        @apply mb-0;
      }
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
