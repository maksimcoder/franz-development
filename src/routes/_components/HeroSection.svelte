<script lang="ts">
  const videoUrl = 'https://videos.ctfassets.net/hcz4k2i65d18/OKUdvqv44CbL3LHcH34l4/a40949f56c41437b16db558fc193a0f0/franz-development-bg.mp4'
</script>

<section class="section-hero">
  <div class="section-fixed">
    <div class="flex flex-col lg:flex-row pt-[160px] px-5 lg:px-0">
      <div class="w-full lg:w-8/12">
        <h1 class="h1 hero-title">
          Franz<br>
          real <i>estate<br>
          developer</i>
        </h1>
      </div>
      <div class="w-full lg:w-4/12 flex flex-col sm:flex-row: lg:flex-col pt-8 sm:pt-16">
        <p class="lg:mb-32">
          Invest in real estate on Bali and get up to 20% passive income per year
        </p>
        <a href="/" class="link-round mx-5 md:mx-12 lg:mx-0 mt-8 sm:mt-0">
          Contact us
        </a>
      </div>
    </div>
  </div>

  <video
    class="hero-video"
    src={videoUrl}
    autoplay={true}
    loop={true}
    paused={false}
    muted
    controls={false}
  >
    <track kind="captions">
  </video>
</section>


<style lang="scss">
  .section-hero {
    // @apply bg-[url('/main-page/preview.png')];
    // @apply bg-no-repeat bg-cover bg-center;
    @apply h-[750px];
    @apply rounded-b-3xl;
    @apply relative;
    @apply overflow-hidden;

    .section-fixed {
      @apply relative z-[2]
    }

    .hero-video {
      @apply absolute bottom-0 left-0 z-[1];
      // size < md
      @apply h-[750px] max-w-[1333px] w-[1333px] ml-[-50%];
      // md
      @apply md:h-[750px] md:max-w-[1333px] md:w-[1333px] md:ml-0;
      // lg
      @apply lg:h-[750px] lg:max-w-[1333px] lg:w-[1333px] lg:ml-0;
      // xl
      @apply xl:h-auto xl:max-w-[calc(110%)] xl:w-[calc(110%)] xl:ml-0;
    }

    .hero-title {
      @apply text-[62px] leading-[60px];
      @apply lg:text-[149px] lg:leading-[130px];
    }
  }
</style>
