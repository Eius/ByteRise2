<script lang="ts">
	import DynamicLogo from "./partials/DynamicLogo.svelte";
    import MobileSearch from "./partials/MobileSearch.svelte";
    import SearchButton from "./partials/SearchButton.svelte";
    import Socials from "./partials/Socials.svelte";
</script>

<MobileSearch />
<nav class="bg-primary border-b-none md:border-b border-gray-700 sticky top-0 z-50">
    <div class="container">
        <div class="grid grid-cols-5 md:grid-cols-4 items-center">
            <!-- <div class="col-span-1 flex justify-start">
                <p>EMPTY</p>
            </div> -->
            <div class="flex col-span-2 text-white">
                <Socials />
            </div>
            <div class="flex md:hidden col-span-1 justify-center text-white">
                <span class="text-2xl">
                    <DynamicLogo />
                </span>
            </div>
            <div class="relative col-span-2 flex justify-end py-4">
                <SearchButton />
            </div>
        </div>
    </div>
</nav>