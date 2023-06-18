import adapter from '@sveltejs/adapter-vercel';
import sveltePreprocess from "svelte-preprocess"
import { mdsvex } from 'mdsvex'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: sveltePreprocess(),
	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x',
		  }),
	}
};

export default config;