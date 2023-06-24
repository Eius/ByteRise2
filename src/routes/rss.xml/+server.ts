import type { Article } from '$lib/interfaces/Article.js'
import { json } from '@sveltejs/kit';

const siteURL = 'https://byterise.dev'
const siteTitle = 'ByteRise.dev'
const siteDescription = 'Embark on a journey of creativity and skill! Unleash your imagination as we delve into game development, 3D modeling, web development, and beyond. Join our diverse tutorials and discover the secrets to bringing your ideas to life.'

const prerender = true;

async function getPosts() {
	let posts: Article[] = []

	const paths = import.meta.glob('/src/articles/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Article, 'slug'>;
			const post: Article = { ...metadata, slug };
			if(post.published) {
				posts.push(post);
			}
		}
	}

	posts = posts.sort((first, second) => 
		new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts
}

export const GET = async ({fetch}) => {
	const articles = await getPosts();

  const body = render(articles)
  const options = {
    headers: {
      'Cache-Control': 'max-age=0, s-maxage=3600',
      'Content-Type': 'application/xml',
    }
  };

  return json(body, options)
}

const render = (articles: Article[]) =>
(`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${articles
  .map(
    (article) => `<item>
<guid isPermaLink="true">${siteURL}/article/${article.slug}</guid>
<title>${article.title}</title>
<link>${siteURL}/article/${article.slug}</link>
<description>${article.description}</description>
<pubDate>${new Date(article.date).toUTCString()}</pubDate>
<media:thumbnail url=${siteURL}/thumbnails/${article.thumbnail} />
</item>`
  )
  .join('')}
</channel>
</rss>
`)