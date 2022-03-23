<script>
	import SectionIntroduction from '$lib/components/SectionIntroduction.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import SectionBackground from '$lib/components/SectionBackground.svelte';
	import SectionLowTech from '$lib/components/SectionLowTech.svelte';
	import SectionSupporters from '$lib/components/SectionSupporters.svelte';
	import Backgrounds from '$lib/constants/backgrounds';
	import { guidedTalkPage, homePage } from '$lib/constants/pages';
	import Section from '$lib/components/Section.svelte';
	import SectionContentList from '$lib/components/SectionContentList.svelte';
	import SectionContentListItem from '$lib/components/SectionContentListItem.svelte';
	import SectionFilters from '$lib/components/SectionFilters.svelte';
	import currentPage from '$lib/stores/currentPage';
	import { ownerMail } from '$lib/constants/identity';

	currentPage.set(homePage);
</script>

<PageMeta page={homePage} />

<SectionIntroduction>
	Energie, climat, effondrement, résilience...<br /> On fait quoi maintenant ?
</SectionIntroduction>

<SectionBackground background={Backgrounds.Lines}>
	<SectionFilters />
</SectionBackground>

<Section isCentered>
	<svelte:fragment slot="title"
		>Vous venez de visionner le film <i>Une fois que tu sais</i> ?</svelte:fragment
	>
	<a class="button primary" href={guidedTalkPage.path} slot="content"
		>C'est par ici pour la discussion guidée</a
	>
</Section>

