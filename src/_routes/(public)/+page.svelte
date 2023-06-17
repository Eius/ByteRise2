<script lang="ts">
    /* Components */
	import MoneyMakingSpace from "$lib/components/moneymaking/MoneyMakingSpace.svelte";
    import BigArticle from "$lib/components/articles/BigArticle.svelte";
	import Featured from "$lib/components/articles/Featured.svelte";
	import NormalArticle from "$lib/components/articles/NormalArticle.svelte";
	import TagContainer from "$lib/components/articles/TagContainer.svelte";
	import Divider from "$lib/components/articles/partials/Divider.svelte";
	import type { PageData } from "./$types";

    export let data: PageData;
    const {articles} = data;

</script>

<div class="container">
    <div class="grid grid-cols-1 lg:grid-cols-3 py-10 md:py-16 lg:py-22 lg:gap-10">
        <div class="flex flex-col col-span-1 md:col-span-2">
            {#each articles as article, index}
                {#if index === 0}
                    <BigArticle postData={article} />
                {:else}
                    <Divider />
                    <NormalArticle postData={article} />
                {/if}
            {/each}
        </div>
        <div class="flex flex-col gap-6 col-span-1 -order-1 lg:order-1 pb-10">
            <!-- <Featured /> -->
            <div class="lg:sticky lg:top-16 flex flex-col gap-6">
                <TagContainer />
                <MoneyMakingSpace />
            </div>
        </div>
    </div>
</div>