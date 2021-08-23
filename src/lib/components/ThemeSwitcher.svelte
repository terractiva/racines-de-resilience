<script>
	import Themes from '$lib/constants/themes';
	import { themeContext } from '$lib/contexts';
	import { getContext } from 'svelte';

	const { currentTheme$, isThemeDisabled$, toggleTheme } = getContext(themeContext);
</script>

<button
	class="button clear icon-only"
	disabled={$isThemeDisabled$}
	type="button"
	on:click={toggleTheme}>{$currentTheme$ === Themes.Dark ? '☀️' : '🌙'}</button
>

<style lang="scss">
	button.button {
		border-radius: 0;
		margin: 0;
		min-width: utilities.$header-height;

		@include utilities.media-sm-md {
			height: 4.4rem;
			width: 100%;
		}
	}
</style>
