<script>
	import Filters from '$lib/components/Filters.svelte';
	import FiltersContext from '$lib/components/FiltersContext.svelte';
	import FiltersResults from '$lib/components/FiltersResults.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import { actionsPage, actionsTreePage, communityPage } from '$lib/constants/pages';
	import { contributeFormLink } from '$lib/constants/settings';
	import { layoutContext } from '$lib/contexts';
	import { getContext } from 'svelte';

	const { setCurrentPage } = getContext(layoutContext);

	setCurrentPage(actionsPage);
</script>

<PageMeta page={actionsPage} />

<section class="section-intro container">
	<p>
		<i>
			Toutes les pistes pour passer à l'action ont été rassemblées dans un grand arbre des actions
			publié sous forme d'affiche. Racines de résilience est sa version en ligne, que l'on peut
			faire évoluer au gré de nos élans d'actions.<br />
			Ce site ne souhaite pas réinventer mais rendre visible le magnifique écosystème déjà bien vivant.
		</i>
	</p>
</section>

<section class="section section-links container">
	<div>
		<p>
			Alors qu'est-ce qu'on fait ? On retrouve dès maintenant ces centaines d'actions concrètes sur
			les thèmes énergie/climat et effonrement/résilience, organisées selon différentes thématiques,
			comme les racines d'un grand arbre. Chaque action est associée à au moins une structure de
			référence (organisation, asso, collectif...) pour nous aider à entrer dans le vif du sujet.
		</p>

		<a class="button primary" href={actionsTreePage.path}>Voir l'arbre</a>
	</div>

	<div>
		<p>
			La sélection des actions de l'arbre n'est pas exhaustive ! C'est une porte d'entrée à explorer
			ensemble. C'est pour ça qu'on a imaginé un site collaboratif! On est tous invités à compléter
			cette liste avec des actions et strutures, toujours sur les thèmes énergie/climat et
			effonrement/résilience.
		</p>

		<a class="button primary" href={contributeFormLink} rel="external" target="_blank"
			>Faire grandir l'arbre</a
		>
	</div>
</section>

<section class="section section-filters container">
	<FiltersContext let:results>
		<aside>
			<Filters />
		</aside>

		<div>
			<FiltersResults {results} />
		</div>
	</FiltersContext>
</section>

<section class="section bg-spots">
	<div class="container text-center">
		<p class="text-left">
			Pas toujours facile de franchir le pas ? Où que l'on soit sur son chemin de transition, on
			peut faire face à des questionnements, du désarroi, ou un sentiment d'impuissance qui freinent
			la mise en action. Et c'est le cas de nombre d'entre nous !<br />
			Retrouvons nous au sein de la communauté de soutien d'Une fois que tu sais, pour échanger autour
			du film en ligne, accompagner des projections, faire connaissance avec un groupe local de sa région,
			ou rejoindre des groupes de discussion selon les thèmes qui nous intéressent.
		</p>

		<a class="button primary" href={communityPage.path}>La communauté</a>
	</div>
</section>

<style lang="scss">
	section {
		&.section-intro {
			p {
				margin-bottom: 0;
			}
		}

		&.section-links {
			@include utilities.responsive-grid(1fr, repeat(2, 1fr), repeat(2, 30%));

			justify-content: space-evenly;

			div {
				display: flex;
				flex-direction: column;

				p {
					flex: 1;
				}
			}
		}

		&.section-filters {
			@include utilities.responsive-grid(1fr, 1fr, 1fr 2fr);

			align-items: start;

			aside {
				background: var(--bg-secondary-color);
				padding: 1rem 2rem;
			}
		}
	}
</style>
