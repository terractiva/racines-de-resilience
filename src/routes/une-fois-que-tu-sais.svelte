<script>
	import SectionIntroduction from '$lib/components/SectionIntroduction.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import SectionBackground from '$lib/components/SectionBackground.svelte';
	import Backgrounds from '$lib/constants/backgrounds';
	import {
		actionsPage,
		actionsTreePage,
		guidedTalkPage,
		onceYouKnowPage
	} from '$lib/constants/pages';
	import Section from '$lib/components/Section.svelte';
	import SectionContentTwoThirds from '$lib/components/SectionContentTwoThirds.svelte';
	import currentPage from '$lib/stores/currentPage';
	import SectionContentList from '$lib/components/SectionContentList.svelte';
	import SectionContentListItem from '$lib/components/SectionContentListItem.svelte';

	currentPage.set(onceYouKnowPage);
</script>

<PageMeta page={onceYouKnowPage} />

<SectionBackground background={Backgrounds.Lines}>
	<SectionIntroduction>À l’origine du projet, un film</SectionIntroduction>
</SectionBackground>

<Section>
	<svelte:fragment slot="title"
		><i>Une fois que tu sais</i>, un film au service de l’action</svelte:fragment
	>
	<svelte:fragment slot="content">
		<SectionContentTwoThirds>
			<div class="text-justify w-100">
				<p>
					<i>Une fois que tu sais</i> est un documentaire qui offre une plongée dans les bouleversements
					du monde, notre désarroi, et les perspectives qui s’offrent à nous pour s’adapter mais aussi
					avancer vers un avenir désirable.
				</p>
				<p>
					<strong>Résumé du film</strong><br />
					<i
						>Confronté à la réalité du changement climatique et à l’épuisement des ressources, le
						réalisateur Emmanuel Cappellin prend conscience que notre civilisation suit une
						trajectoire d’effondrement. Mais comment continuer à vivre avec l’idée que le projet de
						la Modernité puisse échouer ? En quête de réponses, il part à la rencontre d’experts et
						de scientifiques tels que Pablo Servigne, Jean-Marc Jancovici ou Richard Heinberg. Tous
						appellent à une action collective et solidaire pour préparer une transition la plus
						humaine possible. Une odyssée qui touche à l’intime et transforme notre regard sur
						nous-mêmes et sur le monde pour mieux construire l’avenir.</i
					>
				</p>
				<p class="mb-0">
					Fortement touché par le message du film, son public s'est mobilisé pour l’accompagner dans
					les cinémas pour proposer un temps d’échange post-projection, faire connaître
					<a
						href="https://www.boutique.racinesderesilience.org/index.php/produit/frune-fois-que-tu-sais-guide-daction/"
						rel="external"
						target="_blank">son guide d'actions</a
					>
					avec plus de 150 actions concrètes au service du climat et du vivant, et donner envie à chacun·e
					de faire grandir l’<a href={actionsTreePage.path}>arbre aux actions</a>
					en proposant
					<a href="https://airtable.com/shrlqNJvuiem0iFkA" rel="external" target="_blank"
						>de nouvelles actions et structures référentes</a
					>
					sur <i>Racines de résilience</i>.
				</p>
			</div>
			<div class="image-one-wrapper">
				<img
					alt=""
					class="floating-image"
					src="/illustrations/oiseaux-2.png"
					srcset="/illustrations/oiseaux-2.png 1x, /illustrations/oiseaux-2-2x.png 2x"
				/>
			</div>
		</SectionContentTwoThirds>
	</svelte:fragment>
</Section>

