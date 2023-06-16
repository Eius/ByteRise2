<script lang="ts">
    import { featuredPosts } from "$lib/data/Posts";
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
        <li class="text-black font-title font-medium">
            <a href="/post/{post.slug}">{post.title}</a>
        </li>
        {/each}
    </ul>
</div>