<script lang="ts">
    import { breadcrumbStore } from "$lib/stores/breadcrumbStore";
	import Icon from "@iconify/svelte";
    
</script>


<a href={$breadcrumbStore.href} class="no-underline text-lg flex items-center gap-2">
    <Icon icon="icon-park-solid:back" />
    <span class="uppercase leading-none font-title">
        {$breadcrumbStore.name}
    </span>
</a>

