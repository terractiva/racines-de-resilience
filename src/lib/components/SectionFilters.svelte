<script>
	import { actionsPage, actionsTreePage } from '$lib/constants/pages';
	import { updateQueryWithFilterValue } from '$lib/utils/filters';
	import FilterCategory from './FilterCategory.svelte';
	import FilterLevel from './FilterLevel.svelte';
	import FilterSubcategory from './FilterSubcategory.svelte';
	import Section from './Section.svelte';

	let actionsQueryString = '';
	const actionsQuery = new URLSearchParams();

	function updateUrl(filterName, filterValue) {
		updateQueryWithFilterValue(actionsQuery, filterName, filterValue);

		actionsQueryString = actionsQuery.toString();
	}
</script>

<Section isCentered>
	<svelte:fragment slot="title">Trouver ma prochaine action</svelte:fragment>

	<svelte:fragment slot="content">
		<div class="dropdowns-container">
			<details class="dropdown">
				<summary class="button">Niveau</summary>

				<div class="card">
					<FilterLevel on:updated={(event) => updateUrl('niveau', event.detail)} />
				</div>
			</details>

			<details class="dropdown">
				<summary class="button">Catégorie</summary>

				<div class="card">
					<FilterCategory on:updated={(event) => updateUrl('categorie', event.detail)} />
				</div>
			</details>

			<details class="dropdown">
				<summary class="button">Thématique</summary>

				<div class="card">
					<FilterSubcategory on:updated={(event) => updateUrl('thematique', event.detail)} />
				</div>
			</details>

			<a
				class="button icon-only dark"
				href="{actionsPage.path}?{actionsQueryString}#{actionsPage.anchors.filters}">Chercher</a
			>
		</div>

		<p>ou</p>

		<a class="button primary" href={actionsTreePage.path}>Explorer l'arbre aux actions</a>
	</svelte:fragment>
</Section>

<style lang="scss">
	.dropdowns-container {
		@include utilities.responsive-grid(1fr, repeat(3, 1fr), repeat(4, max-content), 0.5);

		justify-content: center;

		details {
			summary {
				box-sizing: border-box;
				width: 100%;
			}

			.card {
				@include utilities.media-sm-md {
					box-sizing: border-box;
					text-align: left;
					white-space: initial;
					width: 100%;
				}
			}
		}

		a {
			@include utilities.media-md {
				grid-column: 1 / 4;
			}
		}
	}

	p {
		margin: 1.5rem 0;
	}
</style>
