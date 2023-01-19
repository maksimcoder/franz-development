<script lang="ts">
  import { t } from '$lib/translations/translations';
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

  import { inview } from 'svelte-inview';
  import { fly } from 'svelte/transition';
  import Counter from 'svelte-counter';

  import { PointItem } from '$lib/components/shared';

  // Props
  export let blocks = [];

  // Data
  let isInView: boolean;
  const flyOptions = {
    y: 200,
    duration: 3500,
  };

  const points = [
    {
      icon: "color-swatch",
      title: blocks[0]?.fields?.title || "Experience",
      content: blocks[0]?.fields?.content
        ? documentToHtmlString(blocks[0]?.fields?.content)
        : "our company has been in the real estate market for more than 15 years, and has all necessary licenses to carry out a full cycle in development",
    }, {
      icon: "calendar",
      title: blocks[1]?.fields?.title || "Quality assurance",
      content:  blocks[1]?.fields?.content
        ? documentToHtmlString(blocks[1]?.fields?.content)
        : "Quality assurance - we work with trusted suppliers of building materials. There are 4 levels of quality control for each project",
    }, {
      icon: "verify",
      title: blocks[2]?.fields?.title || "Meeting deadlines",
      content: blocks[2]?.fields?.content
        ? documentToHtmlString(blocks[2]?.fields?.content)
        : "We provide regular reporting on the progress of work through all the stages",
    }, {
      icon: "building",
      title: blocks[3]?.fields?.title || "The best conditions",
      content: blocks[3]?.fields?.content
        ? documentToHtmlString(blocks[3]?.fields?.content)
        : "We offer complete assistance from project development and construction to the commissioning of the facility",
    },
  ];

  const statistics = [
    {
      prefix: "",
      counter: "15",
      units: "years",
      label: "term",
    }, {
      prefix: "",
      counter: "100",
      units: "more",
      label: "projects",
    }, {
      prefix: "≈",
      counter: "20",
      units: "percent",
      label: "profitability",
    },
  ];
</script>

<div
  class="section-point"
  use:inview={{ unobserveOnEnter: true, rootMargin: '20%' }}
  on:change={({ detail }) => { isInView = detail.inView }}
>
  <h1 class="h1 mb-16">
    {@html $t("common.pages.home.title4")}
  </h1>

  {#if isInView}
    <div
      class="point-list mb-16"
      in:fly={flyOptions}
    >
      {#each points as point}
        <PointItem {point} />
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
</div>

<style scoped lang="scss">
  .statistic-list {
    @apply flex flex-col md:flex-row justify-between;

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
