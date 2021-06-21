<script>
	import PageMeta from '$lib/components/PageMeta.svelte';
	import { actionsPage } from '$lib/constants/pages';
	import { layoutContext } from '$lib/contexts';
	import { getContext } from 'svelte';

	const { setCurrentPage } = getContext(layoutContext);

	setCurrentPage(actionsPage);
</script>

<PageMeta page={actionsPage} />
