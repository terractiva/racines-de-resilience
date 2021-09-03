<script>
	import bibliography from '$lib/data/bibliography';
	import TreeBibliographyItem from './TreeBibliographyItem.svelte';

	export let backgroundHeight;
</script>

{#each bibliography as bibliographyItem}
	<TreeBibliographyItem {backgroundHeight} {bibliographyItem} />
{/each}
