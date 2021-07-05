<script>
	import { filtersContext } from '$lib/contexts';
	import { getContext } from 'svelte';
	import CheckboxGroup from './CheckboxGroup.svelte';

	let group = [];
	const { filterByLevel } = getContext(filtersContext);
</script>

<CheckboxGroup
	bind:group
	checkboxes={[
		{ label: 'Petit', value: 1 },
		{ label: 'Moyen', value: 2 },
		{ label: 'Grand', value: 3 }
	]}
	id="level"
	on:updated={() => filterByLevel(group)}
/>
