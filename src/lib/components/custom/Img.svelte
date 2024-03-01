<script lang="ts">
	import { page } from "$app/stores";

	export let src: string;
	export let alt: string;

	let dimensions: {width: string | null, height: string | null} = {
		width: null,
		height: null
	}

	const urlObj = new URL(`${$page.url.origin}/uploads/${src}`);
	dimensions = {
		width: urlObj.searchParams.get("width"),
		height: urlObj.searchParams.get("height"),
	}
</script>

<img src={`/uploads/${src.split("?")[0]}`} {alt} loading="lazy" class="w-full mx-auto" width={dimensions.width} height={dimensions.height} />
