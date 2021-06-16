import adapterStatic from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapterStatic(),
		target: '#svelte'
	},
	preprocess: sveltePreprocess({
		postcss: {
			plugins: [autoprefixer()]
		},
		scss: {
			prependData: `@use 'src/styles/variables.scss';`
		}
	})
};

export default config;
