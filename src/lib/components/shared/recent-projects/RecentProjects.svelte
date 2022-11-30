<script lang="ts">

const projects = [
  {
    title: "Villa fatum",
    intro: "Tropical modern Villa near Canggu, Bali. Build on a 400 m2 land with 250m2 building area, contain two bedrooms and big swimming pool 12x3m with infinity rice field view.",
    bedrooms: 2,
    img: '/projects/project-1.png',
  }, {
    title: "Waves of the ocen villas complex",
    intro: "Ideal for family life or for relaxing with friends, located in the most green area of Canggu — Pererenan. Our villas are new generation, which created from latest materials and technologies.",
    bedrooms: 3,
    img: '/projects/project-2.png',
  },  {
    title: "Villa fatum",
    intro: "Tropical modern Villa near Canggu, Bali. Build on a 400 m2 land with 250m2 building area, contain two bedrooms and big swimming pool 12x3m with infinity rice field view.",
    bedrooms: 2,
    img: '/projects/project-1.png',
  }, {
    title: "Waves of the ocen villas complex",
    intro: "Ideal for family life or for relaxing with friends, located in the most green area of Canggu — Pererenan. Our villas are new generation, which created from latest materials and technologies.",
    bedrooms: 3,
    img: '/projects/project-2.png',
  },
];
</script>

<div>
  <h2 class="h2">
    Recent <i>projects</i>
  </h2>

  <div class="project-list">
    {#each projects as project}
      <div class="project-item">
        <img src={project.img} alt={project.title} class="preview">
        <h4 class="title">
          {project.title}
        </h4>
        <div class="intro">
          {project.intro}
        </div>

        <footer class="summary">
          {project.bedrooms} bedrooms
        </footer>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
.project-list {
  @apply grid grid-cols-2 gap-5;

  .project-item {
    @apply bg-[var(--color-middle-black)];
    @apply rounded-xl p-4;

    .preview {
      @apply mb-4;
    }
    .title {
      @apply text-base font-semibold;
    }
    .intro {
      @apply mb-4;
    }
    .summary {
      color: var(--color-middle-gray);
    }
  }
}
</style>
