<script lang="ts">
	import { onMount } from "svelte";
    import ArticleList from "$lib/components/ArticleList.svelte";
	import type { Article } from "$lib/interfaces/Article";
	import type { PageData } from "./$types";

    export let data: PageData;
    const { articles } = data;
    
</script>

<div class="py-16 container">
    <ArticleList {articles} />
</div>