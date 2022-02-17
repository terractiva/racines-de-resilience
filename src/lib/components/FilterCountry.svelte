<script>
	import InputNames from '$lib/constants/input-names';
	import countries from '$lib/data/countries';
	import CheckboxGroup from './CheckboxGroup.svelte';

	export let value = [];

	const checkboxes = countries.map((country) => ({
		label: country.name,
		value: country.slug
	}));
</script>

<CheckboxGroup bind:group={value} {checkboxes} name={InputNames.country} />
