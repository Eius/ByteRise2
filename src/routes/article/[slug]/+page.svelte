<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import type { PageData } from "./$types";
	import Icon from "@iconify/svelte";

    export let data: PageData;
    
    let animate = false;
    const animationsSettings = {x: -100, duration: 300}
    
    let tocDiv: HTMLElement;
    let contentDiv: HTMLElement;
    let openToc = false;
    let headings: {text: string | null, id: string}[] = []; 

    $: if(contentDiv && tocDiv) {
        headings = [];
        contentDiv.querySelectorAll("h2").forEach((heading) => {
            if(heading instanceof HTMLHeadingElement) {
                const text = heading.textContent;
                const id = heading.id;
                headings.push({text: text, id: id});
            }
        })
    }

    onMount(() => {
        animate = true;
    })

    function toggleToc() {
        openToc = !openToc;
    }

</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="py-16 container">
    {#if animate}
        <article class="flex flex-col gap-6 prose mx-auto" in:fly={animationsSettings}>
            <img src={`/thumbnails/${data.meta.thumbnail}`} alt="" width="800" height="450" class="w-full mx-auto bg-base-100 rounded">
            <h1 class="text-4xl text-center">
                {data.meta.title}
            </h1>
            <div class="p-4 flex gap-1 justify-center -ml-2">
                {#each data.meta.tags as tag}
                    <a href={`/tag/${tag}`} class="btn btn-outline btn-secondary btn-sm btn-neutral-content">
                        #{tag.replace("_", " ")}
                    </a>
                {/each}
            </div>
            <div bind:this={contentDiv}>
                <svelte:component this={data.content} />
            </div>
        </article>
    {/if}
</div>

<div class="fixed top-1/2 flex items-center rounded z-20 -translate-y-1/2 {openToc ? "right-0" : "-right-[280px]"} transition-all">
    <button class="bg-neutral rounded-s-3xl -mr-2 " on:click={toggleToc}>
        <Icon icon="ic:baseline-arrow-left" class="text-5xl -ml-1 {openToc ? "rotate-180" : ""}" />
    </button>
    <div class="p-4 flex flex-col gap-6 bg-neutral h-fit max-h-[400px] w-[280px] flex-grow rounded-s overflow-y-scroll">
        <h2 class="font-bold font-title uppercase">Table of contents</h2>
        <ol class="flex flex-col gap-4 list-decimal list-inside" bind:this={tocDiv}>
            {#each headings as {text, id}}
                <li class="">
                    <a href={`#${id}`}>{text}</a>
                </li>
            {/each}
        </ol>
    </div>
</div>

