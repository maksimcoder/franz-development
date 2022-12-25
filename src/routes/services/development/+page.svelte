<script>
	import { ContactForm } from '$lib/components/structure';
</script>

<svelte:head>
	<title>Development</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="page page-padded mb-32">
  <section class="section-fixed pt-10">
    <div class="content">
      <h1 class="h1">
        Our company has establisheda reputation as one of the most trustworthy housing market <i>in Bali</i>
      </h1>

      <p>
        Our objects are a combination of the most essential factors for high profitability - location, quality and design. In order to provide each customer with a comfortable and fulfilling life, we don't just build houses; we carefully plan out the external and internal infrastructure of each residential complex. There are four stages to the entire cycle of real estate development services
      </p>
    </div>
  </section>
</div>

<div class="page page-padded bg-white pb-10">
  <section class="section-fixed color-invert mb-32">
    <div class="flex flex-row gap-10 items-center mb-10">
      <div class="w-1/2">
        <h2 class="h2">
          Plot <i>search</i>
        </h2>
      </div>
      <div class="w-1/2">
        <p>The variety and types of land in Bali is mesmerizing. We approach each plot individually, selecting it for the personal request of the client. We do all checks on land and documents</p>
      </div>
    </div>
    <div class="flex flex-row gap-10 items-center">
      <div class="w-1/2">
        <img src="/development/plot-1.png" alt="" class="w-full">
      </div>
      <div class="w-1/2">
        <img src="/development/plot-2.png" alt="" class="w-full">
      </div>
    </div>
  </section>
</div>

<div class="page page-padded mb-32">
  <section class="section-fixed">
    <div class="flex flex-row gap-10 items-center mb-10">
      <div class="w-1/2 grid">
        <img src="/development/architecture.png" alt="" class="w-full">
      </div>

      <div class="w-1/2 px-10">
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

<div class="page page-padded bg-white py-10 mb-32">
  <section class="section-fixed color-invert">
    <div class="flex flex-row gap-10 items-center mb-10">
      <div class="w-1/2 px-10">
        <h2 class="h2">
          Constraction
        </h2>
        <p>
          The 15 years experience of our staff in Bali construction ensures the highest quality, on time delivery and state of the art technology
        </p>
      </div>
      <div class="w-1/2 grid grid-cols-2 gap-4">
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

<div class="page page-padded mb-32">
  <section class="section-fixed">
    <div class="flex flex-row gap-10 items-center mb-10">
      <div class="w-1/2 px-10">
        <h2 class="h2">
          Managment
        </h2>
        <p>
          By focusing on the individual nature of each property, we turn villas and apartments into market leaders.
        </p>
      </div>

      <div class="w-1/2 grid">
        <img src="/development/managment.png" alt="" class="w-full">
      </div>
    </div>
  </section>
</div>

<div class="page page-padded">
  <section class="mb-20">
    <ContactForm />
  </section>
</div>
