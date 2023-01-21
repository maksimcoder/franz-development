<script lang="ts">
  import { t } from '$lib/translations/translations';
  import { contactFormStore } from "$lib/stores";
</script>

<footer class="footer">
  <div class="footer-inner">

    <div class="main-contacts">
      <div class="contacts-list">
        <h4 class="text-4xl mb-8">
          info@franz-group.com
        </h4>

        <div class="contacts">
          <div class="w-full lg:w-1/3">
            <h6>
              {$t('common.footer.office')}
            </h6>
            <p>Canggu, Kuta Utara, Badung, Bali 80361</p>
          </div>
          <div class="w-full lg:w-1/3">
            <h6>
              {$t('common.footer.working_hours')}
            </h6>
            <p>
              {$t('common.footer.monday')} - {$t('common.footer.friday')} 9:00 am - 6:00pm
            </p>
          </div>
          <div class="w-full lg:w-1/3">
            <h6>
              {$t('common.footer.phone')}
            </h6>
            <p>+62 817 0 775599</p>
          </div>
        </div>
      </div>

      <div class="contacts-action">
        <button class="link-round mx-5 md:mx-12 lg:mx-0 mt-8 sm:mt-0"
          on:click={() => {
            contactFormStore.update(value => {
              value.visible = true;
              return value;
            });
          }}
        >
          {@html $t("common.actions.contact_us")}
        </button>
      </div>
    </div>

    <div class="bottom-line">
      <div class="copyrights">
        © Franz Development Group 2022
      </div>
      <div class="social-list">
        <a href="https://instagram.com/franzgroup" target="_blank" rel="noreferrer">
          <img src="/social/instagram.svg" alt="instagram">
        </a>
        <!--
        <a href="#" target="_blank" rel="noreferrer">
          <img src="/social/facebook.svg" alt="facebook">
        </a>
        -->
        <a href="https://wa.me/628170775599" target="_blank" rel="noreferrer">
          <img src="/social/whatsapp.svg" alt="whatsapp">
        </a>
        <a href="https://t.me/+628170775599" target="_blank" rel="noreferrer">
          <img src="/social/telegram.svg" alt="telegram">
        </a>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
.footer {
  @apply bg-[var(--color-middle-black)];
  @apply pt-16;
  @apply px-5 lg:px-0;

  .footer-inner {
    @apply max-w-[var(--max-content-width)];
    @apply mx-auto
  }

  .main-contacts {
    @apply flex flex-col sm:flex-row;
    @apply items-center;
    @apply pb-4;
  }

  .contacts {
    @apply flex flex-col lg:flex-row w-full;
    h6 {
      @apply text-lg;
    }
    p {
      @apply text-[var(--color-middle-gray)];
    }
  }

  .contacts-list {
    @apply w-full sm:w-9/12 lg:w-10/12;
  }

  .contacts-action {
    @apply w-full sm:w-3/12 lg:w-2/12;
    @apply flex flex-col lg:flex-row justify-end;
    @apply pb-5;
  }

  .bottom-line {
    @apply flex flex-col sm:flex-row justify-between;
    @apply py-6;
    @apply border-t border-solid;
    @apply border-t-[var(--color-light-gray)];

    .social-list {
      @apply flex flex-row space-x-4;
      @apply order-1 sm:order-2;
      @apply mb-6 sm:mb-0;
    }
    .copyrights {
      @apply order-2 sm:order-1;
      @apply mb-4 sm:mb-0;
    }
  }
}
</style>
