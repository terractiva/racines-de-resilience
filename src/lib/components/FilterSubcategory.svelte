<script>
	import { filtersContext } from '$lib/contexts';
	import subcategories from '$lib/data/subcategories';
	import { getContext } from 'svelte';
	import CheckboxGroup from './CheckboxGroup.svelte';

	let group = [];
	const { filterBySubcategory } = getContext(filtersContext);
	const checkboxes = Object.values(subcategories).map((subcategory) => ({
		label: subcategory.name,
		value: subcategory.name
	}));
</script>

<CheckboxGroup bind:group {checkboxes} id="level" on:updated={() => filterBySubcategory(group)} />
