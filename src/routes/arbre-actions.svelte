<script>
	import Tree from '$lib/components/Tree.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import { actionsTreePage } from '$lib/constants/pages';
	import { getContext, onMount } from 'svelte';
	import { layoutContext } from '$lib/contexts';

	let height;
	let width;
	const { setCurrentPage } = getContext(layoutContext);

	setCurrentPage(actionsTreePage);

	onMount(() => {
		setSize();
	});

	function setSize() {
		const main = document.getElementsByTagName('main')[0];

		height = main.clientHeight;
		width = main.clientWidth;
	}
</script>

<PageMeta page={actionsTreePage} />

<svelte:window on:resize={setSize} />

<Tree {height} {width} />
