import adapterStatic from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';
import sveltePreprocess from 'svelte-preprocess';
import actions from './src/lib/data/actions/index.js';
import quizSteps from './src/lib/data/quiz-steps.js';

const postcssPlugins = [autoprefixer()];
const isProduction = process.env.NODE_ENV === 'production';

// Pas très pratique d'avoir PurgeCSS activé en dev donc on l'active seulement en production
if (isProduction) {
	postcssPlugins.push(
		purgecss({
			content: ['./src/**/*.html', './src/**/*.svelte'],
			safelist: ['bg-lines', 'bg-marks', 'bg-strokes']
		})
	);
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapterStatic(),
		target: '#svelte',
		prerender: {
			pages: [
				'*',
				...actions.map((action) => `/arbre-actions/${action.slug}`),
				...quizSteps.map((_, index) => `/quiz/${index + 1}`)
			]
		}
	},
	preprocess: sveltePreprocess({
		postcss: {
			plugins: postcssPlugins
		},
		scss: {
			prependData: `@use 'src/styles/utilities.scss';`
		}
	})
};

export default config;
