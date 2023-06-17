<script lang="ts">
	/* Fonts */
	import "@fontsource/figtree/300.css";
	import "@fontsource/figtree/400.css";
	import "@fontsource/figtree/500.css";
	import "@fontsource/figtree/600.css";
	import "@fontsource/figtree/700.css";
	import "@fontsource/figtree/900.css";

	/* Components */
	import NavHeader from "$lib/components/layout/NavHeader.svelte";
	import StickyBanner from "$lib/components/layout/StickyBanner.svelte";
	import Footer from "$lib/components/layout/Footer.svelte";
</script>

<svelte:head>
	<title>ByteRise | Join the ByteSide</title>
</svelte:head>

<div class="app min-h-screen flex flex-col">
	<StickyBanner />
	<NavHeader />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>

<style lang="postcss">
</style>
