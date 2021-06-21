<script>
	import { actionFontSize } from '$lib/constants/settings';
	import actions from '$lib/data/actions';
	import TreeAction from './TreeAction.svelte';

	export let backgroundHeight;
	export let isDragging;
</script>

<ul style="font-size: {actionFontSize * backgroundHeight}px;">
	{#each actions as action}
		<TreeAction {action} isDisabled={isDragging} />
	{/each}
</ul>

<style lang="scss">
	ul {
		height: 100%;
		list-style: none;
		margin: 0;
		padding: 0;
		position: relative;
		width: 100%;
	}
</style>
