<script>
	import InputNames from '$lib/constants/input-names';
	import countries from '$lib/data/countries';
	import getFlagEmoji from '$lib/utils/getFlagEmoji';
	import CheckboxGroup from './CheckboxGroup.svelte';

	export let value = [];

	const checkboxes = countries.map((country) => ({
		label: `${getFlagEmoji(country.slug)} ${country.name}`,
		value: country.slug
	}));
</script>

<CheckboxGroup bind:group={value} {checkboxes} name={InputNames.country} />
