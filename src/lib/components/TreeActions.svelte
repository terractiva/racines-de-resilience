<script>
	import actions from '$lib/data/actions';
	import TreeAction from './TreeAction.svelte';

	export let backgroundHeight;
	export let isDragging;
</script>

{#each actions as action}
	<TreeAction {action} {backgroundHeight} isDisabled={isDragging} />
{/each}
