<script>
	import { ContactForm } from '$lib/components/structure';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="page page-padded min-h-screen">
  <section class="section-fixed px-4 lg:px-0 mb-32 lg:mb-[144px]">
    <div class="content">
      <h1 class="h1">
        Contacts
      </h1>

      <div class="grid grid-col-1 sm:grid-cols-2 gap-6">
        <div>
          <h4 class="h4">Address</h4>
          <p>Canggu, Kuta Utara, Badung, Bali 80361</p>
        </div>

        <div>
          <h4 class="h4">Phone/WA</h4>
          <p>+62 817 0 775599</p>
        </div>

        <div>
          <h4 class="h4">Working hours</h4>
          <p>Monday - Friday 9:00 - 18:00</p>
        </div>

        <div>
          <h4 class="h4">E-mail</h4>
          <p>franzdevelopmentgroup@gmail.com</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-20 px-4 lg:px-0">
    <ContactForm />
  </section>
</div>
