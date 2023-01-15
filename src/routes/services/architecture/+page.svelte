<script>
	import { ContactForm } from '$lib/components/structure';
</script>

<svelte:head>
	<title>Architecture</title>
	<meta name="description" content="Architecture" />
</svelte:head>

<div class="page page-padded min-h-screen page-architecture">
  <section class="section-fixed pt-10 lg:mb-32">
    <div class="content px-4 lg:px-0">
      <h1 class="h1">
        Huge experience in <i>architecture</i>
      </h1>
      <p>
        From concept to execution, our team of architects offers expert design services. The core element of our work is an integrated approach and the creation of a relaxed environment, starting with the house's exterior and outlining with interior decorations. We complete the entire architectural cycle. Our team consists of skilled architects with a combined experience of more than 8 years. We design and build contemporary, cozy, and useful residential and commercial spaces. From designing five-star hotels to private villas, our architects are capable of handling projects of any complexity. We supervise every stage of the process and always take responsibility for our work.
      </p>
      <p>
        Inspire with the architecture
      </p>
    </div>
  </section>

  <section class="section-fixed mb-32 px-4 lg:px-0">
    <div class="section-gallery">
      <div class="slide-1">
        <img src="/architecture/architecture-1.png" alt="" class="w-full">
      </div>
      <div class="slide-2">
        <img src="/architecture/architecture-2.png" alt="" class="w-full">
      </div>
      <div class="slide-3">
        <img src="/architecture/architecture-3.png" alt="" class="w-full">
      </div>
    </div>
  </section>

  <section class="mb-20 px-4 lg:px-0">
    <ContactForm />
  </section>
</div>

<style lang="scss">
  .page-architecture {

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
