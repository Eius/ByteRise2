<script lang="ts">
	import type { PageData } from "./$types";
    import ArticleList from "$lib/components/ArticleList.svelte";
	import { page } from "$app/stores";

    export let data: PageData;
    $: articles = data.articles;
</script>

<svelte:head>
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4564448067691193"
     crossorigin="anonymous"></script>
	<title>ByteRise | Join the ByteSide</title>
	<meta name="application-name" content="ByteRise" />
    <link rel="canonical" href="https://byterise.dev/{$page.params.tag}" />
	<meta name="description" content="Embark on a journey of creativity and skill! Unleash your imagination as we delve into game development, 3D modeling, web development, and beyond. Join our diverse tutorials and discover the secrets to bringing your ideas to life." />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://byterise.dev/">
	<meta property="og:title" content="ByteRise | Join the ByteSide">
	<meta property="og:description" content="Embark on a journey of creativity and skill! Unleash your imagination as we delve into game development, 3D modeling, web development, and beyond. Join our diverse tutorials and discover the secrets to bringing your ideas to life.">
	<meta property="og:image" content="https://byterise.dev/socials_thumbnail.jpg">
	<meta property="og:image:width" content="1080" />
	<meta property="og:image:height" content="608" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="og:url" content="https://byterise.dev/">
	<meta property="og:title" content="ByteRise | Join the ByteSide">
	<meta property="twitter:description" content="Embark on a journey of creativity and skill! Unleash your imagination as we delve into game development, 3D modeling, web development, and beyond. Join our diverse tutorials and discover the secrets to bringing your ideas to life.">
	<meta property="twitter:image" content="https://byterise.dev/socials_thumbnail.jpg">
	<meta property="twitter:image:alt" content="ByteRise Blog | Technology and stuff">
</svelte:head>

<ArticleList {articles} />