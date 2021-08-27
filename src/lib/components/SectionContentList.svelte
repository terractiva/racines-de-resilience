<script>
	export let nbItemsByLine = 3;
</script>

<ul class:two-items={nbItemsByLine === 2}>
	<slot />
</ul>

<style lang="scss">
	ul {
		list-style: none;
		margin: 0;
		padding: 0;

		&.two-items {
			@include utilities.responsive-grid(1fr, repeat(2, 1fr), repeat(2, 1fr), 2, true);

			justify-content: space-around;
		}
		&:not(.two-items) {
			@include utilities.responsive-grid(1fr, repeat(2, 1fr), repeat(3, 1fr), 2, true);
		}
	}
</style>
