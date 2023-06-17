<script lang="ts">
	import type { PageData } from "./$types";


export let data: PageData;
const { article } = data;

</script>

<div class="container">
    <img src={article?.thumbnail} alt="" class="w-1/2 mx-auto">
    <h1 class="mt-8 text-3xl font-title font-bold">{article?.title}</h1>
</div>