<SectionBackground background={Backgrounds.Marks}>
	<Section>
		<svelte:fragment slot="title">Voir le film</svelte:fragment>
		<svelte:fragment slot="content">
			<SectionContentList>
				<SectionContentListItem
					isExternalLink
					link="https://www.google.com/maps/d/viewer?mid=1zvkq6whArE18g8hDYtY9WRNqVJAarAi9&hl=fr&usp=sharing"
					linkStyle="primary"
				>
					<svelte:fragment slot="title">Sur grand écran</svelte:fragment>
					<svelte:fragment slot="text">
						Le film est encore régulièrement programmé dans les cinémas ou hors cinéma en séance
						spéciale. Pas de séance près de chez vous ? Particuliers, collectivités, associations,
						entreprises, faites venir <i>Une fois que tu sais</i> dans votre cinéma ou dans votre
						structure en France, Suisse ou Belgique en contactant le distributeur
						<a href="mailto:contact@nourfilms.com" rel="external">Nour Films</a>.
					</svelte:fragment>
					<svelte:fragment slot="link">Voir les séances à venir</svelte:fragment>
				</SectionContentListItem>

				<SectionContentListItem
					isExternalLink
					link="https://vimeo.com/ondemand/unefoisquetusais"
					linkStyle="primary"
				>
					<svelte:fragment slot="title">En Vidéo à la Demande</svelte:fragment>
					<svelte:fragment slot="text">
						En Vidéo à la Demande (VOD, streaming), disponible sur la <a
							href="https://vimeo.com/ondemand/unefoisquetusais"
							rel="external"
							target="_blank">page Viméo du film</a
						>
						et sur toutes les
						<a
							href="https://www.allocine.fr/film/fichefilm_gen_cfilm=286287.html"
							rel="external"
							target="_blank">plateformes habituelles</a
						>.
					</svelte:fragment>
					<svelte:fragment slot="link">Louer en Vidéo à la Demande</svelte:fragment>
				</SectionContentListItem>

				<SectionContentListItem
					isExternalLink
					link="https://www.nourfilms.com/cinema-independant/une-fois-que-tu-sais/"
					linkStyle="primary"
				>
					<svelte:fragment slot="title">En DVD</svelte:fragment>
					<svelte:fragment slot="text"
						>Le DVD sortira en mai 2022 avec des pré-commandes possibles bientôt.</svelte:fragment
					>
					<svelte:fragment slot="link">Acheter le DVD</svelte:fragment>
				</SectionContentListItem>
			</SectionContentList>
		</svelte:fragment>
	</Section>
</SectionBackground>

<Section id={onceYouKnowPage.anchors.animateDiscussion}>
	<svelte:fragment slot="title">Animer un temps d’échange post-projection</svelte:fragment>
	<svelte:fragment slot="content">
		<p class="text-justify">
			Si le film <i>Une fois que tu sais</i> vous a touché,
			<strong>vous pouvez encourager sa diffusion et les temps d’échanges post-projection</strong>
			pour accompagner le public face à des questions complexes et des émotions parfois déstabilisantes
			mais toujours essentielles pour se mettre en mouvement ! Servez-vous du film et des outils développés
			par l’association <i>Terractiva</i> pour la campagne d’accompagnement du film
			<i>Une fois que tu sais, qu’est-ce qu’on fait ?</i>
			afin de sensibiliser et susciter l’engagement autour de vous !
			<strong>Plusieurs niveaux d’engagement sont possibles.</strong>
		</p>
		<SectionContentList>
			<SectionContentListItem
				isExternalLink
				link="https://pulp-films.fr/project/une-fois-que-tu-sais/"
			>
				<svelte:fragment slot="title">Premier pas</svelte:fragment>
				<svelte:fragment slot="text"
					><strong>Faire connaître <i>Une fois que tu sais</i></strong> dans vos réseaux et au-delà pour
					ouvrir la parole sur ces sujets.</svelte:fragment
				>
				<svelte:fragment slot="link">Page officielle du film</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem isExternalLink link="mailto:contact@nourfilms.com">
				<svelte:fragment slot="title">Bon intermédiaire</svelte:fragment>
				<svelte:fragment slot="text"
					><strong>Organiser une projection</strong>, dans un cinéma ou ailleurs, accompagnée ou non
					d’une animation post-projection.</svelte:fragment
				>
				<svelte:fragment slot="link">Contacter le distributeur</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem
				isExternalLink
				link="/fichiers/Une_fois_que_tu_sais_-_Guide_danimation_-_FR.pdf"
			>
				<svelte:fragment slot="title">Grand saut</svelte:fragment>
				<svelte:fragment slot="text">
					<strong>Animer une projection.</strong> Pour cela, inscrivez-vous pour recevoir le Guide
					d’Animation et <strong>rejoindre la communauté des animateur·ices</strong> qui
					accompagnent le film selon une approche inspirée du <i>Travail Qui Relie</i> de l’écopsychologue
					Joanna Macy.
				</svelte:fragment>
				<svelte:fragment slot="link">Recevoir les outils</svelte:fragment>
			</SectionContentListItem>
		</SectionContentList>
	</svelte:fragment>
