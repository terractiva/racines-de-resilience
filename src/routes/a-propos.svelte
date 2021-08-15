<script>
	import PageMeta from '$lib/components/PageMeta.svelte';
	import { aboutPage, actionsPage, communityPage } from '$lib/constants/pages';
	import { layoutContext } from '$lib/contexts';
	import { getContext } from 'svelte';

	const { setCurrentPage } = getContext(layoutContext);

	setCurrentPage(aboutPage);
</script>

<PageMeta page={aboutPage} />

<section class="container">
	<p class="mb-0">
		<i>
			On cherche tou·te·s à construire une société plus résiliente face aux défis énergétiques,
			climatiques et humains. Racines de résilience, c'est un point de convergence, un site
			collaboratif qui réunit des pistes dans tous les domaines de la vie pour passer à l'action
			pour créer ensemble un futur souhaitable.
		</i>
	</p>
</section>

<section class="section section-origins container">
	<h2>Racines de résilience, d'où ça vient et qu'est-ce que c'est ?</h2>

	<p>
		Le site Racines de résilience est une des facettes de la campagne d'accompagnement du film Une
		fois que tu sais, écrit et réalisé par Emmanuel Cappellin, en collaboration avec Anne-Marie
		Sangla. Cette campagne, intitulée "Une fois que tu sais, qu'est-ce qu'on fait ?", est portée par
		l'association Terractiva créée en 2019 pour défendre une adaptation globale face aux processus
		d'effondrements en cours. Sa mission : accompagner des objets artistiques particulièrements
		impactants auprès du grand public et soutenir un changement culturel à grande échelle.
	</p>

	<div>
		<img alt="" src="/illustrations/castors.png" />

		<p class="mb-0">
			A la demande du réalisateur Emmanuel, Terractiva a décidé d'accompagner le film. L'association
			a fait appel à Brianne et Charlotte pour porter la campagne d'accompagnement Une fois que tu
			sais, qu'est-ce qu'on fait ? Elles sont toutes deux facilitatrices formées au Travail Qui
			Relie, un processus élaboré dans les années 1980 par l’écopsychologue Joanna Macy pour
			traverser les émotions difficiles liées aux prises de conscience écologiques et les
			transformer en élans d’actions. Elles ont développé pour cette campagne 3 outils
			d'accompagnement à la mise en action :
		</p>
	</div>

	<ol>
		<li>
			<i>
				1. Une communauté d'accompagnateurices qui proposent des temps d'échanges après la
				projection du film Une fois que tu sais
			</i>
		</li>

		<li>
			<i>
				2. Un guide d'action (version papier) qui propose un panorama des manières concretes d'agir
				aujourd'hui
			</i>
		</li>

		<li>
			<i>3. Le site Racines de résilience sur lequel vous êtes !</i>
		</li>
	</ol>
</section>

<section class="section bg-spots">
	<div class="container">
		<h2>Racines de résilience, à quoi ça sert ?</h2>

		<p>
			L'ambition de la campagne d'accompagnement du film, c'est d'aider le public à devenir une
			communauté en mouvement et d'encourager des passages à l'action à la hauteur des enjeux
			climatiques. Touchées par son message, plusieurs milliers de personnes se sont mobilisées pour
			financer le film, accompagner sa diffusion par des temps d'échange post-projection et
			distribuer un guide d'actions qui offre de nombreuses pistes concrêtes pour s'engager. Ce site
			internet est un prolongement en ligne du guide d'actions, un prolongement collaboratif qui
			permet de rassembler un maximum de façons d'agir sur les thèmes climat/énergie et
			effondrement/résilience.
		</p>

		<div class="text-center">
			<a class="button primary" href={actionsPage.path}>Les actions</a>
			<a class="button primary" href={communityPage.path}>La communauté</a>
		</div>
	</div>
</section>

<section class="section section-film container">
	<h2>En savoir plus sur le film documentaire Une fois que tu sais</h2>

	<ul>
		<li>
			<p>
				UNE FOIS QUE TU SAIS est produit par Pulp Films, une jeune société basée dans la Drôme et à
				Paris qui se veut au plus près des thématiques et des questions contemporaines qui
				bousculent nos visions du monde.
			</p>

			<a class="button primary" href="https://pulp-films.fr/" rel="external" target="_blank"
				>PULP Films</a
			>
		</li>

		<li>
			<p>
				UNE FOIS QUE TU SAIS est distribué par Nour Films, société fondée en 2008 par Patrick
				Sibourd. Nour films distribue des longs-métrages de toutes nationalités et soutient des
				films indépendants et engagés.
			</p>

			<a
				class="button primary"
				href="https://www.nourfilms.com/cinema-independant/une-fois-que-tu-sais/"
				rel="external"
				target="_blank">Programmer le film</a
			>
		</li>

		<li>
			<p>
				Le film Une fois que tu sais propose un face à face poétique et bouleversant avec le défi
				climatique.
			</p>

			<a
				class="button primary"
				href="https://www.onceyouknow-thefilm.com/"
				rel="external"
				target="_blank">Site officiel du film</a
			>
		</li>
	</ul>
</section>

<section class="section section-creators bg-lines-2">
	<div class="container">
		<h2>Les artisans derrière ce site</h2>

		<ul>
			<li>
				<a href="https://tseignette.github.io/" rel="external" target="_blank">Thomas Seignette</a> :
				développeur web
			</li>
			<li>
				<a href="https://www.theotimenoel.com/" rel="external" target="_blank">Théotime Noël</a> : illustrateur
				(l'arbre des actions de ce site)
			</li>
			<li>
				<a href="https://elypss.fr/" rel="external" target="_blank">Loïc Cimelière</a> : graphiste (l'arbre
				des actions de ce site)
			</li>
			<li>Charlotte Ogier : textes</li>
			<li>Brianne Parquier : architecture et textes</li>
			<li>Clarisse Barreau et Emmanuel Cappelin : relecture, consultant et projet</li>
		</ul>

		<div class="text-center">
			<a class="button primary" href="TODO:" rel="external" target="_blank">Soutenir le projet</a>
		</div>
	</div>
</section>

<section class="section container">
	<h2>La démarche low-tech de Racines de résilience</h2>

	<p class="mb-0">
		<a href="https://tseignette.github.io/" rel="external" target="_blank">Thomas Seignette</a> est ingénieur
		informatique et membre des 1% pour la planète. Partenaire de la campagne d'accompagnement du film,
		il offre ses compétences de développeur Web pour réaliser ce site économe en énergie, pour permettre
		une cohérence globale entre le projets et sa mise en oeuvre.
	</p>
</section>

<style lang="scss">
	section {
		&.section-origins {
			div {
				@include utilities.responsive-grid(1fr, 1fr 1fr, 1fr 2fr);

				align-items: center;
				margin-bottom: 1.5rem;

				img {
					height: 90%;
					object-fit: contain;
					width: 90%;
				}
			}

			ol {
				@include utilities.responsive-grid(1fr, repeat(2, 1fr), repeat(3, 1fr));

				list-style: none;
				margin: 0;
				padding: 0;
			}
		}

		&.section-film {
			ul {
				@include utilities.responsive-grid(1fr, repeat(2, 1fr), repeat(3, 1fr));

				list-style: none;
				margin: 0;
				padding: 0;

				li {
					display: flex;
					flex-direction: column;

					p {
						flex: 1;
					}
				}
			}
		}

		&.section-creators {
			ul {
				a {
					color: var(--font-color);
				}
			}
		}
	}
</style>
