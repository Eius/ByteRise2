<script lang="ts">
	import type { PartialPostData } from "$lib/scripts/interfaces/PostInterface";
    import PostMeta from "./partials/PostMeta.svelte";

    export let postData: PartialPostData;
</script>

<article class="flex flex-col">
    <img src={postData.thumbnail} alt={postData.title + " thumbnail"}>
    <PostMeta metaData={postData.meta} />
    <h1>{postData.title}</h1>
</article>