<script>
  import { t } from '$lib/translations/translations';
	import { ContactForm } from '$lib/components/structure';
  import { Gallery } from '$lib/components/shared';

  import IconBed    from '$lib/icons/IconBed.svelte';
  import IconBath   from '$lib/icons/IconBath.svelte';
  import IconCar    from '$lib/icons/IconCar.svelte';
  import IconLivingArea   from '$lib/icons/IconLivingArea.svelte';
  import IconPlotArea     from '$lib/icons/IconPlotArea.svelte';

  // Data
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
    }, {
      sign: "B",
      title: "Lobby",
    }, {
      sign: "C",
      title: "Parking 1",
    }, {
      sign: "D",
      title: "Parking 2 (First floor) and Gym (Second floor)",
    }, {
      sign: "E",
      title: "Recreation area, Garden, Swimming pool",
    }, {
      sign: "F",
      title: "8 Apartments",
    }, {
      sign: "G",
      title: "12 Apartments",
    }, {
      sign: "H",
      title: "Kids playground",
    },
  ];

    // Methods
  const openGallery = () => {
    visible = true;
  }
</script>

<svelte:head>
	<title>Deluxe apartments</title>
	<meta name="description" content="Deluxe apartments" />
</svelte:head>

<div class="page page-padded min-h-screen page-deluxe">
  <section class="section-fixed pt-10 mb-32">
    <div class="content max-w-[1064px] m-auto">
      <h1 class="h1">
        Deluxe apartments in the heart of the most tourist destination <i>on earth</i>
      </h1>
    </div>
  </section>

  <section class="section-fixed mb-32 px-4 lg:px-0">
    <div class="section-gallery">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <picture class="slide slide-1" on:click={openGallery} style={`background-image: url(${pictures[0]})`} />
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <picture class="slide slide-2" on:click={openGallery} style={`background-image: url(${pictures[1]})`} />
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <picture class="slide slide-3" on:click={openGallery} style={`background-image: url(${pictures[2]})`} />
    </div>
  </section>

  <section class="section-fixed mb-32 px-4 lg:px-0 flex flex-col items-end">
    <div class="w-1/2">
      <p>
        This stunning one bedroom duplex apartment
        in a prestigious gated community in Canggu is
        located within walking distance of the most
        popular street - Batu Bolong, western restaurants,
        cafes and shops, and only 8 minutes drive from the ocean.
      </p>
      <p>
        With its clean lines and simplicity, this sublime
        apartment represents timeless modernity, and the
        resulting home can blend seamlessly into a
        tropical style. This elegant apartment, fully furnished, is located in one of the most prestigious areas of Bali
      </p>
    </div>

    <div class="option-list option-list-2cols w-1/2 lg:pr-40 mb-20">
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

    <div class="w-1/2">
      <p>
        Duplex apartment of 50 m2 with beautiful views of the pool and garden. It features a cozy open plan living and dining area with a fully equipped kitchen and a bathroom at the entrance level. Master suite on the second level with a cool walk-in closet with stunning views.
      </p>
      <p>
        The complex offers its residents well-kept landscaped gardens and a large communal swimming pool with sunbathing area. Nearby you will find supermarkets, restaurants, pharmacies, banks and shops that cover your basic daily needs. The airport is less than 1 hour away. Another advantage of the area is the ideal ecological conditions provided by the surrounding fields.
      </p>
    </div>
  </section>

  <section class="section-fixed mb-32 px-4 lg:px-0">
    <h2 class="h2 mb-[94px]">
      General plan of the apartments complex with <i>property description</i>
    </h2>

    <div class="flex flex-row space-x-8">
      <div class="w-1/2">
        <img src="/deluxe/map.jpg" alt="" class="rounded-3xl">
      </div>
      <div class="w-1/2">
        <ul class="pros-list">

          {#each points as point}
            <li class="pros-item">
              <div class="pros-sign">
                {point.sign}
              </div>
              <p class="pros-title">
                {point.title}
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
      @apply space-y-12;
      @apply w-1/2;
      @apply mb-12;

      .slide-1 {
        @apply w-full h-[320px];
      }

      .slide-2 {
        @apply w-full max-w-[60%] h-[320px];
      }
    }

    .section-gallery {
      @apply flex flex-col sm:flex-row;
      @apply items-end;
      @apply space-y-4 lg:space-y-0;
      @apply space-x-10;

      .slide-1 {
        @apply h-[400px];
        @apply w-full max-w-[40%]
      }
      .slide-2 {
        @apply h-[264px];
        @apply w-full max-w-[40%]
      }

      .slide-3 {
        @apply h-[400px];
        @apply w-full max-w-[20%];
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
      @apply flex flex-row justify-center items-center;
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
