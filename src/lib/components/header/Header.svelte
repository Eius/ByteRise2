<script lang="ts">
	import DynamicLogo from "./DynamicLogo.svelte";
	import MenuItem from "./MenuItem.svelte";
	import { showMobileMenu } from "$lib/stores/visibilityStore";
	import Icon from "@iconify/svelte";

    const menu = [
        {name: "Home", href: "/"},
        {name: "SvelteKit", href: "/category/sveltekit"},
        {name: "Blender", href: "/category/blender"},
        {name: "Unreal Engine", href: "/category/unreal_engine"}
    ]

</script>

<header class="container-fluid py-4 flex items-center justify-between">
    <div>
        <DynamicLogo />
    </div>
    <button on:click={() => {
        showMobileMenu.set(true);
    }} class="block md:hidden">
        <Icon icon="ep:menu" class="text-3xl" />
    </button>
    <ul class="hidden md:flex justify-end gap-2 flex-grow font-medium">
        {#each menu as item}
            <MenuItem {item} />
        {/each}
    </ul>
</header>