<script>
	import Themes from '$lib/constants/themes';
	import { themeContext } from '$lib/contexts';
	import { getContext } from 'svelte';

	export let background;

	const { currentTheme$ } = getContext(themeContext);
</script>

<div class={`bg-${background}`} class:is-dark={$currentTheme$ === Themes.Dark}>
	<slot />
</div>

<style lang="scss">
	@mixin background-variant($bg-name, $filename, $opacity-light, $opacity-dark) {
		&.bg-#{$bg-name} {
			&.is-dark::before {
				opacity: $opacity-dark;
			}
			&:not(.is-dark)::before {
				opacity: $opacity-light;
			}

			&::before {
				background-image: url('/fonds/#{$filename}');
			}
		}
	}

	div {
		position: relative;

		/* Ne pas oublier de mettre à jour l'option `safelist` de `purgecss` dans `svelte.config.js` */
		@include background-variant('lines', 'lignes.png', 0.3, 0.6);
		@include background-variant('marks', 'marques.png', 0.2, 0.9);
		@include background-variant('strokes', 'traits.png', 0.15, 0.7);

		&::before {
			background-repeat: repeat;
			background-size: 250px auto;
			content: '';
			height: 100%;
			position: absolute;
			width: 100%;
			z-index: -1;
		}
	}
</style>
