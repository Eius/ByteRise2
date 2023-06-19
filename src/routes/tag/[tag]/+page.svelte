<script lang="ts">
	import type { PageData } from "./$types";
    import ArticleList from "$lib/components/ArticleList.svelte";

    export let data: PageData;
    $: articles = data.articles;
</script>

<div class="py-16 container">
    <ArticleList {articles} />
</div>