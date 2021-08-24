<script>
	import { setFilterValue } from '$lib/utils/filters';
	import CheckboxGroup from './CheckboxGroup.svelte';

	export let value;
</script>

<CheckboxGroup
	bind:group={value}
	checkboxes={[
		{ label: 'Petit', value: 1 },
		{ label: 'Moyen', value: 2 },
		{ label: 'Grand', value: 3 }
	]}
	id="level"
	on:updated={() => setFilterValue('niveau', value)}
/>
