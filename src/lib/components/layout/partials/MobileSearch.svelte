<script lang="ts">
    import {showSearch} from "$lib/scripts/stores/ShowElements";
    import Icon from "@iconify/svelte";
	import SearchForm from "./SearchForm.svelte";
</script>

<div class="block md:hidden bg-primary border-b md:border-none border-gray-700 h-[50px] {$showSearch ? "mt-0" : "mt-[-51px]"} transition-all duration-300 block lg:hidden">
    <div class="container h-full flex gap-2 items-center">
        <button class="text-accent-1 text-2xl" >
            <Icon icon="material-symbols:search" />
        </button>
        <SearchForm />
    </div>
</div>