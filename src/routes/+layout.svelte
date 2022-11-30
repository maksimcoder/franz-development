<script>
  import "$lib/styles/app.scss";

	import { Header, Footer } from '$lib/components/structure';
</script>

<div class="wrapper">
	<Header />

	<main class="main">
		<slot />
	</main>

  <Footer />
</div>
