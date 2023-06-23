<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import type { PageData } from "./$types";
	import Icon from "@iconify/svelte";
	import { shareWebsite } from "$lib/utils/utils";
    import { page } from "$app/stores";
	import TableOfContents from "$lib/components/TableOfContents.svelte";

    export let data: PageData;

    let contentDiv: HTMLElement;
    let animate = false;
    const animationsSettings = {x: -100, duration: 300}
    
    let shareData: ShareData = {
        url: `https://byterise.dev/article/${$page.params.slug}`
    }

    onMount(() => {
        animate = true;
    })

</script>

<svelte:head>
    <title>ByteRise | {data.meta.title}</title>
    <meta name="description" content="{data.meta.description}" />
    <link rel="canonical" href="https://byterise.dev/article/{$page.params.slug}" />

	<!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
	<meta property="og:url" content="https://byterise.dev/article/{$page.params.slug}">
	<meta property="og:title" content="ByteRise | {data.meta.title}">
	<meta property="og:description" content="{data.meta.description}">
	<meta property="og:image" content="https://byterise.dev/thumbnails/{data.meta.thumbnail}">
	<meta property="og:image:width" content="1080" />
	<meta property="og:image:height" content="608" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary">
	<meta property="og:url" content="https://byterise.dev/article/{$page.params.slug}">
	<meta property="og:title" content="ByteRise | {data.meta.title}">
	<meta property="twitter:description" content="{data.meta.description}">
	<meta property="twitter:image" content="https://byterise.dev/thumbnails/{data.meta.thumbnail}">
	<meta property="twitter:image:alt" content="ByteRise | {data.meta.title} thumbnail">
</svelte:head>

<TableOfContents {contentDiv} />

<div class="py-16 container">
    {#if animate}
        <article class="flex flex-col prose mx-auto" in:fly={animationsSettings}>
            <img src={`/thumbnails/${data.meta.thumbnail}`} alt="" width="1080" height="608" class="w-full mx-auto bg-base-100 rounded">
            <h1 class="text-4xl text-center">
                {data.meta.title}
            </h1>
            <div class="p-4 flex gap-1 justify-center -ml-2">
                <button class="btn btn-outline btn-secondary btn-sm" on:click={() => shareWebsite(shareData)}>
                    <Icon icon="majesticons:share" class="text-xl" />
                    Share
                </button>
                {#each data.meta.tags as tag}
                    <a href={`/tag/${tag}`} class="btn btn-outline btn-secondary btn-sm">
                        #{tag.replace("_", " ")}
                    </a>
                {/each}
            </div>
            <div bind:this={contentDiv}>
                <svelte:component this={data.content} />
            </div>
            <div class="flex flex-col items-center">
                <p class="mt-0">
                    Liked the article? 
                </p>
                <button on:click={() => {shareWebsite(shareData)}} class="btn btn-sm btn-wide btn-outline btn-secondary mx-auto">
                    Share it!
                </button>
            </div>
        </article>
    {/if}
</div>



