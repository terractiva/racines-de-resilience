<script>
	import { createEventDispatcher } from 'svelte';

	// Obligé de créer un composant de liste à cause de ce problème : https://github.com/sveltejs/svelte/issues/2308

	/** @type [{label: string, value: number|string}] */
	export let checkboxes;
	export let group;
	export let id;

	const dispatch = createEventDispatcher();
</script>

{#each checkboxes as checkbox}
	<label for="{id}-{checkbox.value}">
		<input
			bind:group
			id="{id}-{checkbox.value}"
			type="checkbox"
			value={checkbox.value}
			on:change={() => dispatch('updated')}
		/>
		{checkbox.label}
	</label>
{/each}

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
