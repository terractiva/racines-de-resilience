<script>
	import { actionsBySubcategory } from '$lib/data/actions';

	import TreeAction from './TreeAction.svelte';

	export let backgroundHeight;
	export let isDragging;
	export let showId;
</script>

{#each actionsBySubcategory as actions, subcategoryIndex}
	{#each actions as action, actionIndex}
		<TreeAction
			{action}
			{actionIndex}
			{backgroundHeight}
			{showId}
			{subcategoryIndex}
			isDisabled={isDragging}
		/>
	{/each}
{/each}
