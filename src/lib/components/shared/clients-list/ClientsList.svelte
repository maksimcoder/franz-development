<script lang="ts">
  const clients = [
    'zurich',
    'airbnb',
    'bose',
    'kone',
    'toto',
    'daikin',
    'bosch',
  ];
  const clientList = [
    ...clients,
    ...clients,
    ...clients,
    ...clients,
    ...clients,
    ...clients,
  ]
</script>

<section class="client-list">
  <ul>
    {#each clientList as client}
      <li>
        <img src={`/clients/${client}.png`} alt={client} />
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  .client-list {
    @apply my-0 mx-auto;
    @apply w-full;
    @apply flex flex-row;
    @apply whitespace-nowrap;
    @apply overflow-hidden;
    @apply h-[108px];

    ul {
      @apply flex flex-row w-full;
      animation: marquee 40s linear infinite;

      li {
        @apply flex-shrink-0 h-[108px] w-[268px];
      }
    }
  }

  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
</style>
