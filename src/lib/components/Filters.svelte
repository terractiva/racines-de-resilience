<script>
	import FilterCategory from './FilterCategory.svelte';
	import FilterLevel from './FilterLevel.svelte';
	import FilterSubcategory from './FilterSubcategory.svelte';

	export let values;
</script>

<aside>
	<details open>
		<summary><b>Niveau d'engagement</b></summary>
		<FilterLevel value={values.level} />
	</details>

	<details open>
		<summary><b>Catégorie</b></summary>
		<FilterCategory value={values.category} />
	</details>

	<details open>
		<summary><b>Thématique</b></summary>
		<FilterSubcategory value={values.subcategory} />
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
