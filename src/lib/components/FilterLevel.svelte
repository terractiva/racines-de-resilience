<script>
	import InputNames from '$lib/constants/input-names';
	import CheckboxGroup from './CheckboxGroup.svelte';

	export let value = [];
</script>

<CheckboxGroup
	bind:group={value}
	checkboxes={[
		{ label: 'Premier pas', value: 1 },
		{ label: 'Bon intermédiaire', value: 2 },
		{ label: 'Grand saut', value: 3 }
	]}
	id="level"
	name={InputNames.level}
	on:updated
/>
