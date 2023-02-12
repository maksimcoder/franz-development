<script lang="ts">
  import { onMount } from "svelte";

  export let title: string;
  export let slug: string;

  const list = [
    title,
    title,
    title,
    title,
    title,
    title,
    title,
    title,
  ];
  let itemWidth = "200%";

  onMount(() => {
    // const items = document.getElementsByClassName("marquee-item");
    // const newItemWidth = items[0].clientWidth * 2.7 + 20;
    // itemWidth = `${newItemWidth}px`;
    // console.log(itemWidth)
  })
</script>

<section class="marquee-string">
  <a data-sveltekit-reload href={`/projects/${slug}`}>

  <ul class="marquee-content">
    {#each list as item}
      <li class="marquee-item">
        {@html item}
      </li>
    {/each}
  </ul>
</a>

</section>

<style lang="scss">
  .marquee-string {
    height: 76px;
    width: 100%;
    overflow: hidden;
    position: relative;

    ul {
      @apply flex flex-row;
      height: 76px;
      position: absolute;
      overflow: hidden;
      animation: marquee 10s linear infinite;
    }

    li {
      float: left;
      width: 50%;
      font-size: 76px;
      line-height: 76px;
      font-weight: 400;
      margin: 0 80px;
    }
  }

  .marquee-string:before, .marquee-string:after {
    position: absolute;
    top: 0;
    width: 12rem;
    height: 100%;
    content: "";
    z-index: 1;
  }
  .marquee-string:before {
    left: 0;
    background: linear-gradient(to right, #000 0%, transparent 100%);
  }
  .marquee-string:after {
    right: 0;
    background: linear-gradient(to left, #000 0%, transparent 100%);
  }

.marquee-string ul {
  transform: translateX(0%);
  animation: left-one 140s linear infinite;
}

@keyframes left-one {
  0%  {
    transform:translateX(0%);
  }

  100%{
    transform:translateX(-90%);
  }
}

</style>
