<script lang="ts">
	import { showMobileMenu } from "$lib/scripts/stores/ShowElements";
	import Icon from "@iconify/svelte";
	import MobileMenu from "./MobileMenu.svelte";
</script>

<div class="block md:hidden">
    <div class="bg-accent-1 p-4 z-50 fixed top-0 bottom-0 left-0 right-1/4 sm:right-2/4 {$showMobileMenu ? "translate-x-0" : "-translate-x-[101%]"} transition-transform duration-300">
        <button class="float-right text-4xl mt-2 text-primary" on:click={() => $showMobileMenu = false}>
            <Icon icon="material-symbols:close-rounded" />
        </button>
        <MobileMenu />
    </div>
</div>
