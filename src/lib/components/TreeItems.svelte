<script>
	import { zoomMax } from '$lib/constants/settings';
	import TreeActions from './TreeActions.svelte';
	import TreeBibliography from './TreeBibliography.svelte';
	import TreeSubcategories from './TreeSubcategories.svelte';

	export let backgroundPadding;
	export let height;
	export let isDragging;
	export let showItemsId;

	$: backgroundHeight = zoomMax * (height - 2 * backgroundPadding[1]);
</script>

<ul>
	<TreeSubcategories {backgroundHeight} {isDragging} />
	<TreeBibliography {backgroundHeight} showId={showItemsId} />
	<TreeActions {backgroundHeight} {isDragging} showId={showItemsId} />
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
