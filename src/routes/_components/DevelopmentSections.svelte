<script lang="ts">
  const pictures = [
    {src: '/main-page/development-1.jpg',},
    {src: '/main-page/development-2.jpg',},
    {src: '/main-page/development-3.jpg',},
  ];
</script>

<div class="dev-container">
  <div class="dev-gallery">
    <picture
      class="slide slide-1"
      style={`background-image: url(${pictures[0].src})`}
    />

    <picture
      class="slide slide-2 block sm:hidden"
      style={`background-image: url(${pictures[1].src})`}
    />
    <picture
      class="slide slide-3 block sm:hidden"
      style={`background-image: url(${pictures[2].src})`}
    />

    <div class="slide-group-1 invisible sm:visible">
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

  <div class="dev-content">
    <div>
      <h3>
        Development
      </h3>
      <p>
        We make your property in 4 steps:Land with team of professional brokers, Architecture team will provide you nowadays technoligies and trends, Construction bulk of 15 years experience and individual Managment approach to each client.
      </p>
    </div>

    <a href="/services/development" class="link-round">
      Learn more
    </a>
  </div>
</div>

<style lang="scss">
  .dev-container {
    @apply flex flex-col lg:flex-row;

    .dev-gallery {
      @apply w-full lg:w-5/12;
      @apply flex flex-row;
      @apply sm:justify-center;
      @apply space-x-4;
      @apply lg:pr-6;
      @apply overflow-x-auto sm:overflow-x-auto;

      .slide-group-1 {
        @apply flex flex-col space-y-4 sm:pt-12 lg:pt-8;
        @apply w-0 h-0 sm:h-auto sm:w-1/2;
        @apply self-end;
      }

      .slide {
        @apply bg-cover bg-center;
        @apply rounded-3xl;
        @apply w-[50%] sm:w-full flex-none sm:flex-auto;
      }

      .slide-1 {
        @apply self-start lg:self-start;
        @apply w-1/2;
        @apply h-[260px] sm:h-[460px] lg:h-[372px];
      }
      .slide-2 {
        @apply sm:self-center;
        @apply w-full;
        @apply h-[260px] sm:h-[224px] lg:h-[182px];
      }
      .slide-3 {
        @apply sm:self-start;
        @apply w-full;
        @apply h-[260px] sm:h-[270px] lg:h-[220px];
      }
    }

    .dev-content {
      @apply w-full lg:w-7/12;
      @apply pt-12 lg:pl-16 lg:pr-12;
      @apply flex flex-col sm:flex-row lg:flex-col;
      @apply items-start sm:items-end lg:items-start;

      .link-round {
        @apply mx-4 sm:mx-10 lg:mx-0;
        @apply mb-4 sm:mb-10 lg:mb-2;
      }
    }
  }
</style>
