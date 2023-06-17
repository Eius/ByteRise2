<script lang="ts">
	import { onMount } from "svelte";
	import type { PageData } from "./$types";
	import { fly } from "svelte/transition";

    export let data: PageData;
    let { article } = data;
    let animate = false;
    const animationsSettings = {x: -100, duration: 500}
    

    onMount(() => {
        const timeout = setTimeout(() => {
            animate = true;
            clearTimeout(timeout);
        }, 200);
    })
</script>

<div class="container flex flex-col gap-6">
    {#if animate}
        <img src={article?.thumbnail} alt="" class="w-3/4 mx-auto bg-base-100 rounded" in:fly={animationsSettings}>
        <h1 class="text-4xl text-center" in:fly={animationsSettings}>
            {article?.title}
        </h1>
        <div in:fly={animationsSettings}>
            {article?.content}
        </div>
    {/if}
</div>
