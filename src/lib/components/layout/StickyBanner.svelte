<script lang="ts">
	import CompactMenuButton from "./partials/CompactMenuButton.svelte";
	import Logo from "./partials/Logo.svelte";
    import MobileSearch from "./partials/MobileSearch.svelte";
    import SearchButton from "./partials/SearchButton.svelte";
import Socials from "./partials/Socials.svelte";
</script>

<MobileSearch />
<nav class="bg-primary border-b-none md:border-b border-gray-700 sticky top-0 z-50">
    <div class="container">
        <div class="grid grid-cols-5 items-center">
            <div class="col-span-1 flex justify-start">
                <CompactMenuButton />
            </div>
            <div class="hidden md:flex col-span-3 justify-center text-white">
                <Socials />
            </div>
            <div class="flex md:hidden col-span-3 justify-center text-white">
                <span class="text-2xl">
                    <Logo />
                </span>
            </div>
            <div class="relative col-span-1 flex justify-end py-4">
                <SearchButton />
            </div>
        </div>
    </div>
</nav>