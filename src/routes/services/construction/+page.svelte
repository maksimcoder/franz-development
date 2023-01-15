<script>
	import { ContactForm } from '$lib/components/structure';
</script>

<svelte:head>
	<title>Construction</title>
	<meta name="description" content="Construction " />
</svelte:head>

<div class="page page-padded min-h-screen">
  <section class="section-fixed pt-10 mb-32">
    <div class="content px-4 lg:px-0">
      <h1 class="h1 max-w-[68%]">
        15 years of construction experience, over 100 <i>completed projects</i>
      </h1>

      <p>
        The Franz Group holding includes Franz Construction & Design, which has highly skilled employees with years of experience. We only use premium components produced by the finest European and American manufacturers. High quality at a reasonable cost. We keep up with advances in construction technology and implement them in all of our facilities. The progress of each stage of construction is monitored by three levels of technical supervision. A qualified team guarantees adherence to all construction deadlines
      </p>
    </div>
  </section>

  <section class="section-fixed mb-32 px-4 lg:px-0">
    <div class="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-4">
      <img src="/construction/construction-1.png" alt="" class="sm:w-auto lg:w-full sm:max-h-[160px] lg:max-h-[auto]">
      <img src="/construction/construction-2.png" alt="" class="sm:w-auto lg:w-full sm:max-h-[160px] lg:max-h-[auto]">
      <img src="/construction/construction-3.png" alt="" class="hidden lg:block lg:w-full">
    </div>
    <img src="/construction/construction-3.png" alt="" class="block lg:hidden w-full mt-4">
  </section>

  <section class="mb-20 px-4 lg:px-0">
    <ContactForm />
  </section>
</div>
