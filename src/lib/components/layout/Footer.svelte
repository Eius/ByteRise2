<script lang="ts">
	import StepsFlipped from "$lib/svg/StepsFlipped.svelte";
    import {socials} from "$lib/scripts/data/Socials";

    interface Link {
        name: string;
        url: string;
    }

    const usefulLinks: Link[] = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "My work",
            url: "https://portfolio-5vl.pages.dev",
        },
        {
            name: "Contact me",
            url: "/contact",
        },
    ]
</script>

<StepsFlipped />
<footer class="bg-primary py-10 lg:py-20">
    <div class="container grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-0 font-title text-sm">
        <div class="col-span-1 flex flex-col gap-3 justify-center">
            <h3 class="text-white font-bold text-lg uppercase">Pages</h3>
            <ul class="flex flex-col gap-2">
                {#each usefulLinks as link}
                <li>
                    <a href={link.url} class="text-white text-lg hover:underline">{link.name}</a>
                </li>
                {/each}
            </ul>
        </div>
        <div class="col-span-1 flex flex-col gap-3 justify-center">
            <h3 class="text-white font-bold text-lg uppercase">Links</h3>
            <ul class="flex flex-col gap-2">
                {#each socials as social}
                <li>
                    <a href={social.url} class="text-white text-lg hover:underline">{social.name}</a>
                </li>
                {/each}
            </ul>
        </div>
        <div class="col-span-1 text-white flex flex-col gap-4">
            <h1 class="text-white text-2xl white-nowrap">
                <a href="/" class="tracking-wide flex items-center gap-2">
                    <span>©</span> 
                    <span class="font-logo">BYTERISE.DEV 2023</span>
                </a>
            </h1>
            <p class="p-0 max-w-md">
                This site uses no tracking or cookies, 
                other than privacy-respecting, 
                GDPR-compliant analytics via 
                <a href="https://plausible.io" class="text-accent-1 underline">Plausible</a>.
            </p>
            <p>Made with 
                <a href="https://kit.svelte.dev" class="text-accent-1 underline">SvelteKit</a>
                , hosted on 
                <a href="https://www.cloudflare.com" class="text-accent-1 underline">Cloudflare</a>
                .</p>
        </div>
    </div>
</footer>