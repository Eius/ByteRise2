<script lang="ts">
	import type { PageData } from "./$types";
    import NewArticle from "$lib/components/articles/NewArticle.svelte";

    export let data: PageData;
    const { articles } = data;
</script>

<div class="py-16 container">
    <div class="grid grid-cols-3 gap-x-7 gap-y-11">
        {#each articles as article, index}
            <article class="flex flex-col bg-neutral rounded-lg overflow-hidden transition-all duration-150 subpixel-antialiased 
                            hover:scale-[103%] outline outline-1 outline-base-content/0 hover:outline-base-content">
                <a href={`/article/${article.slug}`}>
                    <img src={article.thumbnail} alt={article.title} class="aspect-video bg-base-100" width="800" height="450">
                </a>
                <section class="flex flex-col flex-grow gap-4 font-sans">
                    <a href={`/article/${article.slug}`} class="px-4 pt-4 flex flex-col gap-2">
                        <h6 class="text-lg text-white font-bold">{article.title}</h6>
                        <p class="text-sm text-neutral-content">{article.description}</p>
                    </a>
                    <div class="px-4 pb-4 flex flex-grow items-end -ml-2">
                        {#each article.tags as tag}
                            <a href={`/tag/${tag}`} class="btn btn-ghost btn-xs btn-neutral-content">#{tag}</a>
                        {/each}
                    </div>
                </section>
            </article>
        {/each}
    </div>
</div>