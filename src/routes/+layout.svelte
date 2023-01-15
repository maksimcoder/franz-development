<script>
  import "$lib/styles/app.scss";

  // Components
	import { Header, Footer } from '$lib/components/structure';
</script>

<div class="wrapper">
	<Header />

	<main class="main">
		<slot />
	</main>

  <Footer />
</div>
