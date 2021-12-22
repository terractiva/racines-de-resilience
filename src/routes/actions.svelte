<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		/**
		 * Permet :
		 * 	- lors du pré-rendu : d'afficher des résultats (qui ne vont pas être en raccord avec les filtres)
		 * 	- lors de l'affichage sur le client : de recharger les résultats (pour être raccord avec les filtres)
		 * Avec du pré-rendu statique on ne peut pas faire autrement.
		 */
		if (browser) {
			return {
				props: {
					filterValues: {
						category: getFilterValueFromQuery(page.query, 'categorie'),
						level: getFilterValueFromQuery(page.query, 'niveau').map((level) => parseInt(level)),
						subcategory: getFilterValueFromQuery(page.query, 'thematique')
					}
				}
			};
		}

		return {
			props: {
				filterValues: {
					category: [],
					level: [],
					subcategory: []
				}
			}
		};
	}
</script>

<script>
	import Filters from '$lib/components/Filters.svelte';
	import FiltersResults from '$lib/components/FiltersResults.svelte';
	import SectionIntroduction from '$lib/components/SectionIntroduction.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import SectionBackground from '$lib/components/SectionBackground.svelte';
	import Backgrounds from '$lib/constants/backgrounds';
	import { aboutPage, actionsPage, actionsTreePage, communityPage } from '$lib/constants/pages';
	import Section from '$lib/components/Section.svelte';
	import SectionContentList from '$lib/components/SectionContentList.svelte';
	import SectionContentListItem from '$lib/components/SectionContentListItem.svelte';
	import SectionContentTwoThirds from '$lib/components/SectionContentTwoThirds.svelte';
	import { getFilterValueFromQuery, getResults } from '$lib/utils/filters';
	import currentPage from '$lib/stores/currentPage';
	import FiltersDatabaseResults from '$lib/components/FiltersDatabaseResults.svelte';
	import { browser } from '$app/env';

	export let filterValues;

	$: treeResults = getResults(filterValues);

	currentPage.set(actionsPage);
</script>

<PageMeta page={actionsPage} />

<SectionBackground background={Backgrounds.Lines}>
	<SectionIntroduction>
		S'inspirer de l'écosystème des possibles<br /> pour passer à l'action, ensemble
	</SectionIntroduction>
</SectionBackground>

<Section>
	<svelte:fragment slot="content">
		<SectionContentList>
			<li>
				<img alt="" class="floating-image" src="/illustrations/arbre.png" />
			</li>

			<SectionContentListItem link={actionsTreePage.path} linkStyle="primary">
				<svelte:fragment slot="title">L'arbre interactif</svelte:fragment>
				<svelte:fragment slot="text">
					Retrouve ou découvre la <strong>version interactive</strong> de l'affiche du
					<a href="{aboutPage.path}#{aboutPage.anchors.explanation}">guide papier</a>. Plus de
					<strong>150 actions concrètes</strong>
					sur les thèmes de l'énergie, du climat, de l'effondrement et de la résilience, organisées par
					thématique, comme les racines d'un arbre des possibles.<br /> Chaque action est associée à
					au moins une structure de référence (organisation, asso, collectif...) pour
					<strong>nous aider à nous mettre en mouvement</strong>, collectivement.
				</svelte:fragment>
				<svelte:fragment slot="link">Explorer l'arbre</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem
				isExternalLink
				link="https://airtable.com/shrlqNJvuiem0iFkA"
				linkStyle="primary"
			>
				<svelte:fragment slot="title">Un site collaboratif</svelte:fragment>
				<svelte:fragment slot="text">
					La sélection des actions de l'arbre n'est <strong>pas exhaustive</strong> ! C'est une
					porte d'entrée à explorer ensemble.<br /> Ce site est collaboratif, bienvenue à vos idées
					pour <strong>compléter cette liste</strong> avec des actions et structures.<br /> C'est
					important de rendre visible le magnifique
					<strong>écosystème déjà bien vivant, évolutif</strong> au gré de nos élans d'actions.
				</svelte:fragment>
				<svelte:fragment slot="link">Faire grandir l'arbre</svelte:fragment>
			</SectionContentListItem>
		</SectionContentList>
	</svelte:fragment>
</Section>

<section class="container" id={actionsPage.anchors.filters}>
	<aside>
		<Filters values={filterValues} />
	</aside>

	<div>
		<FiltersResults results={treeResults} titleSuffix="dans l'arbre" />

		{#if browser}
			<hr />
			<FiltersDatabaseResults />
		{/if}
	</div>
</section>

<SectionBackground background={Backgrounds.Marks}>
	<Section>
		<svelte:fragment slot="title">Soutenons-nous !</svelte:fragment>
		<svelte:fragment slot="content">
			<SectionContentTwoThirds>
				<p class="text-justify w-100 mb-0">
					Ce n'est pas parce que l'on sait ce qu'on voudrait faire qu'il est facile de le mettre en
					oeuvre.<br /> La communauté de <i>Racines de Résilience</i> est aussi là pour ça !
				</p>
				<a class="button primary" href={communityPage.path}>La communauté</a>
			</SectionContentTwoThirds>
		</svelte:fragment>
	</Section>
</SectionBackground>

<style lang="scss">
	li {
		@include utilities.media-sm-md {
			text-align: center;
		}
		@include utilities.media-md {
			grid-column: 1 / 3;
		}
		img {
			height: 100%;
			object-fit: cover;

			@include utilities.media-sm {
				width: 50%;
			}
			@include utilities.media-md {
				width: 40%;
			}
			@include utilities.media-lg {
				bottom: -8%;
				left: -8%;
				position: relative;
				width: 100%;
			}
		}
	}
	section {
		@include utilities.responsive-grid(1fr, 1fr, 1fr 2fr);

		align-items: start;
		padding-bottom: 8rem;
		padding-top: utilities.$header-height;

		@include utilities.media-sm {
			padding-top: utilities.$header-height-sm;
		}

		aside {
			background: var(--bg-secondary-color);
			padding: 1rem 2rem;
		}

		div hr {
			margin: 2rem 0;
		}
	}
</style>
