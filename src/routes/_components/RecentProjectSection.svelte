<script lang="ts">
  import { t } from '$lib/translations/translations';
  import emblaCarouselSvelte from 'embla-carousel-svelte';

  // Components
  import { Project, ProjectGrid } from '$lib/components/shared';

  // Data
  export let projects;

  const emblaConfig = {
    options: {
      loop: false,
      // align: 'center',
      breakpoints: {
        '(min-width: 420px)': {
          slidesToScroll: 1,
        },
        '(min-width: 768px)': {
          slidesToScroll: 1,
        },
        '(min-width: 1024px)': {
          active: false,
        },
      },
    },
  };

  // /**
  //  * On slider init
  //  */
  // const onSliderInit = (event) => {
  //   emblaApi = event.detail;
  //   emblaApi.on("select", setActiveIndex);
  //   navDots = emblaApi.scrollSnapList();
  // }

  //  /**
  //  * Set active index
  //  */
  //  const setActiveIndex = () => {
  //   activeIndex = emblaApi.selectedScrollSnap();
  // }
</script>


<div >
  <h2 class="h2">
    {@html $t("common.pages.home.title3")}
  </h2>

  <div class="hidden lg:flex">
    <ProjectGrid class="embla__container">
      {#each projects as {fields}}
        <Project project={fields} class="embla__slide" />
      {/each}
    </ProjectGrid>
  </div>

  <div class="block lg:hidden">
    <div
      class="embla"
      use:emblaCarouselSvelte={emblaConfig}
    >
      <div class="embla__container">
        {#each projects as {fields}}
          <div class="embla__slide">
            <Project project={fields}  />
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="flex flex-row justify-center pt-10 lg:pt-20">
    <a href="/projects" class="link-round">
      {@html $t("common.actions.view_all")}
    </a>
  </div>
</div>

<style scoped lang="scss">
  .embla {
    @apply overflow-hidden;
  }
  .embla__container {
    @apply flex flex-row gap-4;
    @apply lg:grid lg:grid-cols-4
  }
  .embla__slide {
    @apply max-w-[98%];
    @apply flex-[0_0_98%] md:w-[98%];
    @apply md:flex-[0_0_98%] md:w-[98%];
    @apply lg:flex-[0_0_100%] lg:w-full;
  }
</style>
