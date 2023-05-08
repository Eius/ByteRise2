<script lang="ts">
    import {menuItems} from "$lib/scripts/data/Menu";
</script>

<ul class="flex flex-col justify-between text-primary font-semibold text-md sm:text-xl">
    {#each menuItems as {name, href}}
    <a href={href} class="py-4 first-of-type:pt-2">
        <li class="flex">
            {name}
        </li>
    </a>
    {/each}
</ul>
    
<style lang="postcss">
    
</style>