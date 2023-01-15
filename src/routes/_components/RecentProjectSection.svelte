<script lang="ts">
  import emblaCarouselSvelte from 'embla-carousel-svelte';

  // Components
  import { Project, ProjectGrid } from '$lib/components/shared';

  // Data
  export let projects;

  const emblaConfig = {
    options: {
      loop: false,
      breakpoints: {
        '(min-width: 420px)': {
          slidesToScroll: 1,
        },
        '(min-width: 768px)': {
          slidesToScroll: 2,
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
    Recent <i>projects</i>
  </h2>

  <div
    class="embla"
    use:emblaCarouselSvelte={emblaConfig}
  >
    <ProjectGrid class="embla__container">
      {#each projects as {fields}}
        <Project project={fields} class="embla__slide" />
      {/each}
    </ProjectGrid>
  </div>

  <!--
  <ProjectGrid>
    {#each projects as {fields}}
      <Project project={fields} />
    {/each}
  </ProjectGrid>
  -->

  <div class="flex flex-row justify-center pt-20">
    <a href="/portfolio" class="link-round">
      View all
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
    @apply md:flex-[0_0_46%] md:w-[46%];
    @apply lg:flex-[0_0_100%] lg:w-full;
  }
</style>
