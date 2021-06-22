<script>
	import FilterCategory from './FilterCategory.svelte';
	import FilterLevel from './FilterLevel.svelte';
	import FilterSubcategory from './FilterSubcategory.svelte';
</script>

<aside>
	<details open>
		<summary><b>Niveau d'engagement</b></summary>
		<FilterLevel />
	</details>

	<details open>
		<summary><b>Catégorie</b></summary>
		<FilterCategory />
	</details>

	<details open>
		<summary><b>Thématique</b></summary>
		<FilterSubcategory />
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
