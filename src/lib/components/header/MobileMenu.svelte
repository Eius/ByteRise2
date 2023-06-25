<script lang="ts">
    import Icon from "@iconify/svelte";
	import { showMobileMenu } from "$lib/stores/visibilityStore";
	import MobileMenuItem from "./MobileMenuItem.svelte";

    const mobileMenuItems = [
        {name: "Home", href: "/", icon: "ic:sharp-home"},
        {name: "SvelteKit", href: "/category/sveltekit", icon: "simple-icons:svelte"},
        /* {name: "Blender", href: "/category/blender", icon: "material-symbols:blender-outline"},
        {name: "Unreal Engine", href: "/category/unreal_engine", icon: "simple-icons:unrealengine"} */
    ]

    const randomTitles = [
        "Find your niche",
        "Pick your poison",
        "Choose your journey",
        "Get your flavor",
        "Identify your realm",
        "Pluck a category",
        "Match your taste",
        "Fit your fancy",
        "Align with your vibe",
        "Blend with your palate",
        "Sync with your desire"
    ]
    let lastTitles: string[] = [];
    let currentTitle = randomTitles[0];

    function pickRandomTitle() {
        const title = randomTitles[Math.floor(Math.random() * randomTitles.length)];
        if(lastTitles.includes(title)) {
            pickRandomTitle();
        } else {
            currentTitle = title;
            if(lastTitles.length >= 3) {
                lastTitles.shift();
            }
            lastTitles.push(title);
        }
    }

    $: if($showMobileMenu === true) {
        pickRandomTitle()
    }
</script>

<div class:hidden={!$showMobileMenu} class="fixed md:hidden left-0 right-0 bottom-0 top-0 bg-base-200/80 z-30">

</div>
<div class="{$showMobileMenu ? "translate-x-0" : "translate-x-full"} 
            px-8 py-6 flex flex-col gap-6 md:hidden transition-transform z-40
            fixed top-0 bottom-0 right-0 w-[320px] h-full bg-base-100">
    <div class="flex justify-between items-center">
        <p class="font-title font-bold uppercase">
            {currentTitle}
        </p>
        <button on:click={() => {showMobileMenu.set(false)}}>
            <Icon icon="ic:baseline-close" class="text-3xl" />
        </button>
    </div>
    <ul class="flex flex-col gap-6">
        {#each mobileMenuItems as item}
            <MobileMenuItem {item} />
        {/each}
    </ul>
</div>