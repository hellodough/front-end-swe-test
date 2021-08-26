import preprocess from 'svelte-preprocess';
import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: static_adapter(),
		// paths: {
		// 	base: '/front-end-swe-test',
		// 	assets: 'http://www.annado.net/front-end-swe-test'
		// },
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	],
};

export default config;
