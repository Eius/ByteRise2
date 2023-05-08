<script lang="ts">
	import StepsFlipped from "$lib/svg/StepsFlipped.svelte";

    interface Link {
        name: string;
        url: string;
    }

    const usefulLinks: Link[] = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "My work",
            url: "https://portfolio-5vl.pages.dev",
        },
    ]
</script>

<StepsFlipped />
<footer class="bg-primary py-4">
    <div class="container grid grid-cols-2">
        <div class="col-span-1">

        </div>
        <div class="col-span-1">
            <h3 class="text-white font-bold text-lg">Useful links</h3>
            <ul class="flex flex-col">
                {#each usefulLinks as link}
                    <a href={link.url} class="text-white text-md hover:underline">{link.name}</a>
                {/each}
            </ul>
        </div>
    </div>
</footer>