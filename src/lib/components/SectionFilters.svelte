<script>
	import { actionsPage, actionsTreePage } from '$lib/constants/pages';
	import { updateQueryWithFilterValue } from '$lib/utils/filters';
	import FilterCategory from './FilterCategory.svelte';
	import FilterLevel from './FilterLevel.svelte';
	import FilterSubcategory from './FilterSubcategory.svelte';
	import Section from './Section.svelte';
	import SectionContentList from './SectionContentList.svelte';
	import SectionContentListItem from './SectionContentListItem.svelte';
	import SectionFiltersDropdown from './SectionFiltersDropdown.svelte';

	let actionsQueryString = '';
	const actionsQuery = new URLSearchParams();

	function updateUrl(filterName, filterValue) {
		updateQueryWithFilterValue(actionsQuery, filterName, filterValue);

		actionsQueryString = actionsQuery.toString();
	}
</script>

<Section isCentered>
	<svelte:fragment slot="title">Deux façons de trouver nos prochaines actions</svelte:fragment>
	<svelte:fragment slot="content">
		<SectionContentList nbItemsByLine={2}>
			<SectionContentListItem link={actionsTreePage.path} linkStyle="primary">
				<svelte:fragment slot="title">Découvrir l'arbre interactif</svelte:fragment>
				<svelte:fragment slot="link">Explorer l'arbre aux actions</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem
				link="{actionsPage.path}?{actionsQueryString}#{actionsPage.anchors.filters}"
				linkStyle="primary"
			>
				<svelte:fragment slot="title">Rechercher selon mes critères</svelte:fragment>
				<svelte:fragment slot="content">
					<div class="dropdowns-wrapper">
						<SectionFiltersDropdown>
							<svelte:fragment slot="summary">Niveau</svelte:fragment>
							<svelte:fragment slot="card">
								<FilterLevel on:updated={(event) => updateUrl('niveau', event.detail)} />
							</svelte:fragment>
						</SectionFiltersDropdown>

						<SectionFiltersDropdown>
							<svelte:fragment slot="summary">Catégorie</svelte:fragment>
							<svelte:fragment slot="card">
								<FilterCategory on:updated={(event) => updateUrl('categorie', event.detail)} />
							</svelte:fragment>
						</SectionFiltersDropdown>

						<SectionFiltersDropdown>
							<svelte:fragment slot="summary">Thématique</svelte:fragment>
							<svelte:fragment slot="card">
								<FilterSubcategory on:updated={(event) => updateUrl('thematique', event.detail)} />
							</svelte:fragment>
						</SectionFiltersDropdown>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="link">Go !</svelte:fragment>
			</SectionContentListItem>
		</SectionContentList>
	</svelte:fragment>
</Section>

<style lang="scss">
	.dropdowns-wrapper {
		@include utilities.responsive-grid(1fr, auto, repeat(3, max-content), 0.5);

		justify-content: center;
	}
</style>
