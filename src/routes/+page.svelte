<script lang="ts">
	import type { PageData } from "./$types";


    export let data: PageData;
    const { articles } = data;
</script>

<div class="py-16 container">
    <div class="grid grid-cols-3 gap-6">
        {#each articles as article}
            <article class="flex flex-col bg-neutral rounded-lg overflow-hidden">
                <img src={article.thumbnail} alt={article.title} class="aspect-video bg-base-100" width="800" height="450">
                <section class="p-4 flex flex-col flex-grow gap-2 font-sans">
                    <h6 class="text-lg text-white font-bold">{article.title}</h6>
                    <p class="text-sm text-neutral-content">{article.description}</p>
                    <div class="flex flex-grow items-end -ml-2">
                        {#each article.tags as tag}
                            <a href={`/tag/${tag}`} class="btn btn-ghost btn-xs btn-neutral-content">#{tag}</a>
                        {/each}
                    </div>
                </section>
            </article>
        {/each}
    </div>
</div>