<script>
	import { actionsBySubcategory } from '$lib/data/actions';

	import TreeAction from './TreeAction.svelte';

	export let backgroundHeight;
	export let isDragging;
	export let showActionId;
</script>

{#each actionsBySubcategory as actions, subcategoryIndex}
	{#each actions as action, actionIndex}
		<TreeAction
			{action}
			{actionIndex}
			{backgroundHeight}
			{showActionId}
			{subcategoryIndex}
			isDisabled={isDragging}
		/>
	{/each}
{/each}
