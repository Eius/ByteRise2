<script lang="ts">
    import {page} from "$app/stores";

    export let item: {name: string, href: string};
    let isActive = false;
    $: isActive = $page.url.pathname === item.href;
</script>

<li>
    <a data-sveltekit-noscroll data-sveltekit-preload-data="hover" 
    href={item.href} 
    class="relative uppercase text-sm hover:text-secondary-focus
    {isActive ? "after:w-1/2 before:w-1/2" : "after:w-0 before:w-0"} pseudo px-3 py-2 
    {isActive ? "text-secondary-focus" : "text-base-content"} 
    transition-all duration-200">
        {item.name}
    </a>
</li>

<style lang="postcss">
    .pseudo::after, .pseudo::before {
        content: "";
        position: absolute;
        bottom: 0;
        height: 2px;
        background-color: theme("colors.secondary-focus");
        transition: width .2s ease-in-out;
    }

    .pseudo::after {
        left: 50%;
    }
    
    .pseudo::before {
        right: 50%;
    }
</style>