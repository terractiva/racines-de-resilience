<script>
	import InputNames from '$lib/constants/input-names';
	import subcategories from '$lib/data/subcategories';
	import CheckboxGroup from './CheckboxGroup.svelte';

	export let value = [];

	const checkboxes = Object.values(subcategories).map((subcategory) => ({
		label: subcategory.name,
		value: subcategory.slug
	}));
</script>

<CheckboxGroup
	bind:group={value}
	{checkboxes}
	id="level"
	name={InputNames.subcategory}
	on:updated
/>
