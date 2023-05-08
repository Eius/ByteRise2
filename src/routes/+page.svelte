<script lang="ts">
    /* Components */
	import BigArticle from "$lib/components/articles/BigArticle.svelte";
	import NormalArticle from "$lib/components/articles/NormalArticle.svelte";
	import TagContainer from "$lib/components/articles/TagContainer.svelte";
	import Divider from "$lib/components/articles/partials/Divider.svelte";

    /* Types */
	import type { PartialPostData } from "$lib/scripts/interfaces/PostInterface";

    const postList:PartialPostData[] = [
        {
            title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. In Commodo Nunc Metus. In commodo nunc metus, vel rhoncus tellus porta feugiat",
            thumbnail: 'https://via.placeholder.com/600x345',
            slug: "lorem-ipsum",
            meta: {
                pubDate: "2021-10-10",
                tags: ["SvelteKit", "Web Dev"]
            }
        },
        {
            title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. In Commodo Nunc Metus. In commodo nunc metus, vel rhoncus tellus porta feugiat",
            thumbnail: 'https://via.placeholder.com/600x345',
            slug: "lorem-ipsum",
            meta: {
                pubDate: "2021-10-10",
                tags: ["SvelteKit", "Web Dev"]
            }
        },
        {
            title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. In Commodo Nunc Metus. In commodo nunc metus, vel rhoncus tellus porta feugiat",
            thumbnail: 'https://via.placeholder.com/600x345',
            slug: "lorem-ipsum",
            meta: {
                pubDate: "2021-10-10",
                tags: ["SvelteKit", "Web Dev"]
            }
        },
        {
            title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. In Commodo Nunc Metus. In commodo nunc metus, vel rhoncus tellus porta feugiat",
            thumbnail: 'https://via.placeholder.com/600x345',
            slug: "lorem-ipsum",
            meta: {
                pubDate: "2021-10-10",
                tags: ["SvelteKit", "Web Dev"]
            }
        },
        {
            title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. In Commodo Nunc Metus. In commodo nunc metus, vel rhoncus tellus porta feugiat",
            thumbnail: 'https://via.placeholder.com/600x345',
            slug: "lorem-ipsum",
            meta: {
                pubDate: "2021-10-10",
                tags: ["SvelteKit", "Web Dev"]
            }
        },
    ];

</script>

<div class="container">
    <div class="grid grid-cols-1 lg:grid-cols-3 py-10 md:py-20 gap-12">
        <div class="flex flex-col col-span-1 md:col-span-2">
            {#each postList as post, index}
                {#if index === 0}
                    <BigArticle postData={post} />
                {:else}
                    <Divider />
                    <NormalArticle postData={post} />
                {/if}
            {/each}
        </div>
        <div class="flex flex-col col-span-1 -order-1 lg:order-1">
            <TagContainer />
        </div>
    </div>
</div>