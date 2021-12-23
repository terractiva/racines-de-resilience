<script>
	import SectionIntroduction from '$lib/components/SectionIntroduction.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import SectionBackground from '$lib/components/SectionBackground.svelte';
	import SectionLowTech from '$lib/components/SectionLowTech.svelte';
	import SectionSupporters from '$lib/components/SectionSupporters.svelte';
	import Backgrounds from '$lib/constants/backgrounds';
	import { homePage } from '$lib/constants/pages';
	import Section from '$lib/components/Section.svelte';
	import SectionContentList from '$lib/components/SectionContentList.svelte';
	import SectionContentListItem from '$lib/components/SectionContentListItem.svelte';
	import SectionFilters from '$lib/components/SectionFilters.svelte';
	import currentPage from '$lib/stores/currentPage';

	currentPage.set(homePage);
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

			<SectionContentListItem
				isExternalLink
				link="https://www.google.com/maps/d/viewer?mid=1zvkq6whArE18g8hDYtY9WRNqVJAarAi9&hl=fr&usp=sharing"
			>
				<svelte:fragment slot="title">Où voir <i>Une fois que tu sais</i> ?</svelte:fragment>
				<svelte:fragment slot="text">
					Les <strong>séances-évenements</strong> avant et après la
					<strong>sortie le 22 septembre</strong>
					au cinéma du film <i>Une fois que tu sais</i> peuvent permettre aux enjeux climatiques de
					passer sur le devant de la scène ! Voici une <strong>carte pour découvrir</strong> les séances
					près de chez vous.
				</svelte:fragment>
				<svelte:fragment slot="link">Trouver une séance</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem isExternalLink link="https://mapetiteplanete.org/">
				<svelte:fragment slot="title">Des défis avec <i>Ma Petite Planète</i></svelte:fragment>
				<svelte:fragment slot="text">
					En organisant des compétitions déjantées de défis écolos, <i>Ma Petite Planète</i> aide
					petits et grands à participer à la <strong>protection de l’environnement</strong>. A jouer
					entre amis, en famille, entre collègues...
					<strong>top départ le 27 septembre prochain</strong> !
				</svelte:fragment>
				<svelte:fragment slot="link">Je veux participer</svelte:fragment>
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
				height: 40%;
			}
			@include utilities.media-lg {
				height: 70%;
			}
		}
	}
</style>
