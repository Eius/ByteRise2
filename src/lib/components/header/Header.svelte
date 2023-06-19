<script lang="ts">
	import { onMount } from "svelte";
	import DynamicLogo from "./DynamicLogo.svelte";
	import MenuItem from "./MenuItem.svelte";

    const menu = [
        {name: "Home", href: "/"},
        {name: "SvelteKit", href: "/tag/sveltekit"},
        {name: "Blender", href: "/tag/blender"},
        {name: "Unreal Engine", href: "/tag/unreal_engine"}
    ]

</script>

<header class="container-fluid py-4 flex items-center">
    <div>
        <DynamicLogo />
    </div>
    <ul class="flex gap-2 flex-grow justify-end font-medium">
        {#each menu as item}
            <MenuItem {item} />
        {/each}
    </ul>
</header>