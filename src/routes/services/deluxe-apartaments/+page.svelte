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
	<title>Deluxe apartments</title>
	<meta name="description" content="Consulting" />
</svelte:head>

<div class="page page-padded min-h-screen page-consulting">
  <section class="section-fixed pt-10 mb-32">
    <div class="content px-4 lg:px-0">
      <h1 class="h1">
        Deluxe apartments in the heart of the most tourist destination <i>on earth</i>
      </h1>
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


    ----

    <p>
      Duplex apartment of 50 m2 with beautiful views of the pool and garden. It features a cozy open plan living and dining area with a fully equipped kitchen and a bathroom at the entrance level. Master suite on the second level with a cool walk-in closet with stunning views.
    </p>
    <p>
      The complex offers its residents well-kept landscaped gardens and a large communal swimming pool with sunbathing area. Nearby you will find supermarkets, restaurants, pharmacies, banks and shops that cover your basic daily needs. The airport is less than 1 hour away. Another advantage of the area is the ideal ecological conditions provided by the surrounding fields.
    </p>
   </section>

  <section class="section-fixed mb-32 px-4 lg:px-0">
    <h2 class="h2">
      General plan of the apartments complex with <i>property description</i>
    </h2>


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
