<script lang="ts" context="module">
    import Img from "$lib/components/custom/Img.svelte";
    export {
        Img as img,
    };

    /* export let title: string;
    export let thumbnail: string;
    export let description: string;
    export let date: string;
    export let tags: string[];
    export let published: boolean; */
</script>

<slot>
<!-- the mdsvex content will be slotted in here -->
</slot>