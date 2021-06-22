<script>
	import Action from './Action.svelte';

	export let results;
</script>

<p><b>{results.length} résultat(s)</b></p>

<ul>
	{#each results as action (action.slug)}
		<li>
			<Action {action} />
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		display: grid;
		gap: var(--grid-gutter);
		grid-template-columns: repeat(2, 1fr);
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
