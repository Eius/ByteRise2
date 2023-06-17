<script lang="ts">
	import { onMount } from "svelte";
	import DynamicLogo from "./DynamicLogo.svelte";
	import MenuItem from "./MenuItem.svelte";

    const menu = [
        {name: "Home", href: "/"},
        {name: "SvelteKit", href: "/tag/SvelteKit"},
        {name: "Blender", href: "/tag/Blender"},
        {name: "Unreal Engine", href: "/tag/Unreal_Engine"}
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