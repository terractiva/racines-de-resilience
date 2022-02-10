<script>
	import formGoto from '$lib/actions/formGoTo';
	import { actionsPage, actionsTreePage } from '$lib/constants/pages';
	import FilterCategory from './FilterCategory.svelte';
	import FilterLevel from './FilterLevel.svelte';
	import FilterSubcategory from './FilterSubcategory.svelte';
	import Section from './Section.svelte';
	import SectionContentList from './SectionContentList.svelte';
	import SectionContentListItem from './SectionContentListItem.svelte';
	import SectionFiltersDropdown from './SectionFiltersDropdown.svelte';
</script>

<Section isCentered>
	<svelte:fragment slot="title">Deux façons de trouver nos prochaines actions</svelte:fragment>
	<svelte:fragment slot="content">
		<SectionContentList nbItemsByLine={2}>
			<SectionContentListItem link={actionsTreePage.path} linkStyle="primary">
				<svelte:fragment slot="title">Découvrir l'arbre interactif</svelte:fragment>
				<svelte:fragment slot="link">Explorer l'arbre aux actions</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem>
				<svelte:fragment slot="title">Rechercher selon mes critères</svelte:fragment>
				<svelte:fragment slot="content">
					<form use:formGoto action="{actionsPage.path}#{actionsPage.anchors.filters}" method="GET">
						<div>
							<SectionFiltersDropdown>
								<svelte:fragment slot="summary">Niveau</svelte:fragment>
								<svelte:fragment slot="card">
									<FilterLevel />
								</svelte:fragment>
							</SectionFiltersDropdown>

							<SectionFiltersDropdown>
								<svelte:fragment slot="summary">Catégorie</svelte:fragment>
								<svelte:fragment slot="card">
									<FilterCategory />
								</svelte:fragment>
							</SectionFiltersDropdown>

							<SectionFiltersDropdown>
								<svelte:fragment slot="summary">Thématique</svelte:fragment>
								<svelte:fragment slot="card">
									<FilterSubcategory />
								</svelte:fragment>
							</SectionFiltersDropdown>
						</div>

						<button class="button primary" type="submit">Go !</button>
					</form>
				</svelte:fragment>
			</SectionContentListItem>
		</SectionContentList>
	</svelte:fragment>
</Section>

<style lang="scss">
	form {
		text-align: center;

		div {
			@include utilities.responsive-grid(1fr, auto, repeat(3, max-content), 0.5);

			justify-content: center;
			margin-bottom: 3rem;
		}
	}
</style>
