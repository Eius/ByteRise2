<script lang="ts">
    import Icon from "@iconify/svelte";

    export let item: {name: string, href: string, icon: string};
</script>

<li>
    <a data-sveltekit-noscroll data-sveltekit-preload-data="hover" 
    href={item.href} class="text-sm font-title font-medium flex items-center gap-2">
    <span>
        <Icon icon={item.icon} class="text-2xl" />
    </span>
    {item.name}
    </a>
</li>