<script lang="ts">
	import "../app.css";
	import "$lib/styles/global.postcss"

	/* Fonts */
	import "@fontsource/roboto-mono/300.css";
	import "@fontsource/roboto-mono/400.css";
	import "@fontsource/roboto-mono/500.css";
	import "@fontsource/roboto-mono/600.css";
	import "@fontsource/roboto-mono/700.css";

	import "@fontsource/figtree/300.css";
	import "@fontsource/figtree/400.css";
	import "@fontsource/figtree/500.css";
	import "@fontsource/figtree/600.css";
	import "@fontsource/figtree/700.css";
	import "@fontsource/figtree/900.css";

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
