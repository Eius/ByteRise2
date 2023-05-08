<script lang="ts">
	import type { PartialPostData } from "$lib/scripts/interfaces/PostInterface";
    import PostMeta from "./partials/PostMeta.svelte";

    export let postData: PartialPostData;
</script>

<a href="/post/{postData.slug}" class="mb-4">
    <article class="flex flex-col gap-2">
        <img src={postData.thumbnail} alt={postData.title + " thumbnail"} width="600" height="345" class="w-full">
        <PostMeta meta={postData.meta} />
        <h1 class="text-lg lg:text-2xl font-semibold font-title">{postData.title}</h1>
    </article>
</a>