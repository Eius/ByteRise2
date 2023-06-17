import type { PageServerLoad } from './$types';
import { db } from '$lib/firebase/firebase.server';
import type { Article, ArticleDetail } from '$lib/interfaces/Article';

export const load: PageServerLoad = async ({ params }) => {
	let { slug } = params;
	try {
		let article: ArticleDetail | undefined;
		const articleSnapshot = await db.collection('articles').where('slug', '==', slug).get();
        if(articleSnapshot.empty) { throw("Snapshot is empty") };
		const data = articleSnapshot.docs[0].data();
		if (!data.draft) {
			article = {
				title: data.title,
				content: data.content,
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
			articles: []
		};
	}
};
