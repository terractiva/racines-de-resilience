<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		return {
			props: {
				filterValues: {
					category: getFilterValueFromUrl(page.query, 'categorie'),
					level: getFilterValueFromUrl(page.query, 'niveau').map((level) => parseInt(level)),
					subcategory: getFilterValueFromUrl(page.query, 'thematique')
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
	import { actionsPage, actionsTreePage, communityPage } from '$lib/constants/pages';
	import { layoutContext } from '$lib/contexts';
	import { getContext } from 'svelte';
	import Section from '$lib/components/Section.svelte';
	import SectionContentList from '$lib/components/SectionContentList.svelte';
	import SectionContentListItem from '$lib/components/SectionContentListItem.svelte';
	import SectionContentTwoThirds from '$lib/components/SectionContentTwoThirds.svelte';
	import { getFilterValueFromUrl, getResults } from '$lib/utils/filters';

	export let filterValues;

	const { setCurrentPage } = getContext(layoutContext);

	$: results = getResults(filterValues);

	setCurrentPage(actionsPage);
</script>

<PageMeta page={actionsPage} />

<SectionBackground background={Backgrounds.Lines}>
	<SectionIntroduction>
		Passer à l'action ensemble,<br /> s'inspirer les un·e·s des autres
	</SectionIntroduction>
</SectionBackground>

<Section>
	<svelte:fragment slot="content">
		<SectionContentList>
			<li>
				<img alt="" class="floating-image" src="/illustrations/arbre.png" />
			</li>

			<SectionContentListItem link={actionsTreePage.path} linkStyle="primary">
				<svelte:fragment slot="title">L'illustration numérique</svelte:fragment>
				<svelte:fragment slot="content">
					Retrouve ou découvre la <strong>version interactive</strong> de l'affiche du grand arbre
					aux actions. Plus de <strong>150 actions concrètes</strong> sur les thèmes de l'énergie,
					du climat, de l'effondrement et de la résilience, organisées par thématique, comme les
					racines d'un arbre des possibles.<br /> Chaque action est associée à au moins une
					structure de référence (organisation, asso, collectif...) pour
					<strong>nous aider à nous mettre en mouvement</strong>, collectivement.
				</svelte:fragment>
				<svelte:fragment slot="link">L'arbre aux actions</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem isExternalLink link="TODO:" linkStyle="primary">
				<svelte:fragment slot="title">Collaborons !</svelte:fragment>
				<svelte:fragment slot="content">
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
		<FiltersResults {results} />
	</div>
</section>

<SectionBackground background={Backgrounds.Marks}>
	<Section>
		<svelte:fragment slot="title">Soutenons-nous !</svelte:fragment>
		<svelte:fragment slot="content">
			<SectionContentTwoThirds>
				<p class="text-justify w-100 mb-0">
					Ce n'est pas parce que l'on sait ce qu'on voudrait faire qu'il est facile de le mettre en
					oeuvre.<br /> La communauté de Racines de Résilience est aussi là pour ça !
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
	}
</style>
