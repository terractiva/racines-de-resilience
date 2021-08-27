<script>
	import { actionsPage, actionsTreePage } from '$lib/constants/pages';
	import { updateQueryWithFilterValue } from '$lib/utils/filters';
	import FilterCategory from './FilterCategory.svelte';
	import FilterLevel from './FilterLevel.svelte';
	import FilterSubcategory from './FilterSubcategory.svelte';
	import Section from './Section.svelte';
	import SectionContentList from './SectionContentList.svelte';
	import SectionContentListItem from './SectionContentListItem.svelte';

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
						<details class="dropdown">
							<summary class="button">Niveau</summary>

							<div class="card right">
								<FilterLevel on:updated={(event) => updateUrl('niveau', event.detail)} />
							</div>
						</details>

						<details class="dropdown">
							<summary class="button">Catégorie</summary>

							<div class="card right">
								<FilterCategory on:updated={(event) => updateUrl('categorie', event.detail)} />
							</div>
						</details>

						<details class="dropdown">
							<summary class="button">Thématique</summary>

							<div class="card right">
								<FilterSubcategory on:updated={(event) => updateUrl('thematique', event.detail)} />
							</div>
						</details>
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

		@include utilities.media-sm {
			details {
				position: initial;

				.card {
					box-sizing: border-box;
					left: 50%;
					max-width: calc(100% - var(--grid-gutter));
					text-align: left;
					transform: translateX(-50%);
					white-space: initial;
					width: fit-content;
				}
			}
		}
	}
</style>
