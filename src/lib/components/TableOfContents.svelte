<script lang="ts">
	import Icon from "@iconify/svelte";

    export let contentDiv: HTMLElement;
    let tocDiv: HTMLElement;
    let openToc = false;
    let headings: {text: string | null, id: string}[] = [];

    function toggleToc() {
        openToc = !openToc;
    }

    $: if((headings.length <= 0) && contentDiv && tocDiv) {
        contentDiv.querySelectorAll("h2").forEach((heading) => {
            if(heading instanceof HTMLHeadingElement) {
                const text = heading.textContent;
                const id = heading.id;
                headings.push({text: text, id: id});
                headings = headings;
            }
        });
    }
</script>

<div class="fixed top-1/2 flex items-center rounded z-20 -translate-y-1/2 {openToc ? "right-0" : "-right-[280px]"} transition-all">
    <button class="bg-neutral rounded-s-3xl -mr-0.5 z-40 border-2 border-r-0 border-neutral-focus" on:click={toggleToc}>
        <Icon icon="ic:baseline-arrow-left" class="text-5xl text-neutral-content -ml-1 {openToc ? "rotate-180" : ""}" />
    </button>
    <div class="px-6 py-7 flex flex-col gap-6 bg-neutral h-fit w-[280px] flex-grow rounded-s z-30 border-2 border-r-0 border-neutral-focus">
        <h2 class="text-neutral-content font-bold font-title uppercase">Table of contents</h2>
        <ol class="pr-2 text-neutral-content flex flex-col gap-3 list-decimal list-inside" bind:this={tocDiv}>
            {#each headings as {text, id}}
                <li>
                    <a class="py-1" href={`#${id}`}>{text}</a>
                </li>
            {/each}
        </ol>
    </div>
</div>