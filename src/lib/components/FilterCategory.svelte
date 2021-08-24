<script>
	import Categories from '$lib/data/categories';
	import { setFilterValue } from '$lib/utils/filters';
	import CheckboxGroup from './CheckboxGroup.svelte';

	export let value;
</script>

<CheckboxGroup
	bind:group={value}
	checkboxes={[
		{ label: 'Construire', value: Categories.Construct },
		{ label: 'Régénérer', value: Categories.Regenerate },
		{ label: `S'interposer`, value: Categories.Intervene }
	]}
	id="level"
	on:updated={() => setFilterValue('categorie', value)}
/>
