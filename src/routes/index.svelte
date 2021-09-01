<script>
	import SectionIntroduction from '$lib/components/SectionIntroduction.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import SectionBackground from '$lib/components/SectionBackground.svelte';
	import SectionLowTech from '$lib/components/SectionLowTech.svelte';
	import SectionSupporters from '$lib/components/SectionSupporters.svelte';
	import Backgrounds from '$lib/constants/backgrounds';
	import { communityPage, homePage, supportUsPage } from '$lib/constants/pages';
	import { layoutContext } from '$lib/contexts';
	import { getContext } from 'svelte';
	import Section from '$lib/components/Section.svelte';
	import SectionContentList from '$lib/components/SectionContentList.svelte';
	import SectionContentListItem from '$lib/components/SectionContentListItem.svelte';
	import SectionFilters from '$lib/components/SectionFilters.svelte';

	const { setCurrentPage } = getContext(layoutContext);

	setCurrentPage(homePage);
</script>

<PageMeta page={homePage} />

<SectionIntroduction>
	Energie, climat, effondrement, résilience...<br /> On fait quoi maintenant ?
</SectionIntroduction>

<SectionBackground background={Backgrounds.Lines}>
	<SectionFilters />
</SectionBackground>

<Section>
	<svelte:fragment slot="title">Actualités</svelte:fragment>

	<svelte:fragment slot="content">
		<SectionContentList>
			<SectionContentListItem
				isExternalLink
				link="https://www.onepercentfortheplanet.fr/les-projets-2021/"
			>
				<svelte:fragment slot="title"><i>1% Pour la Planète</i></svelte:fragment>
				<svelte:fragment slot="text">
					<strong>Notre partenaire</strong> <i>1% Pour la Planète</i> a sélectionné 40 associations
					environnementales qui appellent le grand public à un soutien financier et pour lesquelles
					<strong>il doublera le montant des dons reçus</strong> (jusqu'à 2500€). Découvrez ces initiatives
					dont plusieurs sont déjà dans notre guide d'actions !
				</svelte:fragment>
				<svelte:fragment slot="link">En savoir plus</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem link={supportUsPage.path}>
				<svelte:fragment slot="title">Se soutenir</svelte:fragment>
				<svelte:fragment slot="text">
					Ce projet est majoritairement bénévole.<br /> Si vous souhaitez
					<strong>nous aider</strong>
					dans cette démarche de convergence, pour que
					<strong>tout le monde puisse passer à l'action</strong> vers une société qui se régénère, vous
					pouvez nous soutenir, notamment avec l'achat d'oeuvres auditives et visuelles !
				</svelte:fragment>
				<svelte:fragment slot="link">Découvrir comment</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem link="{communityPage.path}#{communityPage.anchors.assistFilm}">
				<svelte:fragment slot="title">Des séances-évenements</svelte:fragment>
				<svelte:fragment slot="text">
					Vous souhaitez <strong>organiser</strong> des séances-évenements près de chez vous,
					<strong>faire connaitre les enjeux climatiques</strong>
					et d'effondrements au plus grand nombre, être accompagné·e·s ou
					<strong>accompagner</strong> vous-mêmes le film ?
				</svelte:fragment>
				<svelte:fragment slot="link">En savoir plus</svelte:fragment>
			</SectionContentListItem>
		</SectionContentList>
	</svelte:fragment>
</Section>

<SectionBackground background={Backgrounds.Marks}>
	<SectionLowTech>
		<svelte:fragment slot="title">Vous êtes sur un site low-tech !</svelte:fragment>
		<svelte:fragment slot="right-content">
			<div class="image-wrapper">
				<img alt="" class="floating-image" src="/illustrations/oiseaux-1.png" />
			</div>
		</svelte:fragment>
	</SectionLowTech>
</SectionBackground>

<SectionSupporters />

<style lang="scss">
	.image-wrapper {
		@include utilities.media-sm {
			display: none;
		}

		img {
			@include utilities.media-md-lg {
				bottom: 50%;
				right: 0;
				max-width: initial;
				object-fit: contain;
				position: absolute;
				transform: translateY(50%);
				width: auto;
			}
			@include utilities.media-md {
				height: 60%;
			}
			@include utilities.media-lg {
				height: 75%;
			}
		}
	}
</style>
