<script lang="ts">
	import Icon from "@iconify/svelte";
    import {showMobileMenu} from "$lib/scripts/stores/ShowElements";
</script>

<a href="https://portfolio-5vl.pages.dev" class="hidden md:block hover:underline text-gray-600 text-sm">
    Check out my work
</a>
<button class="block md:hidden" on:click={() => $showMobileMenu = true}>
    <span class="text-white text-3xl">
        <Icon icon="material-symbols:menu" />
    </span>
</button>