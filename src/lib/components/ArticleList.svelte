<script lang="ts">
	import type { Article } from "$lib/interfaces/Article";
    import { onDestroy } from "svelte";
	import { fly } from "svelte/transition";
    import { adblockerEnabled } from "$lib/stores/adblockerStore";
	import { page } from "$app/stores";
	import { formatDate } from "$lib/utils/utils";
	import Icon from "@iconify/svelte";

    export let articles: Article[];
    let searchQuery: string = "";
    let filteredArticles: Article[] = [];
    let animate = false;
    const unsubsribe = page.subscribe(() => {
        animate = false;
        setTimeout(() => {
            animate = true;
        }, 1)
    })

    let searchTimer: NodeJS.Timeout;

    $: {
        if(searchQuery) {
            clearTimeout(searchTimer);
            searchTimer = setTimeout(() => {
                const filteredTitles = articles.filter((article) => article.title.toLowerCase().includes(searchQuery.toLowerCase()));
                const filteredDesc = articles.filter((article) => article.description.toLowerCase().includes(searchQuery.toLowerCase()));
                const merged = filteredTitles.concat(filteredDesc);
                filteredArticles = Array.from(new Set(merged));
            }, 250)
        } else {
            filteredArticles = [...articles];
        }
    }

    onDestroy(() => {
        unsubsribe();
    })

</script>

{#if animate}
<div in:fly={{y: 100, duration: 400}} class="pt-4 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7">
    <div class="form-control w-full">
        <label for="search" class="label">
          <span class="label-text">Looking for something specific?</span>
        </label>    
        <input maxlength=20 autocomplete="off" name="search" type="search" placeholder="Search..." bind:value={searchQuery} 
        class="input input-bordered w-full" />
      </div>
</div>
{#if filteredArticles.length > 0}
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-11">
    {#each filteredArticles as article, index}
        <!-- {#if index === 3 && $adblockerEnabled === false}
        <article class="bg-neutral rounded-lg overflow-hidden transition-all duration-150 hover:scale-[103%] outline 
                        outline-1 outline-base-content/0 hover:outline-base-content" in:fly={{delay: index*75, y: -100, duration: 400}}>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4564448067691193"
            crossorigin="anonymous"></script>
            <ins class="adsbygoogle"
            style="display:block"
            data-ad-format="fluid"
            data-ad-layout-key="-63+cd-2-3r+ld"
            data-ad-client="ca-pub-4564448067691193"
            data-ad-slot="4735355033"></ins>
            <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
        </article>
        {/if} -->
        <article class="flex flex-col bg-neutral rounded-lg overflow-hidden transition-all duration-150 subpixel-antialiased 
                        hover:scale-[103%] outline outline-1 outline-base-200 hover:outline-secondary-focus" in:fly={{delay: index*75, y: 100, duration: 400}}>
            <a data-sveltekit-preload-data="hover" href={`/article/${article.slug}`}>
                <img src={`/thumbnails/${article.thumbnail}`} alt={article.title} class="aspect-video bg-base-100" width="1080" height="608">
            </a>
            <section class="flex flex-col flex-grow font-sans">
                <a href={`/article/${article.slug}`} class="px-4 pt-4 flex flex-col flex-grow gap-2">
                    <p class="text-sm text-neutral-content">{formatDate(article.date)}</p>
                    <h6 class="text-lg text-white font-title font-bold">{article.title}</h6>
                    <p class="text-sm text-neutral-content">{article.description}</p>
                </a>
                <div class="p-4 flex gap-1 items-end">
                    {#each article.tags as tag}
                        <a href={`/tag/${tag}`} class="btn btn-outline btn-secondary btn-xs btn-neutral-content">#{tag.replace("_", " ")}</a>
                    {/each}
                </div>
            </section>
        </article>
    {/each}
</div>
{:else}
    <div class="flex items-center justify-center gap-4" in:fly={{y: 100, duration: 400}}>
        <span in:fly={{delay: 300, y: -100, duration: 400}}>
            <Icon icon="mdi:spider-thread" class="text-secondary-focus text-6xl" />
        </span>
        <p>Ooops, looks like there's nothing here.</p>
    </div>
{/if}
{/if}