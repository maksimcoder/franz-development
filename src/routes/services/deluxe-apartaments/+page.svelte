<script lang="ts">
  import { t } from '$lib/translations/translations';
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

  // Components
	import { ContactForm } from '$lib/components/structure';
  import { Gallery } from '$lib/components/shared';

  import IconBed    from '$lib/icons/IconBed.svelte';
  import IconBath   from '$lib/icons/IconBath.svelte';
  import IconCar    from '$lib/icons/IconCar.svelte';
  import IconLivingArea   from '$lib/icons/IconLivingArea.svelte';
  import IconPlotArea     from '$lib/icons/IconPlotArea.svelte';


  /** @type {import('./$types').PageData} */
  export let data: any;

  // Data
  const { page } = data;
  const blocks = page.fields.contentBlockReference;

  let visible = false;
  const pictures = [
    "/deluxe/1.jpg",
    "/deluxe/2.jpg",
    "/deluxe/3.jpg",
    "/deluxe/4.jpg",
  ];

  const gallery = pictures.map(el => {
    return {
      title: "",
      description: "",
      file: {
        contentType: "",
        fileName: "",
        url: el,
        details: null,
      },
    }
  })

  const optionKeys = {
    'bedrooms': {
      'icon': IconBed,
      'count': 1,
      'hasValue': false,
      'value': null,
      'unit': null
    },
    'bathroom': {
      'icon': IconBath,
      'count': 1,
      'hasValue': false,
      'value': null,
      'unit': null
    },
    'livingArea': {
      'icon': IconLivingArea,
      'count': null,
      'hasValue': true,
      'value': 50,
      'unit': $t(`common.units.m2`),
    },
    'plotArea': {
      'icon': IconPlotArea,
      'count': null,
      'hasValue': true,
      'value': 1000,
      'unit': $t(`common.units.m2`),
    },
    'sharedParking': {
      'icon': IconCar,
      'count': null,
      'hasValue': false,
      'value': null,
      'unit': null,
    },
  };

  let options = [];

  // Options
  Object.keys(optionKeys).forEach(key => {
    options.push({
      key,
      value: optionKeys[key].hasValue ? optionKeys[key].value : "",
      icon: optionKeys[key].icon,
      unit: optionKeys[key].unit,
      template: $t(`common.common.${key}`, {count: optionKeys[key].count}),
    });
  });

  const points = [
    {
      sign: "A",
      title: "Road access",
      key: "roadAccess",
    }, {
      sign: "B",
      title: "Lobby",
      key: "lobby",
    }, {
      sign: "C",
      title: "Parking 1",
      key: "parking1",
    }, {
      sign: "D",
      title: "Parking 2 (First floor) and Gym (Second floor)",
      key: "parking2",
    }, {
      sign: "E",
      title: "Recreation area, Garden, Swimming pool",
      key: "recreation",
    }, {
      sign: "F",
      title: "8 Apartments",
      key: "apartments8",
    }, {
      sign: "G",
      title: "12 Apartments",
      key: "apartments12",
    }, {
      sign: "H",
      title: "Kids playground",
      key: "playground",
    },
  ];

    // Methods
  const openGallery = () => {
    visible = true;
  }
</script>

<svelte:head>
	<title>{page.fields.metaTitle}</title>
	<meta name="description" content={page.fields.metaDescription} />
</svelte:head>

