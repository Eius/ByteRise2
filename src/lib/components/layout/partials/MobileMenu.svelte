<script lang="ts">
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

<ul class="flex flex-col justify-between text-primary text-xl">
    {#each menuItems as {name, href}}
    <a href={href} class="py-4 px-5">
        <li class="flex">
            {name}
        </li>
    </a>
    {/each}
</ul>
    
<style lang="postcss">
    
</style>