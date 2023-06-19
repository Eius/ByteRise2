import adapter from '@sveltejs/adapter-vercel';
import sveltePreprocess from "svelte-preprocess";
import { mdsvex, escapeSvelte } from 'mdsvex';
import shiki from 'shiki';
import rehypePrism from 'rehype-prism-plus'
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({ theme: 'dark-plus' })
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))
			return `{@html \`${html}\` }`
		}
	},
	layout: {
		_: './src/lib/components/mdsvex_layout.svelte'
	},
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug, rehypeAccessibleEmojis]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [sveltePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter({
			runtime: 'edge',
		  }),
	}
};

export default config;