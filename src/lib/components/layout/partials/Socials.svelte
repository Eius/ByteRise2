<script lang="ts">
	import Icon from "@iconify/svelte";
    const socials: {icon: string, link: string}[] = [
        {
            icon: "mdi:instagram",
            link: "/",
        },
        {
            icon: "uil:facebook-f",
            link: "/",
        },
        {
            icon: "uil:youtube",
            link: "/",
        },
    ];
</script>

{#each socials as {icon, link}}
    <a href={link} class="hover:scale-125 hover:text-gold transition-transform duration-100 px-2 first-of-type:pl-0 last-of-type:pr-0">
        <Icon icon={icon} />
    </a>  
{/each}