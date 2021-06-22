<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		return {
			props: {
				slug: page.params.slug
			}
		};
	}
</script>

<script>
	import PageMeta from '$lib/components/PageMeta.svelte';
	import Tree from '$lib/components/Tree.svelte';
	import { actionsTreePage } from '$lib/constants/pages';
	import { layoutContext } from '$lib/contexts';
	import { getContext, onMount } from 'svelte';

	export let slug;

	let height;
	let width;
	const { setCurrentPage } = getContext(layoutContext);

	$: openActionModal(slug);

	setCurrentPage(actionsTreePage);

	onMount(() => {
		setSize();
	});

	function openActionModal(slug) {
		if (slug) {
			alert(`TODO: ouvrir modal ${slug}`);
		}
	}

	function setSize() {
		const main = document.getElementsByTagName('main')[0];

		height = main.clientHeight;
		width = main.clientWidth;
	}
</script>

<PageMeta page={actionsTreePage} />

<svelte:window on:resize={setSize} />

<Tree {height} {width} />
