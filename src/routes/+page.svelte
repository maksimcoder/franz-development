<script>
	// import Counter from './Counter.svelte';
  import { ClientsList, RecentProjects, GeneralStatistic } from '$lib/components/shared'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="section-hero">
  <div class="section-fixed">
    <div class="flex flex-row pt-[160px]">
      <div class="w-8/12">
        <h1 class="h1 !text-[149px] !leading-[130px]">
          Franz<br>
          real <i>estate<br>
          developer</i>
        </h1>
      </div>
      <div class="w-4/12 pt-16">
        <p class="mb-32">Invest in real estate on Bali and get up to 20% passive income per year</p>
        <a href="/" class="link-round">
          Contact us
        </a>
      </div>
    </div>
  </div>
</section>

<div class="mb-[230px]">
  <ClientsList />
</div>


<section class="section-fixed mb-[200px]">
  <h2 class="h2">
    Featured <i>services</i>
  </h2>

  <!-- Development -->
  <div class="data-block mb-10">
    <div class="flex flex-row">
      <div class="w-1/3 flex flex-row space-x-4">
        <img src="/main-page/development-1.png" alt="development-1" class="self-end w-auto max-w-auto">
        <div class="flex flex-col space-y-4">
          <img src="/main-page/development-2.png" alt="development-2" class="self-center w-auto max-w-auto">
          <img src="/main-page/development-3.png" alt="development-3" class="self-start w-auto max-w-auto">
        </div>
      </div>
      <div class="w-2/3 pt-12 pl-24 pr-12">
        <h3>
          Development
        </h3>
        <p>
          We make your property in 4 steps:Land with team of professional brokers, Architecture team will provide you nowadays technoligies and trends, Construction bulk of 15 years experience and individual Managment approach to each client.
        </p>

        <a href="/" class="link-round">
          Learn more
        </a>
      </div>
    </div>
  </div>

  <!-- Construction -->
  <div class="data-block mb-10">
    <div class="flex flex-row">
      <div class="w-1/3 pt-16 pl-20">
        <h3>
          Construction
        </h3>
        <p>
          We do all the stages of development for you. We provide you with weekly reports. Most easies way to make passive income.
        </p>

        <a href="/" class="link-round">
          Learn more
        </a>
      </div>
      <div class="w-2/3 pl-10">
        <div class="flex flex-row justify-between">
          <img src="/main-page/construction-1.png" alt="construction-1" class="self-end">
          <img src="/main-page/construction-2.png" alt="construction-2" class="self-center">
          <img src="/main-page/construction-3.png" alt="construction-3" class="self-start">
        </div>
      </div>
    </div>
  </div>

  <!-- Architecture -->
  <div class="data-block mb-10">
    <div class="flex flex-row pt-12">
      <div class="w-1/2 pl-24">
        <h3>
          Architecture
        </h3>
        <p>
          We do all the stages of development for you. We provide you with weekly reports. Most easies way to make passive income.
        </p>
      </div>

      <div class="w-1/2 flex justify-end">
        <a href="/" class="link-round">
          Learn more
        </a>
      </div>
    </div>

    <div class="w-full flex flex-row items-end space-x-4">
      <img src="/main-page/architecture-1.png" alt="architecture-1" class="flex h-[180px]">
      <img src="/main-page/architecture-2.png" alt="architecture-2" class="flex h-[180px]">
      <img src="/main-page/architecture-3.png" alt="architecture-3" class="flex-grow w-[35%]">
    </div>
  </div>
</section>

<section class="section-fixed mb-[200px]">
  <RecentProjects />
</section>

<section class="section-fixed mb-[200px]">
  <GeneralStatistic />
</section>

<style lang="scss">
.section-hero {
  @apply bg-[url('/main-page/preview.png')];
  @apply bg-no-repeat bg-cover bg-center;
  @apply h-[750px];
  @apply rounded-b-3xl;
}
</style>
