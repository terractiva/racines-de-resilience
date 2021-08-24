<script>
	import subcategories from '$lib/data/subcategories';
	import { setFilterValue } from '$lib/utils/filters';
	import CheckboxGroup from './CheckboxGroup.svelte';

	export let value;
	const checkboxes = Object.values(subcategories).map((subcategory) => ({
		label: subcategory.name,
		value: subcategory.slug
	}));
</script>

<CheckboxGroup
	bind:group={value}
	{checkboxes}
	id="level"
	on:updated={() => setFilterValue('thematique', value)}
/>
