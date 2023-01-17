<script lang="ts">
  import { t } from '$lib/translations/translations';
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
  import IconBedSmall from "$lib/icons/IconBedSmall.svelte";

  // Props
  export let post;

  // Data
  let previewUrl = post.poster?.fields?.file?.url || '';
</script>

<a href={`/news/${post.slug}`} class={`project-item post-item ${$$props.class}`}>
  <figure
    class="preview"
    style={`background-image: url(${previewUrl})`}
  >
  </figure>

  <div class="flex flex-col justify-between">
    <header>
      <h4 class="title mb-2">
        {@html post.title}
      </h4>
      <div class="intro">
        {@html post.intro}
      </div>
    </header>
  </div>
</a>
