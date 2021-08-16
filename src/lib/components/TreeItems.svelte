<script>
	import TreeActions from './TreeActions.svelte';

	import TreeSubcategories from './TreeSubcategories.svelte';

	export let backgroundPadding;
	export let height;
	export let isDragging;

	$: backgroundHeight = height - 2 * backgroundPadding[1];
</script>

<ul>
	<TreeSubcategories {backgroundHeight} />
	<TreeActions {backgroundHeight} {isDragging} />
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
