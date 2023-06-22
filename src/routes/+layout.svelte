<script lang="ts">
	/* CSS */
	import "../app.css";

    /* Fonts */

	/* Components */
	import Header from "$lib/components/header/Header.svelte";
	import MobileMenu from "$lib/components/header/MobileMenu.svelte";
	import ScrollTopButton from "$lib/components/ScrollTopButton.svelte";
	import Footer from "$lib/components/footer/Footer.svelte";

	/* Other */
	import { onMount } from "svelte";
	import { showScrollTop } from "$lib/stores/visibilityStore";
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	
	inject({ mode: dev ? 'development' : 'production' });

	onMount(() => {
		document.addEventListener("scroll", () => {
			if(window.scrollY > 500) {
				showScrollTop.set(true);
			} else {
				showScrollTop.set(false);
			}
		})
	})
</script>

<svelte:head>
	<meta
	http-equiv="Content-Security-Policy"
	content="connect-src 'vitals.vercel-insights.com'" />
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4564448067691193"
     crossorigin="anonymous"></script>
	<title>ByteRise | Join the ByteSide</title>
</svelte:head>

<div class="relative app bg-gradient-to-bl from-base-200 from-20% to-base-100">
	<MobileMenu />
	<Header />
	<main class="min-h-screen">
		<slot />
	</main>
	<ScrollTopButton />
	<Footer />
</div>

<style lang="postcss">
</style>