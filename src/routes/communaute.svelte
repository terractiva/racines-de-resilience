<script>
	import SectionIntroduction from '$lib/components/SectionIntroduction.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import SectionBackground from '$lib/components/SectionBackground.svelte';
	import Backgrounds from '$lib/constants/backgrounds';
	import { actionsPage, actionsTreePage, communityPage } from '$lib/constants/pages';
	import Section from '$lib/components/Section.svelte';
	import SectionContentTwoThirds from '$lib/components/SectionContentTwoThirds.svelte';
	import SectionContentList from '$lib/components/SectionContentList.svelte';
	import SectionContentListItem from '$lib/components/SectionContentListItem.svelte';
	import Categories from '$lib/data/categories';
	import currentPage from '$lib/stores/currentPage';
	import InputNames from '$lib/constants/input-names';

	const joinLink = 'https://colibris.link/OS02e';

	currentPage.set(communityPage);
</script>

<PageMeta page={communityPage} />

<SectionBackground background={Backgrounds.Lines}>
	<SectionIntroduction>Être ensemble une<br /> communauté en mouvement</SectionIntroduction>
</SectionBackground>

<Section>
	<svelte:fragment slot="title">Une communauté autour d'un film</svelte:fragment>
	<svelte:fragment slot="content">
		<SectionContentTwoThirds>
			<p class="text-justify w-100 mb-0">
				<i>Une fois que tu sais</i> est un documentaire qui offre une
				<strong>plongée dans les bouleversements du monde</strong>, et dans notre propre désarroi.
				Fortement touchées par le message du film, son public s'est mobilisé, et des dizaines de
				personnes se sont préparées pour proposer des temps d’échange inspirées du
				<i>Travail Qui Relie</i>
				dans les cinémas, faire connaître le guide d’actions et le site
				<i>Racines de résilience</i> ! Vous aussi vous pouvez rejoindre cette communauté.
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
	</svelte:fragment>
</Section>

<SectionBackground background={Backgrounds.Marks}>
	<Section>
		<svelte:fragment slot="title">Participer à l'accompagnement du film</svelte:fragment>
		<svelte:fragment slot="content">
			<p class="text-justify">
				Si le film vous touche et que vous souhaitez <strong
					>vous impliquer dans son accompagnement</strong
				>, vous pouvez prendre plusieurs rôles :
			</p>
			<ul>
				<li class="text-justify">
					<strong>Faire connaître</strong> <i>Une fois que tu sais</i> et son accompagnement dans vos
					réseaux (et au-delà!) pour ouvrir la parole sur ces sujets,
				</li>
				<li class="text-justify">
					<strong>Organiser une projection</strong> avec l'animation que nous avons créée (inspirée
					du
					<i>Travail Qui Relie</i>) dans un cinéma ou un lieu qui pourrait l'accueillir,
				</li>
				<li class="text-justify">
					<strong>Rejoindre la communauté</strong> pour échanger, se rencontrer, se soutenir.
				</li>
			</ul>
			<div class="text-center">
				<a class="button primary" href={joinLink} rel="external" target="_blank"
					>Je veux participer !</a
				>
			</div>
		</svelte:fragment>
	</Section>
</SectionBackground>

<Section>
	<svelte:fragment slot="title">S'engager dans une démarche de soutien mutuel</svelte:fragment>
	<svelte:fragment slot="content">
		<SectionContentList nbItemsByLine={2}>
			<SectionContentListItem isExternalLink link={joinLink}>
				<svelte:fragment slot="text">
					Vous vous sentez seul·e·s à avec ces <strong>prises de conscience</strong> sur nos
					effondrements et nos recherches de résilience ?<br /> Votre entourage n'est pas sensible à
					ces thématiques vous vous sentez en décalage ?<br /> Vous êtes
					<strong>curieux d'échanger</strong>
					avec des personnes inspirantes qui cherchent comment vivre mieux dans ce monde en plein bouleversement
					?<br /> La <strong>communauté des spectateurs et soutiens du film</strong> se retrouve sur
					son serveur Discord où plusieurs espaces d'échange sont proposés, organisés par thèmes ou par
					régions. Retrouvez ainsi des personnes près de chez vous qui s'intéressent à ce qui vous tient
					à cœur pour cheminer et agir ensemble.
				</svelte:fragment>
				<svelte:fragment slot="link">Rencontrer la communauté</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem isExternalLink link="https://ateliersdetravailquirelie.sitew.fr/">
				<svelte:fragment slot="text">
					Pas toujours facile de <strong>franchir le pas</strong>...<br /> Où que l'on soit sur son
					chemin de transition, on peut faire face à des questionnements, du désarroi, ou un
					sentiment d'impuissance qui freinent la mise en action. Et c'est le cas de nombre d'entre
					nous !<br /> Dans la catégorie <i>Régénérer</i> de la page
					<a
						href="{actionsPage.path}?{InputNames.category}={Categories.Regenerate}#{actionsPage
							.anchors.filters}">Actions</a
					>, vous pourrez trouver plusieurs actions pour
					<strong>vous soutenir face à ces bouleversements</strong>.<br />
					L'accompagnement du film <i>Une fois que tu sais</i> s'appuie notamment sur le processus
					de l'écopsychologue Joanna Macy, le <i>Travail Qui Relie</i>, qui
					<strong>soutient la traversée des émotions difficiles</strong> liées à l'état du monde, pour
					les transformer en élan d'actions.
				</svelte:fragment>
				<svelte:fragment slot="link">Découvrir le <i>Travail Qui Relie</i></svelte:fragment>
			</SectionContentListItem>
		</SectionContentList>
	</svelte:fragment>
</Section>

<SectionBackground background={Backgrounds.Strokes}>
	<Section>
		<svelte:fragment slot="title"
			>Créons des synergies entre les acteurs mobilisés existants !</svelte:fragment
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
		justify-content: space-around;

		@include utilities.media-sm {
			align-items: center;
			flex-direction: column;
		}

		a {
			margin: 0;

			@include utilities.media-sm {
				&:first-child {
					margin-bottom: 1rem;
				}
			}
		}
	}
</style>
