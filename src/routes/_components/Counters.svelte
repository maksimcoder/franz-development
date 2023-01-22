<script lang="ts">
  import { t } from '$lib/translations/translations';

  // Components
  import Counter from 'svelte-counter';

  // Props
  export let showCounter = false;

  // Data
  const statistics = [
    {
      prefix: "",
      counter: 0,
      value: 15,
      units: "years",
      label: "term",
    }, {
      prefix: "",
      counter: 0,
      value: 100,
      units: "more",
      label: "projects",
    }, {
      prefix: "≈",
      counter: 0,
      value: 20,
      units: "percent",
      label: "profitability",
    },
  ];
</script>

<div>
  {#if showCounter}
    <div class="statistic-list">
      {#each statistics as stat, index}
        <div class="statistic-item">
          <div class="statistic-value">
            {#if stat.prefix}
              <h5>
              {stat.prefix}
              </h5>
            {/if}

            <h4>
              <Counter values={stat} duration={4000} random="false" minspeed="70" let:counterResult>

                <span class="counter-placeholder-{index+1}">
                  {counterResult.value}
                </span>
              </Counter>
            </h4>

            {#if stat.units}
              <h5>
                {$t(`common.units.${stat.units}`)}
              </h5>
            {/if}
          </div>
          <p class="statistic-label">
            {@html $t(`common.pages.home.stats.${stat.label}`)}
          </p>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style scoped lang="scss">
  .statistic-list {
    @apply flex flex-col md:flex-row justify-between;
    @apply gap-5 lg:gap-0;

    .statistic-item {
      @apply flex flex-col;
      @apply w-full md:w-1/3;

      .statistic-value {
        @apply flex flex-row items-end;
        h4 {
          @apply text-[90px] lg:text-[124px];
          @apply leading-[90px] lg:leading-[124px];

          span {
            @apply inline-block;
          }

          .counter-placeholder-1 {
            @apply w-[100px] lg:w-[120px];
          }
          .counter-placeholder-2 {
            @apply w-[150px] lg:w-[200px];
          }
          .counter-placeholder-3 {
            @apply w-[120px] lg:w-[166px];
          }
        }
        h5 {
          @apply text-[54px];
        }
      }
      .statistic-label {
        @apply text-lg lg:text-2xl;
        @apply lg:max-w-[80%]
      }
    }
  }
</style>
