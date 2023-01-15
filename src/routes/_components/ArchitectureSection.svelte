<script lang="ts">
  const pictures = [
    {src: '/main-page/architecture-1.jpg',},
    {src: '/main-page/architecture-2.jpg',},
    {src: '/main-page/architecture-3.jpg',},
  ];
</script>

<div class="architect-container">
  <div class="architect-content">
    <div class="w-full sm:w-1/2 lg:pl-[80px]">
      <h3>
        Architecture
      </h3>
      <p>
        We do all the stages of development for you. We provide you with weekly reports. Most easies way to make passive income.
      </p>
    </div>

    <div class="w-full sm:w-1/2 flex sm:justify-end">
      <a href="/services/architecture" class="link-round">
        Learn more
      </a>
    </div>
  </div>

  <div class="architect-gallery">
    <div class="slide-group-1">
      <picture class="slide slide-1" style={`background-image: url(${pictures[0].src})`}>
      </picture>
      <picture class="slide slide-2" style={`background-image: url(${pictures[1].src})`}>
      </picture>
    </div>

    <div class="slide-group-2">
      <picture class="slide slide-3" style={`background-image: url(${pictures[2].src})`}>
      </picture>
    </div>
  </div>
</div>

<style lang="scss">
.architect-container {
  @apply flex flex-col;

  .architect-content {
    @apply flex flex-col sm:flex-row pt-12;
    @apply order-2 lg:order-1;

    .link-round {
      @apply mx-4 sm:mx-10 lg:mx-0;
      @apply mb-4 sm:mb-10 lg:mb-2;
    }
  }

  .architect-gallery {
    @apply w-full;
    @apply flex flex-col lg:flex-row lg:items-end;
    @apply order-1 lg:order-2;

    img {
      @apply block;
      @apply w-auto max-w-full;
    }

    .slide-group-1 {
      @apply w-full lg:w-[60%];
      @apply flex flex-row;
      @apply justify-end;
      @apply space-x-5;
      @apply mb-5 lg:mb-0;
    }

    .slide-group-2 {
      @apply w-full lg:w-[40%];
      @apply flex flex-row;
      @apply lg:pl-5;
    }

    .slide {
      @apply w-full;
      @apply bg-cover bg-center;
      @apply rounded-3xl;
    }

    .slide-1 {
      @apply h-[180px];
      @apply w-2/3;
    }

    .slide-2 {
      @apply h-[180px];
      @apply w-1/3;
    }

    .slide-3 {
      @apply flex-grow;
      @apply h-[295px] lg:h-[230px];
    }
  }
}
</style>
