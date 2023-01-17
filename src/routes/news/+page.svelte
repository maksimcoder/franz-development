<script lang="ts">
  import { t } from '$lib/translations/translations';
  import { Post, ProjectGrid } from "$lib/components/shared";

  // Props
  /** @type {import('./$types').PageData} */
  export let data: any;

  // Data
  let posts = data.posts;
</script>

<svelte:head>
	<title>News</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="page page-padded first-letter:min-h-screen">
  <section class="section-fixed">
    <div class="content pb-20 px-4 lx:px-0">
      <h1 class="h1">
        {$t('common.pages.news.title')}
      </h1>

      <ProjectGrid>
        {#each posts as {fields}}
          <Post post={fields} />
        {/each}
      </ProjectGrid>
    </div>
  </section>
</div>
