<script lang="ts">
  import { Project, ProjectGrid } from "$lib/components/shared";

  // Props
  /** @type {import('./$types').PageData} */
  export let data: any;

  // Data
  let projects = data.projects;
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="page page-padded first-letter:min-h-screen">
  <section class="section-fixed">
    <div class="content pb-20 px-4 lx:px-0">
      <h1 class="h1">
        Portfolio
      </h1>

      <ProjectGrid>
        {#each projects as {fields}}
          <Project project={fields} />
        {/each}
      </ProjectGrid>
    </div>
  </section>
</div>
