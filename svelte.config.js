import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// .svelte dosyalarına ek olarak .md dosyalarını da tanımasını sağlıyoruz.
	extensions: ['.svelte', '.md'],

	preprocess: [
		vitePreprocess(),
		// mdsvex'i .md uzantısı için etkinleştiriyoruz.
		mdsvex({
			extensions: ['.md']
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;