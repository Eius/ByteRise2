import type { PageServerLoad } from './$types';
import { db } from '$lib/firebase/firebase.server';
import type { ArticleDetail } from '$lib/interfaces/Article';
import { compile } from "mdsvex";

export const load: PageServerLoad = async ({ params }) => {
	let { slug } = params;
	try {
		let article: ArticleDetail | undefined;
		const articleSnapshot = await db.collection('articles').where('slug', '==', slug).get();
        if(articleSnapshot.empty) { throw("Snapshot is empty") };
		const data = articleSnapshot.docs[0].data();
		if (!data.draft) {
			const compiledContent = await compile(data.content)
				.then(x => x?.code
					.replace(/>{@html `<code class="language-/g, '><code class="language-'))
			article = {
				title: data.title,
				content: compiledContent ? compiledContent : "",
				tags: data.tags,
				thumbnail: data.thumbnail[0].downloadURL,
				author: data._createdBy.displayName,
				publishDate: new Date(data._createdBy.timestamp.seconds * 1000)
			};
		}
		return {
			article: article,
		};
	} catch (error) {
		console.error('Error retrieving articles:', error);
		return {
			article: undefined
		};
	}
};
