<script lang="ts">
	import type { PartialPostData } from "$lib/scripts/interfaces/PostInterface";
    import PostMeta from "./partials/PostMeta.svelte";

    export let postData: PartialPostData;
</script>

<article class="flex flex-col lg:flex-row gap-4 py-4 last-of-type:pb-0">
    <img src={postData.thumbnail} alt={postData.title + " thumbnail"} width="600" height="345" class="w-full lg:w-1/2 object-cover">
    <div class="flex flex-col gap-3">
        <PostMeta meta={postData.meta} />
        <h1 class="text-lg font-semibold font-title leading-snug">{postData.title}</h1>
    </div>
</article>