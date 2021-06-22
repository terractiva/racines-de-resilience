<script>
	import { filtersContext } from '$lib/contexts';
	import Categories from '$lib/data/categories';
	import { getContext } from 'svelte';
	import CheckboxGroup from './CheckboxGroup.svelte';

	let group = [];
	const { filterByCategory } = getContext(filtersContext);
</script>

<CheckboxGroup
	bind:group
	checkboxes={[
		{ label: 'Construire', value: Categories.Construct },
		{ label: 'Régénérer', value: Categories.Regenerate },
		{ label: `S'interposer`, value: Categories.Intervene }
	]}
	id="level"
	on:updated={() => filterByCategory(group)}
/>
