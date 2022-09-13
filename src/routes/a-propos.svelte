<script>
	import SectionIntroduction from '$lib/components/SectionIntroduction.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import SectionBackground from '$lib/components/SectionBackground.svelte';
	import SectionLowTech from '$lib/components/SectionLowTech.svelte';
	import Backgrounds from '$lib/constants/backgrounds';
	import { aboutPage, actionsPage, onceYouKnowPage, supportUsPage } from '$lib/constants/pages';
	import Section from '$lib/components/Section.svelte';
	import SectionContentTwoThirds from '$lib/components/SectionContentTwoThirds.svelte';
	import SectionContentList from '$lib/components/SectionContentList.svelte';
	import SectionContentListItem from '$lib/components/SectionContentListItem.svelte';
	import currentPage from '$lib/stores/currentPage';

	currentPage.set(aboutPage);
</script>

<PageMeta page={aboutPage} />

<SectionBackground background={Backgrounds.Lines}>
	<SectionIntroduction>
		Réunir et relier les idées, pour<br /> une société qui soutient la vie
	</SectionIntroduction>
</SectionBackground>

<Section id={aboutPage.anchors.explanation}>
	<svelte:fragment slot="title"><i>Racines de résilience</i>, c'est quoi ?</svelte:fragment>
	<svelte:fragment slot="content">
		<p class="text-justify">
			Le site <i>Racines de résilience</i> est une des facettes de la
			<strong>campagne d'accompagnement du film <i>Une fois que tu sais</i></strong>, écrit et
			réalisé par Emmanuel Cappellin, en collaboration avec Anne-Marie Sangla. Cette campagne est
			<strong>portée par l'association <i>Terractiva</i></strong>, créée en 2019 pour défendre une
			adaptation globale face aux processus d'effondrements en cours. Sa mission : accompagner des
			objets artistiques particulièrement impactants auprès du grand public et soutenir un
			changement culturel à grande échelle.
		</p>
		<SectionContentTwoThirds isReversed style="margin-bottom: 1.5rem;">
			<div class="image-wrapper">
				<img
					alt=""
					class="floating-image"
					src="/illustrations/castors.png"
					srcset="/illustrations/castors.png 1x, /illustrations/castors-2x.png 2x"
				/>
			</div>
			<p class="text-justify w-100 mb-0">
				A l'initiative du réalisateur Emmanuel, <i>Terractiva</i> a décidé d'accompagner le film.
				L'association a fait appel à Brianne Parquier et Charlotte Ogier pour porter cette campagne
				d'accompagnement. Elles sont toutes deux facilitatrices de
				<i>Travail Qui Relie</i>, un processus élaboré dans les années 1980 par l’écopsychologue
				Joanna Macy. Ce processus permet de <strong>traverser les émotions difficiles</strong>
				liées aux prises de conscience écologiques et de les
				<strong>transformer en élans d’actions</strong>. <br />Elles ont développé pour cette
				campagne 3 outils d'accompagnement à la mise en action :
			</p>
		</SectionContentTwoThirds>
		<SectionContentList>
			<li class="tool-item">
				<p class="mb-0">
					Une <strong>communauté d'accompagnateurices</strong> pour animer des temps d'échanges
					après la projection du film <i>Une fois que tu sais</i>.
				</p>
			</li>
			<li class="tool-item">
				<p class="mb-0">
					Un <a href="{supportUsPage.path}#{supportUsPage.anchors.paperGuide}"
						><strong>guide d'actions</strong></a
					> dépliant en affiche, qui propose un panorama des manières concrètes d'agir aujourd'hui.
				</p>
			</li>
			<li class="tool-item">
				<p class="mb-0">
					Le <strong>site collaboratif</strong> <i>Racines de résilience</i>, sur lequel vous êtes,
					pour que ce panorama s'enrichisse jour après jour !
				</p>
			</li>
		</SectionContentList>
	</svelte:fragment>
</Section>

<SectionBackground background={Backgrounds.Marks}>
	<Section>
		<svelte:fragment slot="title"><i>Racines de résilience</i>, à quoi ça sert ?</svelte:fragment>
		<svelte:fragment slot="content">
			<SectionContentTwoThirds>
				<p class="text-justify w-100 mb-0">
					L'ambition de la campagne d'accompagnement du film, c'est d'aider le public à devenir une
					<strong>communauté en mouvement</strong> et d'<strong
						>encourager des passages à l'action</strong
					> à la hauteur des enjeux climatiques. Touchées par son message, plusieurs milliers de personnes
					se sont mobilisées pour financer le film, accompagner sa diffusion par des temps d'échange
					post-projection et distribuer le guide d'actions qui offre de nombreuses pistes concrètes pour
					s'engager. Ce site internet est un prolongement en ligne du guide d'actions, un prolongement
					collaboratif et vivant, qui permet de rassembler et d'actualiser un maximum de façons d'agir
					sur les thèmes du climat, de l'énergie, de l'effondrement et de la résilience.
				</p>
				<div class="links-wrapper text-center">
					<a class="button primary" href={actionsPage.path}>Les actions</a>
					<a
						class="button primary"
						href="{onceYouKnowPage.path}#{onceYouKnowPage.anchors.animateDiscussion}"
						>Accompagner le film</a
					>
				</div>
			</SectionContentTwoThirds>
		</svelte:fragment>
	</Section>
