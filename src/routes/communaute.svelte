<script>
	import PageMeta from '$lib/components/PageMeta.svelte';
	import { communityPage } from '$lib/constants/pages';
	import { layoutContext } from '$lib/contexts';
	import { getContext } from 'svelte';

	const { setCurrentPage } = getContext(layoutContext);

	setCurrentPage(communityPage);
</script>

<PageMeta page={communityPage} />
