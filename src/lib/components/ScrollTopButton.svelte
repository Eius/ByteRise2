<script lang="ts">
	import { showScrollTop } from "$lib/stores/visibilityStore";
	import Icon from "@iconify/svelte";


</script>

<button on:click={() => {window.scrollTo(0, 0)}}
    class="fixed bottom-4 right-4 bg-neutral border-2 border-neutral-focus rounded-full p-1.5 {$showScrollTop ? "opacity-100" : "opacity-0"} transition-opacity">
    <Icon icon="mdi:arrow-up" class="text-4xl" />
</button>