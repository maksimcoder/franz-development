<script lang="ts">

  interface IPoint {
    icon: string;
    title: string;
    content: string;
  }

  // Props
  export let point: IPoint;
</script>

<div class="point-item">
  <figure class="point-icon">
    <img src={`/icons/${point.icon}.svg`} alt={point.title}>
  </figure>
  <div class="point-info">
    {#if point.title.length > 0}
      <h4 class="point-title">
        {point.title}
      </h4>
    {/if}
    <p class="point-content">
      {point.content}
    </p>
  </div>
</div>
