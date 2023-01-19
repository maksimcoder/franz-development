<script lang="ts">
  import { t } from '$lib/translations/translations';
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
  import { fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';

  /** @type {import('./$types').PageData} */
  export let data: any;

  // Components
  import { GeneralStatistic } from '$lib/components/structure';

  import ConstructionSection from './_components/ConstructionSection.svelte';
  import DevelopmentSections from './_components/DevelopmentSections.svelte';
  import ClientsList from './_components/ClientsList.svelte';
  import ArchitectureSection from './_components/ArchitectureSection.svelte';
  import HeroSection from './_components/HeroSection.svelte';
  import RecentProjectSection from './_components/RecentProjectSection.svelte';

  // Data
  const page = data.page;
  const blocks = page.fields.contentBlockReference;
  const points = blocks.filter(el => el.fields.slug.includes("home-stats"))
  const projects = data.projects;
  let isInView: boolean;
  const flyOptions = {
    y: 200,
    duration: 1500,
  };
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
  <div class="data-block mb-10">
    <DevelopmentSections
      title={blocks[0].fields.title}
      content={documentToHtmlString(blocks[0].fields.content)}
    />
  </div>

  <!-- Construction -->
  <div class="data-block mb-10">
    <ConstructionSection
      title={blocks[1].fields.title}
      content={documentToHtmlString(blocks[1].fields.content)}
    />
  </div>

  <!-- Architecture -->
  <div class="data-block mb-10">
    <ArchitectureSection
      title={blocks[2].fields.title}
      content={documentToHtmlString(blocks[2].fields.content)}
    />
  </div>
</section>

<section
  use:inview={{ unobserveOnEnter: true, rootMargin: '20%' }}
  on:change={({ detail }) => { isInView = detail.inView }}
  class="section-fixed section-recent-projects"
>
  {#if isInView}
    <div in:fly={flyOptions}>
      <RecentProjectSection {projects} />
    </div>
  {/if}
</section>

<section class="section-fixed section-statistic">
  <GeneralStatistic blocks={points} />
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
