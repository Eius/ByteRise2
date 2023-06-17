<script lang="ts">
	import type { Article } from "$lib/interfaces/Article";
    import PostMeta from "./partials/PostMeta.svelte";

    export let postData: any;
</script>

<article class="flex flex-col gap-2 mb-4">
    <a href="/post/{postData.title}" class="w-full">
        <img src={postData.thumbnail} alt="thumbnail" width="600" height="345" class="w-full aspect-[6/3.45]">
    </a>
    <!-- <PostMeta meta={postData.meta} /> -->
    <a href="/post/{postData.slug}" class="">
        <h1 class="text-lg lg:text-2xl font-semibold font-title">{postData.title}</h1>
    </a>
</article>