<script lang="ts">
	import DynamicLogo from "./DynamicLogo.svelte";
	import MenuItem from "./MenuItem.svelte";
	import { hideMobileMenu } from "$lib/stores/visibilityStore";
	import Icon from "@iconify/svelte";

    const menu = [
        {name: "Home", href: "/"},
        {name: "SvelteKit", href: "/tag/sveltekit"},
        {name: "Blender", href: "/tag/blender"},
        {name: "Unreal Engine", href: "/tag/unreal_engine"}
    ]

</script>

<header class="container-fluid py-4 flex items-center justify-between">
    <div>
        <DynamicLogo />
    </div>
    <button on:click={() => {
        hideMobileMenu.set(false);
    }} class="block md:hidden">
        <Icon icon="ep:menu" class="text-3xl" />
    </button>
    <ul class="hidden md:flex justify-end gap-2 flex-grow font-medium">
        {#each menu as item}
            <MenuItem {item} />
        {/each}
    </ul>
</header>