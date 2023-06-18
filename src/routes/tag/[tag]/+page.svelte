<script lang="ts">
	import { onMount } from "svelte";
	import type { PageData } from "./$types";
    import ArticleList from "$lib/components/ArticleList.svelte";

    export let data: PageData;
    const { articles } = data;
</script>

<div class="py-16 container">
    <ArticleList {articles} />
</div>