<div class="page page-padded min-h-screen page-deluxe">
  <section class="section-fixed pt-10 mb-[84px] md:mb-32">
    <div class="content max-w-[1064px] m-auto px-5 lg:px-0">
      <h1 class="h1">
        {@html page.fields.title}
      </h1>
    </div>
  </section>

  <section class="section-fixed">
    <div class="section-gallery">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <picture class="slide slide-1" on:click={openGallery} style={`background-image: url(${pictures[0]})`} />
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <picture class="slide slide-2" on:click={openGallery} style={`background-image: url(${pictures[1]})`} />
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <picture class="slide slide-3" on:click={openGallery} style={`background-image: url(${pictures[2]})`} />
    </div>
  </section>

  <section class="section-fixed mb-[84px] md:mb-32 px-4 lg:px-0 flex flex-col items-end">
    <div class="w-full lg:w-1/2">
      {@html documentToHtmlString(blocks[0].fields.content)}
    </div>

    <div class="option-list option-list-2cols w-full lg:w-1/2 lg:pr-40 mb-20">
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

      <div class="flex flex-row justify-center items-center">
        <a href="/" class="link-round">
          {$t('common.actions.contact_us')}
        </a>
      </div>
    </div>

    <div class="gallery-small">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <picture class="slide slide-1" on:click={openGallery} style={`background-image: url(${pictures[1]})`} />
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <picture class="slide slide-2" on:click={openGallery} style={`background-image: url(${pictures[3]})`} />
    </div>

    <div class="w-full lg:w-1/2">
      {@html documentToHtmlString(blocks[1].fields.content)}
    </div>
  </section>

  <section class="section-fixed mb-[84px] md:mb-32 px-4 lg:px-0">
    <h2 class="h2 mb-8 lg:mb-[94px]">
      {@html blocks[2].fields.title}
    </h2>

    <div class="flex flex-col lg:flex-row lg:space-x-8">
      <div class="w-full mb-8 lg:mb-0 lg:w-1/2">
        <img src="/deluxe/map.jpg" alt="" class="rounded-3xl block w-full">
      </div>

      <div class="w-full lg:w-1/2">
        <ul class="pros-list">

          {#each points as point}
            <li class="pros-item">
              <div class="pros-sign">
                {point.sign}
              </div>
              <p class="pros-title">
                {$t(`common.common.${point.key}`, {default: point.title})}
              </p>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </section>

  <section class="mb-20 px-4 lg:px-0">
    <ContactForm />
  </section>

  <Gallery bind:visible={visible} images={gallery} />
</div>

<style lang="scss">
  .page-deluxe {
    .slide {
      @apply bg-center bg-cover;
      @apply rounded-3xl;
      @apply cursor-pointer;
    }

    .gallery-small {
      @apply flex flex-col;
      @apply space-y-5 lg:space-y-12;
      @apply w-full lg:w-1/2;
      @apply mb-12;

      .slide-1 {
        @apply w-full h-[194px] md:h-[320px];
      }

      .slide-2 {
        @apply w-full lg:max-w-[60%];
        @apply h-[245px] md:h-[520px] lg:h-[320px];
      }
    }

    .section-gallery {
      @apply flex flex-col sm:flex-row sm:flex-wrap sm:justify-between;
      @apply items-end;
      @apply space-y-4 lg:space-y-0;
      @apply lg:space-x-10;
      @apply mb-8 lg:mb-32 px-5 lg:px-0;

      .slide-1 {
        @apply h-[194px] md:h-[400px];
        @apply w-full md:max-w-[49%] lg:max-w-[36%]
      }
      .slide-2 {
        @apply h-[194px] md:h-[264px];
        @apply w-full md:max-w-[49%] lg:max-w-[36%]
      }

      .slide-3 {
        @apply h-[400px] md:h-[800px] lg:h-[400px];
        @apply w-full md:max-w-full lg:max-w-[20%];
      }
    }
  }

  .pros {
    &-list {
      @apply space-y-6
    }
    &-item {
      @apply flex flex-row items-center;
      @apply space-x-4;
    }
    &-sign {
      @apply flex flex-row flex-shrink-0 justify-center items-center;
      @apply w-[64px] h-[64px] rounded-2xl;
      @apply bg-[var(--color-middle-black)];
      @apply text-[var(--color-brown-100)];
      @apply text-4xl font-bold;
    }
    &-title {
      @apply mb-0;
    }
  }
</style>
