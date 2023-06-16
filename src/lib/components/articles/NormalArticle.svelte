<script lang="ts">
	import type { PartialPostData } from "$lib/interfaces/postInterface";
    import PostMeta from "./partials/PostMeta.svelte";

    export let postData: PartialPostData;
</script>

<article class="flex flex-col lg:flex-row gap-4 my-4 last-of-type:mb-0">
    <a href="/post/{postData.slug}" class="w-full min-w-[345px]">
        <img src={postData.thumbnail} alt={postData.title + " thumbnail"} width="600" height="345" class="w-full">
    </a>
    <div class="flex flex-col gap-3">
        <PostMeta meta={postData.meta} />
        <a href="/post/{postData.slug}" class="flex-grow">
            <h1 class="text-lg font-semibold font-title leading-snug">{postData.title}</h1>
        </a>
    </div>
</article>

