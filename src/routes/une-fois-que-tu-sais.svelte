<script>
	import SectionIntroduction from '$lib/components/SectionIntroduction.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import SectionBackground from '$lib/components/SectionBackground.svelte';
	import Backgrounds from '$lib/constants/backgrounds';
	import { actionsPage, actionsTreePage, communityPage } from '$lib/constants/pages';
	import Section from '$lib/components/Section.svelte';
	import SectionContentTwoThirds from '$lib/components/SectionContentTwoThirds.svelte';
	import currentPage from '$lib/stores/currentPage';
	import InputNames from '$lib/constants/input-names';
	import Categories from '$lib/data/categories';

	currentPage.set(communityPage);
</script>

<PageMeta page={communityPage} />

<SectionBackground background={Backgrounds.Lines}>
	<SectionIntroduction>Un film qui met en mouvement</SectionIntroduction>
</SectionBackground>

<Section>
	<svelte:fragment slot="title">S’emparer d’outils au service du changement</svelte:fragment>
	<svelte:fragment slot="content">
		<SectionContentTwoThirds>
			<p class="text-justify w-100">
				<i>Une fois que tu sais</i> est un documentaire qui offre une plongée dans les
				bouleversements du monde, notre désarroi, et les perspectives qui s’offrent à nous pour
				s’adapter mais aussi avancer vers un avenir désirable. Fortement touché par le message du
				film, son public s'est mobilisé pour l’accompagner dans les cinémas, faire connaître
				<a
					href="https://www.boutique.racinesderesilience.org/index.php/produit/frune-fois-que-tu-sais-guide-daction/"
					rel="external"
					target="_blank">son guide d'actions</a
				>
				avec plus de 150 actions concrètes au service du climat et du vivant, et faire grandir l’<a
					href={actionsTreePage.path}>arbre aux actions</a
				>
				en ajoutant
				<a href="https://airtable.com/shrlqNJvuiem0iFkA" rel="external" target="_blank"
					>de nouvelles actions et structures référentes</a
				>
				sur <i>Racines de résilience</i>.<br />
				Vous aussi, servez-vous du film et des outils développés par l’association <i>Terractiva</i>
				et la campagne d’accompagnement du film <i>Une fois que tu sais, qu’est-ce qu’on fait ?</i> pour
				sensibiliser et susciter l’engagement autour de vous !
			</p>
			<div class="image-one-wrapper">
				<img
					alt=""
					class="floating-image"
					src="/illustrations/oiseaux-2.png"
					srcset="/illustrations/oiseaux-2.png 1x, /illustrations/oiseaux-2-2x.png 2x"
				/>
			</div>
		</SectionContentTwoThirds>

		<p class="mb-0">Où voir le film ?</p>
		<ul class="text-justify mb-0">
			<li>
				<p class="mb-0">Au cinéma ou hors cinéma en séance spéciale :</p>
				<ul>
					<li>
						<a
							href="https://www.google.com/maps/d/viewer?mid=1zvkq6whArE18g8hDYtY9WRNqVJAarAi9&hl=fr&usp=sharing"
							rel="external"
							target="_blank">Voir les séances à venir</a
						>
					</li>
					<li>
						Pas de séance près de chez vous ? Particuliers, collectivités, associations,
						entreprises, faites venir <i>Une fois que tu sais</i> dans votre cinéma ou dans votre
						structure en contactant le distributeur <i>Nour Films</i> :
						<a href="mailto:vferrer@nourfilms.com" rel="external">vferrer@nourfilms.com</a>
					</li>
				</ul>
			</li>
			<li>
				<p class="mb-0">En Vidéo à la Demande (VOD, streaming) :</p>
				<ul>
					<li>
						Sur la <a
							href="https://vimeo.com/ondemand/unefoisquetusais"
							rel="external"
							target="_blank">page Vimeo du film</a
						>
					</li>
					<li>
						Sur toutes les <a
							href="https://www.allocine.fr/film/fichefilm_gen_cfilm=286287.html"
							rel="external"
							target="_blank">plateformes habituelles</a
						>
					</li>
				</ul>
			</li>
		</ul>
	</svelte:fragment>
</Section>

