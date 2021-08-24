<script>
	import subcategories from '$lib/data/subcategories';
	import TreeSubcategory from './TreeSubcategory.svelte';

	export let backgroundHeight;
	export let isDragging;

	const subcategoriesArray = Object.values(subcategories);
</script>

{#each subcategoriesArray as subcategory}
	<TreeSubcategory {backgroundHeight} {subcategory} isDisabled={isDragging} />
{/each}
