<footer class="footer">
  <div class="footer-inner">

    <div class="main-contact">
      <div class="w-10/12">
        <h4 class="text-4xl mb-8">
          info@franz-group.com
        </h4>

        <div class="contacts">
          <div class="w-1/3">
            <h6>Bali office</h6>
            <p>Canggu, Kuta Utara, Badung, Bali 80361</p>
          </div>
          <div class="w-1/3">
            <h6>Working hours</h6>
            <p>Monday - Friday 9:00 am - 6:00pm</p>
          </div>
          <div class="w-1/3">
            <h6>Phone</h6>
            <p>+62 817 0 775599</p>
          </div>
        </div>
      </div>
      <div class="w-2/12 flex justify-end">
        <a href="/" class="link-round">
          Contact us
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

  .footer-inner {
    @apply max-w-[var(--max-content-width)];
    @apply mx-auto
  }

  .main-contact {
    @apply flex flex-row;
    @apply items-center;
    @apply pb-4;
  }

  .contacts {
    @apply flex flex-row w-full;
    h6 {
      @apply text-lg;
    }
    p {
      @apply text-[var(--color-middle-gray)];
    }
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
