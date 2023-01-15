<script lang="ts">
  const pictures = [
    {src: '/main-page/construction-1.jpg',},
    {src: '/main-page/construction-2.jpg',},
    {src: '/main-page/construction-3.jpg',},
  ];
</script>

<div class="construct-container">
  <div class="construct-content">
    <div>
      <h3 class="h3">
        Construction
      </h3>
      <p>
        We do all the stages of development for you. We provide you with weekly reports. Most easies way to make passive income.
      </p>
    </div>

    <a href="/services/construction" class="link-round">
      Learn more
    </a>
  </div>

  <div class="construct-gallery">
    <picture
      class="slide slide-1"
      style={`background-image: url(${pictures[0].src})`}
    />
    <picture
      class="slide slide-2"
      style={`background-image: url(${pictures[1].src})`}
    />
    <picture
      class="slide slide-3"
      style={`background-image: url(${pictures[2].src})`}
    />
  </div>
</div>

<style lang="scss">
  .construct-container {
    @apply flex flex-col lg:flex-row;

    .construct-content {
      @apply w-full lg:w-1/3;
      @apply lg:pt-16 lg:pl-20;
      @apply order-2 lg:order-1;
      @apply flex flex-col sm:flex-row lg:flex-col;
      @apply items-start sm:items-end lg:items-start;

      .link-round {
        @apply mx-4 md:mx-10 lg:mx-0;
        @apply mb-4 sm:mb-10 lg:mb-0;
      }
    }

    .construct-gallery {
      @apply w-full lg:w-2/3;
      @apply lg:pl-10 mb-8 lg:mb-0;
      @apply flex flex-row;
      @apply gap-5;
      @apply order-1 lg:order-2;
      @apply overflow-x-auto sm:overflow-x-auto;

      .slide {
        @apply w-[50%] sm:w-full flex-none sm:flex-auto;
        @apply bg-cover bg-center;
        @apply rounded-3xl;
      }

      .slide-1 {
        @apply self-start sm:self-end;
        @apply h-[280px] sm:h-[250px] lg:h-[305px];
      }
      .slide-2 {
        @apply self-center;
        @apply h-[320px] sm:h-[375px] lg:h-[460px];
      }
      .slide-3 {
        @apply self-start;
        @apply h-[280px] sm:h-[280px] lg:h-[342px];
      }

    }
  }
</style>
