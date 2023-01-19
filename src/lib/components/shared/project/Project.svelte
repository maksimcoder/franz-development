<script lang="ts">
  import { t } from '$lib/translations/translations';
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
  import IconBedSmall from "$lib/icons/IconBedSmall.svelte";

  import type { IProject } from "$lib/types/project";

  // Props
  export let project: IProject;

  // Data
  let previewUrl = project.poster?.fields?.file?.url || '';
</script>

<a href={`/portfolio/${project.slug}`} class={`project-item ${$$props.class}`}>
  <figure
    class="preview"
    style={`background-image: url(${previewUrl})`}
  >
  </figure>

  <div class="flex flex-col justify-between">
    <header>
      <h4 class="title">
        {@html project.title}
      </h4>
      <div class="intro">
        {@html documentToHtmlString(project.intro)}
      </div>
    </header>

    <footer class="summary">
      {#if project.bedrooms}
        <figure class="bed-icon">
          <IconBedSmall />
        </figure>
        <span>
          {$t('common.common.bedrooms', {count: project.bedrooms})}
        </span>
      {/if}
    </footer>
  </div>
</a>
