<script lang="ts">
    import {allTags} from "$lib/scripts/data/Tags";
</script>

<div class="flex flex-col gap-2">
    <h3 class="relative text-lg font-bold font-title uppercase">
        <span class="border-b-[.2em] border-black">
            Tags
        </span>
    </h3>
    <div class="flex flex-wrap gap-2 text-xs text-white font-title uppercase font-semibold">
        {#each allTags as tag}
        <a href="/tag/{tag.toLowerCase().replace(" ", "_")}" class="whitespace-nowrap bg-primary px-3 py-2">
            {tag}
        </a>
    {/each}
    </div>
</div>

<style lang="postcss">
    
</style>