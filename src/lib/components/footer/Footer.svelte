<script lang="ts">
	import Icon from "@iconify/svelte";
	import MobileMenuItem from "../header/MobileMenuItem.svelte";
	import FooterMenuItem from "./FooterMenuItem.svelte";

    const follow: {name: string, href: string, icon: string}[] = [
        {
            name: "RSS",
            href: "/api/rss",
            icon: "mdi:rss"
        },
        {
            name: "GitHub",
            href: "https://github.com/Eius",
            icon: "mdi:github"
        },
    ]

    const categories: {name: string, href: string, icon: string}[] = [
        {name: "SvelteKit", href: "/tag/sveltekit", icon: "simple-icons:svelte"},
        {name: "Blender", href: "/tag/blender", icon: "material-symbols:blender-outline"},
        {name: "Unreal Engine", href: "/tag/unreal_engine", icon: "simple-icons:unrealengine"}
    ]

</script>

<footer class="bg-neutral">
    <div class="py-4 flex justify-between container">
        <ul class="flex flex-col gap-3">
            <li class="font-title font-semibold">Follow us</li>
            {#each follow as item}
            <FooterMenuItem {item} />
            {/each}
            <li class="tooltip tooltip-right tooltip-secondary" data-tip="Coming soon!">
                <p class="text-sm text-gray-500 font-title font-medium flex items-center gap-2">
                <span>
                    <Icon icon="mdi:youtube" class="text-3xl" />
                </span>
                YouTube
                </p>
            </li>
        </ul>
        <ul class="flex flex-col gap-3">
            <li class="font-title font-semibold">Categories</li>
            {#each categories as item}
            <FooterMenuItem {item} />
            {/each}
        </ul>
        <div class="flex flex-col">
            <p>©2023 ByteRise</p>
        </div>
    </div>
</footer>