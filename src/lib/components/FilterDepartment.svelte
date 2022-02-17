<script>
	import InputNames from '$lib/constants/input-names';
	import departments from '$lib/data/departments';
	import CheckboxGroup from './CheckboxGroup.svelte';

	export let disabled = false;
	export let value = [];

	const checkboxes = departments.map((department) => ({
		label: `${department.number} - ${department.name}`,
		value: department.number
	}));
</script>

<CheckboxGroup bind:group={value} {checkboxes} {disabled} name={InputNames.department} />
