<script>
	import PageMeta from '$lib/components/PageMeta.svelte';
	import { actionsPage, actionsTreePage, communityPage } from '$lib/constants/pages';
	import { layoutContext } from '$lib/contexts';
	import { getContext } from 'svelte';

	const { setCurrentPage } = getContext(layoutContext);

	setCurrentPage(communityPage);
</script>

<PageMeta page={communityPage} />

<section class="section-intro container">
	<p>
		<i>
			Notre démarche, c'est de sensibiliser avec le film Une fois que tu sais et faire du public une
			communauté en mouvement. Vous aussi vous pouvez vous engager.
		</i>
	</p>
</section>

<section class="section bg-lines-1">
	<div class="container">
		<h2>
			Une fois que tu sais, qu'est-ce qu'on fait ? Une communauté en mouvement autour d'un film
		</h2>

		<p class="mb-0">
			Ce documentaire offre une plongée dans les bouleversements du monde, et dans notre propre
			désarroi. Fortement touchées par le message du film, son public s'est mobilisé, et des
			dizaines de personnes se sont préparées pour proposer des temps d’échange inspirées du Travail
			Qui Relie dans les cinémas, faire connaitre le guide d’actions et le site Racine de
			résilience ! Vous aussi vous pouvez rejoindre cete communauté bénévole.
		</p>
	</div>
</section>

<section class="section container">
	<h2>Participer à l'accompagnement du film</h2>

	<p>
		Si le film vous touche et que vous souhaitez vous impliquer dans son accompagnement, vous pouvez
		prendre plusieurs rôles :
	</p>

	<ul>
		<li>
			faire parler d'UNE FOIS QUE TU SAIS dans vos réseaux et au-delà pour ouvrir la parole sur ces
			sujets
		</li>
		<li>
			organiser une projection avec une animation inspirée du Travail Qui Relie dans un cinéma ou un
			lieu qui pourrait l'acceuillir
		</li>
		<li>
			rejoindre l'équipe bénévole pour soutenir la vie de la communauté (déployer l'outil de travail
			collectif en ligne dédié à la communauté)
		</li>
	</ul>

	<div class="text-center">
		<a class="button primary" href="TODO:" rel="external" target="_blank"
			>Rejoindre la communauté d'accompagnement du film</a
		>
	</div>
</section>

<section class="section section-get-involved bg-spots">
	<div class="container">
		<h2>S'engager dans une démarche de soutien mutuel</h2>

		<div>
			<div>
				<p>
					Toutes ces personnes constituent également une communauté de soutien mutuel autour des
					sujets complexes du climat et de la résilience. Quand il n'est pas toujours facile de
					garder espoir face à la situation, et de dépasser le désarroi ou le sentiment
					d'impuissance, il est nécesaire de se soutenir mutuellement.<br />
					Les outils du Travail Qui Relie nous donnent des ressources pour ouvrir la parole sur ces sujets
					et avancer ensemble sur le chemin de la résilience individuelle et collective.<br />
					La communauté en ligne organisée par thématique et par région permet de trouver des personnes
					proches de soi du point de vue des thèmes de discussion ou bien des zones géographiques.
				</p>

				<a class="button primary" href="TODO:" rel="external" target="_blank">Voir la carte</a>
			</div>

			<div>
				<p>
					Envie d'aller plus loin ? Engagez-vous pour animer des temps d'échange avec le public du
					film Une fois que tu sais grâce aux outils du Travail Qui Relie.
				</p>

				<a class="button primary" href="TODO:" rel="external" target="_blank"
					>Se préparer à l'animation</a
				>
			</div>
		</div>
	</div>
</section>

<section class="section container">
	<h2>
		Racines de résilience cherche avant tout à valoriser et créer des synergies entre les acteurs
		déjà mobilisés autour des thèmes climat et résilience
	</h2>

	<p>
		Pour rappel, une multitude de structures et de collectifs travaillent déjà sur ces thèmes, et
		notre ambition c'est de rendre visible cet écosystèmes déjà fertile et large qui offre de
		nombreuses possibilités de s'engager. Grâce au référencement constitué sur le site Racines de
		résilience, vous pouvez entrer en contact avec les organisations qui vous inspirent, quelle que
		soit votre sensibilité ou votre capacité d'engagement.
	</p>

	<div class="text-center">
		<a class="button primary" href={actionsTreePage.path}>Découvrir l'arbre des actions</a>
		<a class="button primary" href={actionsPage.path}>Explorer le référencement des actions</a>
	</div>
</section>

<style lang="scss">
	section {
		&.section-intro {
			margin-bottom: 4rem;

			p {
				margin-bottom: 0;
			}
		}

		&.section-get-involved {
			& > div > div {
				@include utilities.responsive-grid(1fr, 2fr 1fr, 2fr 1fr);

				& > div {
					align-items: center;
					display: flex;
					flex-direction: column;

					p {
						flex: 1;
					}
				}
			}
		}
	}
</style>
