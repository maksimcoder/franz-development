<script lang="ts">
  import Counter from 'svelte-counter';
  import { inview } from 'svelte-inview';
  import { fly } from 'svelte/transition';

  // Data
  let isInView: boolean;
  const flyOptions = {
    y: 200,
    duration: 2000,
  };

  const points = [
    {
      icon: "color-swatch",
      title: "Experience",
      content: "our company has been in the real estate market for more than 15 years, and has all necessary licenses to carry out a full cycle in development",
    }, {
      icon: "calendar",
      title: "Quality assurance",
      content: "Quality assurance - we work with trusted suppliers of building materials. There are 4 levels of quality control for each project",
    }, {
      icon: "verify",
      title: "Meeting deadlines",
      content: "We provide regular reporting on the progress of work through all the stages",
    }, {
      icon: "building",
      title: "The best conditions",
      content: "We offer complete assistance from project development and construction to the commissioning of the facility",
    },
  ];

  const statistics = [
    {
      prefix: "",
      counter: "15",
      units: "years",
      label: "On real estate market",
    }, {
      prefix: "",
      counter: "100",
      units: "More",
      label: "Unique projects developed",
    }, {
      prefix: "≈",
      counter: "20",
      units: "%",
      label: "Profitability per year",
    },
  ];
</script>

<div
  class="section-point"
  use:inview={{ unobserveOnEnter: true, rootMargin: '20%' }}
  on:change={({ detail }) => { isInView = detail.inView }}
>
  <h1 class="h1 mb-16">
    Generate, develop <i>and implement</i>
  </h1>

  {#if isInView}
    <div
      class="point-list mb-16"
      in:fly={flyOptions}
    >
      {#each points as point}
        <div class="point-item">
          <div class="point-icon">
            <img src={`/icons/${point.icon}.svg`} alt={point.title}>
          </div>
          <div class="point-info">
            <h4 class="point-title">
              {point.title}
            </h4>
            <p class="point-content">
              {point.content}
            </p>
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <div class="statistic-list">
    {#each statistics as stat, index}
      <div class="statistic-item">
        <div class="statistic-value">
          <h4>
            <Counter values={stat} duration="6000" random="false" minspeed="200" let:counterResult>
              {stat.prefix}<span class="counter-placeholder-{index+1}">{counterResult.counter}</span>
            </Counter>
          </h4>

          <h5>
            {stat.units}
          </h5>
        </div>
        <p class="statistic-label">
          {stat.label}
        </p>
      </div>
    {/each}
  </div>
</div>

<style scoped lang="scss">
  .point-list {
    @apply grid grid-cols-2 gap-20;
    @apply mb-16;

    .point-item {
      @apply flex flex-row;
      @apply space-x-6;

      .point {
        &-icon {
          @apply w-[116px] h-[116px] rounded-[28px];
          @apply bg-[var(--color-middle-black)];
          @apply flex flex-shrink-0 justify-center items-center;
        }
        &-info {}
        &-title {
          @apply text-2xl font-semibold;
        }
        &-content {}
      }
    }
  }

  .statistic-list {
    @apply flex flex-row justify-between;

    .statistic-item {
      @apply flex flex-col;

      .statistic-value {
        @apply flex flex-row items-end;
        h4 {
          @apply text-[124px];
          @apply leading-[124px];

          span {
            @apply inline-block;
          }

          .counter-placeholder-1 {
            @apply w-[120px];
          }
          .counter-placeholder-2 {
            @apply w-[200px];
          }
          .counter-placeholder-3 {
            @apply w-[166px];
          }
        }
        h5 {
          @apply text-[54px];
        }
      }
      .statistic-label {
        @apply text-2xl;
      }
    }
  }
</style>
