<script>
	import { ContactForm } from '$lib/components/structure';
</script>

<svelte:head>
	<title>Construction</title>
	<meta name="description" content="Construction " />
</svelte:head>

<div class="page page-padded min-h-screen">
  <section class="section-fixed pt-10 mb-32">
    <div class="content">
      <h1 class="h1 max-w-[68%]">
        15 years of construction experience, over 100 <i>completed projects</i>
      </h1>

      <p>
        The Franz Group holding includes Franz Construction & Design, which has highly skilled employees with years of experience. We only use premium components produced by the finest European and American manufacturers. High quality at a reasonable cost. We keep up with advances in construction technology and implement them in all of our facilities. The progress of each stage of construction is monitored by three levels of technical supervision. A qualified team guarantees adherence to all construction deadlines
      </p>
    </div>
  </section>

  <section class="section-fixed mb-32">
    <div class="flex flex-row items-end gap-4">
      <img src="/construction/construction-1.png" alt="" class="w-full">
      <img src="/construction/construction-2.png" alt="" class="w-full">
      <img src="/construction/construction-3.png" alt="" class="w-full">
    </div>
  </section>

  <section class="mb-20">
    <ContactForm />
  </section>
</div>
