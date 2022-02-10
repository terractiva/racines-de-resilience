<script>
	import { nbFilterResultsShowed } from '$lib/constants/settings';
	import Action from './Action.svelte';

	export let results;
	export let title;

	let showAllChoice = false;

	$: hasResults = results.length;
	$: showAllForced = results.length <= nbFilterResultsShowed;
	$: showAll = showAllChoice || showAllForced;
	$: nbResultsShowed = showAll ? results.length : nbFilterResultsShowed;
</script>

<p class:mb-0={!hasResults}>
	<b>{title}</b>
</p>

{#if hasResults}
	<ul>
		{#each { length: nbResultsShowed } as _, i (results[i].slug || results[i].id)}
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
{/if}

<style lang="scss">
	ul {
		@include utilities.responsive-grid(1fr, repeat(2, 1fr), repeat(2, 1fr), 1);

		list-style: none;
		margin: 0;
		padding: 0;
	}

	div {
		margin-top: 2rem;
		text-align: center;
	}
</style>
