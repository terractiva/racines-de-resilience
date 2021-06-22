<script>
	import Themes from '$lib/constants/themes';
	import { themeContext } from '$lib/contexts';
	import { getContext } from 'svelte';

	const { currentTheme$, isThemeDisabled$, toggleTheme } = getContext(themeContext);
</script>

<button
	class="button icon-only"
	class:dark={$currentTheme$ === Themes.Light}
	disabled={$isThemeDisabled$}
	type="button"
	on:click={toggleTheme}>{$currentTheme$ === Themes.Dark ? '☀️' : '🌙'}</button
>

<style lang="scss">
	button {
		border-radius: 50%;
	}
</style>
