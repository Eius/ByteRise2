<script lang="ts">
	import Icon from "@iconify/svelte";
    import { showSearch } from "$lib/stores/visibilityStore";
	import SearchForm from "./SearchForm.svelte";
</script>

{#if !$showSearch}
<button class="text-2xl text-accent-1 ml-2 min-h-[24px]" on:click={() => $showSearch = true}>
    <Icon icon="material-symbols:search-rounded" />
</button>
{:else}
<button class="text-2xl text-accent-1 ml-2" on:click={() => $showSearch = false}>
    <Icon icon="ic:round-close" />
</button>
{/if}

<!-- Desktop Search Form -->
<div class="hidden md:flex bg-primary absolute right-6 {$showSearch ? "top-1/4" : "-top-1/2"} transition-all duration-100">
    <SearchForm />
</div> 
 