<Section>
	<svelte:fragment slot="title">Actualités</svelte:fragment>

	<svelte:fragment slot="content">
		<SectionContentList>
			<SectionContentListItem
				isExternalLink
				link="https://www.google.com/maps/d/viewer?mid=1zvkq6whArE18g8hDYtY9WRNqVJAarAi9&hl=fr&usp=sharing"
			>
				<svelte:fragment slot="title">Où voir<br /> <i>Une fois que tu sais</i> ?</svelte:fragment>
				<svelte:fragment slot="text">
					Les <strong>séances-événements</strong> avant et après la
					<strong>sortie le 22 septembre</strong>
					au cinéma du film <i>Une fois que tu sais</i> peuvent permettre aux enjeux climatiques de
					passer sur le devant de la scène ! Voici une <strong>carte pour découvrir</strong> les séances
					près de chez vous.
				</svelte:fragment>
				<svelte:fragment slot="link">Trouver une séance</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem isExternalLink link="https://bit.ly/3AMlMOK">
				<svelte:fragment slot="title">La sortie internationale a démarré !</svelte:fragment>
				<svelte:fragment slot="text">
					La sortie internationale a démarré ! Depuis le 2 février, <i>Once You Know</i>, la version
					anglaise du film <i>Une fois que tu sais</i>, est disponible dans le monde entier ! Pour
					marquer le coup, toutes les projections publiques ou privées organisées avant
					<strong>le vendredi 22 avril</strong>, Jour de la Terre, bénéficieront d'un accès gratuit
					au grand LIVE en ligne qui regroupera tous les protagonistes du film et le réalisateur ce
					jour-là. Mobilisez votre réseau à l'étranger pour donnez envie à vos ami·e·s, familles,
					connaissances qui vivent en Afrique, Asie, Europe... d'organiser une projection dans leur
					cinéma de quartier, festival ou association ! Partagez avec eux
					<a href="https://bit.ly/3AMlMOK" rel="external" target="_blank">cette publication</a>
					et donnez-leur le contact du distributeur international :
					<a href="mailto:sales@pulp-films.fr" rel="external">sales@pulp-films.fr</a>. Merci à
					toutes et à tous !
				</svelte:fragment>
				<svelte:fragment slot="link">Partager la publication</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem isExternalLink link="mailto:{ownerMail}">
				<svelte:fragment slot="title">Merci et bravo au film et sa communauté</svelte:fragment>
				<svelte:fragment slot="text">
					<strong>15&nbsp;000 spectateur·ice·s</strong> d’<i>Une fois que tu sais</i> en salle de
					cinéma,
					<strong>90 séances-événements</strong>
					avec animations, <strong>15&nbsp;000 guides</strong> distribués au public et plus de
					<strong>50&nbsp;000 visites</strong> sur ce site en 5 mois ! Ce n’est que le début, le film
					continue de rencontrer le public dans les salles de cinéma ou ailleurs. Associations, entreprises,
					collectivités, écoles... vous voulez organiser une projection ?
				</svelte:fragment>
				<svelte:fragment slot="link">Contactez-nous</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem
				isExternalLink
				link="https://www.boutique.racinesderesilience.org/index.php/produit/frune-fois-que-tu-sais-guide-daction/"
			>
				<svelte:fragment slot="title"
					>15&nbsp;000 guides distribués,<br /> 15&nbsp;000 réédités</svelte:fragment
				>
				<svelte:fragment slot="text">
					Avec <strong>10&nbsp;000 guides</strong> donnés aux spectateur·ice·s d’<i
						>Une fois que tu sais</i
					>
					et <strong>5&nbsp;000 guides</strong>
					offerts aux abonnés de notre partenaire <i>Yggdrasil</i> avec leur triple et ultime numéro
					le
					<a
						href="https://yggdrasil-mag.com/magazine/yggdrasil-numero-10-11-diouze"
						rel="external"
						target="_blank">10-11-12</a
					>... L’arbre aux actions de <i>Racines de Résilience</i> a rencontré un franc succès ! Nous
					avons donc lancé une réédition pour que les racines grandissent !
				</svelte:fragment>
				<svelte:fragment slot="link">Commander mon guide</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem isExternalLink link="https://www.boutique.racinesderesilience.org/">
				<svelte:fragment slot="title"
					>Des cadeaux ? Affiches collectors, bandes sonores</svelte:fragment
				>
				<svelte:fragment slot="text">
					Pour soutenir notre démarche, des artistes ont créé des <strong>affiches collector</strong
					>
					et le compositeur de la musique a monté une <strong>bande originale</strong> et un
					<strong>podcast</strong>
					d’<i>Une fois que tu sais</i>. Pour nous soutenir vous aussi et faire parler du film,
					offrez autour de vous de belles reproductions artisanales et écologiques en risographie et
					des bandes sonores en numérique.
				</svelte:fragment>
				<svelte:fragment slot="link">Découvrir les œuvres</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem
				isExternalLink
				link="https://www.facebook.com/UneFoisQueTuSais/videos/267364971934339/"
			>
				<svelte:fragment slot="title">Avec animation,<br /> ça change tout !</svelte:fragment>
				<svelte:fragment slot="text">
					Si vous n’avez pas pu goûter à l’ambiance des salles, découvrez les réactions du public
					lors d’un événement en octobre dernier à l’espace Saint-Michel à Paris. Et pour les
					curieux·ses, vous pouvez même trouver <a
						href="https://tube.nocturlab.fr/videos/watch/c0749df2-fcfa-4a3e-b4ab-c5e8bae9a6a7"
						rel="external"
						target="_blank">ici la vidéo complète</a
					>
					de l’animation donnée par <strong>Brianne Parquier</strong> en présence d’<strong
						>Emmanuel Cappellin</strong
					>, <strong>Anne-Marie Sangla</strong>
					et <strong>Jean-Marc Jancovici</strong> !
				</svelte:fragment>
				<svelte:fragment slot="link">Teaser de l’animation</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem isExternalLink link="https://www.facebook.com/UneFoisQueTuSais/">
				<svelte:fragment slot="title">Sortie du film<br /> en VOD et DVD</svelte:fragment>
				<svelte:fragment slot="text">
					Vous voulez voir <i>Une fois que tu sais</i> chez vous ? Le film est disponible en
					<strong>Vidéo à la Demande (VOD) depuis le 28 février 2022</strong>. Retrouvez le film
					<a href="https://bit.ly/3huPsHl" rel="external" target="_blank">sur Vimeo</a>
					ou
					<a href="https://bit.ly/3C9zqfK" rel="external" target="_blank"
						>sur vos plateformes préférées</a
					>. Emmanuel Cappellin vous annonce cette sortie
					<a href="https://fb.watch/bwlkPqahCC/" rel="external" target="_blank">en vidéo ici</a>.
					Après avoir vu le film chez vous, vous pouvez participer à
					<a href={guidedTalkPage.path}>la discussion guidée</a>
					qui propose un temps de recul sur le film et son message. Le
					<strong>DVD sortira en mai 2022 avec des pré-commandes possibles très bientôt</strong> ! Abonnez-vous
					à la page Facebook du film pour en être informé.e.
				</svelte:fragment>
				<svelte:fragment slot="link">Facebook <i>Une fois que tu sais</i></svelte:fragment>
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
