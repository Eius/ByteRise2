<script lang="ts">
	import "../app.css";
	import "$lib/styles/global.css"

	/* Fonts */
	import "@fontsource/roboto/300.css";
	import "@fontsource/roboto/400.css";
	import "@fontsource/roboto/700.css";
	import "@fontsource/roboto/900.css";

	/* Components */
	import NavHeader from "$lib/components/layout/NavHeader.svelte";
	import StickyBanner from "$lib/components/layout/StickyBanner.svelte";
</script>

<svelte:head>
	<title>ByteRise | Join the ByteSide</title>
</svelte:head>

<div class="app">
	<StickyBanner />
	<NavHeader />
	<main>
		<slot />
	</main>
</div>

<style lang="postcss">
	main {
		height: 200vh;
	}
</style>
