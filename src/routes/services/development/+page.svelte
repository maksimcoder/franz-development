<script>
	import { ContactForm } from '$lib/components/structure';
</script>

<svelte:head>
	<title>Development</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="page page-padded mb-32">
  <section class="section-fixed pt-10">
    <div class="content px-4">
      <h1 class="h1">
        Our company has establisheda reputation as one of the most trustworthy housing market <i>in Bali</i>
      </h1>

      <p>
        Our objects are a combination of the most essential factors for high profitability - location, quality and design. In order to provide each customer with a comfortable and fulfilling life, we don't just build houses; we carefully plan out the external and internal infrastructure of each residential complex. There are four stages to the entire cycle of real estate development services
      </p>
    </div>
  </section>
</div>

<div class="page page-padded section-plot-search">
  <section class="section-fixed color-invert">
    <div class="pls-content">
      <div class="pls-content-item">
        <h2 class="h2">
          Plot <i>search</i>
        </h2>
      </div>
      <div class="pls-content-item">
        <p>The variety and types of land in Bali is mesmerizing. We approach each plot individually, selecting it for the personal request of the client. We do all checks on land and documents</p>
      </div>
    </div>

    <div class="pls-gallery">
      <div class="pls-gallery-item">
        <img src="/development/plot-1.png" alt="" class="w-full">
      </div>
      <div class="pls-gallery-item">
        <img src="/development/plot-2.png" alt="" class="w-full">
      </div>
    </div>
  </section>
</div>

<div class="page page-padded">
  <section class="section-fixed section-architect-info">
    <div class="sai-content">
      <div class="sai-content-gallery">
        <img src="/development/architecture.png" alt="" class="w-full">
      </div>

      <div class="sai-content-text">
        <h2 class="h2">
          Architecture
        </h2>
        <p>
          Our company has a full staff of architects and designers who work on high standards. We can make any dream come true.
        </p>
      </div>
    </div>
  </section>
</div>

<div class="section-white">
  <section class="section-fixed color-invert section-constraction">
    <div class="inner">
      <div class="sc-content">
        <h2 class="h2">
          Constraction
        </h2>
        <p>
          The 15 years experience of our staff in Bali construction ensures the highest quality, on time delivery and state of the art technology
        </p>
      </div>
      <div class="sc-gallery ">
        <div>
          <img src="/development/construction-1.png" alt="" class="w-full">
        </div>
        <div class="row-span-2">
          <img src="/development/construction-3.png" alt="" class="w-full">
        </div>
        <div>
          <img src="/development/construction-2.png" alt="" class="w-full">
        </div>
      </div>
    </div>
  </section>
</div>

<div class="page page-padded section-managnemt ">
  <section class="section-fixed">
    <div class="inner-content">
      <h2 class="h2">
        Managment
      </h2>
      <p>
        By focusing on the individual nature of each property, we turn villas and apartments into market leaders.
      </p>
    </div>

    <div class="inner-gallery">
      <img src="/development/managment.png" alt="" class="w-full">
    </div>
  </section>
</div>

<div class="page page-padded">
  <section class="mb-20 px-4 lg:px-10">
    <ContactForm />
  </section>
</div>

<style lang="scss">
.section-plot-search {
  @apply bg-white pb-32;

  .pls-content {
    @apply flex flex-col lg:flex-row gap-10 items-center mb-10;
    @apply px-8 lg:px-0;

    .pls-content-item {
      @apply w-full lg:w-1/2;
    }
  }

  .pls-gallery {
    @apply flex flex-col lg:flex-row gap-10 items-center;

    .pls-gallery-item {
      @apply w-full lg:w-1/2;
      @apply px-8 lg:px-0;
    }
  }
}

.section-architect-info {
  .sai-content {
    @apply flex flex-col lg:flex-row  gap-10 items-center mb-10;
    @apply px-4 lg:px-0;
    .sai-content-gallery {
      @apply w-full lg:w-1/2;
    }
    .sai-content-gallery {
      @apply w-full lg:w-1/2;
      @apply lg:px-10;
    }
  }
}

.section-white {
  @apply bg-white;
  @apply py-[56px] lg:py-[188px];
}

.section-constraction {
  @apply py-4 lg:py-10;

  .inner {
    @apply flex flex-col lg:flex-row gap-10 items-center;
  }

  .sc-content {
    @apply w-full lg:w-1/2;
    @apply px-4 lg:px-10;
    @apply order-2 lg:order-1;
  }

  .sc-gallery {
    @apply w-full lg:w-1/2 grid grid-cols-2 gap-4;
    @apply order-1 lg:order-2;
    @apply px-4 lg:px-0;
  }
}

.section-managnemt {
  @apply py-[56px] lg:py-[188px];

  .section-fixed {
    @apply flex flex-col lg:flex-row gap-10 items-center mb-10;

    .inner-content {
      @apply w-full lg:w-1/2;
      @apply px-4 lg:px-10;
      @apply order-2 lg:order-1;
    }

    .inner-gallery {
      @apply w-full lg:w-1/2;
      @apply px-4 lg:px-0;
      @apply order-1 lg:order-2;
    }
  }
}
</style>
