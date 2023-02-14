<script>
  import { t } from '$lib/translations/translations';
	import { ContactForm } from '$lib/components/structure';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="page page-padded min-h-screen">
  <section class="section-fixed mb-32 lg:mb-[144px] px-4 2xl:px-0">
    <div class="content">
      <h1 class="h1">
        Contacts
      </h1>

      <div class="grid grid-col-1 sm:grid-cols-2 gap-6">
        <div>
          <h4 class="h4">
            {$t("common.footer.address")}
          </h4>
          <p>Canggu, Kuta Utara, Badung, Bali 80361</p>
        </div>

        <div>
          <h4 class="h4">
            {$t("common.footer.phone")}/WA
          </h4>
          <p>+62 817 0 775599</p>
        </div>

        <div>
          <h4 class="h4">
            {$t("common.footer.working_hours")}
          </h4>
          <p>{$t("common.footer.monday")} - {$t("common.footer.friday")} 9:00 - 18:00</p>
        </div>

        <div>
          <h4 class="h4">E-mail</h4>
          <p>info@franz-group.com</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-20  px-4 2xl:px-0">
    <ContactForm />
  </section>
</div>
