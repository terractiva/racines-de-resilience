<script>
	// Obligé de créer un composant de liste à cause de ce problème : https://github.com/sveltejs/svelte/issues/2308

	/** @type [{label: string, value: number|string}] */
	export let checkboxes;
	export let group;
	export let name;
</script>

{#each checkboxes as checkbox}
	<label>
		<input bind:group {name} type="checkbox" value={checkbox.value} />
		{checkbox.label}
	</label>
{/each}

<style lang="scss">
	label {
		align-items: center;
		cursor: pointer;
		display: flex;

		&:not(:last-child) {
			margin-bottom: 0.5rem;
		}

		input {
			cursor: pointer;
			flex-shrink: 0;
			margin: 0;
			margin-right: 0.5rem;
		}
	}
</style>
