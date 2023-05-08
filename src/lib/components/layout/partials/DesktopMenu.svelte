<script lang="ts">
    import {menuItems} from "$lib/scripts/data/Menu";
</script>

<ul class="flex flex-row justify-between text-white">
    {#each menuItems as {name, href}}
        <a href={href} class="py-4 px-5 first-of-type:-ml-5 last-of-type:-mr-5">
            <li class="relative">{name}</li>
        </a>
    {/each}
</ul>
    
<style lang="postcss">
    li::after, li::before {
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
        left: 50%;
    }

    li::before {
        bottom: -1px;
        right: 50%;
    }

    a:hover li::after, a:hover li::before {
        width: 50%;
    }
</style>