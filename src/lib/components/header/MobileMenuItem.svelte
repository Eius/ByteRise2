<script lang="ts">
    import {page} from "$app/stores";
	import { showMobileMenu } from "$lib/stores/visibilityStore";
	import Icon from "@iconify/svelte";

    export let item: {name: string, href: string, icon: string};
    let isActive = false;
    $: isActive = $page.url.pathname === item.href;
</script>

<li>
    <a href={item.href} on:click={() => {showMobileMenu.set(false)}}
    data-sveltekit-noscroll data-sveltekit-preload-data="hover"  
    class="text-sm group font-title font-medium hover:text-secondary-focus {isActive ? "text-secondary-focus" : ""}
    transition-all duration-200 flex items-center gap-2">
    <span>
        <Icon icon={item.icon} class="text-3xl" />
    </span>
    <span class="relative after:absolute after:content-[''] after:-bottom-1 after:left-0 
    after:w-0 after:group-hover:w-full {isActive ? "after:w-full" : ""} after:h-[2px] 
    after:bg-secondary-focus after:transition-all after:duration-200">
        {item.name}
    </span>
    </a>
</li>
