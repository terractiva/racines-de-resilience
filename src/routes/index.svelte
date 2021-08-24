<script>
	import SectionIntroduction from '$lib/components/SectionIntroduction.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import SectionBackground from '$lib/components/SectionBackground.svelte';
	import SectionLowTech from '$lib/components/SectionLowTech.svelte';
	import SectionSupporters from '$lib/components/SectionSupporters.svelte';
	import Backgrounds from '$lib/constants/backgrounds';
	import { actionsTreePage, communityPage, homePage, supportUsPage } from '$lib/constants/pages';
	import { layoutContext } from '$lib/contexts';
	import { getContext } from 'svelte';
	import Section from '$lib/components/Section.svelte';
	import SectionContentList from '$lib/components/SectionContentList.svelte';
	import SectionContentListItem from '$lib/components/SectionContentListItem.svelte';

	const { setCurrentPage } = getContext(layoutContext);

	setCurrentPage(homePage);
</script>

<PageMeta page={homePage} />

<SectionIntroduction>
	Energie, Climat, Effondrement, Résilience...<br /> On fait quoi maintenant ?
</SectionIntroduction>

<SectionBackground background={Backgrounds.Lines}>
	<Section isCentered>
		<svelte:fragment slot="title">Trouver ma prochaine action</svelte:fragment>

		<svelte:fragment slot="content">
			<div>
				<details class="dropdown">
					<summary class="button">Niveau</summary>

					<div class="card">
						<p>TODO:</p>
					</div>
				</details>

				<details class="dropdown">
					<summary class="button">Catégorie</summary>

					<div class="card">
						<p>TODO:</p>
					</div>
				</details>

				<details class="dropdown">
					<summary class="button">Thématique</summary>

					<div class="card">
						<p>TODO:</p>
					</div>
				</details>

				<button disabled class="button icon-only dark">Chercher (bientôt disponible)</button>
			</div>

			<p class="filter-separator">ou</p>

			<a class="button primary" href={actionsTreePage.path}>Explorer l'arbre aux actions</a>
		</svelte:fragment>
	</Section>
</SectionBackground>

<Section>
	<svelte:fragment slot="title">Actualités</svelte:fragment>

	<svelte:fragment slot="content">
		<SectionContentList>
			<SectionContentListItem
				isExternalLink
				link="https://www.onepercentfortheplanet.fr/les-projets-2021/"
			>
				<svelte:fragment slot="title"><i>1% pour la planète</i></svelte:fragment>
				<svelte:fragment slot="content">
					<i>1% pour la planète</i> est partenaire de notre projet. Le mouvement a sélectionné 40
					associations environnementales qui appellent le grand public à un soutien financier et
					pour lesquelles il <strong>doublera le montant des dons reçus</strong> (jusqu'à 2500€). Découvrez
					ces initiatives dont plusieurs sont déjà dans notre guide d'actions !
				</svelte:fragment>
				<svelte:fragment slot="link">En savoir plus</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem link={supportUsPage.path}>
				<svelte:fragment slot="title">Se soutenir</svelte:fragment>
				<svelte:fragment slot="content">
					Ce projet est majoritairement bénévole.<br /> Si vous souhaitez
					<strong>nous aider</strong>
					dans cette démarche de convergence, pour que
					<strong>tout le monde puisse passer à l'action</strong> vers une société qui se régénère, vous
					pouvez nous soutenir !
				</svelte:fragment>
				<svelte:fragment slot="link">Découvrir comment</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem link="{communityPage.path}#{communityPage.anchors.assistFilm}">
				<svelte:fragment slot="title">Des séances-évenements</svelte:fragment>
				<svelte:fragment slot="content">
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
	<SectionLowTech />
</SectionBackground>

<SectionSupporters />

<style lang="scss">
	div {
		margin: -0.25rem;

		details,
		button {
			margin: 0.25rem;
		}

		details {
			cursor: not-allowed;
			opacity: 0.4;

			summary {
				pointer-events: none;
			}
		}
	}

	.filter-separator {
		margin: 1.5rem 0;
	}
</style>
