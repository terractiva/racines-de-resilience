<script>
	import { actionsUrl } from '$lib/constants/settings';
	import FiltersResults from './FiltersResults.svelte';

	export let query;

	$: resultsPromise = fetch(`${actionsUrl}?${query}`).then(async (response) => {
		const json = await response.json();

		if (response.ok) {
			return json;
		}

		throw new Error(json?.message);
	});
</script>

{#await resultsPromise}
	<p class="mb-0">Chargement des actions de la communauté...</p>
{:then results}
	<FiltersResults
		{results}
		title="{results.length} résultat(s) dans les actions de la communauté"
	/>
{:catch}
	<p class="mb-0">Oups, il y a eu une erreur...</p>
{/await}