</SectionBackground>

<Section>
	<svelte:fragment slot="title">Les artisans derrière ce site</svelte:fragment>
	<svelte:fragment slot="content">
		<SectionContentTwoThirds>
			<ul class="w-100">
				<li>
					<a href="https://brianneparquier.fr/" rel="external" target="_blank">Brianne Parquier</a>,
					Charlotte Ogier, Emmanuel Cappellin : designeu·r·se·s improvisé·e·s, rédacteur·ice·s de
					textes, coordinateur·ice·s de logiques, gestionnaires d’équipes et jusqu’au-boutistes
					avéré·e·s
				</li>
				<li>
					<a href="https://elypss.fr/" rel="external" target="_blank">Loïc Cimelière</a> : graphiste
					de l'arbre aux actions, détenteur d'un diplôme de patience
				</li>
				<li>
					<a href="https://www.theotimenoel.com/" rel="external" target="_blank">Théotime Noël</a>
					: illustrateur émérite, fondu de nature et très fort en jeu de mots
				</li>
				<li>
					<a href="https://tseignette.github.io/" rel="external" target="_blank">Thomas Seignette</a
					> : développeur Web, amateur de low-tech
				</li>
				<li>Clarisse Barreau : relectrice et consultante, coachs de qualité</li>
			</ul>
			<a class="button" href={supportUsPage.path}>Soutenir le projet</a>
		</SectionContentTwoThirds>
	</svelte:fragment>
</Section>

<SectionBackground background={Backgrounds.Strokes}>
	<SectionLowTech>
		<svelte:fragment slot="title"
			>La démarche low-tech de <i>Racines de résilience</i></svelte:fragment
		>
		<svelte:fragment slot="right-content">
			<a
				class="button primary"
				href="https://github.com/Terractiva/racines-de-resilience#conception-low-tech"
				rel="external"
				target="_blank">En savoir plus</a
			>
		</svelte:fragment>
	</SectionLowTech>
</SectionBackground>

<Section>
	<svelte:fragment slot="title">Notre partenaire éditorial <i>Mue</i></svelte:fragment>
	<svelte:fragment slot="content">
		<SectionContentTwoThirds>
			<p class="text-justify w-100 mb-0">
				Parce que les gouttes d’eau font les grandes rivières, <i>Racines de résilience</i> s’est
				associé à
				<i>Mue</i>, une revue bimestrielle et thématique explorant le monde d’après déjà à l'œuvre
				ici et maintenant ! Tous les 2 mois, elle met en avant 50 nouvelles initiatives inspirantes
				et des leviers d’action concrets pour s’engager et co-construire demain. Positive et
				engageante, inclusive et éthique, consciente et poétique, elle nous encourage à explorer nos
				possibles et à ouvrir nos imaginaires pour nourrir notre formidable puissance collective.<br
				/>
				Conçue par Loïc Cimelière, directeur artistique et Carol Galand, journaliste et artiste,
				<i>Mue</i> contribue aujourd’hui à déployer notre écosystème d’actions avec toujours plus d’inspirations
				pour transformer l’à venir !
			</p>
			<a class="button primary" href="https://je-mue.com/" rel="external" target="_blank"
				>Découvrir la revue</a
			>
		</SectionContentTwoThirds>
	</svelte:fragment>
</Section>

<style lang="scss">
	.image-wrapper {
		align-self: stretch;
		justify-self: stretch;

		@include utilities.media-sm {
			text-align: center;
		}

		img {
			height: 100%;
			object-fit: contain;
			width: 100%;

			@include utilities.media-sm {
				height: auto;
				width: 50%;
			}
		}
	}

	li.tool-item {
		display: flex;
		font-style: italic;

		&:first-child::before {
			content: '1';
		}
		&:nth-child(2)::before {
			content: '2';
		}
		&:nth-child(3)::before {
			content: '3';
		}

		&::before {
			font-family: utilities.$font-family-secondary;
			font-size: 8rem;
			font-style: normal;
			font-weight: bold;
			line-height: 8rem;
			margin-right: 1rem;
			position: relative;
			top: 0.4rem;
		}

		i {
			font-style: normal;
		}
	}

	.links-wrapper {
		a {
			margin: 0;
			width: 80%;

			@include utilities.media-md {
				width: 100%;
			}

			&:first-child {
				margin-bottom: 1rem;
			}
		}
	}

	ul {
		margin: 0;
	}
</style>
