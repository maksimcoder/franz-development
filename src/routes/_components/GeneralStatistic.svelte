<script lang="ts">
  import { t } from '$lib/translations/translations';
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

  // Components
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
</div>
