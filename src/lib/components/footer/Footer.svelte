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
    <div class="py-4 grid gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container">
        <ul class="flex flex-col gap-4">
            <li class="font-title font-semibold">Categories</li>
            {#each categories as item}
            <FooterMenuItem {item} />
            {/each}
        </ul>
        <ul class="flex flex-col gap-4">
            <li class="font-title font-semibold">Follow us</li>
            {#each follow as item}
            <FooterMenuItem {item} />
            {/each}
            <li class="tooltip tooltip-right tooltip-secondary w-fit" data-tip="Coming soon!">
                <p class="pr-1 text-sm text-gray-500 font-title font-medium flex items-center gap-2">
                    <span>
                        <Icon icon="mdi:youtube" class="text-3xl" />
                    </span>
                    YouTube
                </p>
            </li>
        </ul>
        <div class="flex flex-col prose col-span-1 md:col-span-2 lg:col-span-1">
            <p>©2023 ByteRise</p>
            <p>This site uses no tracking or cookies, other than privacy-respecting, GDPR-compliant analytics via 
                <a class="text-secondary-focus" href="https://vercel.com">Vercel</a>.
            </p>
            <p>Made with 
                <a class="text-secondary-focus" href="https://kit.svelte.dev">SvelteKit</a>
                , hosted on 
                <a class="text-secondary-focus" href="https://vercel.com">Vercel</a>
            </p>
        </div>
    </div>
</footer>