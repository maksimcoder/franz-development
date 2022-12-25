<script>
	import { ContactForm } from '$lib/components/structure';
</script>

<svelte:head>
	<title>Consulting</title>
	<meta name="description" content="Consulting" />
</svelte:head>

<div class="page page-padded min-h-screen">
  <section class="section-fixed pt-10 mb-32">
    <div class="content">
      <h1 class="h1">
        Real estate is one of the most alluring ways to <i>invest capital</i>
      </h1>

      <p>
        It requires mindful planning, a careful approach, and awareness of the challenges of the market and the nuances of law. Any real estate project begins with the development of a business concept. Consulting for commercial real estate or land involves the search for ideas that, after thorough analysis, turn into the most effective concept for the best use. The business concept is completely suitable for development in the future
      </p>
    </div>
  </section>

  <section class="section-fixed mb-32">
    <div class="flex flex-row items-end gap-4">
      <img src="/consulting/consulting-1.png" alt="" class="w-full">
      <img src="/consulting/consulting-2.png" alt="" class="w-full">
      <img src="/consulting/consulting-3.png" alt="" class="w-full">
    </div>
  </section>

  <section class="section-fixed mb-32">
    <h2 class="h2">
      Our team of professionals will help <i>you to:</i>
    </h2>

    <div class="grid grid-cols-2 gap-10">
      <div>
        <p>Properly plan the development of the project</p>
      </div>
      <div>
        <p>Create a cost-effective and competitive real estate object</p>
      </div>
      <div>
        <p>Calculate the economic benefits of investments</p>
      </div>
      <div>
        <p>Foresee the course of events and circumstances </p>
      </div>
      <div>
        <p>Take into account the main risks and save time and money</p>
      </div>
    </div>
  </section>

  <section class="mb-20">
    <ContactForm />
  </section>
</div>
