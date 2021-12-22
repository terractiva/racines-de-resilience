<script>
	import formGoto from '$lib/actions/formGoTo';
	import { actionsPage } from '$lib/constants/pages';
	import FilterCategory from './FilterCategory.svelte';
	import FilterLevel from './FilterLevel.svelte';
	import FilterSubcategory from './FilterSubcategory.svelte';

	export let values;
</script>

<aside>
	<form
		use:formGoto={{ keepfocus: true, noscroll: true, replaceState: true }}
		action={actionsPage.path}
		method="GET"
	>
		<input name="terme" placeholder="Rechercher une action" type="text" value={values.term} />

		<details open={!!values.level.length}>
			<summary><b>Niveau d'engagement</b></summary>
			<FilterLevel value={values.level} />
		</details>

		<details open={!!values.category.length}>
			<summary><b>Catégorie</b></summary>
			<FilterCategory value={values.category} />
		</details>

		<details open={!!values.subcategory.length}>
			<summary><b>Thématique</b></summary>
			<FilterSubcategory value={values.subcategory} />
		</details>

		<button class="button secondary" type="submit">Filtrer</button>
	</form>
</aside>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;

		input {
			margin-bottom: 2rem;
		}

		button {
			width: 100%;

			@include utilities.media-sm-md {
				margin-top: 2rem;
			}
			@include utilities.media-lg {
				order: -1;
				margin-bottom: 2rem;
			}
		}

		details {
			&[open] {
				summary {
					margin-bottom: 0.5rem;
				}
			}

			&:not(:last-of-type) {
				margin-bottom: 2rem;
			}

			summary {
				cursor: pointer;
			}
		}
	}
</style>
