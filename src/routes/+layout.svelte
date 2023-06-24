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
	import { showMobileMenu, showScrollTop } from "$lib/stores/visibilityStore";
	import { beforeNavigate } from "$app/navigation";

	onMount(() => {
		document.addEventListener("scroll", () => {
			if(window.scrollY > 500) {
				showScrollTop.set(true);
			} else {
				showScrollTop.set(false);
			}
		})
	})

	beforeNavigate(() => {
		showMobileMenu.set(false);
	})
</script>

<div class="relative app bg-gradient-to-bl from-base-200 from-20% to-base-100">
	<MobileMenu />
	<Header />
	<main class="min-h-screen py-16 container">
		<slot />
	</main>
	<ScrollTopButton />
	<Footer />
</div>

<style lang="postcss">
</style>