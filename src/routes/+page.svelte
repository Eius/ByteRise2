<script lang="ts">
    import ArticleList from "$lib/components/ArticleList.svelte";
	import type { PageData } from "./$types";

    export let data: PageData;
    const { articles } = data;
    
</script>

<div class="py-16 container">
    <ArticleList {articles} />
</div>