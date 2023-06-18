<script lang="ts">
	import { onMount } from "svelte";
	import type { PageData } from "./$types";
    import ArticleList from "$lib/components/ArticleList.svelte";
	import type { Article } from "$lib/interfaces/Article";

    export let data: PageData;
    $: articles = data.articles;
</script>

<div class="py-16 container">
    <ArticleList {articles} />
</div>