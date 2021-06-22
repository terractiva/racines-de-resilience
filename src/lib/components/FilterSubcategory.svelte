<script>
	import { filtersContext } from '$lib/contexts';
	import Subcategories from '$lib/data/subcategories';
	import { getContext } from 'svelte';
	import CheckboxGroup from './CheckboxGroup.svelte';

	let group = [];
	const { filterBySubcategory } = getContext(filtersContext);
	const checkboxes = Object.values(Subcategories).map((subcategory) => ({
		label: subcategory,
		value: subcategory
	}));
</script>

<CheckboxGroup bind:group {checkboxes} id="level" on:updated={() => filterBySubcategory(group)} />
