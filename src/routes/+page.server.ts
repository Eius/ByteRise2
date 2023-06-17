import type { PageServerLoad } from './$types';
import { db } from "$lib/firebase/firebase.server";
import type { Article } from "$lib/interfaces/Article";


export const load: PageServerLoad = async ({ params }) => {
    try {
      let articles: Article[] = [];
      const articlesSnapshot = await db.collection('articles').get();
      articlesSnapshot.forEach((article) => {
        const data = article.data();
        if(!data.draft){
          articles.push({
            title: data.title,
            slug: data.slug,
            description: data.description,
            tags: data.tags,
            thumbnail: data.thumbnail[0].downloadURL,
            author: data._createdBy.displayName,
            publishDate: new Date(data._createdBy.timestamp.seconds*1000)
          })
        };
      })
      return {
        articles: articles, 
      };
    } catch (error) {
      console.error('Error retrieving articles:', error);
      return {
        articles: [],
      };
    }
  };