<SectionBackground background={Backgrounds.Marks}>
	<Section>
		<svelte:fragment slot="title"
			>Accompagner la remise en question et la mise en action</svelte:fragment
		>
		<svelte:fragment slot="content">
			<p class="text-justify">
				Si le film <i>Une fois que tu sais</i> vous a touché,
				<strong>vous pouvez encourager sa diffusion et les temps d’échanges post-projection</strong>
				pour accompagner le public face à des questions complexes et des émotions parfois déstabilisantes
				mais toujours essentielles pour se mettre en mouvement !
			</p>
			<p class="text-justify mb-0">
				<strong>Plusieurs niveaux d’engagement sont possibles :</strong>
			</p>
			<ul class="text-justify">
				<li>
					<p>
						<strong>Premier pas : faire connaître <i>Une fois que tu sais</i></strong> dans vos réseaux
						(et au-delà!) pour ouvrir la parole sur ces sujets.
					</p>
					<div class="links-wrapper text-center">
						<a
							class="button primary"
							href="https://www.facebook.com/nourfilmscinema/videos/2487136478096952"
							rel="external"
							target="_blank">Je partage la bande-annonce</a
						>
						<a
							class="button primary"
							href="https://m.facebook.com/mydigitalco/videos/512560393626815/?refsrc=deprecated&ref=sharing&_rdr"
							rel="external"
							target="_blank">Je partage la sortie VOD</a
						>
						<a
							class="button primary"
							href="https://www.nourfilms.com/cinema-independant/une-fois-que-tu-sais/#359-360-photos-1612971422"
							rel="external"
							target="_blank">Je télécharge le KIT PRESSE</a
						>
					</div>
				</li>
				<li>
					<p>
						<strong>Bon intermédiaire: organiser une projection</strong>, dans un cinéma ou
						ailleurs, accompagnée ou non d’une animation post-projection.
					</p>
					<div class="text-center">
						<a class="button primary" href="mailto:vferrer@nourfilms.com" rel="external"
							>Je contacte le distributeur</a
						>
					</div>
				</li>
				<li>
					<p>
						<strong>Grand saut : rejoindre la communauté des animateur·ices</strong> formé·es à
						accompagner le film selon une approche inspirée du <i>Travail Qui Relie</i> de
						l’écopsychologue Joanna Macy.<br />
						Inscrivez-vous et retrouver la communauté sur
						<a href="https://colibris.link/OS02e" rel="external" target="_blank"
							>le serveur Discord</a
						> pour suivre le MOOC complet sur l’animation post-projection, accéder à tous les outils
						et échanger avec des personnes près de chez vous qui partagent votre prise de conscience
						sur nos effondrements et nos recherches de résilience. Pour commencer, vous pouvez d’abord
						télécharger notre Guide d’animation synthétique.
					</p>
					<div class="links-wrapper text-center">
						<a
							class="button primary"
							href="https://we.tl/t-Gv9O6GTkdr"
							rel="external"
							target="_blank">Je télécharge le Guide d’animation</a
						>
						<a
							class="button primary"
							href="https://colibris.link/OS02e"
							rel="external"
							target="_blank">Je rejoins la communauté</a
						>
					</div>
				</li>
			</ul>
		</svelte:fragment>
	</Section>
</SectionBackground>

<Section>
	<svelte:fragment slot="title">S'engager dans une démarche de soutien mutuel</svelte:fragment>
	<svelte:fragment slot="content">
		<p>Votre entourage n'est pas sensible à ces questions et vous vous sentez en décalage ?</p>
		<p>
			Où que l'on soit sur son chemin de transition, on peut faire face à des questionnements, du
			désarroi, ou un sentiment d'impuissance qui freinent la mise en action. Et c'est le cas de
			nombre d'entre nous !
		</p>
		<p class="mb-0">Alors voici quelques pistes pour commencer :</p>
		<ul>
			<li>
				<p>
					L'accompagnement du film <i>Une fois que tu sais</i> s'appuie notamment sur le processus
					de l'écopsychologue Joanna Macy, le <i>Travail Qui Relie (TQR)</i>, qui
					<strong>soutient la traversée des émotions difficiles</strong> liées à l'état du monde, pour
					les transformer en élan d'action.
				</p>
				<div class="text-center">
					<a
						class="button"
						href="http://www.ateliersdetravailquirelie.sitew.fr/"
						rel="external"
						target="_blank">Découvrir les ateliers TQR</a
					>
				</div>
			</li>
			<li>
				<p>
					Dans la catégorie <i>Régénérer</i> de la page
					<a
						href="{actionsPage.path}?{InputNames.category}={Categories.Regenerate}#{actionsPage
							.anchors.filters}">Actions</a
					>, vous pourrez trouver plusieurs autres actions et structures pour
					<strong>vous soutenir</strong>.
				</p>
				<div class="text-center">
					<a
						class="button"
						href="{actionsPage.path}?{InputNames.category}={Categories.Regenerate}#{actionsPage
							.anchors.filters}">Découvrir les actions <i>Régénérer</i></a
					>
				</div>
			</li>
			<li>
				<p>
					Vous pouvez aussi <strong>échanger</strong> avec des personnes inspirantes qui cherchent
					elles aussi comment s’adapter, personnellement et collectivement, sur le serveur Discord
					de
					<a href="https://colibris.link/OS02e" rel="external" target="_blank"
						>la communauté d’accompagnement du film</a
					>.
				</p>
				<div class="text-center">
					<a class="button" href="https://colibris.link/OS02e" rel="external" target="_blank"
						>Je rejoins la communauté</a
					>
				</div>
			</li>
		</ul>
	</svelte:fragment>
</Section>

<SectionBackground background={Backgrounds.Strokes}>
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
						thèmes, et notre ambition c'est de rendre visible cet écosystème déjà fertile et large
						qui offre de nombreuses possibilités de s'engager. Grâce au référencement constitué sur
						le site <i>Racines de résilience</i>, vous pouvez
						<strong>entrer en contact avec les organisations</strong> qui vous inspirent, quelle que
						soit votre sensibilité ou votre capacité d'engagement.
					</p>
					<div class="links-wrapper">
						<a class="button primary" href={actionsTreePage.path}>Arbre des actions</a>
						<a class="button primary" href={actionsPage.path}>Toutes les actions</a>
					</div>
				</div>
			</SectionContentTwoThirds>
		</svelte:fragment>
	</Section>
</SectionBackground>

<style lang="scss">
	ul > li:not(:last-child) > div {
		margin-bottom: 1.5rem;
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
</style>
