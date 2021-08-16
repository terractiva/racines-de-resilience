<script>
	import subcategories from '$lib/data/subcategories';
	import TreeSubcategory from './TreeSubcategory.svelte';

	export let backgroundHeight;

	const subcategoriesArray = Object.values(subcategories);
</script>

{#each subcategoriesArray as subcategory}
	<TreeSubcategory {backgroundHeight} {subcategory} />
{/each}
