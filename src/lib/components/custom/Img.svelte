<script lang="ts">
	export let src: string
	export let alt: string
</script>

<img src={`/uploads/${src}`} {alt} loading="lazy" />