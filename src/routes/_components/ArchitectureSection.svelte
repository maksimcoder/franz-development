<script lang="ts">
  import { t } from '$lib/translations/translations';

  // Props
  export let title   = "Architecture";
  export let content = "Shop, Spa, Restaurant and other commercial projects, our company can help in the development.";

  // Data
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
        {@html title}
      </h3>
      <p>
        {@html content}
      </p>
    </div>

    <div class="w-full sm:w-1/2 flex sm:justify-end">
      <a href="/services/architecture" class="link-round">
        {@html $t("common.actions.learn_more")}
      </a>
    </div>
  </div>

  <div class="architect-gallery">
      <picture class="slide slide-1 sm:hidden" style={`background-image: url(${pictures[0].src})`}>
      </picture>
      <picture class="slide slide-2 sm:hidden" style={`background-image: url(${pictures[1].src})`}>
      </picture>
      <picture class="slide slide-3 sm:hidden" style={`background-image: url(${pictures[2].src})`}>
      </picture>


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
    @apply flex flex-row lg:items-end;
    @apply order-1 lg:order-2;
    @apply overflow-x-auto sm:overflow-x-auto;
    @apply space-x-5 sm:space-x-0;

    img {
      @apply block;
      @apply w-auto max-w-full;
      @apply h-[290px] sm:h-auto;
    }

    .slide-group-1 {
      @apply invisible sm:visible;
      @apply h-[290px] sm:h-auto;
      @apply hidden sm:flex sm:flex-row;
      @apply w-full lg:w-[60%];
      @apply justify-end;
      @apply space-x-5;
      @apply mb-5 lg:mb-0;
    }

    .slide-group-2 {
      @apply h-[290px] sm:h-auto;
      @apply hidden sm:flex sm:flex-row;
      @apply w-full lg:w-[40%];
      @apply lg:pl-5;
    }

    .slide {
      @apply flex-none sm:flex-auto;
      @apply w-full;
      @apply bg-cover bg-center;
      @apply rounded-3xl;
    }

    .slide-1 {
      @apply h-[290px] sm:h-[180px];
      @apply w-2/3;
    }

    .slide-2 {
      @apply h-[290px] sm:h-[180px];
      @apply w-1/3;
    }

    .slide-3 {
      @apply flex-grow;
      @apply h-[290px] sm:h-[295px] lg:h-[230px];
    }
  }
}
</style>