</Section>

<SectionBackground background={Backgrounds.Strokes}>
	<Section>
		<svelte:fragment slot="title">Ressources post-projection gratuites</svelte:fragment>
		<svelte:fragment slot="content">
			<p class="text-justify mb-0">
				En plus des actions et structures recensées sur <i>Racines de Résilience</i>, que vous soyez
				à la maison en famille ou à une projection publique, des ressources existent pour vous
				permettre de prolonger la réflexion et l’action en rapport avec les thématiques du film –
				énergie, climat, effondrement et résilience :
			</p>
			<ul class="mb-0">
				<li>
					Projections en groupe : téléchargez le <a
						href="/fichiers/Une_fois_que_tu_sais_-_Guide_danimation_-_FR.pdf"
						rel="external"
						target="_blank">Guide d’Animation</a
					>
					ou <a href="https://colibris.link/OS02e" rel="external" target="_blank">inscrivez-vous</a>
					dès maintenant pour rejoindre notre communauté d’animateur·ices
				</li>
				<li>
					Projections privées : <a href="{guidedTalkPage.path}/{guidedTalkPage.subPages.audio}"
						>Guide de discussion</a
					> à la maison
				</li>
				<li>
					Projections en groupe ou privées : regardez la <a
						href="{guidedTalkPage.path}/{guidedTalkPage.subPages.video}"
						>vidéo d’une animation post-projection animée</a
					> par Brianne Parquier au cinéma Espace St-Michel à Paris en présence de Jean-Marc Jancovici
					et de l’équipe du film
				</li>
			</ul>
		</svelte:fragment>
	</Section>
</SectionBackground>

<Section>
	<svelte:fragment slot="title"
		>Rejoindre et renforcer l'action des acteurs existants</svelte:fragment
	>
	<svelte:fragment slot="content">
		<SectionContentTwoThirds isReversed>
			<div class="image-two-wrapper">
				<img
					alt=""
					class="floating-image"
					src="/illustrations/singes.png"
					srcset="/illustrations/singes.png 1x, /illustrations/singes-2x.png 2x"
				/>
			</div>
			<div>
				<p class="text-justify w-100">
					Une <strong>multitude de structures et de collectifs</strong> travaillent déjà sur ces
					thèmes, et notre ambition c'est de rendre visible cet écosystème déjà fertile et large qui
					offre de nombreuses possibilités de s'engager. Grâce au référencement constitué sur le
					site <i>Racines de résilience</i>, vous pouvez
					<strong>entrer en contact avec les organisations</strong> qui vous inspirent, quelle que soit
					votre sensibilité ou votre capacité d'engagement.
				</p>
				<div class="links-wrapper">
					<a class="button primary" href={actionsTreePage.path}>Arbre des actions</a>
					<a class="button primary" href={actionsPage.path}>Toutes les actions</a>
				</div>
			</div>
		</SectionContentTwoThirds>
	</svelte:fragment>
</Section>

<style lang="scss">
	.image-one-wrapper {
		align-self: stretch;
		justify-self: stretch;
		position: relative;

		@include utilities.media-sm {
			order: -1;
			text-align: center;
		}

		img {
			height: auto;

			@include utilities.media-sm {
				width: 50%;
			}
			@include utilities.media-md-lg {
				bottom: 50%;
				max-width: initial;
				position: absolute;
				transform: translateY(50%);
			}
			@include utilities.media-md {
				left: -1.5rem;
				width: 120%;
			}
			@include utilities.media-lg {
				left: 0;
				width: 100%;
			}
		}
	}

	.image-two-wrapper {
		align-self: stretch;
		justify-self: stretch;
		position: relative;

		@include utilities.media-sm {
			text-align: center;
		}

		img {
			@include utilities.media-sm {
				height: auto;
				width: 50%;
			}
			@include utilities.media-md-lg {
				bottom: 0;
				height: 100%;
				left: 0;
				max-width: initial;
				object-fit: contain;
				position: absolute;
				width: 100%;
			}
		}
	}

	.links-wrapper {
		display: flex;
		justify-content: space-evenly;

		@include utilities.media-sm {
			align-items: center;
			flex-direction: column;
		}

		a {
			margin: 0;

			@include utilities.media-sm {
				&:not(:last-child) {
					margin-bottom: 1rem;
				}
			}
		}
	}
</style>
