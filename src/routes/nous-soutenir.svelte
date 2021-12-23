<script>
	import SectionIntroduction from '$lib/components/SectionIntroduction.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import SectionBackground from '$lib/components/SectionBackground.svelte';
	import SectionSupporters from '$lib/components/SectionSupporters.svelte';
	import Backgrounds from '$lib/constants/backgrounds';
	import { communityPage, supportUsPage } from '$lib/constants/pages';
	import Section from '$lib/components/Section.svelte';
	import SectionContentList from '$lib/components/SectionContentList.svelte';
	import SectionContentListItem from '$lib/components/SectionContentListItem.svelte';
	import SectionContentTwoThirds from '$lib/components/SectionContentTwoThirds.svelte';
	import currentPage from '$lib/stores/currentPage';

	currentPage.set(supportUsPage);
</script>

<PageMeta page={supportUsPage} />

<SectionBackground background={Backgrounds.Lines}>
	<SectionIntroduction>
		Nous avons besoin de vous<br /> pour continuer à essaimer
	</SectionIntroduction>
</SectionBackground>

<Section>
	<svelte:fragment slot="title"
		>Quatre manières de soutenir financièrement <i>Racines de résilience</i></svelte:fragment
	>
	<svelte:fragment slot="content">
		<h3 class="text-center">(se) Faire plaisir avec du beau</h3>
		<SectionContentList>
			<SectionContentListItem
				isExternalLink
				link="https://www.boutique.racinesderesilience.org/"
				linkStyle="primary"
			>
				<svelte:fragment slot="text">
					Pour soutenir l'accompagnement du film, des artistes ont eu carte blanche et créé <strong
						>7 affiches collector du film <i>Une fois que tu sais</i></strong
					>.<br /> Choisissez une affiche illustrée imprimée en risographie (technique d'impression
					mécanique artisanale) et faites-vous un cadeau en soutenant <i>Racines de résilience</i> !
				</svelte:fragment>
				<svelte:fragment slot="link">Acheter une affiche collector</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem
				isExternalLink
				link="https://unefoisquetusais.bandcamp.com/"
				linkStyle="primary"
			>
				<svelte:fragment slot="text">
					Maxime Steiner, le compositeur de la musique du film <strong
						><i>Une fois que tu sais</i> a lui aussi choisi de soutenir <i>Racines de résilience</i>
						avec son travail</strong
					>.<br /> Redécouvrez le film en immersion auditive, avec les dialogues les plus impactants
					du films montés sur la musique originale.
				</svelte:fragment>
				<svelte:fragment slot="link">Acheter la bande-son / podcast</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem
				isExternalLink
				id={supportUsPage.anchors.paperGuide}
				link="https://www.boutique.racinesderesilience.org/index.php/produit/frune-fois-que-tu-sais-guide-daction/"
				linkStyle="primary"
			>
				<svelte:fragment slot="text">
					Dans certaines salles, un <strong
						>guide papier, construit en partenariat avec le magazine <i>Yggdrasil</i></strong
					>
					a été distribué pour continuer le mouvement.<br /> C'est la
					<strong>version papier de l'arbre aux actions</strong>. Si vous souhaitez vous procurer ce
					poster A1, en souvenir du film ou pour l'affichez chez vous, signifiez-nous votre intérêt
					ci-dessous !
				</svelte:fragment>
				<svelte:fragment slot="link">Acheter le poster de l'arbre aux actions</svelte:fragment>
			</SectionContentListItem>
		</SectionContentList>

		<ul>
			<li>
				<img
					alt=""
					src="/affiches/affiche-1.jpg"
					srcset="/affiches/affiche-1.jpg 1x, /affiches/affiche-1-2x.jpg 2x"
				/>
			</li>
			<li>
				<img
					alt=""
					src="/affiches/affiche-2.jpg"
					srcset="/affiches/affiche-2.jpg 1x, /affiches/affiche-2-2x.jpg 2x"
				/>
			</li>
			<li>
				<img
					alt=""
					src="/affiches/affiche-3.jpg"
					srcset="/affiches/affiche-3.jpg 1x, /affiches/affiche-3-2x.jpg 2x"
				/>
			</li>
			<li>
				<img
					alt=""
					src="/affiches/affiche-4.jpg"
					srcset="/affiches/affiche-4.jpg 1x, /affiches/affiche-4-2x.jpg 2x"
				/>
			</li>
			<li>
				<img
					alt=""
					src="/affiches/affiche-5.jpg"
					srcset="/affiches/affiche-5.jpg 1x, /affiches/affiche-5-2x.jpg 2x"
				/>
			</li>
			<li>
				<img
					alt=""
					src="/affiches/affiche-6.jpg"
					srcset="/affiches/affiche-6.jpg 1x, /affiches/affiche-6-2x.jpg 2x"
				/>
			</li>
		</ul>

		<h3 class="text-center">Faire un don</h3>
		<SectionContentList nbItemsByLine={2}>
			<SectionContentListItem
				hasReducedWidth
				isExternalLink
				link="https://www.helloasso.com/associations/terractiva/formulaires/1"
				linkStyle="primary"
			>
				<svelte:fragment slot="text">
					Un <strong>financement participatif</strong> a été mis en place pour permettre à qui veut
					de soutenir la campagne d'accompagnement du film (animations, guide, site internet, ...).<br
					/>
					Structures, individus, <strong>tout le monde peut donner à sa hauteur</strong> pour
					soutenir le projet !<br /> Si votre structure est référencée dans les actions, merci de
					considérer de soutenir <i>Racines de résilience</i>.
				</svelte:fragment>
				<svelte:fragment slot="link">Contribuer au financement participatif</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem
				hasReducedWidth
				isExternalLink
				isLinkDisabled
				link="TODO:"
				linkStyle="primary"
			>
				<svelte:fragment slot="text">
					Comme tous ceux qui nous ont déjà fait confiance, vous pouvez vous aussi <strong
						>devenir mécène du projet</strong
					>. Vous pouvez faire un don ou en proposer vos compétences pour faire vivre le projet,
					nous serions très heureux.se.s d'échanger avec vous !
				</svelte:fragment>
				<svelte:fragment slot="link">Devenir mécène</svelte:fragment>
			</SectionContentListItem>
		</SectionContentList>
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
	h3 {
		margin-top: 0;
	}

	ul {
		@include utilities.responsive-grid(repeat(3, 1fr), repeat(4, 1fr), repeat(6, 1fr), 1);

		list-style: none;
		margin: 6rem 0;
		padding: 0;

		li {
			position: relative;

			&::before {
				content: '';
				display: block;
				padding-bottom: 120%;
				width: 100%;
			}

			img {
				height: 100%;
				left: 50%;
				position: absolute;
				top: 0;
				transform: translateX(-50%);
			}
		}
	}
</style>
