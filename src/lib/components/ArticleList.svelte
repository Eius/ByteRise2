<script lang="ts">
	import type { Article } from "$lib/interfaces/Article";
    import { onMount } from "svelte";
	import { fly } from "svelte/transition";

    export let articles: Article[];

    let animate = false;
    onMount(() => {
        animate = true;
    })

</script>

<div class="grid grid-cols-3 gap-x-7 gap-y-11">
    {#if animate}
    {#each articles as article, index}
        {#if index === 3}
        <article class="bg-neutral rounded-lg overflow-hidden transition-all duration-150 hover:scale-[103%] outline 
                        outline-1 outline-base-content/0 hover:outline-base-content">
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
        {/if}
        <article class="flex flex-col bg-neutral rounded-lg overflow-hidden transition-all duration-150 subpixel-antialiased 
                        hover:scale-[103%] outline outline-1 outline-base-content/0 hover:outline-base-content" in:fly={{delay: index*75, y: -100, duration: 400}}>
            <a href={`/article/${article.slug}`}>
                <img src={article.thumbnail} alt={article.title} class="aspect-video bg-base-100" width="800" height="450">
            </a>
            <section class="flex flex-col flex-grow font-sans">
                <a href={`/article/${article.slug}`} class="px-4 pt-4 flex flex-col flex-grow gap-2">
                    <h6 class="text-lg text-white font-bold">{article.title}</h6>
                    <p class="text-sm text-neutral-content">{article.description}</p>
                </a>
                <div class="p-4 flex gap-1 items-end -ml-2">
                    {#each article.tags as tag}
                        <a href={`/tag/${tag}`} class="btn btn-outline btn-secondary btn-xs btn-neutral-content">#{tag}</a>
                    {/each}
                </div>
            </section>
        </article>
    {/each}
    {/if}
</div>