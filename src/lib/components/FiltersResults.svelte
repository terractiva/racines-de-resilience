<script>
	import { nbFilterResultsShowed } from '$lib/constants/settings';
	import Action from './Action.svelte';

	export let results;

	let showAllChoice = false;

	$: showAllForced = results.length <= nbFilterResultsShowed;
	$: showAll = showAllChoice || showAllForced;
	$: nbResultsShowed = showAll ? results.length : nbFilterResultsShowed;
</script>

<p><b>{results.length} résultat(s)</b></p>

<ul>
	{#each { length: nbResultsShowed } as _, i (results[i].slug)}
		<li>
			<Action action={results[i]} />
		</li>
	{/each}
</ul>

{#if !showAll}
	<div>
		<button class="button" on:click={() => (showAllChoice = true)}>Tout afficher</button>
	</div>
{/if}

<style lang="scss">
	ul {
		@include utilities.responsive-grid(1fr, repeat(2, 1fr), repeat(2, 1fr));

		list-style: none;
		margin: 0;
		padding: 0;
	}

	div {
		margin-top: 2rem;
		text-align: center;
	}
</style>
