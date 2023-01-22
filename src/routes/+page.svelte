<script lang="ts">
  import { t } from '$lib/translations/translations';
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
  import { inview } from 'svelte-inview';

  /** @type {import('./$types').PageData} */
  export let data: any;

  // Components
  import ConstructionSection from './_components/ConstructionSection.svelte';
  import DevelopmentSections from './_components/DevelopmentSections.svelte';
  import ClientsList from './_components/ClientsList.svelte';
  import ArchitectureSection from './_components/ArchitectureSection.svelte';
  import HeroSection from './_components/HeroSection.svelte';
  import RecentProjectSection from './_components/RecentProjectSection.svelte';
  import GeneralStatistic from './_components/GeneralStatistic.svelte';
  import Counters from './_components/Counters.svelte';

  // Data
  const page = data.page;
  const blocks = page.fields.contentBlockReference;
  const points = blocks.filter(el => el.fields.slug.includes("home-stats"))
  const projects = data.projects;
  const animate = {
    development: false,
    construction: false,
    architecture: false,
    projects: false,
    points: false,
    stats: false,
    counters: false,
  }
  const rootMargin = "-17%";
</script>

<svelte:head>
	<title>
    {page.fields.metaTitle}
  </title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
  <HeroSection subtitle={page.fields.title} />
</div>

<div class="mb-[100px] lg:mb-[230px]">
  <ClientsList />
</div>

<section class="section-fixed mb-[80px] lg:mb-[200px] sm:px-5 lg:px-0">
  <h2 class="h2 px-4 lg:px-0">
    {@html $t("common.pages.home.title2")}
  </h2>

  <!-- Development -->
  <div
    use:inview={{ unobserveOnEnter: true, rootMargin }}
    on:change={({ detail }) => { animate.development = detail.inView }}
    class={`fly-transition ${animate.development ? "fly-show" : "fly-hidden"}`}
  >
    <div class="data-block mb-10">
      <DevelopmentSections
        title={blocks[0].fields.title}
        content={documentToHtmlString(blocks[0].fields.content)}
      />
    </div>
  </div>

  <!-- Construction -->
  <div
    use:inview={{ unobserveOnEnter: true, rootMargin }}
    on:change={({ detail }) => { animate.construction = detail.inView }}
    class={`fly-transition ${animate.construction ? "fly-show" : "fly-hidden"}`}
  >
    <div class="data-block mb-10">
      <ConstructionSection
        title={blocks[1].fields.title}
        content={documentToHtmlString(blocks[1].fields.content)}
      />
    </div>
  </div>

  <!-- Architecture -->
  <div
    use:inview={{ unobserveOnEnter: true, rootMargin }}
    on:change={({ detail }) => { animate.architecture = detail.inView }}
    class={`fly-transition ${animate.architecture ? "fly-show" : "fly-hidden"}`}
  >
    <div class="data-block mb-10">
      <ArchitectureSection
        title={blocks[2].fields.title}
        content={documentToHtmlString(blocks[2].fields.content)}
      />
    </div>
  </div>
</section>

<section
  use:inview={{ unobserveOnEnter: true, rootMargin }}
  on:change={({ detail }) => { animate.projects = detail.inView }}
  class="section-fixed section-recent-projects"
>
  <div class={`fly-transition ${animate.projects ? "fly-show" : "fly-hidden"}`}>
    <RecentProjectSection {projects} />
  </div>
</section>

<section

  class="section-fixed section-statistic"
>
  <div
    use:inview={{ unobserveOnEnter: true, rootMargin }}
    on:change={({ detail }) => { animate.stats = detail.inView }}
  >
    <div class={`fly-transition ${animate.stats ? "fly-show" : "fly-hidden"}`}>
      <GeneralStatistic blocks={points} showCounter={animate.stats}/>
    </div>
  </div>

  <div
    use:inview={{ unobserveOnEnter: true, rootMargin }}
    on:change={({ detail }) => { animate.counters = detail.inView }}
  >
    <div class={`fly-transition ${animate.counters ? "fly-show" : "fly-hidden"}`}>
      <Counters showCounter={animate.counters} />
    </div>
  </div>
</section>

<style lang="scss">
.section-recent-projects {
  @apply mb-[200px];
  @apply px-6 lg:px-0;
}

.section-statistic {
  @apply mb-[200px];
  @apply px-6 lg:px-0;
}
</style>
