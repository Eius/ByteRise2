import { json } from '@sveltejs/kit'
import type { Article } from '$lib/interfaces/Article'

async function getPosts(tag: string | null) {
	let posts: Article[] = []

	const paths = import.meta.glob('/src/articles/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Article, 'slug'>;
			const post: Article = { ...metadata, slug };
			if(post.published && (!tag || post.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase()))) {
				posts.push(post);
			}
		}
	}

	posts = posts.sort((first, second) => 
		new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts
}

export async function GET({url}) {
	const tag = url.searchParams.get("tag");
	const posts = await getPosts(tag)
	return json(posts)
}