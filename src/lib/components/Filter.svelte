<script>
	export let group;
	export let id;
	export let label;
	export let value;
</script>

<label for="{id}-{value}">
	<input bind:group {value} id="{id}-{value}" type="checkbox" />
	{label}
</label>

<style lang="scss">
	label {
		align-items: center;
		cursor: pointer;
		display: flex;
		margin-left: 0.5rem;

		&:not(:last-child) {
			margin-bottom: 0.5rem;
		}

		input {
			flex-shrink: 0;
			margin: 0;
			margin-right: 0.5rem;
		}
	}
</style>
