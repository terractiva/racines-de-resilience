<script>
	import { goto } from '$app/navigation';
	import { updateQueryWithFilterValue } from '$lib/utils/filters';
	import FilterCategory from './FilterCategory.svelte';
	import FilterLevel from './FilterLevel.svelte';
	import FilterSubcategory from './FilterSubcategory.svelte';

	export let values;

	function updateUrlAndGo(filterName, filterValue) {
		const url = new URL(window.location);

		updateQueryWithFilterValue(url.searchParams, filterName, filterValue);
		goto(url, { keepfocus: true, noscroll: true, replaceState: true });
	}
</script>

<aside>
	<details open>
		<summary><b>Niveau d'engagement</b></summary>
		<FilterLevel
			value={values.level}
			on:updated={(event) => updateUrlAndGo('niveau', event.detail)}
		/>
	</details>

	<details open>
		<summary><b>Catégorie</b></summary>
		<FilterCategory
			value={values.category}
			on:updated={(event) => updateUrlAndGo('categorie', event.detail)}
		/>
	</details>

	<details open>
		<summary><b>Thématique</b></summary>
		<FilterSubcategory
			value={values.subcategory}
			on:updated={(event) => updateUrlAndGo('thematique', event.detail)}
		/>
	</details>
</aside>

<style lang="scss">
	details {
		&[open] {
			summary {
				margin-bottom: 0.5rem;
			}
		}

		&:not(:last-child) {
			margin-bottom: 2rem;
		}

		summary {
			cursor: pointer;
		}
	}
</style>
