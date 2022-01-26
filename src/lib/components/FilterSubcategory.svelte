<script>
	import InputNames from '$lib/constants/input-names';
	import subcategories from '$lib/data/subcategories';
	import CheckboxGroup from './CheckboxGroup.svelte';

	export let value = [];

	const checkboxes = Object.values(subcategories)
		.map((subcategory) => ({
			label: subcategory.name,
			value: subcategory.slug
		}))
		.sort((a, b) => a.label.localeCompare(b.label));
</script>

<CheckboxGroup bind:group={value} {checkboxes} name={InputNames.subcategory} />
