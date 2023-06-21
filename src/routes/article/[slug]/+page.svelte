<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import type { PageData } from "./$types";

    export let data: PageData;

    let animate = false;
    const animationsSettings = {x: -100, duration: 300}
    onMount(async () => {
        animate = true;
    })
    
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="container">
    {#if animate}
        <article class="flex flex-col gap-6" in:fly={animationsSettings}>
            <img src={`/thumbnails/${data.meta.thumbnail}`} alt="" width="800" height="450" class="w-3/4 mx-auto bg-base-100 rounded">
            <div class="p-4 flex gap-1 justify-center -ml-2">
                {#each data.meta.tags as tag}
                    <a href={`/tag/${tag}`} class="btn btn-outline btn-secondary btn-sm btn-neutral-content">
                        #{tag.replace("_", " ")}
                    </a>
                {/each}
            </div>
            <h1 class="text-4xl text-center">
                {data.meta.title}
            </h1>
            <svelte:component this={data.content} />
        </article>
    {/if}
</div>

<style class="postcss">
</style>
