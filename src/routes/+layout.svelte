<script lang="ts">
	/* CSS */
	import "../app.css";

    /* Fonts */

	/* Components */
	import Header from "$lib/components/header/Header.svelte";
	import MobileMenu from "$lib/components/header/MobileMenu.svelte";
</script>

<svelte:head>
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4564448067691193"
     crossorigin="anonymous"></script>
	<title>ByteRise | Join the ByteSide</title>
</svelte:head>

<div class="relative app min-h-screen flex flex-col bg-gradient-to-bl from-base-200 from-20% to-base-100">
	<MobileMenu />
	<Header />
	<main class="flex-grow">
		<slot />
	</main>
</div>

<style lang="postcss">
</style>