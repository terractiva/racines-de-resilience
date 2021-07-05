<script>
	import Filters from '$lib/components/Filters.svelte';
	import FiltersContext from '$lib/components/FiltersContext.svelte';
	import FiltersResults from '$lib/components/FiltersResults.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import { actionsPage } from '$lib/constants/pages';
	import { layoutContext } from '$lib/contexts';
	import { getContext } from 'svelte';

	const { setCurrentPage } = getContext(layoutContext);

	setCurrentPage(actionsPage);
</script>

<PageMeta page={actionsPage} />

<section class="container">
	<FiltersContext let:results>
		<aside>
			<Filters />
		</aside>

		<div>
			<FiltersResults {results} />
		</div>
	</FiltersContext>
</section>

<style lang="scss">
	section {
		@include utilities.responsive-grid(1fr, 1fr, 1fr 2fr);

		align-items: start;

		aside {
			background: var(--bg-secondary-color);
			padding: 1rem 2rem;
		}
	}
</style>
