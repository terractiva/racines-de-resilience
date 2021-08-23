<script>
	export let isReversed = false;
	export let style = '';
</script>

<div {style} class:is-reversed={isReversed}>
	<slot />
</div>

<style lang="scss">
	div {
		&.is-reversed {
			@include utilities.responsive-grid(1fr, 1fr 3fr, 1fr 3fr);
		}
		&:not(.is-reversed) {
			@include utilities.responsive-grid(1fr, 3fr 1fr, 3fr 1fr);
		}

		align-items: center;
		justify-items: center;
	}
</style>
