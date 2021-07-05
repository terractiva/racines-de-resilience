<script>
	import ErrorPage from '$lib/components/ErrorPage.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import { notFoundPage } from '$lib/constants/pages';
	import { layoutContext } from '$lib/contexts';
	import { getContext } from 'svelte';

	const { setCurrentPage } = getContext(layoutContext);

	setCurrentPage(notFoundPage);
</script>

<PageMeta page={notFoundPage} />

<ErrorPage status={404} />
