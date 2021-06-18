<script>
	import ActionsTree from '$lib/components/Tree.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import { actionsTreePage } from '$lib/constants/pages';
	import { onMount } from 'svelte';

	let height;
	let width;

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

<ActionsTree {height} {width} />
