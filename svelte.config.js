import adapterStatic from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';
import sveltePreprocess from 'svelte-preprocess';

const postcssPlugins = [autoprefixer()];
const isProduction = process.env.NODE_ENV === 'production';

// Pas très pratique d'avoir PurgeCSS activé en dev donc on l'active seulement en production
if (isProduction) {
	postcssPlugins.push(
		purgecss({
			content: ['./src/**/*.html', './src/**/*.svelte']
		})
	);
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapterStatic(),
		target: '#svelte'
	},
	preprocess: sveltePreprocess({
		postcss: {
			plugins: postcssPlugins
		},
		scss: {
			prependData: `@use 'src/styles/variables.scss';`
		}
	})
};

export default config;
