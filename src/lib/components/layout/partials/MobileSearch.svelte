<script lang="ts">
    import {showSearch} from "$lib/scripts/stores/ShowElements";
    import Icon from "@iconify/svelte";
	import SearchForm from "./SearchForm.svelte";
</script>

<div class="block md:hidden bg-primary border-b md:border-none border-gray-700 -mt-px {$showSearch ? "h-[50px]" : "h-[0px]"} transition-all duration-300 block lg:hidden">
    <div class="container {$showSearch ? "opacity-100" : "opacity-0"} h-full flex gap-2 items-center transition-opacity duration-300">
        <button class="text-accent-1 text-2xl" >
            <Icon icon="material-symbols:search" />
        </button>
        <SearchForm />
    </div>
</div>