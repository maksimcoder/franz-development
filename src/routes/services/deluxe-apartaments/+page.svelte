<script>
	import { ContactForm } from '$lib/components/structure';
  import { PointItem } from '$lib/components/shared';

  const points = [
    {
      icon: "color-swatch",
      title: "",
      content: "Properly plan the development of the project",
    }, {
      icon: "status-up",
      title: "",
      content: "Create a cost-effective and competitive real estate object",
    }, {
      icon: "math",
      title: "",
      content: "Calculate the economic benefits of investments",
    }, {
      icon: "shield-tick",
      title: "",
      content: "Foresee the course of events and circumstances",
    }, {
      icon: "wallet",
      title: "",
      content: "Take into account the main risks and save time and money",
    },
  ];
</script>

<svelte:head>
	<title>Consulting</title>
	<meta name="description" content="Consulting" />
</svelte:head>

<div class="page page-padded min-h-screen page-consulting">
  <section class="section-fixed pt-10 mb-32">
    <div class="content px-4 lg:px-0">
      <h1 class="h1">
        Real estate is one of the most alluring ways to <i>invest capital</i>
      </h1>

      <p>
        It requires mindful planning, a careful approach, and awareness of the challenges of the market and the nuances of law. Any real estate project begins with the development of a business concept. Consulting for commercial real estate or land involves the search for ideas that, after thorough analysis, turn into the most effective concept for the best use. The business concept is completely suitable for development in the future
      </p>
    </div>
  </section>

  <section class="section-fixed mb-32 px-4 lg:px-0">
    <div class="section-gallery">
      <div class="slide-1">
        <img src="/consulting/consulting-1.png" alt="" class="w-full">
      </div>
      <div class="slide-2">
        <img src="/consulting/consulting-2.png" alt="" class="w-full">
      </div>
      <div class="slide-3">
        <img src="/consulting/consulting-3.png" alt="" class="w-full">
      </div>
    </div>
  </section>

  <section class="section-fixed mb-32 px-4 lg:px-0">
    <h2 class="h2">
      Our team of professionals will help <i>you to:</i>
    </h2>

    <div class="point-list mb-16 w-full sm:w-[75%] lg:w-full">
      {#each points as point}
        <PointItem {point} />
      {/each}
    </div>
  </section>

  <section class="mb-20 px-4 lg:px-0">
    <ContactForm />
  </section>
</div>


<style lang="scss">
  .page-consulting {

    .section-gallery {
      @apply flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap;
      @apply items-end;
      @apply space-y-4 lg:space-y-0;

      .slide-1 {
        @apply w-full sm:w-7/12 lg:w-[490px];
      }
      .slide-2 {
        @apply w-full sm:w-5/12 lg:w-[306px];
        @apply sm:pl-4;
      }

      .slide-3 {
        @apply w-full lg:w-auto;
        @apply lg:pl-4;
      }
    }
  }
</style>
