<script>
	import PageMeta from '$lib/components/PageMeta.svelte';
	import { supportUsPage } from '$lib/constants/pages';
	import { layoutContext } from '$lib/contexts';
	import { getContext } from 'svelte';

	const { setCurrentPage } = getContext(layoutContext);

	setCurrentPage(supportUsPage);
</script>

<PageMeta page={supportUsPage} />
