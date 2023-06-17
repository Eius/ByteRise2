<script lang="ts">
	import type { Article } from "$lib/interfaces/Article";

    export let article: Article;
</script>

<article class="flex col-span-3 bg-neutral rounded-lg overflow-hidden transition-all duration-150 hover:scale-[103%]">
    <a href={`/article/${article.slug}`}>
        <img src={article.thumbnail} alt={article.title} class="bg-base-100" width="800" height="450">
    </a>
    <section class="flex flex-col gap-4 font-sans">
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