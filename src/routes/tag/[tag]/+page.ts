import type { Article } from '$lib/interfaces/Article';

export async function load({fetch, params}) {
	const tag = params.tag;
	const response = await fetch(`/api/articles?tag=${tag}`);
	const articles: Article[] = await response.json();
	return { articles }
}