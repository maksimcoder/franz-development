<script lang="ts">
  import { t } from '$lib/translations/translations';
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

  // Components
  import Counter from 'svelte-counter';
  import { PointItem } from '$lib/components/shared';

  // Props
  export let blocks = [];
  export let showCounter = false;

  // Data
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

<div class="section-point">
  <h1 class="h1 mb-16">
    {@html $t("common.pages.home.title4")}
  </h1>

  <div class="point-list mb-16">
    {#each points as point}
      <PointItem {point} />
    {/each}
  </div>


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
