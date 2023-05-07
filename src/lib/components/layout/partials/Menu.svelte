<script lang="ts">
    export let flexDirection: "col" | "row" = "col";

    const menuItems = [
        {
            name: "SvelteKit",
            href: "/tag/svelte",
        },
        {
            name: "Django",
            href: "/tag/django",
        },
        {
            name: "JavaScript",
            href: "/about/tag/javascript",
        },
        {
            name: "Web Development",
            href: "/about/tag/javascript",
        },
        {
            name: "Unreal Engine",
            href: "/tag/gamedev",
        },
    ];
</script>

<ul class="flex flex-{flexDirection} justify-between text-white">
    {#each menuItems as {name, href}}
        <a href={href} class="py-4 px-5 first-of-type:-ml-5 last-of-type:-mr-5">
            <li class="relative">{name}</li>
        </a>
    {/each}
</ul>
    
<style lang="postcss">
    li::after {
        content: "";
        display: block;
        position: absolute;
        height: 2px;
        width: 0;
        background-color: theme("colors.accent.1");
        transition: all .15s ease-in-out;
    }

    li::after {
        bottom: -1px;
        left: 0;
    }

    a:hover li::after {
        width: 100%;
    }
</style>