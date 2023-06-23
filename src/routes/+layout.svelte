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
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4564448067691193"
     crossorigin="anonymous"></script>
	<title>ByteRise | Join the ByteSide</title>
	<meta name="application-name" content="ByteRise" />
	<meta name="description" content="Embark on a journey of creativity and skill! Unleash your imagination as we delve into game development, 3D modeling, web development, and beyond. Join our diverse tutorials and discover the secrets to bringing your ideas to life." />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://byterise.dev/">
	<meta property="og:title" content="ByteRise | Join the ByteSide">
	<meta property="og:description" content="Embark on a journey of creativity and skill! Unleash your imagination as we delve into game development, 3D modeling, web development, and beyond. Join our diverse tutorials and discover the secrets to bringing your ideas to life.">
	<meta property="og:image" content="https://byterise.dev/socials_thumbnail.jpg">
	<meta property="og:image:width" content="1080" />
	<meta property="og:image:height" content="608" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="og:url" content="https://byterise.dev/">
	<meta property="og:title" content="ByteRise | Join the ByteSide">
	<meta property="twitter:description" content="Embark on a journey of creativity and skill! Unleash your imagination as we delve into game development, 3D modeling, web development, and beyond. Join our diverse tutorials and discover the secrets to bringing your ideas to life.">
	<meta property="twitter:image" content="https://byterise.dev/socials_thumbnail.jpg">
	<meta property="twitter:image:alt" content="ByteRise Blog | Technology and stuff">
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