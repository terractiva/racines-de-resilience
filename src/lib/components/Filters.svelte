<script>
	import formGoto from '$lib/actions/formGoTo';
	import InputNames from '$lib/constants/input-names';
	import { actionsPage } from '$lib/constants/pages';
	import FilterCategory from './FilterCategory.svelte';
	import FilterLevel from './FilterLevel.svelte';
	import FilterSubcategory from './FilterSubcategory.svelte';
	import FilterCountry from './FilterCountry.svelte';
	import FilterDepartment from './FilterDepartment.svelte';
	import { countryFrance } from '$lib/data/countries';
	import FilterRegion from './FilterRegion.svelte';

	export let values;

	const isOpen = Object.entries(values).reduce((result, [inputName, value]) => {
		if (Array.isArray(value)) {
			return {
				...result,
				[inputName]: !!value.length
			};
		}

		return result;
	}, {});
	let countryValue;
	let regionValue;

	$: onValuesChange(values);
	$: isFranceSelected = countryValue.includes(countryFrance.slug);
	$: showDepartment = isFranceSelected && !!regionValue.length;
	$: showRegion = isFranceSelected;

	function onValuesChange(values) {
		countryValue = values.country;
		regionValue = values.region;
	}
</script>

<aside>
	<form
		use:formGoto={{ keepfocus: true, noscroll: true, replaceState: true }}
		action={actionsPage.path}
		method="GET"
	>
		<input
			name={InputNames.action}
			placeholder="Rechercher une action"
			type="text"
			value={values.actionTerm}
		/>

		<input
			name={InputNames.source}
			placeholder="Rechercher une structure/organisation/initiative"
			type="text"
			value={values.sourceTerm}
		/>

		<details open={isOpen.level}>
			<summary><b>Niveau d'engagement</b></summary>
			<div>
				<FilterLevel value={values.level} />
			</div>
		</details>

		<details open={isOpen.category}>
			<summary><b>Catégorie</b></summary>
			<div>
				<FilterCategory value={values.category} />
			</div>
		</details>

		<details open={isOpen.subcategory}>
			<summary><b>Thématique</b></summary>
			<div>
				<FilterSubcategory value={values.subcategory} />
			</div>
		</details>

		<details open={isOpen.country}>
			<summary><b>Pays</b></summary>
			<div>
				<FilterCountry bind:value={countryValue} />
			</div>
		</details>

		<details class:is-hidden={!showRegion} open={isOpen.region}>
			<summary><b>Région</b></summary>
			<div>
				<FilterRegion bind:value={regionValue} disabled={!showRegion} />
			</div>
		</details>

		<details class:is-hidden={!showDepartment} open={isOpen.department}>
			<summary><b>Département</b></summary>
			<div>
				<FilterDepartment disabled={!showDepartment} value={values.department} />
			</div>
		</details>

		<button class="button secondary" type="submit">Filtrer</button>
	</form>
</aside>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;

		input {
			margin-bottom: 1rem;
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
				margin-bottom: 1rem;
			}

			summary {
				cursor: pointer;
			}

			div {
				max-height: 160px;
				overflow: auto;
			}
		}
	}
</style>
