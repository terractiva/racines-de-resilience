<script>
	import PageMeta from '$lib/components/PageMeta.svelte';
	import { aboutPage } from '$lib/constants/pages';
	import { layoutContext } from '$lib/contexts';
	import { getContext } from 'svelte';

	const { setCurrentPage } = getContext(layoutContext);

	setCurrentPage(aboutPage);
</script>

<PageMeta page={aboutPage} />
