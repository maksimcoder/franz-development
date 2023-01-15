<script lang="ts">
  import { t } from '$lib/translations/translations';
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
        <a href="/" class="link-round">
          {$t('common.actions.contact_us')}
        </a>
      </div>
    </div>

    <div class="bottom-line">
      <div>
        © Franz Development Group 2022
      </div>
      <div class="social-list">
        <a href="#">
          <img src="/social/instagram.svg" alt="">
        </a>
        <a href="#">
          <img src="/social/facebook.svg" alt="">
        </a>
        <a href="#">
          <img src="/social/whatsapp.svg" alt="">
        </a>
        <a href="#">
          <img src="/social/telegram.svg" alt="">
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
    @apply flex flex-row justify-between;
    @apply py-6;
    @apply border-t border-solid;
    @apply border-t-[var(--color-light-gray)];

    .social-list {
      @apply flex flex-row space-x-4;
    }
  }
}
</style>
