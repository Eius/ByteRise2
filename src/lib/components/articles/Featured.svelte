<script lang="ts">
    import { featuredPosts } from "$lib/scripts/data/Posts";
	import Divider from "./partials/Divider.svelte";
</script>

<div class="flex flex-col gap-2">
    <h3 class="relative text-lg font-bold font-title uppercase">
        <span class="border-b-[.2em] border-black">
            Featured
        </span>
    </h3>
    <ul class="flex flex-col gap-2">
        {#each featuredPosts as post, index}
        {#if index !== 0}
        <Divider />
        {/if}
        <a href="/post/{post.slug}" class="text-black font-title font-medium">
            <li>{post.title}</li>
        </a>
        {/each}
    </ul>
</div>