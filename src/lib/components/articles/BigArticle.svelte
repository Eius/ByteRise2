<script lang="ts">
	import type { PartialPostData } from "$lib/interfaces/postInterface";
    import PostMeta from "./partials/PostMeta.svelte";

    export let postData: PartialPostData;
</script>

<article class="flex flex-col gap-2 mb-4">
    <a href="/post/{postData.slug}" class="w-full">
        <img src={postData.thumbnail} alt="thumbnail" width="600" height="345" class="w-full">
    </a>
    <PostMeta meta={postData.meta} />
    <a href="/post/{postData.slug}" class="">
        <h1 class="text-lg lg:text-2xl font-semibold font-title">{postData.title}</h1>
    </a>
</article>