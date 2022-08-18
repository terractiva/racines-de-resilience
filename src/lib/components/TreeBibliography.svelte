<script>
	import bibliography from '$lib/data/bibliography';
	import TreeBibliographyItem from './TreeBibliographyItem.svelte';

	export let backgroundHeight;
	export let showId;
</script>

{#each bibliography as bibliographyItem, index}
	<TreeBibliographyItem {backgroundHeight} {bibliographyItem} {index} {showId} />
{/each}
