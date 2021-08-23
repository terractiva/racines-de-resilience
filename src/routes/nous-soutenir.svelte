<script>
	import SectionIntroduction from '$lib/components/SectionIntroduction.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import SectionBackground from '$lib/components/SectionBackground.svelte';
	import SectionSupporters from '$lib/components/SectionSupporters.svelte';
	import Backgrounds from '$lib/constants/backgrounds';
	import { communityPage, supportUsPage } from '$lib/constants/pages';
	import { layoutContext } from '$lib/contexts';
	import { getContext } from 'svelte';
	import Section from '$lib/components/Section.svelte';
	import SectionContentList from '$lib/components/SectionContentList.svelte';
	import SectionContentListItem from '$lib/components/SectionContentListItem.svelte';
	import SectionContentTwoThirds from '$lib/components/SectionContentTwoThirds.svelte';

	const { setCurrentPage } = getContext(layoutContext);

	setCurrentPage(supportUsPage);
</script>

<PageMeta page={supportUsPage} />

<SectionBackground background={Backgrounds.Lines}>
	<SectionIntroduction>
		Nous avons besoin de vous<br /> pour continuer à exister
	</SectionIntroduction>
</SectionBackground>

<Section>
	<svelte:fragment slot="title"
		>Quatre manières de soutenir financièrement <i>Racines de résilience</i></svelte:fragment
	>
	<svelte:fragment slot="content">
		<h3 class="text-center">(se) Faire plaisir avec du beau</h3>
		<SectionContentList nbItemsByLine={2}>
			<SectionContentListItem hasReducedWidth isExternalLink link="TODO:" linkStyle="primary">
				<svelte:fragment slot="content">
					Pour soutenir l'accompagnement du film, des artistes ont produit des <strong
						>affiches collector <i>Une fois que tu sais</i></strong
					>.<br /> Choisissez une affiche illustrée imprimée en risographie (technique d'impression mécanique
					artisanale) et faites-vous un cadeau en soutenant Racines de résilience !
				</svelte:fragment>
				<svelte:fragment slot="link">Acheter une affiche collector</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem hasReducedWidth isExternalLink link="TODO:" linkStyle="primary">
				<svelte:fragment slot="content">
					Maxime Steiner, le compositeur de la musique du film <strong
						><i>Une fois que tu sais</i> a lui aussi choisi de soutenir <i>Racines de résilience</i>
						avec son travail</strong
					>.<br /> Redécouvrez le film en immersion auditive, avec les dialogues les plus impactants
					du films montés sur la musique orignale.
				</svelte:fragment>
				<svelte:fragment slot="link">Acheter la bande-son / podcast</svelte:fragment>
			</SectionContentListItem>
		</SectionContentList>

		<h3 class="text-center">Faire un don, juste pour le geste !</h3>
		<SectionContentList nbItemsByLine={2}>
			<SectionContentListItem
				hasReducedWidth
				isExternalLink
				link="https://www.helloasso.com/associations/terractiva/formulaires/1"
				linkStyle="primary"
			>
				<svelte:fragment slot="content">
					Un <strong>financement participatif</strong> a été mis en place pour permettre à qui veut
					de soutenir la campagne d'accompagnement du film (animations, guide, site internet, ...).<br
					/>
					Structures, individus, <strong>tout le monde peut donner à sa hauteur</strong> pour
					soutenir le projet !<br /> Si votre structure figure sur le site, merci de considérer de
					soutenir <i>Racines de résilience</i> :)
				</svelte:fragment>
				<svelte:fragment slot="link">Contribuer au financement participatif</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem hasReducedWidth isExternalLink link="TODO:" linkStyle="primary">
				<svelte:fragment slot="content">
					Si vous souhaitez <strong>devenir mécène du projet</strong>, par un don conséquent ou en
					proposant vos compétences pour faire vivre le projet, nous serions très heureux·se·s
					d'échanger avec vous !
				</svelte:fragment>
				<svelte:fragment slot="link">Devenir mécène</svelte:fragment>
			</SectionContentListItem>
		</SectionContentList>

		<img alt="" class="floating-image" src="/illustrations/oiseaux-1.png" />
		<img alt="" class="floating-image" src="/illustrations/oiseaux-2.png" />
	</svelte:fragment>
</Section>

<SectionBackground background={Backgrounds.Marks}>
	<SectionSupporters />
</SectionBackground>

<Section>
	<svelte:fragment slot="title">Rejoindre la communauté</svelte:fragment>
	<svelte:fragment slot="content">
		<SectionContentTwoThirds>
			<p class="text-justify w-100 mb-0">
				Vous souhaitez <strong>faire partie de la communauté</strong> d'accompagnement du film ?<br
				/> Rejoignez la communauté pour diffuser ses messages au plus grand nombre, organiser des séances-débats,
				pour vous former à l'animation, ou pour contribuer à la vie du site !
			</p>
			<a class="button primary" href={communityPage.path}>En savoir plus</a>
		</SectionContentTwoThirds>
	</svelte:fragment>
</Section>

<style lang="scss">
	h3:not(:first-of-type) {
		margin-top: 6rem;
	}

	img {
		height: auto;
		position: absolute;
		z-index: -1;

		&:first-of-type {
			top: -2%;
			right: 0;
			width: 12rem;
		}

		&:last-of-type {
			bottom: -2%;
			left: 0;
			width: 24rem;
		}
	}
</style>
