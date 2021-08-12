<script>
	import PageMeta from '$lib/components/PageMeta.svelte';
	import { actionsPage, actionsTreePage, communityPage } from '$lib/constants/pages';
	import { joinLinkMail } from '$lib/constants/settings';
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
			communauté en mouvement. Vous aussi vous pouvez faire partie de cette communauté.
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
		<a class="button primary" href={joinLinkMail} rel="external" target="_blank"
			>Participer à cet accompagnement</a
		>
	</div>
</section>

<section class="section section-get-involved bg-spots">
	<div class="container">
		<h2>S'engager dans une démarche de soutien mutuel</h2>

		<div>
			<div>
				<p>
					Vous vous sentez seul.e.s à avec ces prises de conscience et sur nos effondrement et nos
					recherches de résilience ? Votre entourage n'est pas sensible à ces thématiques vous vous
					sentez en décalage ? Vous êtes curieux d'échanger avec des personnes inspirantes qui
					cherchent comment vivre dans ce monde en plein bouleversement ? La communauté des
					spectateurs et soutiens du film se retrouve sur l'outil Discord où plusieurs espaces
					d'échange sont proposés, organisés par thèmes ou par régions. Retrouvez ainsi des
					personnes près de chez vous et s'intéresse à ce qui vous tient à coeur pour cheminer
					ensemble.
				</p>

				<a class="button primary" href="TODO:" rel="external" target="_blank"
					>Rencontrer la communauté</a
				>
			</div>

			<div>
				<p>
					Pas toujours facile de franchir le pas ! Où que l'on soit sur son chemin de transition, on
					peut faire face à des questionnements, du désarroi, ou un sentiment d'impuissance qui
					freinent la mise en action. Et c'est le cas de nombre d'entre nous! Dans la catégorie
					Régénérer, plusieurs actions peuvent vous soutenir. L'accompagnement du film Une fois que
					tu sais s'appuie notamment sur le processus de l'écopsychologue Joanna Macy, le Travail
					Qui Relie, qui accompagne les émotions difficiles liées aux prises de conscience
					écologique pour les transformer en élan d'actions.
				</p>

				<a class="button primary" href="TODO:" rel="external" target="_blank">Découvrir le TQR</a>
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
