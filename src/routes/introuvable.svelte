<script>
	import ErrorPage from '$lib/components/ErrorPage.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import { notFoundPage } from '$lib/constants/pages';
	import currentPage from '$lib/stores/currentPage';

	currentPage.set(notFoundPage);
</script>

<PageMeta page={notFoundPage} />

<ErrorPage status={404} />
