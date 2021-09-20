<script>
	import Themes from '$lib/constants/themes';
	import theme from '$lib/stores/theme';
</script>

<button
	class="button clear icon-only"
	disabled={$theme.isDisabled}
	type="button"
	on:click={theme.toggle}>{$theme.value === Themes.Dark ? '☀️' : '🌙'}</button
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
