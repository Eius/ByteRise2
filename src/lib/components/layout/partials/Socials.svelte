<script lang="ts">
	import Icon from "@iconify/svelte";
    import {socials} from "$lib/scripts/data/Socials";
</script>

{#each socials as {icon, url}}
    <a href={url} class="hover:scale-125 hover:text-gold transition-transform duration-100 p-2">
        <Icon icon={icon} class="text-xl" />
    </a>  
{/each}