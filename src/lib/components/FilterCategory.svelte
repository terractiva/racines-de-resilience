<script>
	import InputNames from '$lib/constants/input-names';
	import Categories from '$lib/data/categories';
	import CheckboxGroup from './CheckboxGroup.svelte';

	export let value = [];
</script>

<CheckboxGroup
	bind:group={value}
	checkboxes={[
		{ label: 'Construire', value: Categories.Construct },
		{ label: 'Régénérer', value: Categories.Regenerate },
		{ label: `S'interposer`, value: Categories.Intervene }
	]}
	id="category"
	name={InputNames.category}
	on:updated
/>
