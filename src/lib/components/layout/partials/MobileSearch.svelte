<script lang="ts">
    import {showSearch} from "$lib/stores/visibilityStore";
	import SearchForm from "./SearchForm.svelte";
</script>

<div class="block md:hidden bg-primary border-b md:border-none border-gray-700 h-[50px] {$showSearch ? "mt-0" : "mt-[-51px]"} transition-all duration-300 block lg:hidden">
    <div class="container h-full flex items-center">
        <SearchForm />
    </div>
</div>