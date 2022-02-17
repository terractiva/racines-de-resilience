<script>
	import InputNames from '$lib/constants/input-names';
	import regions from '$lib/data/regions';
	import CheckboxGroup from './CheckboxGroup.svelte';

	export let disabled = false;
	export let value = [];

	const checkboxes = regions.map((region) => ({
		label: region.name,
		value: region.slug
	}));
</script>

<CheckboxGroup bind:group={value} {checkboxes} {disabled} name={InputNames.region} />
