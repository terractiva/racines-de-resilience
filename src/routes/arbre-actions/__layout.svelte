<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		return handleLoadQuery(
			browser && page.query,
			{
				showActionId: false
			},
			(query) => ({
				showActionId: query.get('id') != null
			})
		);
	}
</script>

<script>
	import { browser } from '$app/env';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import Tree from '$lib/components/Tree.svelte';
	import { actionsTreePage } from '$lib/constants/pages';
	import currentPage from '$lib/stores/currentPage';
	import handleLoadQuery from '$lib/utils/handleLoadQuery';
	import { onMount } from 'svelte';

	export let showActionId;

	let height;
	let width;

	currentPage.set(actionsTreePage);

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

<Tree {height} {showActionId} {width} />

<slot />
